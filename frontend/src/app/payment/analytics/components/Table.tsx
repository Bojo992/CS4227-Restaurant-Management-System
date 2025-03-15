import * as React from "react";
import {Paper, TablePagination} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {mock_analytics} from "@/app/payment/mock_data/mock_analytics";

export function PlainTable({ setValues, setFocusedName }: { setValues: React.Dispatch<React.SetStateAction<any[]>>, setFocusedName: React.Dispatch<React.SetStateAction<string>> }) {
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }} className={"h-fit"}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"left"}>Name</TableCell>
                            <TableCell align={"left"}>Price</TableCell>
                            <TableCell align={"left"}>Currency</TableCell>
                            <TableCell align={"left"}>Current Stock</TableCell>
                            <TableCell align={"left"}>Sold</TableCell>
                            <TableCell align={"left"}>Focus</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mock_analytics
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.id}>
                                        <TableCell align={"left"}>{row.name}</TableCell>
                                        <TableCell align={"left"}>{row.price}</TableCell>
                                        <TableCell align={"left"}>{row.currency}</TableCell>
                                        <TableCell align={"left"}>{row.current_inventory}</TableCell>
                                        <TableCell align={"left"}>{row.amount_sold}</TableCell>
                                        <TableCell align={"left"}>
                                            <form onSubmit={(e) => {e.preventDefault();focusOnItem(row, setValues, setFocusedName);}}>
                                                <button className={"p-2 bg-gray-200 rounded"} type="submit">Focus</button>
                                            </form>
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
                count={mock_analytics.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

function focusOnItem(item: any, setValues: React.Dispatch<React.SetStateAction<any[]>>, setFocusedName: React.Dispatch<React.SetStateAction<string>>) {
    let totalSails = new Map<number, number>();
    let totalSpend = new Map<number, number>();

    item.sold_dates.forEach((sold_date: {date:number, amount_sold: number}) => {
        if (totalSails.get(sold_date.date) === undefined) {
            totalSails.set(sold_date.date, item.price * sold_date.amount_sold);
            totalSpend.set(sold_date.date, item.price_to_buy * sold_date.amount_sold);
        } else {
            let temp = totalSails.get(sold_date.date)! + item.price * sold_date.amount_sold;
            let temp1 = totalSpend.get(sold_date.date)! + item.price_to_buy * sold_date.amount_sold;
            totalSails.set(sold_date.date, temp);
            totalSpend.set(sold_date.date, temp1);
        }
    })

    let temp: {date: Date, sold: number, spend: number, profit: number}[] = [];
    let result: {date: string, sold: number, spend: number, profit: number}[] = [];

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    for (let i of totalSails.keys()) {

        temp.push({date: new Date(i), sold: totalSails.get(i)!, spend: totalSpend.get(i)!, profit: (totalSails.get(i)! - totalSpend.get(i)!)})
    }

    temp.sort((a, b) => a.date.getTime() - b.date.getTime());

    temp.forEach(s => {result.push({date: s.date.toLocaleDateString(undefined, options), sold: s.sold, spend: s.spend, profit: s.profit})});

    setValues(result);
    setFocusedName(item.name);

    return undefined;
}
