import Image from "next/image";
import ReactModal from "react-modal";
import styles from "@/utils/hooks/useModal/galleryModal.module.scss";
import styled from "@/components/Gallery/galleryTurnament.module.scss";
import LeftArrow from "@/public/left-arrow.png";
import RightArrow from "@/public/right-arrow.png";
interface GalleryModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  images: string;
  prevSlide: () => void;
  nextSlide: () => void;
  lastSlide: number;
  slideNumber: number;
}
const Modal: React.FC<GalleryModalProps> = ({
  images,
  handleCloseModal,
  isOpen,
  prevSlide,
  nextSlide,
  lastSlide,
  slideNumber,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        className={styles.modalWrapper}
      >
        <button className={styles.modalCloseButton} onClick={handleCloseModal}>
          X
        </button>
        <section className={styled.imageSection}>
          <div className={styled.imageBox}>
            <Image
              className={styled.galleryImgModal}
              src={images}
              alt=""
              fill
            />
          </div>
        </section>
        {lastSlide - 1 === slideNumber ? (
          ""
        ) : (
          <Image
            src={RightArrow}
            alt="Previous image"
            onClick={nextSlide}
            className={styled.next}
          />
        )}
        {slideNumber === 0 ? (
          ""
        ) : (
          <Image
            src={LeftArrow}
            alt="Next image"
            onClick={prevSlide}
            className={styled.prev}
          />
        )}
      </ReactModal>
    </>
  );
};

export default Modal;
