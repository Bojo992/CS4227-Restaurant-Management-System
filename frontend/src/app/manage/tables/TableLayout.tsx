import {useState} from "react";
import {Button} from "@mui/material";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/lib/store";
import {addTable, deleteTable, clearTables} from "@/lib/features/manage/tableReducer";

export default function TableLayout() {
    const dispatch = useDispatch();
    const tables = useSelector((state: RootState) => state.table.tables);

    const [tableId, setTableId] = useState(1);

    const handleAddTable = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newTable = {
            id: tableId,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        setTableId(tableId + 1);
        dispatch(addTable(newTable));
    };

    const handleDeleteTable = (id: number) => {
        dispatch(deleteTable(id));
    }

    return (
        <div className={"h-screen"}>
            <div className={"flex"}>

                <Button variant="outlined" className="" onClick={() => dispatch(clearTables())}>Reset</Button>
                <div className={"flex flex-row items-center"}>
                    <div>Table Id:</div>
                    <input type="number" className={"text-black"} value={tableId} onChange={(e) => {
                        setTableId(Number(e.target.value))
                    }}></input>
                </div>
            </div>

            <div className="relative w-full h-3/4 bg-gray-100" onClick={handleAddTable}>
                {tables.map((table) => (
                    // @ts-ignore
                    <motion.div key={table.id} style={{top: table.y - 24, left: table.x - 24}}
                                className="absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                                initial={{scale: 0}}
                                animate={{scale: 1}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // @ts-ignore
                                    handleDeleteTable(table.id);
                                }}
                    >
                        {/*@ts-ignore*/}
                        {table.id}
                    </motion.div>
                ))}
            </div>
        </div>

    );
}