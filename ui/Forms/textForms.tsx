import React from 'react';
import styles from './forms.module.scss';
import styled from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';
import { TextFormProps } from '@/types/ui/forms/text.From.type';

const TextForm = ({ placeholder, validateText, label, field, register, errors, isTextArea, type }: TextFormProps) => {
  return (
    <div className={`${styles.formSection} ${styled.slideOut}`}>
      <label className={styles.label} htmlFor={field}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          type="text"
          placeholder={placeholder}
          className={styles.textareaForm}
          id={field}
          {...register(field, {
            required: validateText || 'Wpisz wartość',
            validate: (fieldValue: string) => fieldValue.trim() !== '' || 'Niepoprawna wartość',
          })}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={styles.inputForm}
          id={field}
          {...register(field, {
            required: validateText || 'Wpisz wartość',
            ...(field === 'email' && {
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-0-]+)*$/,
                message: 'Niepoprawny email',
              },
            }),
            validate: (fieldValue: string) => fieldValue.trim() !== '' || 'Niepoprawna wartość',
          })}
        />
      )}

      {errors?.[field] && (
        <p className={styles.error} role="alert">
          {errors?.[field]?.message}
        </p>
      )}
    </div>
  );
};

export { TextForm };
