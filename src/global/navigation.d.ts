import { Standings } from "../types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Leagues: undefined;
      Render: Standings, id: number;
      Standings: { id: number };
      Players: { id: number };
    }
  }
}
