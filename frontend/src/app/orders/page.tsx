'use client'

import { useRouter } from "next/navigation";
import { NavBar } from "../components/navbar/foodBar";
import { Button } from "@mui/material";

export default function OrderPage() {
    return (
        <div>
            <NavBar />
            <OrderNav />
        </div>
    )
}

export function OrderNav() {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-row justify-between p-3">

                <Button variant="contained" onClick={() => router.push('/orders/chef')}>Chef Page</Button>
                <Button variant="contained" onClick={() => router.push('/orders/waiter')}>Waiter Page</Button>

            </div>
        </>
    )
}