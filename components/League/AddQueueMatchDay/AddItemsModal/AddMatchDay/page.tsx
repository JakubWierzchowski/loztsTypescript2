import React, { FC } from 'react';
import styles from '../addQueueModal.module.scss';
import styled from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';
import { useForm, FieldErrors } from 'react-hook-form';
import { AddLeagueMatchdayProps, FormValuesDataMatch } from '@/types/league.types';
import { Button, TextForm } from '@/ui';
import useHTTPrequest from '@/utils/hooks/httpRequest/httpRequest';
const AddLeagueMatchday: FC<AddLeagueMatchdayProps> = ({ leaguePath, fetchData }) => {
  const { onSubmit } = useHTTPrequest<FormValuesDataMatch>({ apiUrl: '/api/allLeague' });

  const form = useForm<FormValuesDataMatch>({
    defaultValues: {
      matchDay: '',
      path: leaguePath,
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onError = (errors: FieldErrors<FormValuesDataMatch>) => {
    console.log('Form errors', errors);
  };

  const handleSubmitMatchDay = (data: FormValuesDataMatch) => {
    onSubmit(data, 'matchDay');
    fetchData();
    if (isSubmitSuccessful) {
      reset();
    }
  };

  return (
    <form
      className={`${styles.form}  ${styled.slideIn}`}
      onSubmit={handleSubmit(handleSubmitMatchDay, onError)}
      noValidate
    >
      <TextForm
        label={'Dodaj nową kolejkę'}
        field={'matchDay'}
        validateText={'Uzupełnij kolejkę'}
        placeholder={'1 kolejka 15.10.2023 r.'}
        register={register}
        errors={errors}
      />

      <Button sendButton type={'submit'}>
        Wyślij
      </Button>
    </form>
  );
};

export default AddLeagueMatchday;
