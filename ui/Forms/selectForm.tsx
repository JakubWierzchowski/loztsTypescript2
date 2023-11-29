import React from 'react';
import styles from './forms.module.scss';
import animationStyles from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';

interface FormProps<T> {
  validateText: string;
  label: string;
  field: string;
  itemMap: keyof T;
  register: any;
  errors: Record<string, any>;
  defaultValue: string;
  data: T[] | undefined;
}

const SelectForm = <T extends { [key: string]: string }>({
  validateText,
  label,
  field,
  itemMap,
  register,
  errors,
  defaultValue,
  data,
}: FormProps<T>) => {
  const containerClassName = `${styles.formSection} ${animationStyles.slideOut}`;
  return (
    <div className={containerClassName}>
      <label className={styles.label} htmlFor={field.toString()}>
        {label}
      </label>
      <select
        className={styles.selectCategory}
        defaultValue={defaultValue}
        id={field.toString()}
        {...register(field.toString(), {
          required: validateText || 'Wpisz wartość',
          validate: (fieldValue: string) => {
            if (fieldValue === '' || fieldValue === defaultValue) {
              return validateText;
            }

            return true;
          },
        })}
      >
        <option value={defaultValue}>{defaultValue}</option>
        {data &&
          data?.map((item, index) => (
            <option value={item[itemMap]} key={index}>
              {item[itemMap]}
            </option>
          ))}
      </select>

      {errors?.[field] && (
        <p className={styles.error} role="alert">
          {errors?.[field]?.message}
        </p>
      )}
    </div>
  );
};

export { SelectForm };
