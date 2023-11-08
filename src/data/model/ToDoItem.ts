import { IToDoItem } from "@/domain/model/IToDoItem";

interface ToDoItemParams {
    name: string;
    done: boolean;
    createdAt: Date;
}
export class ToDoItem implements IToDoItem {
    readonly name: string;
    readonly createdAt: Date;
    done: boolean;

    constructor(params: ToDoItemParams) {
        this.name = params.name
        this.done = params.done
        this.createdAt = params.createdAt
    }
}