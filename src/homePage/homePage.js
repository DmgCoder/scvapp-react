import React, { useEffect, useState, useLayoutEffect } from "react";
import SideBar from "../components/sidebar";
import MainPage from "../mainPage/mainPage";


const HomePage = () => {
    const [ userData, setUserData ] = useState({a:""})
    const [ isLoaded, setLoaded ] = useState(false)

    async function getUserData(){
        let json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/`,{
                mode:'cors',
                credentials:'include',
                method:'GET',
            }).catch(e=>{
                setLoaded(true)
                window.location.pathname="/prijava"
            })
        let data = {}
        setLoaded(true)
        if(json.ok){
            data = await json.json()
        }else{
            return window.location.pathname="/prijava"
        }
        json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/status`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
        })
        if(json.ok){
            data.status = await json.json()
        }else{
            data.status = {
                display:"Unknown",
                color:"#ffffff"
            }
        }
        setUserData(data)
    }

    async function getUsersSchoolData(){
        let json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/school/`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
        })
    }

    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        return size;
    }

    const [winWidth, winHeight] = useWindowSize()

    const [ width, setWidth ] = useState(0)

    useEffect(()=>{
        getUserData()
        // getUsersSchoolData()
    },[])
    useEffect(()=>{
        setWidth(winWidth-300)
    },[winWidth])
    if(!userData.displayName && isLoaded){
        return(
            <>
                <p>Auth Error</p>
            </>
        )
    }
    return(
        <main className="main">
            <SideBar userData={userData} style={{height:"100%"}}/>
            <MainPage style={{width:width,height:"100%"}}/>
        </main>
    );
}

export default HomePage