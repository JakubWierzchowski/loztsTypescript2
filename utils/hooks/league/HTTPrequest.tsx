import { ToastOptions, toast } from 'react-toastify';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db, { storage } from '@/utils/firebase/firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import moment from 'moment';
import { useUserContext } from '@/utils/context/AuthContext';
import { QueueDetails, FormValuesFirebase } from '@/types/league.types';

import { deleteDoc, doc } from 'firebase/firestore';

const useHTTPrequests = () => {
  const { user } = useUserContext();

  const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const onSubmitFirebase = async (data: FormValuesFirebase, leaguePath: string) => {
    if (data.img && data.img[0]) {
      const imageFile = data.img[0];
      const storageRef = ref(storage, `${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        'state_changed',
        () => {},
        (error) => {
          console.error('Błąd podczas przesyłania pliku:', error);
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
              time: moment().format('YYYY-DD-MM HH:mm:ss'),
              user: user.email,
            });
            toast.success(`Dodano nową pozycję do ${data.queueNumber}`, toastConfig);
          } catch (e: any) {
            if (e.message === 'Error: 409') {
              console.log('blad');
              toast.error(`ups coś poszło nie tak`, toastConfig);
            }
          }
        }
      );
    }
  };
  const deleteQueueFirebase = async (
    id: string,
    host: string,
    guest: string,
    guestScore: number,
    hostScore: number,
    leaguePath: string
  ) => {
    const docRef = doc(db, `${leaguePath}`, id);
    try {
      await deleteDoc(docRef);
      toast.success(`Usunieto spotkanie \n ${host}:${hostScore} vs ${guest}:${guestScore}`, toastConfig);
    } catch (error) {
      toast.error(`Błąd przy usuwaniu dokumentu: ${error}`, toastConfig);
    }
  };

  return {
    // deleteQueue,
    // onSubmit,
    onSubmitFirebase,
    deleteQueueFirebase,
  };
};

export default useHTTPrequests;
