import * as React from 'react';
import {graphData} from "@/app/payment/mock_data/mock_analytics";
import {useState} from "react";
import {PlainTable} from "@/app/payment/analytics/components/Table";
import {Graph} from "@/app/payment/analytics/components/Graph";

export function AnalyticsTable() {
    const [values, setValues] = useState(graphData);
    const [focusedName, setFocusedName] = useState<string>("");

    return (
        <>
            <div className="grid grid-cols-2 gap-x-4 p-3 justify-around h-full w-full">
                <div className="w-full h-3/4 bg-gray-100 rounded-lg">
                    <Graph values={values} />

                    <div className={"flex flex-wrap justify-around w-full m-5"}>
                        <form onSubmit={(e) => {e.preventDefault(); setValues(graphData); setFocusedName("All")}}>
                            <button className={"p-2 bg-gray-200 rounded"} type="submit">Reset</button>
                        </form>
                        <div>
                            {focusedName ? `Focused on: ${focusedName}` : "All"}
                        </div>
                    </div>
                </div>

                <div className="h-full">
                    <PlainTable setValues={setValues} setFocusedName={setFocusedName} />
                </div>
            </div>
        </>
    )

}

