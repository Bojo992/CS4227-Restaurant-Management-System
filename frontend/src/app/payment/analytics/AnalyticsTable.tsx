import * as React from 'react';
import {graphData, mock_analytics} from "@/app/payment/mock_data/mock_analytics";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useState} from "react";

let data = mock_analytics;

export function AnalyticsTable() {
    const [values, setValues] = useState(graphData);

    return (
        <>
            <div className="grid grid-cols-2 gap-x-4 p-3 justify-around h-full w-full">
                <div className="w-full h-3/4 bg-gray-100 rounded-lg">
                    <Graph values={values} />

                    <form onSubmit={(e) => {e.preventDefault(); setValues(graphData);}}>
                        <button className={"p-2 bg-gray-200 rounded"} type="submit">Reset</button>
                    </form>
                </div>

                <div className="h-full">
                    <PlainTable setValues={setValues} />
                </div>
            </div>
        </>
    )

}

function focusOnItem(item: any, setValues: React.Dispatch<React.SetStateAction<any[]>>) {
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
    return undefined;
}

function Graph({ values }: { values: any[] }) {
    return(
        // <ResponsiveContainer height="100%" width="100%">
        <ResponsiveContainer className="p-5">
            <LineChart data={values} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" orientation="left" />
                <Tooltip labelStyle={{color: 'gray'}} isAnimationActive={true}/>
                <Legend />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="sold"
                    stroke="#E8DA4FFF"
                    activeDot={{ r: 8 }}
                />
                <Line yAxisId="left" type="monotone" dataKey="spend" stroke="#B82D2DFF" />
                <Line yAxisId="left" type="monotone" dataKey="profit" stroke="#57D553FF" />
            </LineChart>
        </ResponsiveContainer>
    )
}

function PlainTable({ setValues }: { setValues: React.Dispatch<React.SetStateAction<any[]>> }) {
    return (
        <>
            <TableContainer className="bg-gray-100 max-h-fit">
                <Table>
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
                        { data.map((row) => (
                            <TableRow id={row.id.toString()} key={(row.id + 1).toString()}>
                                <TableCell align={"left"}>{row.name}</TableCell>
                                <TableCell align={"left"}>{row.price}</TableCell>
                                <TableCell align={"left"}>{row.currency}</TableCell>
                                <TableCell align={"left"}>{row.current_inventory}</TableCell>
                                <TableCell align={"left"}>{row.amount_sold}</TableCell>
                                <TableCell align={"left"}>
                                    <form onSubmit={(e) => {e.preventDefault();focusOnItem(row, setValues);}}>
                                        <button className={"p-2 bg-gray-200 rounded"} type="submit">Focus</button>
                                    </form>
                                </TableCell>
                            </TableRow>
                        ))

                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}