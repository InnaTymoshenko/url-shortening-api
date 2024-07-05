import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_BASE_URL, CORS_URL } from '../../config'

export const createShortLink = createAsyncThunk('links/createShortLink', async (url, thunkAPI) => {
	try {
		const response = await fetch(CORS_URL + API_BASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				url: url
			})
		})
		return await response.json()
	} catch (error) {
		return thunkAPI.rejectWithValue(error)
	}
})

const initialState = {
	items: [],
	shorten: '',
	url: '',
	loading: 'idle'
}

const linkSlice = createSlice({
	name: 'links',
	initialState,
	reducers: {
		addLink: (state, action) => {
			state.url = action.payload
		},
		createShorten: (state, action) => {
			state.items.push(action.payload)
			state.url = ''
			state.shorten = ''
		}
	},
	extraReducers: builder => {
		builder.addCase(createShortLink.pending, state => {
			state.loading = 'loading'
		})
		builder.addCase(createShortLink.fulfilled, (state, action) => {
			const { result_url } = action.payload
			if (result_url) {
				state.shorten = result_url
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

export const { addLink, createShorten } = linkSlice.actions

export const selectLoading = state => state.links.loading

export const selectItems = state => state.links.items

export const selectUrl = state => state.links.url

export const selectShorten = state => state.links.shorten

export default linkSlice.reducer
