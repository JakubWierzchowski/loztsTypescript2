"use client";
import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import UploadIcon from "@/public/uploadWhite.png";
import { toast } from "react-toastify";
import Image from "next/legacy/image";
import { DownloadData } from "@/types/communicats.type";
import styles from "@/components/Communicats/AddCommunicats/addcommunicats.module.scss";
interface ModalProps {
  data: DownloadData[];
}

const Additems: FC<ModalProps> = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [month, setMonth] = useState("Wybierz kategorię");

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      formData.append("month", month);

      const response = await fetch("/api/communicats", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        response.status === 409
          ? toast.warning(`${data?.message} - ${data?.filename}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : response.status === 400 || 500
          ? toast.warning(`${data.message} - ${response.status}`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          : null;
      }
      if (response.ok) {
        toast.success(`${data.message} - ${data.filename}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.warning(`Ups cos poszło nie tak - ${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };
  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleUpload} className="form">
        <div className={styles.customInputWrapper}>
          <label className={styles.formfieldFile}>
            <Image
              width={50}
              height={50}
              src={UploadIcon}
              className="icon"
              alt="icon"
            />
            {!selectedFile ? (
              <div className={styles.inputText}>Wybierz plik</div>
            ) : (
              <div className={styles.inputText}>{selectedFile.name}</div>
            )}
            `{" "}
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

        <button className={styles.button} type="submit">
          Wyślij
        </button>
      </form>
    </section>
  );
};
export default Additems;
