"use client";
import React, { FC, useState, useEffect } from "react";
import {
  addDoc,
  serverTimestamp,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "@/utils/firebase/firebase-config";
import moment from "moment";
import Image from "next/image";
import { FieldError, useForm, FieldErrors } from "react-hook-form";
import ReactModal from "react-modal";
import styles from "./articlesModal.module.scss";
import { toast } from "react-toastify";
import UploadIcon from "@/public/upload.png";
interface ClockProps {
  isOpen: boolean;
  handleClose: () => void;
}
type FormValues = {
  Title: string;
  Tekst: string;
  Signature: string;
  img?: FileList;
};
interface ArticleItem {
  id: string;
  Title: string;
  Tekst: string;
  Signature: string;
  img: string;
  timestamp: string;
}

const ArticleModal: FC<ClockProps> = ({ handleClose, isOpen }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      Title: "",
      Tekst: "",
      Signature: "",
      img: undefined,
    },
  });

  const [articles, setArticles] = useState<Array<{ id: string }>>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "articles"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ArticleItem[];
      setArticles(data);
    });

    return () => unsubscribe();
  }, []);

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors", errors);
  };
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitted, isSubmitSuccessful } =
    formState;
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
    if (data.img && data.img[0]) {
      const imageFile = data.img[0];
      const storageRef = ref(storage, `${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        "state_changed",
        () => {},
        (error) => {
          console.error("Błąd podczas przesyłania pliku:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          try {
            await addDoc(collection(db, "articles"), {
              Title: data.Title,
              Tekst: data.Tekst,
              img: downloadURL,
              Signature: data.Signature,
              timestamp: serverTimestamp(),
              // user: user?.email,
            });
            handleClose();
            toast.success(`Dodano nowy artykuł ${data.Title}`, {
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
              console.log("blad");
              toast.error(`Zawodnik o takich danych już istnieje`, {
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
      );
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      className={styles.modalWrapper}
    >
      <button className={styles.modalCloseButton} onClick={handleClose}>
        X
      </button>
      <section className={styles.wrapperForm}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}
          noValidate
        >
          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="Title">
              Tytuł
            </label>
            <input
              placeholder="Tytuł"
              className={styles.inputForm}
              id="Title"
              {...register("Title", {
                required: "Wpisz tytuł",
                validate: (fieldValue) => {
                  return fieldValue.trim() !== "" || "Niepoprawna wartość";
                },
              })}
            />
            {errors.Title ? (
              <p className={styles.error}>{errors.Title?.message}</p>
            ) : null}
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="Tekst">
              Tekst
            </label>
            <textarea
              placeholder="Wpisz tekst"
              className={styles.inputForm}
              id="Tekst"
              {...register("Tekst", {
                required: "Wypisz tekst",
                validate: (fieldValue) => {
                  return fieldValue.trim() !== "" || "Niepoprawna wartość";
                },
              })}
            />
            {errors.Tekst ? (
              <p className={styles.error}>{errors.Tekst?.message}</p>
            ) : null}
          </div>
          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="Signature">
              Podpis
            </label>
            <input
              placeholder="Auto tekst"
              className={styles.inputForm}
              id="Signature"
              {...register("Signature", {
                required: "Wpisz Adresata",
                validate: (fieldValue) => {
                  return fieldValue.trim() !== "" || "Niepoprawna wartość";
                },
              })}
            />
            {errors.Signature ? (
              <p className={styles.error}>{errors.Signature?.message}</p>
            ) : null}
          </div>

          <div className={styles.formSection}>
            <label className={styles.label} htmlFor="imgInput">
              <Image width={30} height={30} src={UploadIcon} alt="uploadIcon" />
            </label>
            <input
              type="file"
              placeholder="Wybierz zdjęcie"
              className={`${styles.inputForm} ${styles.displayNonInput}`}
              id="imgInput"
              {...register("img", {
                required: "Zdjęcie jest wymagane",
                validate: {
                  size: (value) => {
                    if (value && value[0] && value[0].size > 1 * 1024 * 1024) {
                      return "Zdjęcie nie może przekraczać 1MB";
                    }
                    return true;
                  },
                },
              })}
            />
            {errors.img ? (
              <p className={styles.error}>{errors.img?.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            // disabled={isSubmitted}
            className={styles.sendButton}
          >
            Wyślij
          </button>
        </form>
      </section>
    </ReactModal>
  );
};

export default ArticleModal;
