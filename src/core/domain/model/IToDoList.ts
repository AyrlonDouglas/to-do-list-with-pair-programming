import { IToDoItem } from './IToDoItem'

export interface IToDoList {
	items: IToDoItem[]
	add: (item: IToDoItem) => void
	delete: (item: IToDoItem) => void
}
