import React, { FC, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db, { storage } from "@/utils/firebase/firebase-config";
import moment from "moment";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useUserContext } from "@/utils/context/AuthContext";
import Image from "next/image";
import styles from "../addQueueModal.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
import { toast } from "react-toastify";
import { QueueDetails, LeagueDetail } from "@/types/league.types";
import UploadIcon from "@/public/upload.png";
import styled from "@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss";

type FormValues = {
  host: string;
  guest: string;
  hostScore: string;
  guestScore: string;
  queueNumber: string;
  img?: FileList;
};
interface ClockProps {
  handleClose: () => void;
  leaguePath: string;
  queueDetails: QueueDetails[] | undefined;
  leagueDetails: LeagueDetail[] | undefined;
}

const AddQueue: FC<ClockProps> = ({
  leaguePath,
  handleClose,
  queueDetails,
  leagueDetails,
}) => {
  const { user } = useUserContext();
  const form = useForm<FormValues>({
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
  //   const [articles, setArticles] = useState<ArticleItem[]>([]);
  const imgValue = watch("img");
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
            await addDoc(collection(db, `${leaguePath}`), {
              host: data.host,
              guest: data.guest,
              hostScore: data.hostScore,
              guestScore: data.guestScore,
              queueNumber: data.queueNumber,
              img: downloadURL,
              timestamp: serverTimestamp(),
              time: moment().format("YYYY-DD-MM HH:mm:ss"),
              user: user?.email,
            });
            handleClose();
            toast.success(`Dodano nową pozycję do ${data.queueNumber}`, {
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
              toast.error(`ups coś poszło nie tak`, {
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
      onSubmit={handleSubmit(onSubmit, onError)}
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
                    if (value && value[0] && value[0].size > 1 * 1024 * 1024) {
                      return "Zdjęcie nie może przekraczać 1MB";
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
