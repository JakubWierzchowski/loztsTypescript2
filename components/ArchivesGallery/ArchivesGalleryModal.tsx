import ReactModal from "react-modal";
import styles from "@/components/ArchivesGallery/archivesGalleryTurnament.module.scss";
import Gallery from "@/components/newGallery/Gallery";
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
        <Gallery photos={images?.link} slideNumber={slideNumber} />
      </ReactModal>
    </>
  );
};

export default Modal;
