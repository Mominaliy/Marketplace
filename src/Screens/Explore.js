
import NFTTile from "../Components/NFTTile";
import { useActiveListings, useContract, useListings } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SyncLoader } from "react-spinners";



function Explore() {

    const { contract } = useContract("0x1f0F9Be2454Ea60B9d4CA395940F7A604A53Bd0E", "marketplace")

   const {data: nfts, isLoading} = useActiveListings(contract)

    const navigate = useNavigate();

    console.log(nfts)
    
   

    var number;

    if (!isLoading){
        number = nfts.length
    }
    
    const handleNavigate = (nft) => {
        navigate(`/NFTDetail/${nft.asset.name}`, {state: nft})
    }

    return(
        <div className="flex flex-col min-h-full mb-10">
            <div className="flex container mt-40 flex-row ml-32">
                <p className="text-white font-mono font-semibold text-2xl">
                    Explore
                </p>
                <p className="text-white font-mono font-semibold text-xl ml-2 mt-1">
                    ({number})
                </p>
                
            </div>
            <div className="flex flex-wrap mt-10 ml-40 gap-9">
            {!isLoading ? (nfts && nfts.map((nft) => {
                return (
                    <NFTTile name={nft.asset.name} price={nft.buyoutCurrencyValuePerToken.displayValue} image={nft.asset.image} handleClick={() => handleNavigate(nft)}></NFTTile>
                )
            })) :(<div>
                 <div className='flex h-screen w-[1500px] justify-center mt-20'>
                    <SyncLoader color='#3C84AB'></SyncLoader>
                </div>
            </div>)}
            </div>
           
            </div>

    )
}

export default Explore;