'use client';
import { FC } from 'react';
import Link from 'next/link';
import styles from '@/components/Communicats/communicatsModal.module.scss';
import { CommunicatsModalProps } from '@/types/communicats.type';
import useHttpRequest from '@/utils/hooks/communicats/httpRequest';
import { useFetchCommunicats } from '@/utils/hooks/communicats/fetchData';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import { Button, Span } from '@/ui/index';
import getAnimationClass, { AnimationClassHook } from '@/utils/hooks/getAnimationClass/getAnimationClass';
const CommunicatsModal: FC<CommunicatsModalProps> = ({ data, handleClose, isOpen, category }) => {
  const { ref, getAnimationClass } = AnimationClassHook('slideIn', 'slideOut');
  const { deleteCommunicat } = useHttpRequest(category);
  const { fetchData } = useFetchCommunicats();
  const handleDeleteCommunicat = (id: string) => {
    deleteCommunicat(id);
    fetchData(category);
  };

  return (
    <>
      {/* <Modal isOpen={isOpen} handleClose={handleClose}> */}
      <section className={styles.wrapper}>
        {data?.length === 0 ? (
          <h2 className={styles.noResults}>
            <strong>Nie dodano jeszcze żadnych plików!</strong>
          </h2>
        ) : (
          data?.map((item, index) => (
            <div key={index} className={styles.gridItems}>
              <Link
                className={`${styles.links} ${getAnimationClass(index)}`}
                ref={ref}
                href={`${item.link}`}
                target="_blank"
                download
              >
                <div className={styles.linkItem}>
                  <Span color="dark">{item.fileName}</Span>
                </div>
              </Link>

              <IsAdmin>
                <div className={styles.centerButton}>
                  <Button deleteButton type={'button'} onClick={() => handleDeleteCommunicat(item.id)}>
                    Usuń
                  </Button>
                </div>
              </IsAdmin>
            </div>
          ))
        )}
      </section>
      {/* </Modal> */}
    </>
  );
};

export default CommunicatsModal;
