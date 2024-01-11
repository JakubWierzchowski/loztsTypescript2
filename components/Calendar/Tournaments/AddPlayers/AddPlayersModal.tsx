'use client';
import React, { FC } from 'react';
import styles from './addplayers.module.scss';
import { useForm, FieldErrors } from 'react-hook-form';
import { useUserContext } from '@/utils/context/AuthContext';
import styled from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';
import { ModalAddPlayerProps, FormValuesAddPlayer } from '@/types/calendar.type';
import useHTTPrequests from '@/utils/hooks/calendar/httpRequestCalendar';
import { Button, SelectForm, TextForm } from '@/ui';

const Modal: FC<ModalAddPlayerProps> = ({ findTournaments, handleClose, tournaments, fetchData }) => {
  const { user } = useUserContext();
  const { onSubmit } = useHTTPrequests();
  const initialMail = user?.email;

  const form = useForm<FormValuesAddPlayer>({
    defaultValues: {
      zawodnicy: '',
      klub: '',
      kategoria: 'Wybierz kategorię',
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitted } = formState;

  const handleAddPlayer = (data: FormValuesAddPlayer) => {
    onSubmit(data, tournaments);
    fetchData();
    handleClose();
    if (isSubmitted) {
      reset();
    }
  };

  const onError = (errors: FieldErrors<FormValuesAddPlayer>) => {
    console.log('Form errors', errors);
  };

  const categories = findTournaments
    ?.flatMap((item) => item?.typeofTournaments?.flatMap((item) => item.table))
    .filter((category) => category) as { [key: string]: string }[];

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleAddPlayer, onError)} noValidate>
      <TextForm
        label={'Zawodnicy'}
        field={'zawodnicy'}
        validateText={'Uzupełnij dane zawodnika'}
        placeholder={'Zawodnik'}
        register={register}
        errors={errors}
      />
      <TextForm
        label={'Nazwa klubu'}
        field={'klub'}
        validateText={'Uzupełnij nazwę klubu!'}
        placeholder={'Wpisz nazwę klubu'}
        register={register}
        errors={errors}
      />

      <SelectForm
        validateText="Wybierz kategorię"
        label="Kategoria"
        field="kategoria"
        register={register}
        errors={errors}
        defaultValue="Wybierz kategorię"
        itemMap={'category'}
        data={categories}
      />

      <div className={`${styles.formSection}  ${styled.slideOut}`}>
        <label className={styles.label} htmlFor="email">
          Użytkownik
        </label>
        <input disabled defaultValue={initialMail} className={styles.inputForm} id="email" />
      </div>
      <div className={`${styles.formSection}  ${styled.slideIn}`}>
        <label className={styles.label} htmlFor="turniej">
          Turniej
        </label>
        <input disabled defaultValue={tournaments} placeholder="Turniej" className={styles.inputForm} id="turniej" />
      </div>
      <Button sendButton type={'submit'}>
        Wyślij
      </Button>
    </form>
  );
};
export default Modal;
