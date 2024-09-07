import { useRouteError } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { ReduxType } from "../types";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)
    const user = useSelector((state: ReduxType) => state.user)
    return (
        <div className="h-screen flex flex-col">
            <Navbar firstName={user.firstName}/>
            <div className="grid w-screen h-full place-items-center place-content-center bg-ternary">
                <div className="border-2 border-black grid gap-3 p-6 cursor-pointer bg-white">
                    <h1 className="font-bold text-7xl">Erreur !</h1>
                    <p className="font-light text-black/30">
                        <i> {(error as Error).message}</i>
                    </p>
                </div>
            </div>
            <footer className="w-full z-50 py-6 font-light text-center border-t border-gray-400 bottom-0 bg-white">Copyright 2020 Argent Bank</footer>
        </div>
    )
}