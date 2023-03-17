import {MdOutlineVerifiedUser} from 'react-icons/md'
import Ethlogo from '../images/Currency.png';


function NFTTile({name, price, image, handleClick}){
    return(
        <div className="group h-96 w-[266px] bg-primary shadow-lg hover:shadow-2xl hover:shadow-dark shadow-primary rounded-xl flex-col cursor-pointer hover:-translate-y-2 transition ease-in-out duration-300" onClick={handleClick}>
            <div className="flex flex-col h-64 w-[265px] items-center rounded-xl overflow-hidden">
            <img src={image}  className='mt-1 scale-100 hover:scale-y-105 hover:scale-x-105 hover:rounded-t-xl ml-1 w-full'>

            </img>
            </div>
            <div className="flex bg-transparent mt-4 flex-col">
                <p className="font-mono font-bold ml-4 text-lg text-white">
                    {name}
                </p>
                
                <div className="flex flex-row">
                <p className="font-mono font-semibold ml-4 text-gray-300 opacity-50">
                    Robots NFTs
                </p>
                <MdOutlineVerifiedUser size={17} color='yellow' className="ml-2 mt-1"></MdOutlineVerifiedUser>
                </div>
                {price === undefined ? 
                <div className='flex flex-row h-9 mt-4 ml-2'>
                    <p className="font-mono font-semibold mt-2 ml-4" >
                       Not Listed
                    </p>
                    <div className="bg-dark ml-8 w-28 rounded-md hidden group-hover:block">
                    <p className="font-mono font-bold text-lg ml-5 mt-1 text-white">
                        Sell NFT
                    </p>
                </div>
                </div>
                    :
                    <div className="flex flex-row h-9 mt-4 ml-2">
                    <img src={Ethlogo} height={5} width={30}></img>  
                    
                    <p className="font-mono font-semibold mt-2 ml-1 text-white" >
                       {price} ETH
                    </p>
                    <div className="bg-dark ml-8 w-28 rounded-md hidden group-hover:block">
                        <p className="font-mono font-bold text-lg ml-5 mt-1 text-white">
                            Buy Now
                        </p>
                    </div>
                </div>}
                
            </div>
        </div>
    )
}

export default NFTTile;