import { Outlet } from "react-router-dom";
import MainHeader from "../Main-Header/mainHeader";
import RootLayout from "./Layout";


export default function RootL({children}) {
    return(
        <>
        <RootLayout/>
        <MainHeader/>
        <Outlet/>
        </>
    )
}