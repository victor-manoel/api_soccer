export interface Standings {
  all: Data;
  away: Data;
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: Data;
  points: number;
  rank: number;
  status: string;
  team: Team;
  update: string;
}

type Data = {
  draw: number;
  goals: Goals;
  lose: number;
  played: number;
  win: number;
};

type Goals = {
  against: number;
  for: number;
};

type Team = {
  id: number;
  logo: string;
  name: string;
};
