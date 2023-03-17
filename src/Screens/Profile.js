import React, { useState } from 'react'
import { useAddress, useContract, useOwnedNFTs, useNFT } from '@thirdweb-dev/react';
import { useNavigate } from 'react-router-dom';
import NFTTile from '../Components/NFTTile';
import NavBar from '../Components/NavBar';
import { SyncLoader } from "react-spinners";
import { AllListings, GetCommon } from '../Utils';

const Profile = () => {

    const { contract } = useContract("0xEF64B24749fF3e4ffAe33c432171b750e2Cfc86B");

    const address = useAddress();


    let owned = []
    let active = []

    let nfts = []
    

    const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, address);

    const list = AllListings();
   

    var number = 0;


    if (!isLoading && address){
        number = ownedNFTs.length
        for (let i =0; i < ownedNFTs.length; i++){
            owned.push(ownedNFTs[i].metadata.id)
        }
        if (list !== undefined){
            console.log(list)
            for (let i =0; i < list.length; i++){
                active.push(list[i].asset.id)
           }
        }
        

        const mynfts = GetCommon(active, owned)

        for (let i = 0; i < ownedNFTs.length ; i++){
            for(let j = 0 ; j < mynfts.length; j++){
                if (ownedNFTs[i].metadata.id === mynfts[j]){
                    nfts.push(ownedNFTs[i]);
                }
            }
            
            console.log(ownedNFTs[i].metadata.id)
        }

         console.log(nfts)
        
    //    console.log(mynfts)
       
    
    }

    const navigate = useNavigate();

    const handleNavigate = (nft) => {
        navigate(`/ListNFT/${nft.metadata.name}`, {state: nft})
    }

  return (
    <>
    <NavBar></NavBar>
    <div className="bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500 flex flex-col min-h-screen">
            <div className="flex container mt-40 flex-col ml-32">
                <p className="text-white font-mono font-semibold text-2xl">
                    My NFTS
                </p>
                <p className="text-white font-mono font-semibold text-lg">
                    {number}
                </p>
            </div>
            <div className="flex flex-wrap mt-10 ml-40 gap-9">
            {!isLoading ? (nfts && nfts.map((nft) => {
                return (
                    <NFTTile name={nft.metadata.name} image={nft.metadata.image} handleClick={() => handleNavigate(nft)}></NFTTile>
                )
            })) :(<div>
                 <div className='flex h-screen w-[1500px] justify-center mt-20'>
                    <SyncLoader color='#3C84AB'></SyncLoader>
                </div>
            </div>)}
            </div>
           
            </div>
            </>
  )
}

export default Profile