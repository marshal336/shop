"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Icard } from "~/types/cardt.t";
import React from "react";
export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => {
      try {
        const { data } = await axios.get<Icard[]>(
          "https://216310856cf4b6ef.mokky.dev/sales"
        );
        return data;
      } catch (error) {
        throw new Error("Failed to fetch data");
      }
    },
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  return <div className=""></div>;
}
