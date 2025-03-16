import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {mock_inventory} from "@/app/payment/mock_data/mock_analytics";
import {Button, Paper, TablePagination} from "@mui/material";
import * as React from "react";
import {UsedAmountConverter, UsedInInventoryTable} from "@/app/payment/inventory/components/utils";

export default function InventoryTable({handleOpen, handleOpenOrder}: UsedInInventoryTable) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'auto' }} className={"max-h-min"}>
            <TableContainer sx={{ maxHeight: "600px" }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Name</TableCell>
                            <TableCell align={"left"}>Current Inventory</TableCell>
                            <TableCell align={"left"}>Ingredient Cost (1 kg)</TableCell>
                            <TableCell align={"left"}>Currency</TableCell>
                            <TableCell align={"left"}>Used in</TableCell>
                            <TableCell align={"left"}>Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mock_inventory
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.id}>
                                        <TableCell align={"left"}>{row.name}</TableCell>
                                        <TableCell align={"left"}>{UsedAmountConverter(row.current_inventory)}</TableCell>
                                        <TableCell align={"left"}>{row.ingredient_cost}</TableCell>
                                        <TableCell align={"left"}>{row.currency}</TableCell>
                                        <TableCell align={"left"}>
                                            <div className={"bg-gray-200 rounded w-fit"}>
                                                <Button onClick={() => { handleOpen(row.id); }}>Items List</Button>
                                            </div>
                                        </TableCell>
                                        <TableCell align={"left"}>
                                            <div className={"bg-gray-200 rounded w-fit"}>
                                                <Button onClick={() => { handleOpenOrder(row.id); }}>Order</Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={mock_inventory.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}