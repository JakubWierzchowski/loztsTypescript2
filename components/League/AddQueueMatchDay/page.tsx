import React, { FC } from 'react';
import { AddQueueSchudleProps } from '@/types/league.types';
import { ModaWithButton } from '@/ui';
import AddLeagueMatchday from './AddItemsModal/AddMatchDay/page';
import AddQueue from './AddItemsModal/AddQueue/addQueue';

const AddQueueSchudle: FC<AddQueueSchudleProps> = ({ leaguePath, findLeague, fetchData }) => {
  const leagueDetails = findLeague?.leagueDetails.map(({ details }) => details).flat() || [];
  const queueDetails = findLeague?.queueDetails || [];

  return (
    <div>
      <ModaWithButton text={'Dodaj kolejkę'}>
        <>
          <AddLeagueMatchday leaguePath={leaguePath} fetchData={fetchData} />
          <AddQueue leaguePath={leaguePath} queueDetails={queueDetails} leagueDetails={leagueDetails} />
        </>
      </ModaWithButton>
    </div>
  );
};

export default AddQueueSchudle;
