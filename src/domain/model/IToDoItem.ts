import { IId } from "./IId"

export interface IToDoItem {
    id: IId
    name: string
    done: boolean
    createdAt: Date
    updatedAt: Date
}