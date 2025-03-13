'use client'

import MenuTable from "@/app/manage/menu/menu";
import NewFoodModal from "@/app/manage/menu/newFoodModal";
import {NavBar} from "@/app/components/navbar/foodBar";
import ManageNav from "@/app/manage/page";
import {useState} from "react";
import {useDispatch} from "react-redux";

export default function ManagePage() {
    return (
        <div>
            <NavBar />
            <ManageNav/>
            <NewFoodModal />
            <MenuTable />
        </div>
    );
}