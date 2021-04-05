import React from 'react';
import { CurriculumVitae } from '../CurriculumVitae/CurriculumVitae';
import { ImportJson } from '../ImportJson/ImportJson';
import { ExportJson } from '../ExportJson/ExportJson';
import { DownloadPdf } from '../DownloadPdf/DownloadPdf';

export const Home = () => {
  return (
    <div>
      <DownloadPdf />
      <ImportJson />
      <ExportJson />
      <CurriculumVitae />
    </div>
  );
};
