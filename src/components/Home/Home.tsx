import React, { ReactElement } from 'react';
import { CurriculumVitae } from 'components/CurriculumVitae/CurriculumVitae';
import { ImportJson } from 'components/ImportJson/ImportJson';
import { ExportJson } from 'components/ExportJson/ExportJson';
import { DownloadPdf } from 'components/DownloadPdf/DownloadPdf';

export const Home = (): ReactElement => {
  return (
    <div>
      <DownloadPdf />
      <ImportJson />
      <ExportJson />
      <CurriculumVitae />
    </div>
  );
};
