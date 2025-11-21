import { Outlet } from "react-router-dom"
import SideComp from "./SideComp"
import TopComp from "./TopComp"

const NLayout = ()=>{

    return (
        <div>
            <TopComp />
            <SideComp />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default NLayout