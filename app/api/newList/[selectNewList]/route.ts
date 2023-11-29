import fs from 'fs';
import { buildPath, extractPath } from '@/utils/api/buildExtractPath';
import { Article } from '@/types/newList.type';

export async function GET(req: Request, res: Response) {
  const filePath = buildPath('article.json');
  const articlesData = extractPath<Article[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/newList/', '');

  const filterCategory = articlesData.find((item) => item.id === newUrl);

  return new Response(JSON.stringify(filterCategory));
}

export async function DELETE(req: Request, res: Response) {
  const filePath = buildPath('article.json');
  const articlesData = extractPath<Article[]>(filePath);
  const url = new URL(req.url);
  const newUrl = url.pathname.replace('/api/newList/', '');
  const index = articlesData.findIndex((article) => article.id === newUrl);
  const deleteItem = articlesData.splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(articlesData));
  return new Response(JSON.stringify({ message: 'Usunieto artykul', deleteItem }));
}
