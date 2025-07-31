import { configureStore } from '@reduxjs/toolkit'
// ...
import  inputesReducer  from './features/admin/inputesSlice'

export const store = configureStore({
  reducer: {
    inputesData: inputesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
