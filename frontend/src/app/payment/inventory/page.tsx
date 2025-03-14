'use client'

import {InventoryNavBar} from "@/app/payment/inventory_nav_bar/inventory_nav_bar";
import {NavBar} from "@/app/components/navbar/foodBar";
import {InventoryManagement} from "@/app/payment/inventory/InventoryManagement";

export default function InventoryPage() {
    return (
        <div>
            <NavBar />
            <InventoryNavBar />
            <InventoryManagement/>
        </div>
    )
}