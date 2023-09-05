import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "@/utils/context/AuthContext";
import styles from "./auth.module.scss";
import { FormDataForgotPassword } from "@/types/auth.types";

function FotgotPassword() {
  const { forgotPassword } = useUserContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormDataForgotPassword>();

  const onSubmit = async (formData: FormDataForgotPassword) => {
    await forgotPassword(formData.email);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <h2>Nie pamiętasz hasła?</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formSection}>
          <label className={styles.label} htmlFor="email">
            Użytkownik
          </label>
          <input
            placeholder="Wpisz adres email"
            className={styles.inputForm}
            id="email"
            {...register("email", {
              required: "Pole wymagane",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-0-]+)*$/,
                message: "Niepoprawny email",
              },
            })}
          />
          {errors.email ? (
            <p className={styles.error}>{errors.email?.message}</p>
          ) : null}
        </div>
        <button type="submit" className={styles.sendButton}>
          Wyślij
        </button>
      </form>
    </>
  );
}

export default FotgotPassword;
