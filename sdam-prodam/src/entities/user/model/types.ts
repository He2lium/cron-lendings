export interface UserSession {
  sid: string;
  last_activity: string;
  agent: string;
}

export interface User {
  _id: string;
  role: number;
  status: string;
  name?: string;
  avatar?: string;
  sessions: UserSession[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
