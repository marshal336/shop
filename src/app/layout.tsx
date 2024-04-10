import Header from "~/components/Header";
import Footer from "~/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Providers as Chakra } from "~/configs/ChakraProvider";
//!css
import "./globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <GoogleOAuthProvider clientId={process.env.CLIENT_ID!}>
          <Chakra>
            <Header />
            {children}
            <Footer />
          </Chakra>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
