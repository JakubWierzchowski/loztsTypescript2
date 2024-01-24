'use client';
import React, { FC, useEffect } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import styles from './articlesModal.module.scss';
import { ImageForm, TextForm, Button } from '@/ui/';
import useHTTPrequestFirebase from '@/utils/hooks/httpRequest/httpRequesFirebase';
import { ArticleModalProps, FormValuesArticles } from '@/types/mainPage/articles.type';

const ArticleModal: FC<ArticleModalProps> = ({ handleCloseModal }) => {
  const { onSubmitFirebase } = useHTTPrequestFirebase({
    collectionPath: `articles`,
  });
  const form = useForm<FormValuesArticles>({
    defaultValues: {
      Title: '',
      Tekst: '',
      Signature: '',
      img: undefined,
    },
  });

  const onError = (errors: FieldErrors<FormValuesArticles>) => {
    console.log('Form errors', errors);
  };
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful } = formState;

  const handleSumbitFirebase = (data: FormValuesArticles) => {
    onSubmitFirebase(data, `Dodano artykuł ${data.Title}`);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    if (handleCloseModal) {
      handleCloseModal();
    }
  }, [handleCloseModal, isSubmitSuccessful, reset]);

  return (
    <section className={styles.wrapperForm}>
      <form className={styles.form} onSubmit={handleSubmit(handleSumbitFirebase, onError)}>
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
          text={'Wybierz zdjęcie'}
        />

        <Button type="submit" sendButton>
          Wyślij
        </Button>
      </form>
    </section>
  );
};

export default ArticleModal;
