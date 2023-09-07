import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "../addQueueModal.module.scss";
import styled from "@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
import useHTTPrequests from "@/utils/hooks/league/HTTPrequest";
import {
  AddLeagueMatchdayProps,
  FormValuesDataMatch,
} from "@/types/league.types";

const AddLeagueMatchday: FC<AddLeagueMatchdayProps> = ({
  leaguePath,
  fetchData,
}) => {
  const { onSubmit } = useHTTPrequests();

  const form = useForm<FormValuesDataMatch>({
    defaultValues: {
      addLeagueMatchday: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onError = (errors: FieldErrors<FormValuesDataMatch>) => {
    console.log("Form errors", errors);
  };

  const handleSubmitMatchDay = (data: FormValuesDataMatch) => {
    onSubmit(data, leaguePath);
    fetchData();
    if (isSubmitSuccessful) {
      reset();
    }
  };

  return (
    <form
      className={`${styles.form}  ${styled.slideIn}`}
      onSubmit={handleSubmit(handleSubmitMatchDay, onError)}
      noValidate
    >
      <div className={styles.formSection}>
        <label className={styles.label} htmlFor="addLeagueMatchday">
          Dodaj nową kolejkę
        </label>
        <input
          defaultValue=""
          id="addLeagueMatchday"
          type="text"
          placeholder="np. 1 kolejka – 16.10.2023r."
          className={styles.inputForm}
          style={{ padding: 10, marginBottom: 15 }}
          {...register("addLeagueMatchday", {
            required: "Dodaj kolejkę",
            validate: (fieldValue) => {
              return fieldValue !== "" || "Niepoprawna wartość";
            },
          })}
        />
        {errors.addLeagueMatchday ? (
          <p className={styles.error}>{errors.addLeagueMatchday?.message}</p>
        ) : null}

        <button className={styles.sendButton} type="submit">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default AddLeagueMatchday;
