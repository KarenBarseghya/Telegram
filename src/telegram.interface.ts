export interface userInterface {
    name: string
    email: string
    height: number
    gender: string
}

export class UserData implements userInterface {
    name: string;
    email: string;
    height: number;
    gender: string;
}
  