/* eslint-disable @typescript-eslint/no-explicit-any */
import { IStorage } from '@/core/domain/model/IStorage'

interface TestStorageParams {
	storage: any[]
}

export class TestStorage implements IStorage {
	storage: any[]

	constructor(params: TestStorageParams) {
		this.storage = params.storage
	}

	save(element: unknown): void {
		this.storage = element as []
	}
}
