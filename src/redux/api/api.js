// Import the RTK Query methods from the React-specific entry point
import { server_url } from '@/base_url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
 
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products'
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/${category}`
    }),
  })
})


export const { useGetProductsQuery,useGetProductsByCategoryQuery } = apiSlice