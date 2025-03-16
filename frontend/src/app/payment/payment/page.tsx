'use client'

import {InventoryNavBar} from "@/app/payment/inventory_nav_bar/inventory_nav_bar";
import {NavBar} from "@/app/components/navbar/foodBar";

export default function PaymentPage() {
    return (
        <div className={"grid grid-cols-1 h-screen w-screen"}>
            <div className="max-h-fit">
                <NavBar />
                <InventoryNavBar />
            </div>
            <div className={"h-full p-5"}>
            </div>
        </div>

    )
}