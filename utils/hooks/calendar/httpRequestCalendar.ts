import { toast } from "react-toastify";
import { useUserContext } from "@/utils/context/AuthContext";
import { FormValuesAddPlayer } from "@/types/calendar.type";

const useHTTPrequests = () => {
  const { user } = useUserContext();
  async function deletePlayer(id: string, pathTournament: string) {
    try {
      const response = await fetch(`/api/calendar/${pathTournament}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      const Player = data.filterPlayer?.find((item: string) => item);
      toast.success(`${data.message} ${Player.player}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Wystąpił błąd podczas usuwania artykułu:", error);
    }
  }

  const onSubmit = async (data: FormValuesAddPlayer, tournaments: string) => {
    try {
      const reqBody = {
        club: data.klub,
        player: data.zawodnicy,
        turnament: tournaments,
        gender: data.kategoria,
        users: user?.email,
      };
      const response = await fetch(`/api/calendar`, {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const Apidata = await response.json();

      if (Apidata.status === 409) {
        toast.error(`${Apidata.message} - ${Apidata.newPlayer.player}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      toast.success(`${Apidata.message} - ${Apidata.player.player}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (e: any) {
      if (e.message === "Error: 500") {
        console.log("bład");
        toast.error(`Ups.. Coś poszło nie tak`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return {
    deletePlayer,
    onSubmit,
  };
};

export default useHTTPrequests;
