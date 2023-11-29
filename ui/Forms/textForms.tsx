import React from 'react';
import styles from './forms.module.scss';
import styled from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';

interface FormProps {
  validateText: string;
  label: string;
  field: string;
  placeholder: string;
  register: any;
  errors: any;
  isTextArea?: boolean;
  type?: 'tekst' | 'file' | 'number';
}

const TextForm = ({ placeholder, validateText, label, field, register, errors, isTextArea, type }: FormProps) => {
  return (
    <div className={`${styles.formSection} ${styled.slideOut}`}>
      <label className={styles.label} htmlFor={field}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          type="tekst"
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
