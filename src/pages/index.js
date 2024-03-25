import { Header, Hero, MainDetails, Footer, Blogs } from "@/modules";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} py-8 flex flex-col gap-16`}>
      <Header />
      <Hero />
      <MainDetails />
      <Blogs />
      <Footer />
    </main>
  );
}
