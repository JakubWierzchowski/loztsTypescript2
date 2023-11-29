import { useState } from 'react';
import { ToastOptions, toast } from 'react-toastify';

interface RequestOptions<T> {
  apiUrl: string;
  defaultFields?: Array<keyof T>;
}

const useHTTPrequest = <T>(options: RequestOptions<T>) => {
  const { apiUrl, defaultFields = [] } = options;
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const toastConfig: ToastOptions = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  async function deleteRequest(id: string, titleField: keyof T) {
    try {
      setDeleteError(null);

      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      const Apidata = await response.json();

      const title = Apidata.deleteItem.map((item: Record<keyof T, string>) => item[titleField]);

      toast.success(`${Apidata.message} - ${title}`, toastConfig);
    } catch (error) {
      setDeleteError(`Wystąpił błąd podczas usuwania: - ${error}`);

      toast.error(`Wystąpił błąd podczas usuwania: - ${error}`, toastConfig);
    }
  }

  async function onSubmit(data: T, titleField: keyof T) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const Apidata = await response.json();

      toast.success(`${Apidata.message} - ${Apidata.newPushDate[titleField]}`, toastConfig);
    } catch (e: any) {
      console.log(e);
      if (e.message === 'Error: 409') {
        toast.error(`Taki tytuł już istnieje`, toastConfig);
      }
    }
  }

  return {
    deleteRequest,
    deleteError,
    onSubmit,
  };
};

export default useHTTPrequest;
