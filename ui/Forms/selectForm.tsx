import React from 'react';
import styles from './forms.module.scss';
import animationStyles from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';
import { SelectFormProps } from '@/types/ui/forms/selectForm.type';

const SelectForm = <T extends { [key: string]: string | undefined }>({
  validateText,
  label,
  field,
  itemMap,
  register,
  errors,
  defaultValue,
  data,
}: SelectFormProps<T>) => {
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
        {data?.map(
          (item, index) =>
            item && (
              <option value={item[itemMap]} key={index}>
                {item[itemMap]}
              </option>
            )
        )}
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
