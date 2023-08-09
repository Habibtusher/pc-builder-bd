import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api'
import  pcReducer  from './api/pcSlice'

export default configureStore({
  reducer: {
   
    [apiSlice.reducerPath]: apiSlice.reducer,
    pc: pcReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})