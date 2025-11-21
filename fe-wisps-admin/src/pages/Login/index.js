import axios from "axios"
import { useEffect } from "react"

const Login = ()=>{

    useEffect(()=>{
        axios.get("/api/movieOnInfoList?token=&optimus_uuid=74B5F0A032A711EB82DD6B9282E93C676D27D7B9731D4E608D7612C3E708C120&optimus_risk_level=71&optimus_code=10").then(res =>{
            console.log(res.data)
        })
    }, [])

    return (
        <div>
            login
        </div>
    )
}

export default Login