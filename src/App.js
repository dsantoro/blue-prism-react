import React, { useState, useEffect, useContext } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";

import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { AppStateContext } from "./context/App";
import light from "./themes/light";
import dark from "./themes/dark";

import { GridContainer, CardWrapper } from "./App.styles";
import { Container } from "./components/Container";
import { Title } from "./components/Title";
import Card from "./components/Card";
import SkeletonCard from "./components/Card/Skeleton";
import NoData from "./components/NoData";
import LoaderTable from "./components/LoaderTable";
import Filter from "./components/Filter";
import Header from "./components/Header";

const columns = [
  {
    name: "ID",
    selector: "id",
  },
  {
    name: "Start Time",
    selector: "startTime",
    sortable: true,
  },
  {
    name: "End Time",
    selector: "endTime",
    sortable: true,
  },
  {
    name: "Status",
    selector: "status",
    sortable: true,
  },
  {
    name: "Server Name",
    selector: "serverName",
  },
];

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
});

function App() {
  const [schedules, setSchedules] = useState({ isLoading: false, data: [] });
  const [schedulesLogs, setSchedulesLogs] = useState({
    isLoadingLogs: false,
    dataLogs: [],
  });
  const [filter, setFilter] = useState("");
  const [currentLog, setCurrentLog] = useState("");

  const {
    appState: { theme },
  } = useContext(AppStateContext);

  useEffect(() => {
    setSchedules({ isLoading: true, data: [] });
    (async function fetchData() {
      try {
        const data = await fetch(
          `https://blue-prism-api.herokuapp.com/schedules?${filter}`
        );
        const resp = await data.json();
        setSchedules({ isLoading: false, data: resp });
      } catch (e) {
        console.log("Error: ", e);
      }
    })();
  }, [filter]);

  const fetchScheduleLogs = async (logId) => {
    setSchedulesLogs({ isLoadingLogs: true, dataLogs: [] });
    try {
      const data = await fetch(
        `https://blue-prism-api.herokuapp.com/scheduleLogs?scheduleId=${logId}`
      );
      const resp = await data.json();
      const formatedData = resp.map((item) => ({
        ...item,
        startTime: format(parseISO(item.startTime), "MM/dd/yyyy"),
        endTime: format(parseISO(item.endTime), "MM/dd/yyyy"),
      }));
      setSchedulesLogs({ isLoadingLogs: false, dataLogs: formatedData });
      setCurrentLog(logId);
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Header />
      <Container>
        <Title>Schedules</Title>

        <GridContainer>
          <div>
            <Filter
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />

            <CardWrapper>
              {schedules.isLoading
                ? Array.from({ length: 5 }).map((index) => (
                    <SkeletonCard key={index} />
                  ))
                : schedules.data.map((item) => {
                    return (
                      <Card
                        key={item.id}
                        onClick={() => fetchScheduleLogs(item.id)}
                        onButtonClick={(e) => {
                          e.stopPropagation();
                          alert("API call to change this data!");
                        }}
                        {...item}
                      />
                    );
                  })}
            </CardWrapper>
          </div>
          <div>
            {currentLog && <h2>You are seeing schedule #{currentLog}</h2>}
            <DataTable
              columns={columns}
              data={schedulesLogs?.dataLogs}
              noDataComponent={<NoData />}
              progressComponent={<LoaderTable />}
              highlightOnHover
              striped
              noHeader
              fixedHeader
              progressPending={schedulesLogs.isLoadingLogs}
              theme={theme === "dark" ? "solarized" : null}
            />
          </div>
        </GridContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
