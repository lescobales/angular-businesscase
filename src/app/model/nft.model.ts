import {Value, ValueHttp} from "./value.model"

export interface Nft {
	id: number
	token: string
	title: string
	initialPrice: number
	createdAt: Date
	representation?: string
	values: Value[]

}
export interface NftHttp {
	id: number
	token: string
	title: string
	initialPrice: number
	createdAt: string
	representation?: string
	nftValues: ValueHttp[]
}

export namespace Nft {
	export function nftFromHttp(nftHttp: NftHttp): Nft {
		return {
			id: nftHttp.id,
			token: nftHttp.token,
			title: nftHttp.title,
			initialPrice: nftHttp.initialPrice,
			createdAt: new Date(nftHttp.createdAt),
			representation: nftHttp.representation,
			values: nftHttp.nftValues.map(valueHttp => Value.valueFromHttp(valueHttp))
		}
	}
}
