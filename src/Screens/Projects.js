import React from 'react'
import { useContract } from '@thirdweb-dev/react'
import { useActiveListings } from '@thirdweb-dev/react'
import { useOwnedNFTs } from '@thirdweb-dev/react'

const Projects = () => {

    // const { contract } = useContract("0x1f0F9Be2454Ea60B9d4CA395940F7A604A53Bd0E", "marketplace")

    // const {data: nfts} = useActiveListings(contract)

    const { contract } = useContract("0xEF64B24749fF3e4ffAe33c432171b750e2Cfc86B");

    const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, "0xfeEEa493fdC4A5Ecae181ca63e48072713c803F3");

    console.log(ownedNFTs)

   // console.log(nfts);
    

  return (
    <div>Projects</div>
  )
}

export default Projects