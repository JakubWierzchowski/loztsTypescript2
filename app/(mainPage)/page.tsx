import NewsList from '@/components/MainPage/NewsList/NewsList';
import Articles from '@/components/MainPage/Articles/Articles';

export default async function Home() {
  return (
    <main className="main">
      <NewsList />
      <Articles />
    </main>
  );
}
