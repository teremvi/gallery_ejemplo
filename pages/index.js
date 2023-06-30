
import { useState } from "react";
import { NFTCard } from "../components/NFTCard";
import { NFT_CONTRACT_ADDRESS } from "../const/addresses";
import styles from "../styles/Home.module.css";
import {useContract, useNFTs} from "@thirdweb-dev/react";


<div> NFT Collection Cool Cats, Gallery for a test</div> 

export default function Home() {

  const count = 30;
  const [page, setPage] = useState(1);

  const { contract } = useContract (NFT_CONTRACT_ADDRESS);
  const { data: nfts, isLoading: isLoadingNFTs } = useNFTs(
    contract,
    {
      count: count,
      start: (page -1) * count,
    }
  )


  return (
    
    <div className={styles.container}>
      <div> NFT Collection Cool Cats, Gallery for a test</div>     
     <div className={styles.NFTGrid} >   
          
      {!isLoadingNFTs && (
        nfts.map((nft, index) => (
          <NFTCard key={index} nft={nft}
          />
         )
      ))}
   </div>
   
   <div className={styles.pagnation} >
    <button onClick={() => setPage(page -1) } disabled ={page ===1} >Previous </button>
    <input
    type="number"
    value={page}
    onChange={(e) => setPage(parseInt(e.target.value))}
    />
    <button onClick={() => setPage(page +1) } >Next </button>

  </div>

    </div>
  );
}
