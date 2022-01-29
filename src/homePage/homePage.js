import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import TopBar from "../components/topBar";


const HomePage = () => {
    const [ userData, setUserData ] = useState({a:""})
    const [ isLoaded, setLoaded ] = useState(false)

    async function getUserData(){
        let json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/`,{
                mode:'cors',
                credentials:'omit',
                method:'GET',
            })
        let data = {}
        if(json.ok){
            data = await json.json()
        }
        setUserData(data)
        setLoaded(true)
        
        // if(!data.displayName){
        //     return window.location.pathname="/login"
        // }
    }

    useEffect(()=>{
        getUserData()
    },[])
    // if(!userData.displayName && isLoaded){
    //     return(
    //         <p>Auth Error</p>
    //     )
    // }
    return(
        <>
        <SideBar userData={userData}/>,
        <TopBar userData={userData}/>
        </>
    );
}

export default HomePage