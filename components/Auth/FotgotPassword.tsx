import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUserContext } from '@/utils/context/AuthContext';
import styles from './auth.module.scss';
import { FormDataForgotPassword } from '@/types/auth.types';
import { Button, TextForm } from '@/ui';

function FotgotPassword() {
  const { forgotPassword } = useUserContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormDataForgotPassword>();

  const onSubmit = async (formData: FormDataForgotPassword) => {
    await forgotPassword(formData.email);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <h3>Nie pamiętasz hasła?</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextForm
          validateText={'Pole jest wymagane'}
          label={'Email'}
          field={'email'}
          placeholder={'Wpisz adres email'}
          type={'text'}
          register={register}
          errors={errors}
        />

        <Button sendButton type={'submit'}>
          Wyślij
        </Button>
      </form>
    </>
  );
}

export default FotgotPassword;
