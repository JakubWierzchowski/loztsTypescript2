"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useModal from "@/utils/hooks/useModal/useModal";
import { toast } from "react-toastify";
import { DownloadDetails } from "@/types/communicats.type";
import styles from "@/components/Communicats/communicats.module.scss";
import CommunicatsData from "@/data/download.json";
import CommunicatsModal from "@/components/Communicats/CommunicatsModal";
import AddCommunicats from "@/components/Communicats/AddCommunicats/AddCommunicats";
import { useUserContext } from "@/utils/context/AuthContext";
import { staticBlurDataUrl } from "@/utils/staticBlurDataURL";

export default function Communicats() {
  const data = CommunicatsData;
  const { user } = useUserContext();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [category, setCategory] = useState<string>("");
  const [newFile, setNewFile] = useState<DownloadDetails[] | undefined>();

  useEffect(() => {
    if (category) {
      fetchData(category);
    }
  }, [category]);

  const fetchData = async function fetchData(category: string) {
    fetch(`/api/communicats/${category}`)
      .then((response) => response.json())
      .then((data) => setNewFile(data?.details));
  };

  const viewDetails = () => {
    handleOpenModal();
  };

  const deletePlayer = async (id: string) => {
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
  };

  return (
    <>
      <h2 className={styles.titleDownload}>Komunikaty</h2>
      {user?.email === "lozts1937@gmail.com" ? (
        <>
          <AddCommunicats data={data} />
        </>
      ) : null}

      <section className={styles.wrapper}>
        {data.map((item, index) =>
          item.month !== "Wybierz kategorię" ? (
            <div key={index} onClick={() => setCategory(item.apiLink)}>
              <div
                className={styles.itemDetails}
                onClick={() => viewDetails()}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Image
                  className={styles.image}
                  src={item.img}
                  alt={item.img}
                  fill
                  priority={index <= 0 ? true : false}
                  placeholder="blur"
                  blurDataURL={staticBlurDataUrl()}
                  sizes="(max-width: 50px) 1vw, (max-width: 425px) 2vw, 75vw"
                />
                <h3 className={styles.title}>
                  <span className={styles.span}>{item.categories}</span>
                </h3>
              </div>
            </div>
          ) : null
        )}
      </section>
      <CommunicatsModal
        data={newFile}
        isOpen={isOpen}
        handleClose={handleCloseModal}
        user={user}
        deletePlayer={deletePlayer}
      />
    </>
  );
}
