export type UserState = {
    firstName: string;
    lastName: string;
    email: string;
    token: string;
    remember: boolean;
}

export type ReduxType = {
    user : UserState
}