import { useForm } from "react-hook-form";
import { useUserContext } from "@/utils/context/AuthContext";
import styles from "./auth.module.scss";
import { FormDataSingIn } from "@/types/auth.types";

function SignInForm() {
  const { signInUser, error, user } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSingIn>();

  const onSubmit = async (formData: FormDataSingIn) => {
    await signInUser(formData.email, formData.password);
  };

  return (
    <>
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formSection}>
          <label className={styles.label} htmlFor="email">
            Użytkownik
          </label>
          <input
            className={styles.inputForm}
            placeholder="Wpisz email"
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
        <div className={styles.formSection}>
          <label className={styles.label} htmlFor="password">
            Hasło
          </label>
          <input
            type="password"
            placeholder="Wpisz hasło"
            className={styles.inputForm}
            id="password"
            {...register("password", {
              required: "Pole wymagane",
            })}
          />
          {errors.password ? (
            <p className={styles.error}>{errors.password?.message}</p>
          ) : null}
        </div>
        <button type="submit" className={styles.sendButton}>
          Wyślij
        </button>
      </form>
    </>
  );
}

export default SignInForm;
