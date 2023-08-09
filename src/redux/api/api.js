// Import the RTK Query methods from the React-specific entry point
import { server_url } from '@/base_url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: server_url }),
 
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/all-products'
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/${category}`
    }),
    getProductsById: builder.query({
      query: (id) => `/product/${id}`
    }),
    getCategories: builder.query({
      query: (id) => `/categories`
    }),
  })
})


export const { useGetProductsQuery,useGetProductsByCategoryQuery,useGetProductsByIdQuery,useGetCategoriesQuery } = apiSlice