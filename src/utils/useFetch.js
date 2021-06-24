import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useFetch(url) {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
}
