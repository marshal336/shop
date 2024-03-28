"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { Icard } from "~/types/cardt.t";

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

  return (
    <div className="">
      {data?.map((el, i) => (
        <div className="" key={i}>
          <Image src={el.star} alt="d" width={20} height={20}/>
        </div>
      ))}
    </div>
  );
}
