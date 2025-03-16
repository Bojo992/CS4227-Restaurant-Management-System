import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import * as React from "react";

export function Graph({ values }: { values: any[] }) {
    return(
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
