'use client'

import {InventoryNavBar} from "@/app/payment/inventory_nav_bar/inventory_nav_bar";
import {NavBar} from "@/app/components/navbar/foodBar";
import {AnalyticsTable} from "@/app/payment/analytics/AnalyticsTable";

export default function AnalyticsPage() {
    return (
        <div className={"grid grid-cols-1 h-screen w-screen"}>
            <div className="max-h-fit">
                <NavBar />
                <InventoryNavBar />
            </div>

            <div className={"h-full p-5"}>
                <AnalyticsTable/>
            </div>
        </div>
    )
}