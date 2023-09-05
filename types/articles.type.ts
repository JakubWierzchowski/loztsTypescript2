export interface ArticleProps {
  item: ArticleItem;
  index: number;
  user?: string;
}

export interface ArticleItem {
  Signature: string;
  Tekst: string;
  Title: string;
  id: string;
  img: string;
  time: string;
  user?: string;
}
