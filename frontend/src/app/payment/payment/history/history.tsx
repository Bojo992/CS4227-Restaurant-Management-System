import * as React from "react";
import {Paper, TablePagination} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

export default function History({historyData} : {historyData: {id: number; amount: number; date: number; GUID: string}[]}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'auto' }} className={"max-h-min"}>
                <TableContainer sx={{ maxHeight: "600px" }}>
                    {/*<Table stickyHeader aria-label="sticky table">*/}
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align={"left"}>Amount paid</TableCell>
                                <TableCell align={"left"}>Date</TableCell>
                                <TableCell align={"left"}>External reference</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {historyData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={row.id}>
                                            <TableCell align={"left"}>{row.amount}</TableCell>
                                            <TableCell align={"left"}>{new Date(row.date).toLocaleDateString(undefined, options).toString()}</TableCell>
                                            <TableCell align={"left"}>{row.GUID}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={historyData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}