'use client'

import Roster from "@/app/manage/staff/roster";
import NewStaffModal from "@/app/manage/staff/newStaffModal";
import {NavBar} from "@/app/components/navbar/foodBar";
import ManageNav from "@/app/manage/ManageNav";
import {useEffect} from "react";
import axios from "axios";
import {AppDispatch, RootState} from "@/lib/store";
import {useDispatch, useSelector} from "react-redux";
import {setStaff} from "@/lib/features/manage/staffReducer";

export default function ManagePage() {
    const dispatch = useDispatch<AppDispatch>();
    const staff = useSelector((state: RootState) => state.staff.staff);


    useEffect(() => {
        axios.get('http://localhost:8082/staff/all')
            .then((response) => {
                dispatch(setStaff(response.data));
            }).catch((error) => {
            console.error("There was a problem with the request: " + error.message);
        });
    }, [dispatch]);

    return (
        <>
            <NavBar />
            <ManageNav />
            <div className={"flex flex-col items-center"}>
                <h1 className={"text-lg font-bold"}>Manage Staff Page</h1>
                <div className={"mt-2"}>
                    <NewStaffModal />
                </div>
                <div className="p-5 w-full">
                    <Roster rows={staff} />
                </div>
            </div>
        </>
    );
}