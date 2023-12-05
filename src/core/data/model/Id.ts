import { v4 as uuidv4, validate } from 'uuid'
import { IId } from '@/core/domain/model/IId'

export default class Id implements IId {
	constructor(readonly value: string = uuidv4()) {
		if (!validate(value)) throw new Error('Id Invalid')
	}
}
