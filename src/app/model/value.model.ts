export interface Value {
	id: number
	weight: number
	createdAt: Date
}

export interface ValueHttp {
	id: number
	weight: number
	createdAt: string
}

export namespace Value {
	export function valueFromHttp(httpValue: ValueHttp): Value {
		return {
			id: httpValue.id,
			weight: httpValue.weight / 10,
			createdAt: new Date(httpValue.createdAt)
		}
	}
}
