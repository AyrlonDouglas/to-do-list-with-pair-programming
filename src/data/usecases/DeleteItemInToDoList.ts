import { IStorage } from '@/domain/model/IStorage'
import { IToDoItem } from '@/domain/model/IToDoItem'
import { IToDoList } from '@/domain/model/IToDoList'
import { IDeleteItemInToDoList } from '@/domain/usecases/IDeleteItemInToDoList'

interface DeleteItemInToDoListParams {
	list: IToDoList
	item: IToDoItem
	storage: IStorage
}

export class DeleteItemToDoList implements IDeleteItemInToDoList {
	private list: IToDoList
	private item: IToDoItem
	private storage: IStorage

	constructor(params: DeleteItemInToDoListParams) {
		this.list = params.list
		this.item = params.item
		this.storage = params.storage
	}

	delete(): void {
		this.list.delete(this.item)
		this.storage.save(this.list.items)
	}
}
