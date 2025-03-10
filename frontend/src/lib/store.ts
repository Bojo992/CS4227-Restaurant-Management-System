import { configureStore } from '@reduxjs/toolkit'
import staffReducer from "@/lib/features/manage/reducer";

export const makeStore = () => {
    return configureStore({
        reducer: {staff: staffReducer}
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']