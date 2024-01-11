import { IStorage } from '@/core/domain/model/IStorage'
import { IToDoItem } from '@/core/domain/model/IToDoItem'
import { IToDoList } from '@/core/domain/model/IToDoList'
import { ISaveItemInToDoList } from '@/core/domain/usecases/ISaveItemInToDoList'

interface SaveItemInToDoListParams {
	list: IToDoList
	item: IToDoItem
	storage: IStorage
}
export class SaveItemInToDoList implements ISaveItemInToDoList {
	private item: IToDoItem
	private storage: IStorage

	constructor(params: SaveItemInToDoListParams) {
		this.item = params.item
		this.storage = params.storage
	}

	save(): void {
		const list = this.storage.get() as {items:any}
		this.storage.save([...list.items, this.item])
	}
}
