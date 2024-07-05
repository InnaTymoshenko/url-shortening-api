import { v4 as uuidv4 } from 'uuid'

export const createShortenLink = (data, url) => {
	return {
		original: url,
		shorten: data,
		id: uuidv4()
	}
}
