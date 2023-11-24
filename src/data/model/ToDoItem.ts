import { IToDoItem } from "@/domain/model/IToDoItem";
import Id from "./Id";
import { IId } from "@/domain/model/IId";

interface ToDoItemParams {
    name: string;
    done: boolean;
}
export class ToDoItem implements IToDoItem {
    readonly id: IId;
    readonly createdAt: Date;
    updatedAt: Date;
    name: string;
    done: boolean;

    constructor(params: ToDoItemParams) {
        this.name = params.name
        this.done = params.done
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.id = new Id()
    }
}