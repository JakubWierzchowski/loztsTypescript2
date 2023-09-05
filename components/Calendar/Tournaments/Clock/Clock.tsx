"use client";
import React, { useState } from "react";
import styles from "../tournamentsTable.module.scss";
import styled from "../AddPlayers/addplayers.module.scss";
import ClockDetails from "./ClockDetails";
import useModal from "@/utils/hooks/useModal/useModal";
import AddPlayersModal from "../AddPlayers/AddPlayersModal";
import { useUserContext } from "@/utils/context/AuthContext";
import { ClockProps } from "@/types/calendar.type";
function Clock({
  findTournaments,
  tournaments,
  timeDone,
  setTimeDone,
  fetchData,
}: ClockProps) {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [timeToMuch, settimeToMuch] = useState<boolean>(false);
  const { user } = useUserContext();

  return (
    <>
      {timeDone ? (
        <h2 className={styles.clockTitle}>Czas zgłoszeń minął!</h2>
      ) : (
        <>
          <ClockDetails
            findTournaments={findTournaments}
            setTimeDone={setTimeDone}
            settimeToMuch={settimeToMuch}
            timeToMuch={timeToMuch}
          />

          {timeToMuch ? null : (
            <>
              {user?.email ? (
                <>
                  <button
                    onClick={handleOpenModal}
                    className={styled.modalButton}
                  >
                    Dodaj zawodnika
                  </button>

                  <AddPlayersModal
                    findTournaments={findTournaments}
                    tournaments={tournaments}
                    isOpen={isOpen}
                    handleClose={handleCloseModal}
                    fetchData={fetchData}
                  />
                </>
              ) : null}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Clock;
