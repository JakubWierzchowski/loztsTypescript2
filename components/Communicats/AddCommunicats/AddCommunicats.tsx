'use client';
import React, { FC } from 'react';
import { FormValuesCommunicats, HandleUpdateProps } from '@/types/communicats.type';
import useHTTPrequest from '@/utils/hooks/communicats/httpRequest';
import { Button, ImageForm, SelectForm } from '@/ui';
import { useForm, FieldErrors } from 'react-hook-form';

const Additems: FC<HandleUpdateProps> = ({ data, category }) => {
  const { onSubmit } = useHTTPrequest();

  const form = useForm<FormValuesCommunicats>({
    defaultValues: {
      myFile: undefined,
      month: 'Wybierz kategorię',
    },
  });
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onError = (errors: FieldErrors<FormValuesCommunicats>) => {
    console.log('Form errors', errors);
  };

  const handleSubmitFile = (data: FormValuesCommunicats) => {
    onSubmit(data);
  };

  const dataMonth = data.map((item) => ({ month: item.month }));

  return (
    <form onSubmit={handleSubmit(handleSubmitFile, onError)}>
      <ImageForm
        validateText={'Wybierz plik!'}
        field={'myFile'}
        register={register}
        errors={errors}
        watch={watch}
        file
        text={'Wybierz plik'}
      />
      <SelectForm
        validateText="Wybierz kategorię"
        label="Kategoria:"
        field="month"
        itemMap="month"
        defaultValue="Wybierz kategorię"
        register={register}
        errors={errors}
        data={dataMonth}
      />
      <Button sendButton type={'submit'}>
        Wyślij
      </Button>
    </form>
  );
};
export default Additems;
