'use client'

import {useRouter} from "next/navigation"

export default function OrderPage() {
    const router = useRouter();
    return (
        <div>
            <h1>Order Page</h1>
            <ul>
                <li>
                    <button onClick={() => router.push('/orders/chef')}>Chef</button>
                </li>
                <li>
                    <button onClick={() => router.push('/orders/waiter')}>Waiter</button>
                </li>
            </ul>
        </div>
    )
}