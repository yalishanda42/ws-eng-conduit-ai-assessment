export interface RosterUser {
  username: string;
  email: string;
  bio: string;
  image: string;
  articlesCount: number;
  followersCount: number;
  followedCount: number;
}

export interface Roster {
  users: RosterUser[];
}
