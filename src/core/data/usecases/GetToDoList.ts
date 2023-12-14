import { IStorage } from "@/core/domain/model/IStorage";
import { IToDoList } from "@/core/domain/model/IToDoList";
import { IGetToDoList } from "@/core/domain/usecases/IGetToDoList";

export class GetToDoList implements IGetToDoList {
  private storage: IStorage<IToDoList>

  constructor(params: { storage: IStorage<IToDoList> }) {
    this.storage = params.storage
  }

  get(): IToDoList {
    return this.storage.get()
  }
}