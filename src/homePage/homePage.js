import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShowAlert from "../components/showAlert";
import SideBar from "../components/sidebar";
import MainPage from "../mainPage/mainPage";


const HomePage = () => {
    const [ userData, setUserData ] = useState({a:""})
    const [ isLoaded, setLoaded ] = useState(false)

    const [ alertIn, setAlertIn ] = useState(false)

    let location = useLocation()
    let navigation = useNavigate()

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
        json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/school`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
        })
        if(json.ok){
            data.school = await json.json()
        }else{
            data.school = {
                id:"",
                urnikUrl:"",
                color:"",
                schoolUrl:"",
                name:"",
                razred:""
            }
        }
        data.refreshUserStatus = getUserData
        setUserData(data)
        setLoaded(true)
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
    },[])
    useEffect(()=>{
        setWidth(winWidth-300)
    },[winWidth])

    useEffect(()=>{
        let search = location.search
        if(userData.displayName && isLoaded){
            let parameters = search.slice(1).split("&")
            for(let i = 0;i<parameters.length;i++){
                let p = parameters[i].split("=")
                if(p[0]=="success" && p[1]=="signin"){
                    setAlertIn(true)
                    setTimeout(()=>{
                        setAlertIn(false)
                    })
                }
            }
        }
    })

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
            <MainPage userData={userData} style={{width:width,height:"100%"}}/>
            <ShowAlert show={alertIn} title="Uspešna prijava!" text="Uspešno ste se prijavili v ŠCVApp"/>
        </main>
    );
}

export default HomePage