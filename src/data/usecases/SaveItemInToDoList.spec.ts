import { ToDoItem } from "../model/ToDoItem"
import { ToDoList } from "../model/ToDoList"
import { TestStorage } from "../test/TestStorage"
import { SaveItemInToDoList } from "./SaveItemInToDoList"


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

    const sut = new SaveItemInToDoList({
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

describe('SaveItemInToDoList', () => {
    test('Should add list updated with new item in storage', () => {
        const { newItem, list, storage } = makeSut()

        const sut = new SaveItemInToDoList({
            item: newItem,
            list,
            storage
        })

        sut.save()

        expect(list.items).not.toEqual(storage.storage)
        expect(storage.storage).toContain(newItem)
    })
})