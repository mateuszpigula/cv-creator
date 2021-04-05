import React, { ReactElement, useContext, useState } from 'react';
import axios from 'axios';
import { ResumeContext } from 'contexts/ResumeContext/ResumeDataProvider';
import { link } from 'utils/links';
import { Button } from 'components/Button/Button';
import { Toast, ToastType } from 'components/Toast/Toast';
import { Spinner } from './DownloadPdf.styles';

export const DownloadPdf = (): ReactElement => {
  const { state } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastType>({ message: '', type: 'success' });

  const handleDownload = () => {
    setLoading(true);

    axios
      .post(link('pdf'), state, { responseType: 'arraybuffer' })
      .then((response) => {
        const file = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
        setToast({ message: 'PDF successfully generated.', type: 'success' });
      })
      .catch((error: Error) => {
        setToast({ message: `${error.message}. Try again later.`, type: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Button onClick={handleDownload} disabled={loading}>
        Download PDF
        {loading && <Spinner size={16} />}
      </Button>
      {toast.message && <Toast message={toast.message} type={toast.type} />}
    </>
  );
};
