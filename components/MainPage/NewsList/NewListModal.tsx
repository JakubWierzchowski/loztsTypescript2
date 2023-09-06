// "use client";
import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import ReactModal from "react-modal";
import styles from "./newListModal.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
import useDeleteArtykul from "@/utils/hooks/mainPage/deleteArticle";
import useModal from "@/utils/hooks/useModal/useModal";
import { useFetch } from "@/utils/hooks/mainPage/fetchDataHook";

interface ClockProps {
  isOpen: boolean;
  handleClose: () => void;
  fetchData: () => void;
}
type FormValues = {
  title: string;
  text: string;
  signature: string;
};
const Modal: FC<ClockProps> = ({ handleClose, isOpen, fetchData }) => {
  const { onSubmit } = useDeleteArtykul();
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      text: "",
      signature: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  // const onError = (errors: FieldErrors<FormValues>) => {
  //   console.log("Form errors", errors);
  // };
  const handleUploadArticle = (data: FormValues) => {
    onSubmit(data);
    fetchData();
    handleClose();
    if (isSubmitSuccessful) {
      reset();
    }
  };
  return (
    <>
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
            onSubmit={handleSubmit(
              handleUploadArticle
              // onError
            )}
            noValidate
          >
            <div className={styles.formSection}>
              <label className={styles.label} htmlFor="title">
                Tytuł
              </label>
              <input
                placeholder="Tytuł"
                className={styles.inputForm}
                id="title"
                {...register("title", {
                  required: "Wpisz tytuł",
                  validate: (fieldValue) => {
                    return fieldValue.trim() !== "" || "Niepoprawna wartość";
                  },
                })}
              />
              {errors.title ? (
                <p className={styles.error}>{errors.title?.message}</p>
              ) : null}
            </div>

            <div className={styles.formSection}>
              <label className={styles.label} htmlFor="text">
                Text
              </label>
              <textarea
                placeholder="Wpisz tekst"
                className={styles.inputForm}
                id="text"
                {...register("text", {
                  required: "Wypisz tekst",
                  validate: (fieldValue) => {
                    return fieldValue.trim() !== "" || "Niepoprawna wartość";
                  },
                })}
              />
              {errors.text ? (
                <p className={styles.error}>{errors.text?.message}</p>
              ) : null}
            </div>
            <div className={styles.formSection}>
              <label className={styles.label} htmlFor="signature">
                Text
              </label>
              <input
                placeholder="Auto tekst"
                className={styles.inputForm}
                id="signature"
                {...register("signature", {
                  required: "Wpisz Adresata",
                  validate: (fieldValue) => {
                    return fieldValue.trim() !== "" || "Niepoprawna wartość";
                  },
                })}
              />
              {errors.signature ? (
                <p className={styles.error}>{errors.signature?.message}</p>
              ) : null}
            </div>

            <button type="submit" className={styles.sendButton}>
              Wyślij
            </button>
          </form>
        </section>
      </ReactModal>
    </>
  );
};

export default Modal;
