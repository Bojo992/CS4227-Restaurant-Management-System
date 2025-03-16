'use client'

import {InventoryNavBar} from "@/app/payment/inventory_nav_bar/inventory_nav_bar";
import {NavBar} from "@/app/components/navbar/foodBar";
import * as React from "react";
import {Button} from "@mui/material";
import {mock_payment_history} from "@/app/payment/mock_data/mock_analytics";
import {MakePaymentFragment} from "@/app/payment/payment/makePayment/makePayment";
import History from "@/app/payment/payment/history/history";

export default function PaymentPage() {
    const [open, setOpen] = React.useState(false);
    const [historyData, setHistoryData] = React.useState(mock_payment_history);

    React.useEffect(() => {
        const storedData = sessionStorage.getItem("paymentData");
        setOpen(!!storedData);
    }, []);


    const handleOpen = () => { setOpen(true); }
    const handleClose = () => setOpen(false);
    const updateHistory = (i : {amount: number; date: number; GUID: string}) => {let temp = ([{id: historyData.length, amount: i.amount, date: i.date, GUID: i.GUID}].concat(historyData)); setHistoryData(temp); };

    return (
        <>
            <div className={"grid grid-cols-1 h-screen w-screen"}>
                <div className="h-fit">
                    <NavBar />
                    <InventoryNavBar />
                    <div className={"bg-green-400 rounded w-fit h-fit m-4 text-background"}>
                        <Button onClick={(e) => { e.defaultPrevented; handleOpen()}}>Make Payment</Button>
                    </div>
                </div>
                <div className={"h-full p-5"}>
                    <History historyData={historyData}/>
                </div>
            </div>
            <div className={"hidden"}>
                <MakePaymentFragment handleClose={handleClose} updateHistory={updateHistory} open={open} />
            </div>
        </>
    )
}
