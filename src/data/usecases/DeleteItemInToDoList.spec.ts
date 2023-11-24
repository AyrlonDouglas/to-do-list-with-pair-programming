import { ToDoItem } from "../model/ToDoItem"
import { ToDoList } from "../model/ToDoList"
import { TestStorage } from "../test/TestStorage"
import { DeleteItemToDoList } from "./DeleteItemInToDoList"


const makeSut = () => {
    const items: ToDoItem[] = [
        new ToDoItem({
            done: false,
            name: "teste"
        }),
        new ToDoItem({
            done: false,
            name: "test2"
        }),
    ]

    const list = new ToDoList({
        items
    })

    const newItem = new ToDoItem({
        done: false,
        name: "test3"
    })

    const storage = new TestStorage({ storage: [] })

    const sut = new DeleteItemToDoList({
        list,
        item: newItem,
        storage
    })

    return {
        newItem,
        list,
        sut,
        storage
    }
}

describe('DeleteItemInToDoList', () => {
    test('should throw error when dont found item in list', () => {
        const { sut, storage, newItem } = makeSut()
        const result = () => sut.delete()
        expect(result).toThrow('Elemento não encontrado!')
        expect(storage.storage).not.toContain(newItem)
    })

    test('should delete item of list when item found', () => {
        const { list, storage, } = makeSut()
        const olderList = [...list.items]
        const sut = new DeleteItemToDoList({ item: list.items[0], list, storage })
        sut.delete()
        expect(list.items).toEqual(storage.storage)
        expect(storage.storage).not.toContain(olderList[0])
    })
})
