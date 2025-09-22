import { Hero } from "@/components/Hero";
import "./globals.css"
import { Appbar } from "@/components/Appbar";

export default function Home() {
  return (
    <main className="">
      <Appbar />
      <Hero />
    </main>
  );
}
