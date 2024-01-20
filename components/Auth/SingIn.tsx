import { useForm } from 'react-hook-form';
import { useUserContext } from '@/utils/context/AuthContext';
import styles from './auth.module.scss';
import { FormDataSingIn } from '@/types/auth.types';
import { Button, TextForm } from '@/ui';
import { useState } from 'react';

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useUserContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataSingIn>();

  const onSubmit = async (formData: FormDataSingIn) => {
    await signInUser(formData.email, formData.password);
  };

  return (
    <>
      <h3>Logowanie</h3>
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

        <TextForm
          validateText={'Pole jest wymagane'}
          label={'Hasło'}
          field={'password'}
          placeholder={'Wpisz hasło'}
          type={showPassword ? 'text' : 'password'}
          register={register}
          errors={errors}
        />
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
          />
          <label htmlFor="show-password">Pokaż hasło</label>
        </div>

        <Button sendButton type={'submit'}>
          Wyślij
        </Button>
      </form>
    </>
  );
}

export default SignInForm;
