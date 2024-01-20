import { useState, useEffect } from 'react';
import { Article } from '@/types/mainPage/newList.type';

export const useFetch = () => {
  const [newArticle, setNewArticle] = useState<Article[]>([]);
  const [currentInfo, setCurrentInfo] = useState<Article>({} as Article);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/newList`);
      const data = await response.json();

      const sortedData = [...data].sort((a, b) => (a.sortDate > b.sortDate ? -1 : 0));

      setNewArticle(sortedData);
      setCurrentInfo(sortedData[0]);
    } catch (error) {
      console.error('Wystąpił błąd z pobieraniem danych', error);
    }
  };

  const handleOpenInfo = (item: Article) => {
    setCurrentInfo(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    newArticle,
    setCurrentInfo,
    currentInfo,
    fetchData,
    handleOpenInfo,
  };
};
