import { IStorage } from "@/domain/model/IStorage";
import { IToDoItem } from "@/domain/model/IToDoItem";
import { IToDoList } from "@/domain/model/IToDoList";
import { IEditItemInToDoList } from "@/domain/usecases/IEditItemInToDoList";

export class EditItemInToDoList implements IEditItemInToDoList {
    list: IToDoList
    item: IToDoItem
    storage: IStorage

    constructor(params: EditItemInToDoListParams) {
        this.list = params.list
        this.item = params.item
        this.storage = params.storage
    }

    edit(): void {
        const itemToEdit = this.list.items
            .find((itemInList) => itemInList.id.value === this.item.id.value)
        if (itemToEdit) {
            itemToEdit.name = this.item.name
            itemToEdit.done = this.item.done
            itemToEdit.updatedAt = new Date()
        } else {
            throw new Error('Elemento não encontrado!')
        }
        this.storage.save(this.list.items)
    }
}

interface EditItemInToDoListParams {
    list: IToDoList
    item: IToDoItem
    storage: IStorage
}