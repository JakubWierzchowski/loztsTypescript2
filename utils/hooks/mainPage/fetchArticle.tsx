import { ArticleItem } from '@/types/mainPage/articles.type';
import { db } from '@/utils/firebase/firebase-config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useFetchArticle = () => {
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  useEffect(() => {
    const playerCollectionRef2 = collection(db, 'articles');
    const q = query(playerCollectionRef2, orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot: { docs: any[] }) =>
      setArticles(
        snapshot.docs.map(
          (doc) =>
            ({
              ...doc.data(),
              id: doc.id,
            }) as ArticleItem
        )
      )
    );
    return unsub;
  }, []);
  return {
    articles,
  };
};

export default useFetchArticle;
