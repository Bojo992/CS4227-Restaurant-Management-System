import * as React from "react";
import {Button, Dialog, DialogContent, DialogTitle, Paper} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {mock_inventory} from "@/app/payment/mock_data/mock_analytics";
import {UsedInProps} from "@/app/payment/inventory/components/utils";

export default function UsedIn({ open, id, handleClose }: UsedInProps) {
    let count = 0;
    return (
        <>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClose}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <Paper>
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align={"left"}>Name</TableCell>
                                            <TableCell align={"left"}>Amount Used</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {mock_inventory[id].usedIn
                                            // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row) => {
                                                return (
                                                    <TableRow hover tabIndex={-1} key={count++}>
                                                        <TableCell align={"left"}>{row.item_name}</TableCell>
                                                        <TableCell align={"left"}>{row.amount_used} g</TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        </>
    );
}