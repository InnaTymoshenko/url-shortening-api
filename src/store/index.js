import { configureStore } from '@reduxjs/toolkit'

import linkReduces from './slice/linkSlice'

export const store = configureStore({
	reducer: {
		links: linkReduces
	}
})
