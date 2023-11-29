import React, { FC } from 'react';
import styles from '../addQueueModal.module.scss';
import { useForm, FieldErrors } from 'react-hook-form';
import useHTTPrequests from '@/utils/hooks/league/httpRequest';
import { AddQueueProps, FormValuesFirebase } from '@/types/league.types';
import { Button, ImageForm, TextForm, SelectForm } from '@/ui';

const AddQueue: FC<AddQueueProps> = ({ leaguePath, handleCloseModal, queueDetails, leagueDetails }) => {
  const { onSubmitFirebase } = useHTTPrequests();
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
    onSubmitFirebase(data, leaguePath);
    if (isSubmitSuccessful) {
      reset();
    }
    if (handleCloseModal) {
      handleCloseModal();
    }
  };

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
          data={leagueDetails.map((item) => ({ team: item.team }))}
        />
        <SelectForm
          validateText="Wybierz Gościa!"
          label="Gość"
          field="guest"
          itemMap="team"
          defaultValue="Wybierz Gościa"
          register={register}
          errors={errors}
          data={leagueDetails.map((item) => ({ team: item.team }))}
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
          validateText="Wybierz kolejkę!"
          label="Wybierz kolejkę"
          field="queueNumber"
          itemMap="matchDay"
          defaultValue="Wybierz Gospodarza"
          register={register}
          errors={errors}
          data={queueDetails.sort((a, b) => (a.day < b.day ? 1 : -1)).map((item) => ({ matchDay: item.matchDay }))}
        />

        <ImageForm
          validateText={'Zdjęcie jest wymagane'}
          field={'img'}
          register={register}
          errors={errors}
          watch={watch}
        />
      </div>
      <Button sendButton type={'submit'}>
        Wyślij
      </Button>
    </form>
  );
};

export default AddQueue;
