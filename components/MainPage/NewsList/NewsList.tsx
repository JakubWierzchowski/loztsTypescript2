'use client';
import Image from 'next/image';
import styles from './newsList.module.scss';
import NewsListModal from './NewListModal';
import Logo from '../../../public/images/header/logo.png';
import { useFetch } from '@/utils/hooks/mainPage/fetchDataHook';
import IsAdmin from '@/utils/hooks/isAdmin/isAdmin';
import { Button, ModalWithButton } from '@/ui';
import useHTTPrequest from '@/utils/hooks/httpRequest/httpRequest';
import { DataSubmit } from '@/types/mainPage/newList.type';

function NewsList() {
  const { deleteRequest } = useHTTPrequest<DataSubmit>({ apiUrl: '/api/newList' });
  const { newArticle, currentInfo, fetchData, handleOpenInfo } = useFetch();

  const handleDeleteArticle = async (id: string) => {
    try {
      await deleteRequest(id, 'title');
      fetchData();
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <>
      <section className={styles.wrapperArticle}>
        <div className={styles.gridLayout}>
          <h3 className={styles.articleHeader}>Aktualności</h3>
          <IsAdmin isAdmin>
            <ModalWithButton text={'Dodaj informację'}>
              <>
                <NewsListModal fetchData={fetchData} />
              </>
            </ModalWithButton>
          </IsAdmin>

          <div className={styles.articleShortGrid}>
            <div className={styles.articleShortSection}>
              {newArticle.map((item) => (
                <div key={item.id} className={styles.shortsItem} onClick={() => handleOpenInfo(item)}>
                  <div className={styles.itemShortTitle}>{item.title}</div>
                  <div className={styles.itemShortData}>{item.timeadd}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.articleContentGrid}>
            <div className={styles.articleContent}>
              <div className={styles.articleHeader}>
                <Image src={Logo} height={100} width={100} alt="logo" priority />
                <div className={styles.articleData}>{currentInfo?.timeadd}</div>
              </div>
              <div className={styles.articleTitle}>{currentInfo?.title}</div>
              <div className={styles.articleText}>{currentInfo?.text}</div>
              <div className={styles.articleSignature}>{currentInfo?.signature}</div>
              <div className={styles.centerButton}>
                <IsAdmin>
                  <Button deleteButton onClick={() => handleDeleteArticle(currentInfo.id)} type="button">
                    Usuń informację
                  </Button>
                </IsAdmin>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsList;
