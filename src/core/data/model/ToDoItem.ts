import { IToDoItem } from '@/core/domain/model/IToDoItem'
import Id from './Id'
import { IId } from '@/core/domain/model/IId'

interface ToDoItemParams {
  name: string
  done: boolean
  id?: IId
}
export class ToDoItem implements IToDoItem {
  readonly id: IId
  readonly createdAt: Date
  updatedAt: Date
  name: string
  done: boolean

  constructor(params: ToDoItemParams) {
    this.name = params.name
    this.done = params.done
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.id = params.id ?? new Id()
  }
}
