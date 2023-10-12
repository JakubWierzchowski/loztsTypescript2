import { DownloadDetails } from "@/types/communicats.type";
import { useState, useEffect } from "react";

export function useFetchCommunicats() {
  const [category, setCategory] = useState<string>("");
  const [newFile, setNewFile] = useState<DownloadDetails[] | undefined>();

  const fetchData = async (category: string) => {
    try {
      const response = await fetch(`/api/communicats/${category}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setNewFile(data?.details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category) {
      fetchData(category);
    }
  }, [category]);

  return {
    category,
    setCategory,
    newFile,
    fetchData,
  };
}
