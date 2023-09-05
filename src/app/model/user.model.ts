export interface User {
	id: number
	email: string
	password?: string
	firstname?: string
	lastname?: string
	birthdate?: Date
	avatar?: string
	createdat?: Date
	ismale?: boolean
	pseudo: string
}

export interface UserHttp {
	email: string
	avatar: string
	pseudo: string
}

export namespace User {
	export function userFromHttp(userHttp: UserHttp) {
		return {
			email: userHttp.email,
			avatar: userHttp.avatar,
			pseudo: userHttp.pseudo
		}
	}
}
