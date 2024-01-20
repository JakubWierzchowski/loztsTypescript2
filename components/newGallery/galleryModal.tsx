import ReactModal from 'react-modal';
import styles from '@/components/newGallery/galeryTurnamentModule.module.scss';
import Gallery from '@/components/newGallery/Gallery';
import { GalleryDetails } from '@/types/gallery.type';
export interface ArchivesGalleryGalleryModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  images: GalleryDetails | undefined;
  slideNumber: number;
}
const Modal: React.FC<ArchivesGalleryGalleryModalProps> = ({ images, handleCloseModal, isOpen, slideNumber }) => {
  const customStyles = {
    overlay: {
      zIndex: 20,
    },
    content: {
      zIndex: 21,
    },
  };
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        className={styles.modalWrapper}
      >
        {/* <ReactModal isOpen={isOpen} onRequestClose={handleCloseModal} ariaHideApp={false} className={styles.modalWrapper}> */}
        <Gallery photos={images?.link} slideNumber={slideNumber} handleCloseModal={handleCloseModal} />
      </ReactModal>
    </>
  );
};

export default Modal;
