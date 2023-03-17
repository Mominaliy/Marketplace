import { useContract, useActiveListings, useNFT } from "@thirdweb-dev/react";

export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };

  export const AllListings = () => {
    const { contract } = useContract("0x1f0F9Be2454Ea60B9d4CA395940F7A604A53Bd0E", "marketplace")

   const {data: nfts, isLoading} = useActiveListings(contract)

   if(!isLoading){
    return nfts
   }
  };

  export const GetCommon = (active, owned) => {
    let common = []
    let mynfts = []
    for (let i = 0; i < active.length; i++){
        for (let j =0 ; j < owned.length; j++){
            if (active[i] === owned[j]){
                common.push(active[i])
            }
        }
    }

    mynfts = owned.filter((o) => common.indexOf(o) === -1)
    return mynfts

  };


  export const MyNFTs =  () => {
    const { contract, isLoading } = useContract("0xEF64B24749fF3e4ffAe33c432171b750e2Cfc86B");

    const { data: nft, Loading, error } = useNFT(contract, "0");

    if (!isLoading && !Loading){
       return nft
        //console.log(nft)
    }
    
}