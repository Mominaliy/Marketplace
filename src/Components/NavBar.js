import img from '../images/eth-logo.png';
import {BiSearchAlt} from 'react-icons/bi'
import { ConnectWallet } from "@thirdweb-dev/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar(){

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(`/${path}`)
    }

    const [color, setColor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 20){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return(
        <div className={`flex flex-row ${color ? 'bg-blue-500' : 'bg-transparent'} fixed top-0 z-10 min-w-full`}>
            <div >
                <img src={img} height='80' width='80' ></img>
            </div>
            <div>
                <p className="text-white font-bold font-mono text-2xl pt-6">
                    MARKETPLACE
                </p>
            </div>
            <div className='mt-6 ml-24 bg-blue-300 flex flex-row bg-transparent h-10 w-96 mb-2 rounded-xl hover:bg-white'>
                <BiSearchAlt className="ml-4 mt-3" size={20} color='black'></BiSearchAlt>
                <input placeholder="Projects, Assets or Users" className=" bg-transparent w-full h-full ml-2 outline-0 rounded-xl text-gray-700 placeholder-gray-700 placeholder:italic">
                </input>
            </div>
            <div className="ml-80 font-mono text-xl text-white mt-7 w-28 h-10">
                <button className=" hover:text-dark ? bg-transparent w-full h-full rounded-md " onClick={()=>navigate('/')}>
                    Explore
                </button>
            </div>
            <div className="ml-10 font-mono text-xl text-white mt-7 w-28 h-10">
                <button className=" hover:text-dark ?bg-transparent w-full h-full rounded-md " >
                    Projects
                </button>
            </div>
            <div className="ml-10 font-mono text-xl text-white mt-7 w-28 h-10">
                <button className=" hover:text-dark ?bg-transparent w-full h-full rounded-md ">
                    Activity
                </button>
            </div>
            <div className="ml-10 font-mono text-xl text-white mt-7 w-28 h-10">
                <button className=" hover:text-dark ? bg-transparent w-full h-full rounded-md " onClick={()=>handleNavigate('Profile')}>
                    Profile
                </button>
            </div>
            <div className="ml-10 font-mono text-xl text-white mt-5 w-28 h-1 mb-4 ">
                <ConnectWallet accentColor="#362FD9"></ConnectWallet>
            </div>
            
        </div>
    )
}

export default NavBar;