import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_BASE_URL } from '../../config'

export const createShortLink = createAsyncThunk('links/createShortLink', async url => {
	const response = await fetch(API_BASE_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: `url=${url}`
	})
	console.log(response.json())
	return await response.json()
})

const initialState = {
	items: [],
	loading: 'idle'
}

const linkSlice = createSlice({
	name: 'links',
	initialState,
	extraReducers: builder => {
		builder.addCase(createShortLink.pending, state => {
			state.loading = 'loading'
		})
		builder.addCase(createShortLink.fulfilled, (state, action) => {
			const { result_url } = action.payload
			console.log(action.payload)
			if (result_url) {
				state.items.push(result_url)
				state.loading = 'idle'
			} else {
				state.loading = 'error'
			}
		})
		builder.addCase(createShortLink.rejected, state => {
			state.loading = 'rejected'
		})
	}
})

export default linkSlice.reducer
