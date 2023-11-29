'use client';
import React, { FC, useState, useEffect } from 'react';
import { addDoc, serverTimestamp, onSnapshot, collection } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '@/utils/firebase/firebase-config';
import Image from 'next/image';
import { useForm, FieldErrors } from 'react-hook-form';
import styles from './articlesModal.module.scss';
import { toast } from 'react-toastify';
import { Button } from '@/ui/Button/button';
import { TextForm } from '@/ui/Forms/textForms';
import { ImageForm } from '@/ui/Forms/imageForm';
interface ArticleModalProps {
  handleCloseModal?: () => void;
}
type FormValues = {
  Title: string;
  Tekst: string;
  Signature: string;
  img?: FileList;
};

const ArticleModal: FC<ArticleModalProps> = ({ handleCloseModal }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      Title: '',
      Tekst: '',
      Signature: '',
      img: undefined,
    },
  });

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log('Form errors', errors);
  };
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful } = formState;
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data: FormValues) => {
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
            await addDoc(collection(db, 'articles'), {
              Title: data.Title,
              Tekst: data.Tekst,
              img: downloadURL,
              Signature: data.Signature,
              timestamp: serverTimestamp(),
            });

            if (handleCloseModal) {
              handleCloseModal();
            }
            toast.success(`Dodano nowy artykuł ${data.Title}`, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          } catch (e: any) {
            if (e.message === 'Error: 409') {
              toast.error(`Taki artykuł już istnieje`, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              });
            }
          }
        }
      );
    }
  };

  return (
    <section className={styles.wrapperForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <TextForm
          label={'Tytuł'}
          field={'Title'}
          validateText={'Uzupełnij tytuł'}
          placeholder={'Wpisz tytuł'}
          register={register}
          errors={errors}
        />
        <TextForm
          label={'Tekst'}
          field={'Tekst'}
          validateText={'Uzupełnij tekst'}
          placeholder={'Wpisz tekst'}
          register={register}
          errors={errors}
        />
        <TextForm
          label={'Autor publikacji'}
          field={'Signature'}
          validateText={'Uzupełnij podpis'}
          placeholder={'Tekst'}
          register={register}
          errors={errors}
        />

        <ImageForm
          validateText={'Zdjęcie jest wymagane'}
          field={'img'}
          register={register}
          errors={errors}
          watch={watch}
        />

        <Button type="submit" sendButton>
          Wyślij
        </Button>
      </form>
    </section>
  );
};

export default ArticleModal;
