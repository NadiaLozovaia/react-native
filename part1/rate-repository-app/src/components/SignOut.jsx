
import useSignOut from '../hooks/useSignOut';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


const SignOut = () => {

    const navigate = useNavigate()
    useSignOut();

    useEffect(() => {
        
        navigate('/')

    }, [])
}
export default SignOut;