import * as React from "react";
import InventoryTable from "@/app/payment/inventory/components/InventoryTable";
import UsedIn from "@/app/payment/inventory/components/UsedInFragment";
import OrderWindow from "@/app/payment/inventory/components/OrderWindowFragment";

export function InventoryManagement() {
    const [open, setOpen] = React.useState(false);
    const [openOrder, setOpenOrder] = React.useState(false);
    const [id, setId] = React.useState(0);
    const handleOpen = (id: number) => { setOpen(true); setId(id); }
    const handleOpenOrder = (id: number) => { setOpenOrder(true); setId(id); }
    const handleClose = () => setOpen(false);
    const handleCloseOrder = () => setOpenOrder(false);

    return (<>
        <InventoryTable handleOpen={handleOpen} handleOpenOrder={handleOpenOrder}/>

        <div className={"hidden"}>
            <UsedIn open={open} handleClose={handleClose} id={id}/>
            <OrderWindow open={openOrder} id={id} handleClose={handleCloseOrder}/>
        </div>
    </>)
}