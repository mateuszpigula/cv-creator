import React, { useContext } from 'react';
import axios from 'axios';
import { CurriculumVitae } from '../CurriculumVitae/CurriculumVitae';
import { ResumeContext } from '../../contexts/ResumeContext/ResumeDataProvider';
import { Button } from '../Button/Button';
import { ImportJSON } from '../ImportJSON/ImportJSON';
import { ExportJSON } from '../ExportJSON/ExportJSON';
import { link } from '../../utils/links';

export const Home = () => {
  const { state } = useContext(ResumeContext);

  const handleDownload = () => {
    axios
      .post(link('pdf'), state, { responseType: 'arraybuffer' })
      .then((response) => {
        const file = new Blob([response.data], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Button onClick={handleDownload}>Download PDF</Button>
      <ImportJSON />
      <ExportJSON />
      <CurriculumVitae />
    </div>
  );
};
