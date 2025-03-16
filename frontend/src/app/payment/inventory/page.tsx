'use client'

import {InventoryNavBar} from "@/app/payment/inventory_nav_bar/inventory_nav_bar";
import {NavBar} from "@/app/components/navbar/foodBar";
import {InventoryManagement} from "@/app/payment/inventory/InventoryManagement";

export default function InventoryPage() {
    return (
        <div className={"grid grid-cols-1 h-screen w-screen"}>
            <div className="max-h-fit">
                <NavBar />
                <InventoryNavBar />
            </div>
            <div className={"h-full p-5"}>
                <InventoryManagement />
            </div>
        </div>
    )
}