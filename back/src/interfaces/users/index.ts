export interface IUserRequest {
    name: string
    email: string
    password: string
    phone: string
}

export interface IUser {
    id: string
    name: string
    email: string
    phone : string
    createdAt: Date
}

export interface IUserResponse {
    id: string
    name: string
    email: string
    phone : string
    createdAt: Date
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string | undefined
    email?: string | undefined
    password?: string | undefined
}