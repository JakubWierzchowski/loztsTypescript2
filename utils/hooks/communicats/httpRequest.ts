import { toast } from 'react-toastify';
import { useFetchCommunicats } from './fetchData';
import { toastConfig } from '@/utils/toastOptions/toastOption';
import { FormValuesCommunicats } from '@/types/communicats.type';

const useHTTPrequests = () => {
  const { fetchData } = useFetchCommunicats();

  const onSubmit = async (data: FormValuesCommunicats) => {
    try {
      if (!data.myFile) return;
      const formData = new FormData();
      formData.append('myImage', data.myFile[0]);
      formData.append('month', data.month);

      const response = await fetch('/api/communicats', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const responseData = await response.json();
        toast.warning(`${responseData?.message} - ${responseData?.filename}`, toastConfig);
      }

      if (response.ok) {
        const responseData = await response.json();
        toast.success(`${responseData.message} - ${responseData.filename}`, toastConfig);
      }
    } catch (error) {
      toast.warning(`Ups coś poszło nie tak - ${error}`, toastConfig);
    }
  };

  async function deleteCommunicat(id: string, category: string) {
    try {
      const response = await fetch(`/api/communicats/${category}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      fetchData(category);
      toast.success(`${data.message} - ${data.deletedPlayer.fileName}`, toastConfig);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Error: 409') {
          console.log(error);
        } else {
          console.error('An error occurred:', error);
        }
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  }

  return {
    deleteCommunicat,
    onSubmit,
  };
};

export default useHTTPrequests;
