import React from "react";
import NewsList from "@/components/MainPage/NewsList/NewsList";
import Calendar from "@/components/MainPage/Calendar/Calendar";
import Articles from "@/components/MainPage/Articles/Articles";

export default async function Home() {
  return (
    <main className="main">
      <NewsList />
      <Calendar />
      <Articles />
    </main>
  );
}
