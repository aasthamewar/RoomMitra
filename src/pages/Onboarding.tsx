import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/");
    } ,[])

    return null;
}

export default Onboarding;