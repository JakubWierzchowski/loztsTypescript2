"use client";
import React, { FC, useEffect } from "react";
import { CalendarTypeDetails } from "@/types/calendar.type";
import ReactModal from "react-modal";
import styles from "./addplayers.module.scss";
import { FieldError, useForm, FieldErrors } from "react-hook-form";
import { toast } from "react-toastify";
import { useUserContext } from "@/utils/context/AuthContext";
import styled from "@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss";

interface ClockProps {
  isOpen: boolean;
  handleClose: () => void;
  findTournaments: (CalendarTypeDetails | undefined)[];
  tournaments: string;
  fetchData: () => void;
}

type FormValues = {
  zawodnicy: string;
  klub: string;
  kategoria: string;
};

const Modal: FC<ClockProps> = ({
  findTournaments,
  handleClose,
  isOpen,
  tournaments,
  fetchData,
}) => {
  const { user } = useUserContext();
  const initialMail = user?.email;

  const form = useForm<FormValues>({
    defaultValues: {
      zawodnicy: "",
      klub: "",
      kategoria: "Wybierz kategorię",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: FormValues) => {
    try {
      const reqBody = {
        club: data.klub,
        player: data.zawodnicy,
        turnament: tournaments,
        gender: data.kategoria,
        users: user?.email,
      };
      const response = await fetch(`/api/calendar`, {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // if (!response.ok) throw new Error(`Error: ${response.status}`);
      const Apidata = await response.json();
      fetchData();
      handleClose();
      if (Apidata.status === 409) {
        toast.error(`${Apidata.message} - ${Apidata.newPlayer.player}`, {
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
      toast.success(`${Apidata.message} - ${Apidata.player.player}`, {
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
      if (e.message === "Error: 500") {
        console.log("bład");
        toast.error(`Ups.. Coś poszło nie tak`, {
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
  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("Form errors", errors);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        zawodnicy: "",
        klub: "",
        kategoria: "Wybierz kategorię",
      });
    }
  }, [isSubmitSuccessful, reset]);

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
