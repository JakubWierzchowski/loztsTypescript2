import React, { FC, useEffect } from 'react';
import styles from '../addQueue.module.scss';
import { useForm, FieldErrors } from 'react-hook-form';
import { AddQueueProps, FormValuesFirebase } from '@/types/leagues/league.types';
import { Button, ImageForm, TextForm, SelectForm } from '@/ui';
import useHTTPrequestFirebase from '@/utils/hooks/httpRequest/httpRequesFirebase';

export const AddQueue: FC<AddQueueProps> = ({ leaguePath, handleCloseModal, queueDetails, leagueDetails }) => {
  const { onSubmitFirebase } = useHTTPrequestFirebase<FormValuesFirebase>({
    collectionPath: `${leaguePath}`,
  });

  const form = useForm<FormValuesFirebase>({
    defaultValues: {
      host: 'Wybierz Gospodarza',
      guest: 'Wybierz Gościa',
      hostScore: '',
      guestScore: '',
      queueNumber: 'Wybierz Kolejkę',
      img: undefined,
    },
  });
  const { register, handleSubmit, formState, reset, watch } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onError = (errors: FieldErrors<FormValuesFirebase>) => {
    console.log('Form errors', errors);
  };

  const handleSumbitFirebase = (data: FormValuesFirebase) => {
    onSubmitFirebase(data, `Dodano mecz do kolejki ${data.queueNumber}`);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    if (handleCloseModal) {
      handleCloseModal();
    }
  }, [handleCloseModal, isSubmitSuccessful, reset]);

  const Teams = leagueDetails.map((item) => ({ team: item.team }));
  const Queues = queueDetails.sort((a, b) => (a.day < b.day ? 1 : -1)).map((item) => ({ matchDay: item.matchDay }));

  return (
    <form onSubmit={handleSubmit(handleSumbitFirebase, onError)} className={styles.form}>
      <div className={styles.layout}>
        <SelectForm
          validateText="Wybierz Gospodarza!"
          label="Gospodarz"
          field="host"
          itemMap="team"
          defaultValue="Wybierz Gospodarza"
          register={register}
          errors={errors}
          data={Teams}
        />
        <SelectForm
          validateText="Wybierz Gościa!"
          label="Gość"
          field="guest"
          itemMap="team"
          defaultValue="Wybierz Gościa"
          register={register}
          errors={errors}
          data={Teams}
        />
        <TextForm
          type="number"
          validateText={'Wpisz wynik Gospodarza!'}
          label={'Wynik Gospodarza'}
          field={'hostScore'}
          placeholder={'Wynik Gospodarza'}
          register={register}
          errors={errors}
        />
        <TextForm
          type="number"
          validateText={'Wpisz wynik Gościa!'}
          label={'Wynik Gościa'}
          field={'guestScore'}
          placeholder={'Wynik Gościa'}
          register={register}
          errors={errors}
        />
        <SelectForm
          validateText="Wybierz Kolejkę"
          label="Wybierz kolejkę"
          field="queueNumber"
          itemMap="matchDay"
          defaultValue="Wybierz Kolejkę"
          register={register}
          errors={errors}
          data={Queues}
        />

        <ImageForm
          validateText={'Zdjęcie jest wymagane'}
          field={'img'}
          register={register}
          errors={errors}
          watch={watch}
          text={'Wybierz zdjęcie'}
        />
      </div>
      <Button sendButton type={'submit'}>
        Wyślij
      </Button>
    </form>
  );
};
