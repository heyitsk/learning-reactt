import { useState,useEffect } from "react"
import { MENU_URL } from "./contants"

const useMenuData =(resid)=>{
    const [menuData, setMenuData] = useState(null)
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const respone = await fetch(MENU_URL+resid)
        const json = await respone.json()
        setMenuData(json.data)
    }
    return menuData
}
export default useMenuData;