import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ResumeContext } from '../../contexts/ResumeContext/ResumeDataProvider';
import { link } from '../../utils/links';
import { Button } from '../Button/Button';
import { Spinner } from './DownloadPdf.styles';

export const DownloadPdf = () => {
  const { state } = useContext(ResumeContext);
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    axios
      .post(link('pdf'), state, { responseType: 'arraybuffer' })
      .then((response) => {
        const file = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Button onClick={handleDownload} disabled={loading}>
      Download PDF
      {loading && <Spinner size={16} />}
    </Button>
  );
};
