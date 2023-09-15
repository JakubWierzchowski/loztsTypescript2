"use client";
import React, { FC } from "react";
import ReactModal from "react-modal";
import styles from "./addplayers.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
import { useUserContext } from "@/utils/context/AuthContext";
import styled from "@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss";
import {
  ModalAddPlayerProps,
  FormValuesAddPlayer,
} from "@/types/calendar.type";
import useHTTPrequests from "@/utils/hooks/calendar/httpRequestCalendar";

const Modal: FC<ModalAddPlayerProps> = ({
  findTournaments,
  handleClose,
  isOpen,
  tournaments,
  fetchData,
}) => {
  const { user } = useUserContext();
  const { onSubmit } = useHTTPrequests();
  const initialMail = user?.email;

  const form = useForm<FormValuesAddPlayer>({
    defaultValues: {
      zawodnicy: "",
      klub: "",
      kategoria: "Wybierz kategorię",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful, isSubmitted } = formState;

  const handleAddPlayer = (data: FormValuesAddPlayer) => {
    onSubmit(data, tournaments);
    fetchData();
    handleClose();
    if (isSubmitted) {
      reset();
    }
  };

  const onError = (errors: FieldErrors<FormValuesAddPlayer>) => {
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
            onSubmit={handleSubmit(handleAddPlayer, onError)}
            noValidate
          >
            <div className={`${styles.formSection}  ${styled.slideIn}`}>
              <label className={styles.label} htmlFor="zawodnicy">
                Zawodnicy
              </label>
              <input
                defaultValue=""
                placeholder="Zawodnicy"
                className={styles.inputForm}
                id="zawodnicy"
                type="text"
                {...register("zawodnicy", {
                  required: "Dodaj zawodnika",
                  validate: (fieldValue) => {
                    return fieldValue !== "" || "Niepoprawna wartość";
                  },
                })}
              />
              {errors.zawodnicy ? (
                <p className={styles.error}>{errors.zawodnicy?.message}</p>
              ) : null}
            </div>
            <div className={`${styles.formSection}  ${styled.slideIn}`}>
              <label className={styles.label} htmlFor="klub">
                Nazwa Klubu
              </label>
              <input
                defaultValue=""
                placeholder="Nazwa Klubu"
                className={styles.inputForm}
                id="klub"
                {...register("klub", {
                  required: "Wpisz nazwę klubu",

                  validate: (fieldValue) => {
                    return fieldValue.trim() !== "" || "Niepoprawna wartość";
                  },
                })}
              />
              {errors.klub ? (
                <p className={styles.error}>{errors.klub?.message}</p>
              ) : null}
            </div>
            <div className={`${styles.formSection}  ${styled.slideOut}`}>
              <label className={styles.label} htmlFor="kategoria">
                Kategoria
              </label>
              <select
                className={`${styles.selectCategory} ${styled.slideIn}`}
                defaultValue="Wybierz kategorię"
                id="kategoria"
                {...register("kategoria", {
                  required: "Wybierz kategorię",
                  validate: (fieldValue) => {
                    return (
                      fieldValue !== "Wybierz kategorię" || "Wybierz kategorię!"
                    );
                  },
                })}
              >
                {findTournaments?.map((item) =>
                  item?.typeofTournaments?.map((item) =>
                    item.table.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  )
                )}
              </select>
              {errors.kategoria ? (
                <p className={styles.error}>{errors.kategoria?.message}</p>
              ) : null}
            </div>
            <div className={`${styles.formSection}  ${styled.slideOut}`}>
              <label className={styles.label} htmlFor="email">
                Użytkownik
              </label>
              <input
                disabled
                defaultValue={initialMail}
                className={styles.inputForm}
                id="email"
              />
            </div>
            <div className={`${styles.formSection}  ${styled.slideIn}`}>
              <label className={styles.label} htmlFor="turniej">
                Turniej
              </label>
              <input
                disabled
                defaultValue={tournaments}
                placeholder="Turniej"
                className={styles.inputForm}
                id="turniej"
              />
            </div>

            <button
              type="submit"
              className={`${styles.sendButton}  ${styled.slideIn}`}
            >
              Wyślij
            </button>
          </form>
        </section>
      </ReactModal>
    </>
  );
};
export default Modal;
