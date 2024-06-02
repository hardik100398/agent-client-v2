import Image from "next/image";
import { Inter } from "next/font/google";
import Chat from "@/containers/Chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pl-12 ${inter.className}`}
    >
      <Chat></Chat>
    </main>
  );
}
