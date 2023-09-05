import React, { FC, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "../addQueueModal.module.scss";
import styled from "@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
// import useFetchHook from "@/utils/hooks/league/fetchHook";

interface ClockProps {
  leaguePath: string;
  fetchData: () => void;
}

type FormValues = {
  addLeagueMatchday: string;
};

const AddLeagueMatchday: FC<ClockProps> = ({ leaguePath, fetchData }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      addLeagueMatchday: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: FormValues) => {
    try {
      const reqBody = {
        matchDay: data.addLeagueMatchday,
        path: leaguePath,
      };
      const response = await fetch(`/api/allLeague`, {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const Apidata = await response.json();
      fetchData();

      toast.success(`${Apidata.message} - ${Apidata.newMatchDate.matchDay}`, {
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
        toast.error(`Taka kolejka już istnieje`, {
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
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      className={`${styles.form}  ${styled.slideIn}`}
      onSubmit={handleSubmit(onSubmit, onError)}
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
