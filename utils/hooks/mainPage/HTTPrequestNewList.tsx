// "use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { DataSubmit } from "@/types/newList.type";
const useHTTPrequest = () => {
  const [deleteError, setDeleteError] = useState<string | null>(null);

  async function deleteArtykul(id: string) {
    try {
      setDeleteError(null);

      const response = await fetch(`/api/newList/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      const title = data.deleteArticle.map(
        (item: { title: string }) => item.title
      );
      toast.success(`Usunięto artykuł - ${title}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      setDeleteError(`Wystąpił błąd podczas usuwania artykułu: - ${error}`);

      toast.error(`Wystąpił błąd podczas usuwania artykułu: - ${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  async function onSubmit(data: DataSubmit) {
    try {
      const reqBody = {
        title: data.title,
        text: data.text,
        signature: data.signature,
      };
      const response = await fetch(`/api/newList`, {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const Apidata = await response.json();

      toast.success(`${Apidata.message} - ${Apidata.article.title}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (e: any) {
      if (e.message === "Error: 409") {
        toast.error(`Taki artykuł już istnieje`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  return {
    deleteArtykul,
    deleteError,
    onSubmit,
  };
};

export default useHTTPrequest;
