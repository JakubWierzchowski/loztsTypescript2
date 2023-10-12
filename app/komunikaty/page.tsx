"use client";
import Image from "next/image";
import useModal from "@/utils/hooks/useModal/useModal";
import styles from "@/components/Communicats/communicats.module.scss";
import CommunicatsData from "@/data/download.json";
import CommunicatsModal from "@/components/Communicats/CommunicatsModal";
import AddCommunicats from "@/components/Communicats/AddCommunicats/AddCommunicats";
import { useUserContext } from "@/utils/context/AuthContext";
import { staticBlurDataUrl } from "@/utils/staticBlurDataURL";
import { useFetchCommunicats } from "@/utils/hooks/communicats/fetchData";

export default function Communicats() {
  const data = CommunicatsData;
  const { user } = useUserContext();

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { category, newFile, setCategory } = useFetchCommunicats();

  return (
    <>
      <h2 className={styles.titleDownload}>Komunikaty</h2>
      {user?.email === "lozts1937@gmail.com" ? (
        <>
          <AddCommunicats data={data} category={category} />
        </>
      ) : null}

      <section className={styles.wrapper}>
        {data.map((item, index) =>
          item.month !== "Wybierz kategorię" ? (
            <div key={index} onClick={() => setCategory(item.apiLink)}>
              <div
                className={styles.itemDetails}
                onClick={() => handleOpenModal()}
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
        category={category}
      />
    </>
  );
}
