import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import linkReduces from './slice/linkSlice'

const persistConfig = {
	key: 'root',
	storage
}

const rootReduces = combineReducers({
	links: linkReduces
})

const persistedReduces = persistReducer(persistConfig, rootReduces)

export const store = configureStore({
	reducer: persistedReduces,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persistor = persistStore(store)
