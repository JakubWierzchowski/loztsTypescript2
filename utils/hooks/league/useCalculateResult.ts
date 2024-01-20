import { LeagueDetails, LeagueDataItem, LeagueDetail } from '@/types/leagues/league.types';

function useCalculateResult() {
  const calculateSum = (arr: number[]): number => arr.reduce((acc, el) => acc + el, 0);

  const updateDetailsBasedOnResult = (details: LeagueDetail[]): void => {
    details.forEach((detail) => {
      detail.wyniki = detail.result.map((result) => (result >= 5 ? (result > 5 ? 2 : 1) : 0));
    });
  };

  const updateDetails = (details: LeagueDetail[]) => {
    return details
      .map((detail) => {
        const gamesNumber = detail.result.length;
        const winMatches = calculateSum(detail.result.map(Number));
        const lossMatches = gamesNumber * 10 - winMatches;
        const pkt = calculateSum(detail.wyniki);

        return {
          ...detail,
          gamesNumber: detail.result.length,
          pkt,
          winMatches,
          lossMatches,
        };
      })
      .sort((a, b) => b.pkt - a.pkt || b.winMatches - a.winMatches);
  };

  const calculateResult = (data: LeagueDetails[] | undefined): LeagueDetails[] => {
    if (!data) {
      return [];
    }

    data.forEach((leagueDetail) => {
      updateDetailsBasedOnResult(leagueDetail.details);
    });

    return data.map((leagueDetail) => ({
      ...leagueDetail,
      details: updateDetails(leagueDetail.details),
    }));
  };

  return { calculateResult };
}

export default useCalculateResult;
