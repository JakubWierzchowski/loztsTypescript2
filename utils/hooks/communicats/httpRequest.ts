import { toast } from "react-toastify";
import { useFetchCommunicats } from "./fetchData";
import { useState, FormEvent, ChangeEvent } from "react";

const useHTTPrequests = (category: string) => {
  const { fetchData } = useFetchCommunicats();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [month, setMonth] = useState("Wybierz kategorię");

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      formData.append("month", month);

      const response = await fetch("/api/communicats", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 409) {
          toast.warning(`${data?.message} - ${data?.filename}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status === 402) {
          toast.warning(`${data.message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (response.status === 400 || 500) {
          toast.warning(`${data.message} - ${response.status}`, {
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
      if (response.ok) {
        toast.success(`${data.message} - ${data.filename}`, {
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
    } catch (error) {
      toast.warning(`Ups cos poszło nie tak - ${error}`, {
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
  };

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  async function deleteCommunicat(id: string) {
    try {
      const response = await fetch(`/api/communicats/${category}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      fetchData(category);
      toast.success(`${data.message} - ${data.deletedPlayer.fileName}`, {
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
      if (error instanceof Error) {
        if (error.message === "Error: 409") {
          console.log(error);
        } else {
          console.error("An error occurred:", error);
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }

  return {
    deleteCommunicat,
    handleInputChange,
    handleUpload,
    selectedFile,
    setSelectedImage,
    setSelectedFile,
    month,
  };
};

export default useHTTPrequests;
