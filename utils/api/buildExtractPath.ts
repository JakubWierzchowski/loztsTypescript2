import path from "path";
import fs from "fs";
export function buildPath(dataName: string) {
  return path.join(process.cwd(), "data", dataName);
}

export function extractPath<T>(filePath: string): T {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data: T = JSON.parse(fileData);
  return data;
}
