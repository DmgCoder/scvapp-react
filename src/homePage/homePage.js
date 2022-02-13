import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useNavigate} from "react-router-dom";
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

    useEffect(()=>{
        getUserData()
    },[])

    useEffect(()=>{
            let search = location.search.slice(1).split("&")
            search.forEach(s=>{
                let a = s.split("=")
                let key = a[0] || ""
                let value = a[1] || ""

                if(key === "success" && value === "signin"){
                    localStorage.setItem("login","success")
                    localStorage.setItem("login-time",new Date().getTime())
                    navigation({
                        search:""
                    })
                }
            })
    })

    useEffect(()=>{
        if(userData.displayName && isLoaded){
            let item = localStorage.getItem("login") || ""
            let itemTime = localStorage.getItem("login-time") || 0
            if(item === "success" && !alertIn){
                setAlertIn(true)
                let int = setInterval(()=>{
                    let n = new Date().getTime()
                    if((parseInt(itemTime)+7000)<=n){
                        clearInterval(int)
                        localStorage.removeItem("login")
                        localStorage.removeItem("login-time")
                        setAlertIn(false)
                    }
                },1000)
            }
        }
    })

    if(!userData.displayName && isLoaded){
        return(
            <>
                <p>Auth Error</p>
            </>
        )
    }else if(!isLoaded){
        return(
            <>
            </>
        )
    }
    return(
        <main className="main">
            <SideBar userData={userData} style={{height:"100%"}}/>
            <MainPage userData={userData} style={{width:"100%",height:"100%"}}/>
            <ShowAlert show={alertIn} title="Prijava uspešna!" text="Uspešno ste se prijavili v ŠCVApp"/>
        </main>
    );
}

export default HomePage