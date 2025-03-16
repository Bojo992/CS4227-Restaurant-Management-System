import {useRouter} from "next/navigation";
import * as React from "react";
import {Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {mock_inventory} from "@/app/payment/mock_data/mock_analytics";
import {UsedInProps} from "@/app/payment/inventory/components/utils";

export default function OrderWindow({ open, id, handleClose }: UsedInProps) {
    const router = useRouter();
    const [price, setPrice] = React.useState(0);
    return (
        <>
            <React.Fragment>
                <Button variant="outlined" onClick={() => {setPrice(0); handleClose();}}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={() => {setPrice(0); handleClose();}}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Order"}
                    </DialogTitle>
                    <DialogContent>
                        <div className={"m-2"}>
                            <TextField
                                id="outlined-number"
                                label="Kg"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                onChange={(e) => {e.preventDefault(); setPrice(+e.currentTarget.value)}}
                            />
                        </div>
                        <div className={"p-2 m-3"}>
                            Total: {(price * mock_inventory[id].ingredient_cost).toFixed(2)} {mock_inventory[id].currency}
                        </div>
                        <div className={"bg-green-400 rounded w-fit"}>
                            <Button onClick={() => {
                                if (price > 0) {
                                    sessionStorage.setItem("paymentData", JSON.stringify({
                                        price: (price * mock_inventory[id].ingredient_cost),
                                        currency: mock_inventory[id].currency
                                    }));
                                    setPrice(0);
                                    handleClose();
                                    router.push('/payment/payment');
                                }
                            }}>Pay</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        </>
    );
}