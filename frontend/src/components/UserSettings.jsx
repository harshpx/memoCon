import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogout, reset } from '../redux/userSlice';
import { FiLogOut } from "react-icons/fi";

function UserSettings() {
    const {user,isError,isSuccess,message} = useSelector(state=>state.auth);
    const {dark} = useSelector(state=>state.theme);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ref = useRef(null);

    useEffect(()=>{
        const outsideClickHandler = (event)=>{
            if(ref.current && !ref.current.contains(event.target)){
                navigate('/dashboard');
            }
        }
        document.addEventListener('click',outsideClickHandler,true);
        return ()=>{
            document.removeEventListener('click',outsideClickHandler,true);
        }
    },[])

    const logoutButtonHandler = ()=>{
        dispatch(userLogout());
        dispatch(reset());
        navigate('/');
    }

    return (
        <div className={`${dark ? "dark" : ""}`}>
            <div className=' min-w-full min-h-screen flex flex-wrap items-center justify-evenly bg-neutral-200 dark:bg-zinc-800 bg-opacity-50 dark:bg-opacity-50 fixed top-0'>
                <div className=" w-4/5 sm:w-2/3 md:w-1/2 l:w-5/12 xl:w-1/3 p-4 my-3 flex flex-col items-center justify-center rounded-lg dark:text-white" style={{backgroundColor:'#18181b'}} ref={ref}>

                    <div className='h-1/2 w-1/2 overflow-hidden rounded-full dark:text-white'>
                        <img src={user.dp} alt="" />
                    </div>
                    <h1 className='text-2xl'>Hi {user.name}</h1>
                    <button className='w-1/2 md:w-1/3 py-1 px-1.5 mt-5 bg-theme flex justify-center items-center rounded-lg' onClick={logoutButtonHandler}>
                        Logout<FiLogOut className='ml-2'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserSettings;