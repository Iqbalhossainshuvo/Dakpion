import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import MessaengerLayout from "../Pages/MessangerLayout/MessaengerLayout";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/messenger',
                element: <MessaengerLayout/>,
            },
        ]
    }
])