'use client';
import Image from 'next/image';
import useModal from '@/utils/hooks/useModal/useModal';
import styles from '@/components/Communicats/communicats.module.scss';
import CommunicatsData from '@/data/download.json';
import CommunicatsModal from '@/components/Communicats/CommunicatsModal';
import AddCommunicats from '@/components/Communicats/AddCommunicats/AddCommunicats';
import { staticBlurDataUrl } from '@/utils/staticBlurDataURL';
import { useFetchCommunicats } from '@/utils/hooks/communicats/fetchData';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import { ModaWithButton, Span } from '@/ui/index';

export default function Communicats({}) {
  const data = CommunicatsData;
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { category, newFile, setCategory } = useFetchCommunicats();

  return (
    <>
      <h2 className={styles.titleComunicats}>Komunikaty</h2>
      <IsAdmin>
        <ModaWithButton text={'Dodaj komunikat'}>
          <AddCommunicats data={data} category={category} />
        </ModaWithButton>
      </IsAdmin>

      <CommunicatsModal data={newFile} isOpen={isOpen} handleClose={handleCloseModal} category={category} />

      <section className={styles.wrapper}>
        {data.map((item, index) =>
          item.month !== 'Wybierz kategorię' ? (
            <div key={index} onClick={() => setCategory(item.apiLink)}>
              <div
                className={styles.itemDetails}
                onClick={() => handleOpenModal()}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Image
                  className={styles.image}
                  src={item.img}
                  alt={item.img}
                  fill
                  priority={index <= 0 ? true : false}
                  placeholder="blur"
                  blurDataURL={staticBlurDataUrl()}
                  sizes="(max-width: 50px) 1vw, (max-width: 425px) 2vw, 75vw"
                />
                <h3 className={styles.title}>
                  <Span color="light">{item.categories}</Span>
                </h3>
              </div>
            </div>
          ) : null
        )}
      </section>
    </>
  );
}
