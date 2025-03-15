import {useRouter} from "next/navigation";
import {Button} from "@mui/material";

export function InventoryNavBar() {
    const router = useRouter();

    return (
        <>
            <div className={"flex flex-row justify-between p-3 bg-orange-300"}>
                <Button variant="contained" onClick={() => router.push('/payment/inventory')}>Manage Inventory</Button>
                <Button variant="contained" onClick={() => router.push('/payment/analytics')}>Manage Analytics</Button>
                <Button variant="contained" onClick={() => router.push('/payment/payment')}>Make a Payment</Button>
            </div>

        </>
    )
}