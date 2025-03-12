'use client'

import {useRouter} from "next/navigation";
import {Button} from "@mui/material";

export function FoodBar(){
    return (
        <>
            {isStaffHighLevel() ? <ManageButton /> : <></>}
        </>
    )
}

export function NavBar() {
    const router = useRouter();

    return (
        <div className={"flex flex-row justify-between p-3 bg-gray-300"}>
            <Button variant="contained" onClick={() => router.push('/login')}>
                Login
            </Button>
            <Button variant="contained" onClick={() => router.push('/menu')}>
                Menu
            </Button>
            <Button variant="contained" onClick={() => router.push('/orders')}>
                Orders
            </Button>
            {isStaffHighLevel() ?
                <Button variant="contained" onClick={() => router.push('/manage')}>
                    Manage
                </Button>
                : <></>}


        </div>
    )
}

export function isStaffHighLevel() {
    return true;
}

export function ManageButton() {
    const router = useRouter();

    return (
        <div>
           <button onClick={() => router.push('/manage')}>
               Manage
           </button>
        </div>
    )
}