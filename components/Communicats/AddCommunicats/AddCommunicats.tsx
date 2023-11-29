'use client';
import React, { FC } from 'react';
import UploadIcon from '@/public/uploadWhite.png';
import Image from 'next/legacy/image';

import styles from '@/components/Communicats/AddCommunicats/addcommunicats.module.scss';
import { HandleUpdateProps } from '@/types/communicats.type';
import useHTTPrequest from '@/utils/hooks/communicats/httpRequest';
import { Button } from '@/ui';

const Additems: FC<HandleUpdateProps> = ({ data, category }) => {
  const { handleUpload, selectedFile, setSelectedImage, setSelectedFile, handleInputChange, month } =
    useHTTPrequest(category);
  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleUpload} className="form">
        <div className={styles.customInputWrapper}>
          <label className={styles.formfieldFile}>
            <Image width={50} height={50} src={UploadIcon} className="icon" alt="icon" />
            {!selectedFile ? (
              <div className={styles.inputText}>Wybierz plik</div>
            ) : (
              <div className={styles.inputText}>{selectedFile.name}</div>
            )}
            `{' '}
            <input
              className="displayNonInput"
              type="file"
              hidden
              onChange={({ target }) => {
                if (target.files) {
                  const file = target.files[0];
                  setSelectedImage(URL.createObjectURL(file));
                  setSelectedFile(file);
                }
              }}
            />
          </label>
        </div>

        <select
          onChange={handleInputChange}
          required
          id="Month"
          name="Month"
          value={month}
          className={styles.selectItem}
        >
          <option className={styles.option} value="Wybierz kategorię">
            Wybierz kategorię
          </option>
          {data.map((item, index) => (
            <option value={item.month} key={index} className={styles.option}>
              {item.month}
            </option>
          ))}
        </select>
        <Button sendButton type={'submit'}>
          Wyślij
        </Button>
      </form>
    </section>
  );
};
export default Additems;
