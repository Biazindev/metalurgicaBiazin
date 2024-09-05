import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const vercelApi = createApi({
    reducerPath: 'vercelApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.vercel.com/',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ef7YvVmF8xQtChijzRi6bpwZ`)
            return headers
        },
    }),
    endpoints: (builder) => ({
        getDeployments: builder.query<VercelProjects, void>({
            query: () => `v6/projects`,
        }),
    }),
})

export const { useGetDeploymentsQuery } = vercelApi
export default vercelApi
