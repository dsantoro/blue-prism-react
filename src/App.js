import React, { useState, useEffect, useContext } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";

import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { AppStateContext } from "./context/App";
import light from "./themes/light";
import dark from "./themes/dark";

import { Container } from "./components/Container";
import { GridContainer, CardWrapper } from "./App.styles";
import { Title } from "./components/Title";
import Card from "./components/Card";
import SkeletonCard from "./components/Card/Skeleton";
import Filter from "./components/Filter";
import Header from "./components/Header";

const columns = [
  {
    name: "ID",
    selector: "id"
  },
  {
    name: "Start Time",
    selector: "startTime",
    sortable: true
  },
  {
    name: "End Time",
    selector: "endTime",
    sortable: true
  },
  {
    name: "Status",
    selector: "status",
    sortable: true
  },
  {
    name: "Server Name",
    selector: "serverName"
  }
];

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198"
  },
  background: {
    default: "#002b36"
  }
});

function App() {
  const [schedules, setSchedules] = useState({ isLoading: false, data: [] });
  const [schedulesLogs, setSchedulesLogs] = useState({
    isLoadingLogs: false,
    dataLogs: []
  });
  const [filter, setFilter] = useState("");

  const {
    appState: { theme }
  } = useContext(AppStateContext);

  useEffect(() => {
    setSchedules({ isLoading: true, data: [] });
    (async function fetchData() {
      const data = await fetch(
        `https://blue-prism-api.herokuapp.com/schedules?${filter}`
      );
      const resp = await data.json();
      setSchedules({ isLoading: false, data: resp });
    })();
  }, [filter]);

  const fetchScheduleLogs = async (logId) => {
    setSchedulesLogs({ isLoadingLogs: true, dataLogs: [] });
    const data = await fetch(
      `https://blue-prism-api.herokuapp.com/scheduleLogs?scheduleId=${logId}`
    );
    const resp = await data.json();
    const formatedData = resp.map((item) => ({
      ...item,
      startTime: format(parseISO(item.startTime), "MM/dd/yyyy"),
      endTime: format(parseISO(item.endTime), "MM/dd/yyyy")
    }));
    setSchedulesLogs({ isLoadingLogs: true, dataLogs: formatedData });
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
              ? [1, 2, 3].map((index) => <SkeletonCard key={index} />)
              : schedules.data.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      onClick={() => fetchScheduleLogs(item.id)}
                      onButtonClick={(e) => {
                        e.stopPropagation();
                        console.log("API call to change this data!");
                      }}
                      {...item}
                    />
                  );
                })}
            </CardWrapper>
            
          </div>
          <div>
            <DataTable
              columns={columns}
              data={schedulesLogs?.dataLogs}
              noDataComponent={<h1>No data to show!</h1>}
              highlightOnHover
              striped
              noHeader
              fixedHeader
              theme={theme === "dark" ? "solarized" : null}
            />
          </div>
        </GridContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
