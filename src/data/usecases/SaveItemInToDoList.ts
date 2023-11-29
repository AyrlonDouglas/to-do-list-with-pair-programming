import { IStorage } from '@/domain/model/IStorage'
import { IToDoItem } from '@/domain/model/IToDoItem'
import { IToDoList } from '@/domain/model/IToDoList'
import { ISaveItemInToDoList } from '@/domain/usecases/ISaveItemInToDoList'

interface SaveItemInToDoListParams {
	list: IToDoList
	item: IToDoItem
	storage: IStorage
}
export class SaveItemInToDoList implements ISaveItemInToDoList {
	private list: IToDoList
	private item: IToDoItem
	private storage: IStorage

	constructor(params: SaveItemInToDoListParams) {
		this.list = params.list
		this.item = params.item
		this.storage = params.storage
	}

	save(): void {
		this.list.add(this.item)
		this.storage.save([...this.list.items, this.item])
	}
}
