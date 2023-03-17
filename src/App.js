import { ConnectWallet } from "@thirdweb-dev/react";
import { Route, Routes } from "react-router-dom";
import Activity from "./Screens/Activity";
import ListNFT from "./Screens/ListNFT";
import Main from "./Screens/Main";
import NFTDetail from "./Screens/NFTDetails";
import Profile from "./Screens/Profile";
import Projects from "./Screens/Projects";


export default function Home() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Projects" element={<Projects></Projects>}></Route>
        <Route path="/Profile" element={<Profile></Profile>}></Route>
        <Route path="/NFTDetail/:id" element={<NFTDetail></NFTDetail>}></Route>
        <Route path="/ListNFT/:id" element={<ListNFT></ListNFT>}></Route>
        <Route path="/Activity" element={<Activity></Activity>}></Route>
     </Routes>
    </>
  );
}
