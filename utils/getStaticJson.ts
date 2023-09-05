// export const fetchJSONData = async <T>(filePath: string): Promise<T> => {
//   const data: T = await import(filePath);
//   return data;
// };

import fsPromises from "fs/promises";
import path from "path";

// Definiujemy interfejs dla danych z pliku JSON
interface Data {
  // Dostosuj interfejs do struktury Twojego pliku JSON
  key: string;
  value: number;
}

export async function getLocalData(): Promise<Data> {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), "data/associations.json");
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  // Parse data as json
  const objectData: Data = JSON.parse(jsonData);

  return objectData;
}
