/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Meal {
  id: number;
  name: string;
  description: string;
  photo: string;
  profile: { 
    id: number;
    name: string;
    photo: string;
  };
  profileId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
