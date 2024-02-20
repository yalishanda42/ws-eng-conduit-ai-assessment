export interface IUserData {
  bio: string;
  email: string;
  image?: string;
  token: string;
  username: string;
}

export interface IUserRO {
  user: IUserData;
}

export interface IUserStatsRO {
  username: string;
  email: string;
  bio: string;
  image?: string;
  followingCount: number;
  followersCount: number;
  articlesCount: number;
}
