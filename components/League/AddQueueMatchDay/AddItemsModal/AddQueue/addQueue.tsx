import React, { FC } from "react";
import { useUserContext } from "@/utils/context/AuthContext";
import Image from "next/image";
import styles from "../addQueueModal.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
import { QueueDetails, LeagueDetail } from "@/types/league.types";
import UploadIcon from "@/public/upload.png";
import styled from "@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss";
import useHTTPrequests from "@/utils/hooks/league/httpRequest";
import { AddQueueProps, FormValuesFirebase } from "@/types/league.types";

const AddQueue: FC<AddQueueProps> = ({
  leaguePath,
  handleClose,
  queueDetails,
  leagueDetails,
}) => {
  const { onSubmitFirebase } = useHTTPrequests();
  const form = useForm<FormValuesFirebase>({
    defaultValues: {
      host: "Wybierz Gospodarza",
      guest: "Wybierz Gościa",
      hostScore: "",
      guestScore: "",
      queueNumber: "Wybierz Kolejkę",
      img: undefined,
    },
  });
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful } = formState;
  const imgValue = watch("img");

  const onError = (errors: FieldErrors<FormValuesFirebase>) => {
    console.log("Form errors", errors);
  };

  const handleSumbitFirebase = (data: FormValuesFirebase) => {
    onSubmitFirebase(data, leaguePath);
    if (isSubmitSuccessful) {
      reset();
    }
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit(handleSumbitFirebase, onError)}
      noValidate
      className={styles.form}
    >
      <div className={styles.layout}>
        <div className={`${styles.formSection} ${styled.slideIn}`}>
          <label className={styles.label} htmlFor="host">
            Gospodarz
          </label>
          <select
            className={styles.selectCategory}
            defaultValue="Wybierz Gospodarza"
            id="host"
            {...register("host", {
              required: "Wybierz Gospodarza",
              validate: (fieldValue) => {
                if (fieldValue === "" || fieldValue === "Wybierz Gospodarza") {
                  return "Wybierz Gospodarza!";
                }

                return true;
              },
            })}
          >
            <option value="Wybierz Gospodarza">Wybierz Gospodarza</option>
            {leagueDetails?.map((item, index) => (
              <option value={item.team} key={index}>
                {item.team}
              </option>
            ))}
          </select>
          {errors.host ? (
            <p className={styles.error}>{errors.host?.message}</p>
          ) : null}
        </div>
        <div className={`${styles.formSection} ${styled.slideOut}`}>
          <label className={styles.label} htmlFor="guest">
            Gość
          </label>
          <select
            className={styles.selectCategory}
            defaultValue="Wybierz Gościa"
            id="guest"
            {...register("guest", {
              required: "Wybierz Gościa",
              validate: (fieldValue) => {
                if (fieldValue === "" || fieldValue === "Wybierz Gościa") {
                  return "Wybierz Gościa!";
                }

                return true;
              },
            })}
          >
            <option value="Wybierz Gościa">Wybierz Gościa</option>
            {leagueDetails?.map((item) => (
              <option value={item.team} key={item.team}>
                {item.team}
              </option>
            ))}
          </select>
          {errors.guest ? (
            <p className={styles.error}>{errors.guest?.message}</p>
          ) : null}
        </div>
        <div className={`${styles.formSection} ${styled.slideIn}`}>
          <label className={styles.label} htmlFor="hostScore">
            Wynik Gospodarza
          </label>
          <input
            defaultValue=""
            placeholder="Wpisz wynik Gospodarza"
            className={styles.inputForm}
            id="hostScore"
            type="number"
            {...register("hostScore", {
              required: "Wpisz wynik Gospodarza!",
              validate: (fieldValue) => {
                if (fieldValue === "") {
                  return "Niepoprawna wartość";
                }
                if (parseFloat(fieldValue) > 10) {
                  return "Liczba nie może być większa niż 10!";
                }

                return true;
              },
            })}
          />
          {errors.hostScore ? (
            <p className={styles.error}>{errors.hostScore?.message}</p>
          ) : null}
        </div>

        <div className={`${styles.formSection} ${styled.slideOut}`}>
          <label className={styles.label} htmlFor="guestScore">
            Wynik Gościa
          </label>
          <input
            defaultValue=""
            placeholder="Wpisz wynik gościa"
            className={styles.inputForm}
            id="guestScore"
            type="number"
            {...register("guestScore", {
              required: "Wpisz wynik Gościa!",
              validate: (fieldValue) => {
                if (fieldValue === "") {
                  return "Niepoprawna wartość";
                }
                if (parseFloat(fieldValue) > 10) {
                  return "Liczba nie może być większa niż 10!";
                }

                return true;
              },
            })}
          />
          {errors.guestScore ? (
            <p className={styles.error}>{errors.guestScore?.message}</p>
          ) : null}
        </div>

        <div className={`${styles.formSection} ${styled.slideIn}`}>
          <label className={styles.label} htmlFor="queueNumber">
            Wybierz kolejkę
          </label>

          <select
            className={styles.selectCategory}
            defaultValue="Wybierz kolejkę"
            id="queueNumber"
            {...register("queueNumber", {
              required: "Wybierz numer kolejki",
              validate: (fieldValue) => {
                return fieldValue !== "Wybierz Kolejki" || "Wybierz Kolejki";
              },
            })}
          >
            <option value="Wybierz Kolejkę">Wybierz Kolejkę</option>
            {queueDetails
              ?.sort((a, b) => (a.day < b.day ? 1 : -1))
              ?.map((item, index) => (
                <option value={item.matchDay} key={index}>
                  {item.matchDay}
                </option>
              ))}
          </select>
          {errors.queueNumber ? (
            <p className={styles.error}>{errors.queueNumber?.message}</p>
          ) : null}
        </div>
        <div
          className={`${styles.formSection} ${styled.slideOut} ${styles.formFileSection}`}
        >
          <label className={styles.formfieldFile} htmlFor="imgInput">
            <Image width={30} height={30} src={UploadIcon} alt="uploadIcon" />
            {imgValue && imgValue.length !== 0 ? (
              <div className={styles.inputText}>{imgValue[0].name}</div>
            ) : (
              <div className={styles.inputText}>Wybierz zdjęcie</div>
            )}

            <input
              type="file"
              placeholder="Wybierz zdjęcie"
              className={`${styles.inputForm} ${styles.displayNonInput}`}
              id="imgInput"
              {...register("img", {
                required: "Zdjęcie jest wymagane",
                validate: {
                  size: (value) => {
                    if (
                      value &&
                      value[0] &&
                      value[0].size > 0.25 * 1024 * 1024
                    ) {
                      return "Zdjęcie nie może przekraczać 250kb";
                    }
                    return true;
                  },
                },
              })}
            />
          </label>
          {errors.img ? (
            <p className={styles.error}>{errors.img?.message}</p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className={`${styles.sendButton} ${styled.slideIn}`}
      >
        Wyślij
      </button>
    </form>
  );
};

export default AddQueue;
