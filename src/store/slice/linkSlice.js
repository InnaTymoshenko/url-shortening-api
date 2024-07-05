import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_BASE_URL, API_KEY_URL } from '../../config'

export const createShortLink = createAsyncThunk('links/createShortLink', async (url, thunkAPI) => {
	try {
		const response = await fetch(`${API_BASE_URL}?apikey=${API_KEY_URL}&url=${url}=shrlc`)
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
			const { status_code, data } = action.payload
			console.log(data)
			if (status_code === '200') {
				state.shorten = data
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
