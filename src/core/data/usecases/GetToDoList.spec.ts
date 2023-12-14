import { TestStorage } from '../test/TestStorage'
import { GetToDoList } from './GetToDoList'

const makeSut = () => {
  const storage = new TestStorage({ storage: [] })

  const sut = new GetToDoList({
    storage
  })
  return {
    sut,
    storage,
  }
}

describe('GetToDoList', () => {
  test('Should return empty array', () => {
    const { sut } = makeSut()
    const result = sut.get()
    expect(result).toEqual([])
  })
})
