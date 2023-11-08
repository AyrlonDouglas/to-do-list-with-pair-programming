import { IToDoItem } from "@/domain/model/IToDoItem";
import { IToDoList } from "@/domain/model/IToDoList";

interface ToDoListParams {
    items: IToDoItem[]
}
export class ToDoList implements IToDoList {
    readonly items: IToDoItem[]

    constructor(params: ToDoListParams) {
        this.items = params.items
    }

    add(item: IToDoItem): void {
        this.items.push(item)
    }
}

