import { toast } from 'react-toastify';
import { collection, addDoc, serverTimestamp, doc, deleteDoc } from 'firebase/firestore';
import db, { storage } from '@/utils/firebase/firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import moment from 'moment';
import { useUserContext } from '@/utils/context/AuthContext';
import { toastConfig } from '@/utils/toastOptions/toastOption';

interface RequestOptions<T> {
  collectionPath: string;
  additionalFields?: Partial<T>;
}

const useHTTPrequestsFirebase = <T>(options: RequestOptions<T>) => {
  const { user } = useUserContext();
  const { collectionPath, additionalFields = {} } = options;

  const onSubmitFirebase = async (data: T & { img?: FileList }, successMessage: string) => {
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
            const documentData: Record<string, any> = {
              ...data,
              img: downloadURL,
              timestamp: serverTimestamp(),
              time: moment().format('YYYY-DD-MM HH:mm:ss'),
              user: user.email,
              ...additionalFields,
            };

            await addDoc(collection(db, collectionPath), documentData);
            toast.success(successMessage, toastConfig);
          } catch (e: any) {
            if (e.message === 'Error: 409') {
              console.log('blad');
              toast.error(`Ups, coś poszło nie tak`, toastConfig);
            }
          }
        }
      );
    }
  };

  const deleteQueueFirebase = async (id: string, successMessage: string) => {
    const docRef = doc(db, `${collectionPath}`, id);
    try {
      await deleteDoc(docRef);
      toast.success(successMessage, toastConfig);
    } catch (error) {
      toast.error(`Błąd przy usuwaniu dokumentu: ${error}`, toastConfig);
    }
  };

  return {
    onSubmitFirebase,
    deleteQueueFirebase,
  };
};

export default useHTTPrequestsFirebase;
