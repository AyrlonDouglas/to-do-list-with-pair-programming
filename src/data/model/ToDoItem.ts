import { IToDoItem } from "@/domain/model/IToDoItem";
import Id from "./Id";
import { IId } from "@/domain/model/IId";

interface ToDoItemParams {    
    name: string;
    done: boolean;
    createdAt: Date;
}
export class ToDoItem implements IToDoItem {
    readonly name: string;
    readonly createdAt: Date;
    done: boolean;
    readonly id: IId;

    constructor(params: ToDoItemParams) {
        this.name = params.name
        this.done = params.done
        this.createdAt = params.createdAt
        this.id = new Id()
    }
}