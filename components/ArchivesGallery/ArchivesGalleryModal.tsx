import Image from "next/image";
import ReactModal from "react-modal";
// import styles from "@/utils/hooks/useModal/galleryModal.module.scss";
import styles from "@/components/ArchivesGallery/archivesGalleryTurnament.module.scss";
import GalleryTest from "@/components/newGallery/GalleryTest";
import { GalleryDetails } from "@/types/gallery.type";
interface GalleryModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  images: GalleryDetails | undefined;
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
  // const photosArray = [];
  // for (let i = 1; i <= 50; i++) {
  //   photosArray.push({
  //     id: i,
  //     src: `/images/turnaments/Podium2023/${i}.jpeg`,
  //     preview: `/images/turnaments/Podium2023/${i}.jpeg`,
  //     description: `Norway ${i}`,
  //   });
  // }
  console.log(images?.link);
  console.log(images);
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        className={styles.modalWrapper}
      >
        {/* <button className={styles.modalCloseButton} onClick={handleCloseModal}>
          X
        </button> */}
        {/* <section className={styled.imageSection}>
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
        )} */}
        <GalleryTest photos={images?.link} slideNumber={slideNumber} />
      </ReactModal>
    </>
  );
};

export default Modal;
