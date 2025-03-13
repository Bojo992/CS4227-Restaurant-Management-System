import { configureStore } from '@reduxjs/toolkit'
import staffReducer from "@/lib/features/manage/staffReducer";
import menuReducer from "@/lib/features/manage/menuReducer";
import tableReducer from "@/lib/features/manage/tableReducer";
import orderReducer from "@/lib/features/orders/orderReducer";
import chefReducer from "@/lib/features/orders/chefReducer";

export const makeStore = () => {
    return configureStore({
        reducer: {
            staff: staffReducer, 
            menu: menuReducer, 
            table: tableReducer,
            order: orderReducer,
            chef: chefReducer,},
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']