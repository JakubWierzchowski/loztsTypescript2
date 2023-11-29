import { FC } from 'react';
import styles from './newListModal.module.scss';
import { useForm } from 'react-hook-form';
import useHTTPrequest from '@/utils/hooks/httpRequest/httpRequest';
import { NewListModalProps, FormValues, DataSubmit } from '@/types/newList.type';
import { TextForm, Button } from '@/ui/index';

const NewsListModal: FC<NewListModalProps> = ({ fetchData, handleCloseModal }) => {
  const { onSubmit } = useHTTPrequest<DataSubmit>({ apiUrl: '/api/newList' });

  const form = useForm<FormValues>({
    defaultValues: {
      title: '',
      text: '',
      signature: '',
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const handleUploadArticle = (data: FormValues) => {
    onSubmit(data, 'title');

    if (handleCloseModal) {
      handleCloseModal();
    }
    fetchData();

    if (isSubmitSuccessful) {
      reset();
    }
  };

  return (
    <>
      <section className={styles.wrapperForm}>
        <form onSubmit={handleSubmit(handleUploadArticle)} noValidate>
          <TextForm
            label={'Tytuł'}
            field={'title'}
            validateText={'Uzupełnij tytuł'}
            placeholder={'Wpisz tytuł'}
            register={register}
            errors={errors}
          />
          <TextForm
            label={'Text'}
            field={'text'}
            validateText={'Uzupełnij tekst'}
            placeholder={'Wpisz tekst'}
            register={register}
            errors={errors}
            isTextArea
          />
          <TextForm
            label={'Podpis'}
            field={'signature'}
            validateText={'Uzupełnij podpis'}
            placeholder={'Podpis'}
            register={register}
            errors={errors}
          />
          <Button sendButton type={'submit'}>
            Wyślij
          </Button>
        </form>
      </section>
    </>
  );
};

export default NewsListModal;
