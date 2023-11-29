import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import UploadIcon from '@/public/upload.png';
import styles from './imageForm.module.scss';
import styled from '@/utils/hooks/getAnimationClass/getAnimationStyles.module.scss';

interface FormProps {
  validateText: string;
  field: string;
  register: any;
  errors: any;
  isTextArea?: boolean;
  watch: any;
}

const ImageForm = ({ validateText, field, register, errors, watch }: FormProps) => {
  const imgValue = watch(field);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const loadPreviewImage = async () => {
      if (imgValue && imgValue.length !== 0) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(imgValue[0]);
      } else {
        setPreviewImage(null);
      }
    };

    loadPreviewImage();
  }, [imgValue]);

  return (
    <div className={styles.grid}>
      <div className={`${styles.formSection} ${styled.slideOut}`}>
        <label className={styles.formfieldFile} htmlFor={field}>
          <Image width={30} height={30} src={UploadIcon} alt="uploadIcon" className={styles.uploadIcon} />
          {imgValue && imgValue.length !== 0 ? (
            <div className={styles.inputText}>{imgValue[0].name}</div>
          ) : (
            <>
              <div className={styles.inputText}>Wybierz zdjęcie</div>
            </>
          )}

          <input
            type="file"
            className={`${styles.inputForm} ${styles.displayNonInput}`}
            id={field}
            {...register(field, {
              required: validateText || 'Wpisz wartość',
              validate: {
                size: (value: { size: number }[]) => {
                  if (value && value[0] && value[0].size > 1 * 1024 * 1024) {
                    return 'Zdjęcie nie może przekraczać 1MB';
                  }
                  return true;
                },
              },
            })}
          />
        </label>
        {errors?.[field] && (
          <p className={styles.error} role="alert">
            {errors?.[field]?.message}
          </p>
        )}
      </div>
      <div className={styles.containerWrapper}>
        {previewImage ? (
          <div className={styles.previewImageContainer}>
            <Image fill src={previewImage} alt="preview" className={styles.previewImage} />
          </div>
        ) : (
          <div className={`${styles.inputText} ${styled.slideIn}`}>
            {imgValue && imgValue.length !== 0 ? imgValue[0].name : 'Tutaj wyświetli się podgląd'}
          </div>
        )}
      </div>
    </div>
  );
};

export { ImageForm };
