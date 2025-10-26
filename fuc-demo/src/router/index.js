import { createBrowserRouter } from "react-router-dom"
import Layout from '@/pages/Layout'
import Home from "@/pages/Home"
import Zustand from "@/pages/Zustand"
import Func from "@/pages/Func"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/func",
                element: <Func />
            },
            {
                path:"/zustand",
                element: <Zustand />
            }
        ]
    }
])

export default router