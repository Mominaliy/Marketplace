import React, { useState } from 'react'
import NavBar from '../Components/NavBar'
import {SlSocialTwitter} from 'react-icons/sl'
import {TbBrandTelegram} from 'react-icons/tb'
import {RxDiscordLogo} from 'react-icons/rx'
import { AiOutlineHeart , AiOutlineEye} from 'react-icons/ai'
import {MdOutlineVerifiedUser} from 'react-icons/md'
import ethLogo from '../images/Currency.png'
import { useLocation } from 'react-router-dom';
import { useAddress, useContract } from '@thirdweb-dev/react';
import { useListings } from '@thirdweb-dev/react';
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk'


const ListNFT = () => {

    const {state} = useLocation();
    console.log(state)

    const [price, setPrice] = useState('')

    const address = useAddress();

    const [id, setId] = useState('')

    
    const { contract } = useContract("0x1f0F9Be2454Ea60B9d4CA395940F7A604A53Bd0E", "marketplace")

    const nftAddress = '0xEF64B24749fF3e4ffAe33c432171b750e2Cfc86B'

    const {data: listings, loading} = useListings(contract);

    const get = async () => {
        const id = await contract.call('totalListings')
        var foramtted = ethers.utils.formatEther(id)
        foramtted = foramtted * 1000000000000000000;
        foramtted+=1
        const str = foramtted.toString()
        return str
    }

    useEffect(() => {
    const res = async () => { 
        if(contract){
            const result = await get();
            setId(result)
        }
    }
      res()
    }, [contract])
    


    const ListNFT = async () => {
        const listing = {
            assetContractAddress: nftAddress,
            tokenId: state.metadata.id,
            startTimestamp: new Date(),
            listingDurationInSeconds: 60*60*24*7*30,
            quantity: 1,
            currencyContractAddress: NATIVE_TOKEN_ADDRESS,
            buyoutPricePerToken: price,
        }

        const tx = await contract.direct.createListing(listing);
        const receipt = tx.receipt;
        console.log(receipt);

    }

  return (
    <div>
        <NavBar>
        </NavBar>
        <div className='flex flex-col bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 min-h-screen min-w-full'>
            <div className='flex flex-row mt-32'> 
                <div className="relative h-[600px] w-[700px] ml-56">
                    <img src={state.metadata.image} className='blur-xl object-fill h-[600px] w-[700px]'>
                    </img>
                    <img src={state.metadata.image} className='absolute top-24 left-32 object-fill h-[450px] w-[450px] rounded-md'>

                    </img>
                </div>
                <div className='h-[600px] w-[700px] bg-dark ml-2 rounded-tr-lg rounded-br-lg'> 
                    <div className='flex flex-row mt-5 ml-5'>
                        <SlSocialTwitter size={30} className='ml-5' color='white'></SlSocialTwitter>
                        <TbBrandTelegram size={30} className='ml-5' color='white'></TbBrandTelegram>
                        <RxDiscordLogo size={30} className='ml-5' color='white'></RxDiscordLogo>
                        <AiOutlineHeart size={30} className='ml-5' color='white'></AiOutlineHeart>
                        <AiOutlineEye size={30} className='ml-[400px]' color='white'></AiOutlineEye>
                        <p className='font-bold font-mono ml-2 text-xl mt-[1px] text-secondary'> 0</p>
                    </div>
                    <div>
                        <div className='flex flex-row ml-10 mt-32'>
                            <p className='font-semibold font-mono text-primary'>
                                Robots NFTs
                            </p>
                            <MdOutlineVerifiedUser size={21} color='#F0A500' className='ml-2'></MdOutlineVerifiedUser>
                        </div>
                        <h1 className='font-mono font-extrabold text-6xl ml-10 mt-2 text-secondary'>
                            {state.metadata.name}
                        </h1>
                        <p className='font-semibold font-mono mt-28 ml-10 text-lg text-secondary'>
                            Enter Listing Price
                        </p>
                        <div className='flex flex-row ml-10 mt-2'>
                            <img src={ethLogo} className='h-8 w-8'></img>
                            <input min='0' step='0.1' type='number' className='ml-2 bg-primary rounded-lg pl-5 w-24 outline-0 text-white font-bold' onChange={(e)=>{setPrice(e.target.value)}}></input>
                            <p className='font-bold font-mono ml-3 text-2xl text-secondary'>
                                 ETH
                            </p>
                        </div>
                        <div className='mt-5 ml-10 h-10 w-40 rounded-md text-white hover:bg-secondary ? bg-primary shadow-2xl shadow-dark'>
                            <button className='p-1 ml-9 mt-[1px] text-lg font-bold' onClick={()=>{ListNFT()}}>
                            List Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListNFT