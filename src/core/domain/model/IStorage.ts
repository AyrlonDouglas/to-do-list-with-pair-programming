export interface IStorage<T = unknown> {
	save: (element: unknown) => void
	get: () => T
}
