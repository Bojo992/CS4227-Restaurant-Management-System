import * as React from "react";
import {Button, Dialog, DialogContent, DialogTitle, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {v4 as uuidv4} from "uuid";

export function MakePaymentFragment({ handleClose, updateHistory, open }: {handleClose: () => void, updateHistory: (i: {amount: number; date: number; GUID: string}) => void, open: boolean}) {
    const [amount, setAmount] = React.useState<number | null>(null);

    React.useEffect(() => {
        try {
            const storedData = sessionStorage.getItem("paymentData");
            if (storedData) {
                const parsedData = JSON.parse(storedData!);
                setAmount(parsedData.price ?? 0);
            }
        } catch (error) {
            console.error("Invalid JSON in sessionStorage:", error);
            setAmount(0);
        }
    }, []);

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={() => {handleClose();}}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Provide details"}
                </DialogTitle>
                <DialogContent>
                    <div className="grid grid-cols-3">
                        <div className="col-span-3">
                            <TextField
                                id="outlined-number"
                                label="Amount"
                                type="number"
                                value={(amount) ? amount : 0}
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                style={
                                    {
                                        width: "100%",
                                        margin: "0.75rem",
                                    }
                                }
                                onChange={(e) => {
                                    e.preventDefault();
                                    setAmount(Number(e.target.value));
                                }
                                }
                            />
                        </div>

                        <div className="col-span-3">
                            <TextField
                                id="outlined-number"
                                label="Card"
                                placeholder="4111 1111 1111 1111"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                style={
                                    {
                                        width: "100%",
                                        margin: "0.75rem",
                                    }
                                }
                            />
                        </div>
                        <div className="col-span-3 w-full">
                            <TextField
                                id="outlined-number"
                                label="Name on the card"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                placeholder="Jone Doe"
                                style={
                                    {
                                        width: "100%",
                                        margin: "0.75rem",
                                    }
                                }
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-number"
                                label="CVC"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                placeholder="111"
                                style={
                                    {
                                        width: "100%",
                                        margin: "0.75rem",
                                    }
                                }
                            />
                        </div>
                        <div></div>
                        <div className={"w-fit"}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker views={['month', 'year']}/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <Button onClick={
                            (e) => {
                                e.preventDefault(); sessionStorage.removeItem("paymentData"); handleClose();
                            }
                        }>
                            Cancel
                        </Button>
                        <div></div>
                        <Button onClick={
                            (e) => {
                                e.preventDefault();
                                if (amount) {
                                    sessionStorage.removeItem("paymentData");
                                    handleClose();
                                    updateHistory({amount: amount, date: Date.now(), GUID: uuidv4()});
                                }
                            }
                        }>
                            Pay
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}