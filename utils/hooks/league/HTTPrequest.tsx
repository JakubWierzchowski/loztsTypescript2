// "use client";

import { toast } from "react-toastify";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db, { storage } from "@/utils/firebase/firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from "moment";
import { useUserContext } from "@/utils/context/AuthContext";
import { QueueDetails } from "@/types/league.types";
type FormValues = {
  addLeagueMatchday: string;
};

type FormValuesFirebase = {
  host: string;
  guest: string;
  hostScore: string;
  guestScore: string;
  queueNumber: string;
  img?: FileList;
};

const useHTTPrequests = () => {
  const { user } = useUserContext();
  const deleteQueue = async (id: string, leaguePath: string) => {
    try {
      const reqBody = {
        id,
        leaguePath,
      };
      const response = await fetch(`/api/allLeague/${leaguePath}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(reqBody),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      toast.success(
        `${data.message} - ${data.deleteQueue.map((item: QueueDetails[]) =>
          item.map((item) => item.matchDay)
        )}`,
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } catch (error: any) {
      console.error(error);
      if (error.message === "Error: 409") {
        console.log(error);
      }
    }
  };

  const onSubmit = async (data: FormValues, leaguePath: string) => {
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

  const onSubmitFirebase = async (
    data: FormValuesFirebase,
    leaguePath: string
  ) => {
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
              user: user.email,
            });
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

  return {
    deleteQueue,
    onSubmit,
    onSubmitFirebase,
  };
};

export default useHTTPrequests;
