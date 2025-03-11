import {SetStateAction, useState} from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {deleteMenuItem} from "@/lib/features/manage/menuReducer";
import {RootState} from "@/lib/store";

export default function MenuTable() {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);
    const menu = useSelector((state: RootState) => state.menu.menu);

    const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleOnDelete = (name: string) => {
        dispatch(deleteMenuItem(name));
    }

    return (
        <Paper  sx={{ width: "100%", overflow: "hidden", marginTop: 2 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Cost</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menu
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: { name: string; img: string | null; price: string; cost: string, quantity: string }) => (
                                <TableRow key={row.name}>
                                    <TableCell>{row.name}</TableCell>
                                    {/* @ts-ignore */}
                                    <TableCell><img src={row.img}  alt="None"/></TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.cost}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell><Button color="error" onClick={() => handleOnDelete(row.name)}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[3, 5, 10]}
                component="div"
                count={menu.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}