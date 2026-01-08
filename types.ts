export interface IdeaResponse {
  title: string;
  description: string;
  vibe: string;
}

export enum GrantStatus {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
}
