"use client";
import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import ReactModal from "react-modal";
import styles from "./newListModal.module.scss";
import { FieldError, useForm, FieldErrors } from "react-hook-form";
import { Article } from "@/types/article.type";

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
  const form = useForm<FormValues>({
    defaultValues: {
      title: "",
      text: "",
      signature: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
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
      fetchData();
      handleClose();

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
  };

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitSuccessful, isSubmitted } =
    formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors", errors);
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
            onSubmit={handleSubmit(onSubmit, onError)}
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
