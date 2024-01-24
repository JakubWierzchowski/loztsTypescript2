import React from 'react';
import ArchivesDataDownload from '@/data/archivesDownload.json';
import { DownloadSeason } from '@/types/archives/archivesDownload.type';
import Komunikaty from '@/components/ArchivesDownload/page';
import { archivesPropsCommunicats } from '@/types/archives/archivesDownload.type';

export default function ArchiwumKomunikaty({ params }: archivesPropsCommunicats) {
  const data: DownloadSeason[] = ArchivesDataDownload.komunikatyArchiwum;

  const findArchivesDownload = data.find((item) => item.sezon === params.komunikaty);

  return (
    <>
      {findArchivesDownload?.details.map((details, index) => (
        <Komunikaty key={index} details={details.details} category={details.kategoria} index={index} />
      ))}
    </>
  );
}
