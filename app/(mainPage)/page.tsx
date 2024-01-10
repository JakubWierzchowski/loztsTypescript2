import NewsList from '@/components/MainPage/NewsList/NewsList';
import Articles from '@/components/MainPage/Articles/Articles';
import Slider from '@/components/MainPage/Slider/slider';

export default async function Home() {
  return (
    <main className="main">
      <Slider />
      <NewsList />
      <Articles />
    </main>
  );
}
