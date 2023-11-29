import { IToDoItem } from '@/domain/model/IToDoItem'
import { ToDoList } from '../model/ToDoList'
import { TestStorage } from '../test/TestStorage'
import { EditItemInToDoList } from './EditItemInToDoList'
import { ToDoItem } from '../model/ToDoItem'

const makeSut = () => {
	const storage = new TestStorage({ storage: [] })
	const itemInItems = new ToDoItem({ done: false, name: 'item3' })
	const itemOutItems = new ToDoItem({ done: false, name: 'item4' })
	const items: IToDoItem[] = [
		new ToDoItem({ done: false, name: 'item1' }),
		new ToDoItem({ done: false, name: 'item2' }),
		itemInItems,
	]
	const list = new ToDoList({ items })
	return {
		itemInItems,
		itemOutItems,
		list,
		storage,
	}
}

describe('EditItemInToDoList', () => {
	test('Should trhow error when item not found', () => {
		const { storage, list, itemOutItems } = makeSut()
		const sut = new EditItemInToDoList({
			storage,
			list,
			item: itemOutItems,
		})
		const result = () => sut.edit()
		expect(result).toThrow('Elemento não encontrado!')
		expect(storage.storage).not.toContain(itemOutItems)
	})

	test('Should edit item in list when item found', () => {
		const { storage, list, itemInItems } = makeSut()
		storage.save([])
		const itemCopy = { ...itemInItems }
		itemCopy.name = 'Item modificado'
		const sut = new EditItemInToDoList({
			storage,
			list,
			item: itemCopy,
		})
		sut.edit()
		expect(storage.storage).toEqual(list.items)
		expect(storage.storage).toContainEqual(itemCopy)
	})
})
