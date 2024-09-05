import { configureStore } from "@reduxjs/toolkit"

import modalReducer from "./modal"
import githubApi from '../../services/githubApi'
import vercelApi from '../../services/vercelApi'

export const store = configureStore({
    reducer: {
        modal: modalReducer, 
        [githubApi.reducerPath]: githubApi.reducer,
        [vercelApi.reducerPath]: vercelApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(githubApi.middleware)
            .concat(vercelApi.middleware),
})
