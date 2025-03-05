'use client'

import {InventoryNavBar} from "@/app/payment/inventory_nav_bar/inventory_nav_bar";
import {NavBar} from "@/app/components/navbar/foodBar";
import {AnalyticsTable} from "@/app/payment/analytics/AnalyticsTable";

export default function AnalyticsPage() {
    return (
        <>
            <div>
                <NavBar />
                <InventoryNavBar />
            </div>

            <div>
                <AnalyticsTable/>
            </div>
        </>
    )
}