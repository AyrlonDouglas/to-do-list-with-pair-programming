/* eslint-disable @typescript-eslint/no-explicit-any */
import { IStorage } from '@/core/domain/model/IStorage'

interface TestStorageParams {
	storage: any[]
}

export class TestStorage implements IStorage<any> {
	storage: any[]

	constructor(params: TestStorageParams) {
		this.storage = params.storage
	}

	get(): any {
		return [] // AJUSTAR DEPOIS
	}

	save(element: unknown): void {
		this.storage = element as []
	}


}
