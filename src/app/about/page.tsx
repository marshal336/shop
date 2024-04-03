import { Metadata } from "next";
import Head from "next/head";
import About from "~/components/About";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  );
}
