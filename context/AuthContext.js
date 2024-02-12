import React,{createContext, useState} from 'react'
import axios from 'axios';
//import{BaseService} from '../services/BaseService'
import { apiSignIn } from '../services/AuthService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [userInfo,setUserInfo]=useState({})
    const [isLoading,setIsLoanding] = useState(false)

    const login = (username,password) =>{
        setIsLoanding(true)
        axios.post(`${apiSignIn}/login`,{
            username,password
        })
        .then(res => {
            let userInfo = res.data;
            console.log(userInfo)
            setUserInfo(userInfo)
            AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
            setIsLoanding(false)
        })
        .catch(e =>{
            console.log(`login error ${e}` )
            setIsLoanding(false)
        })

    }



   return  <AuthContext.Provider value ={{login}}>{children}</AuthContext.Provider>
}
