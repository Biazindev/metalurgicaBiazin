import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/users/Biazindev/',
    }),
    endpoints: (builder) => ({
        getRepos: builder.query<Repo[], number>({
            query: (page = 1) => `repos?per_page=100&page=${page}`,
            serializeQueryArgs: ({ endpointName }) => endpointName,
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
            },
            forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
        }),
    }),
})

export const { useGetReposQuery } = api
export default api
