import { useContractEvents, useNFT, useContract, ThirdwebNftMedia, isLoadingNFT } from "@thirdweb-dev/react";
import { NFT_CONTRACT_ADDRESS } from "../../const/addresses";
import {useRouter, router } from "next/router";
import styles from "../../styles/Home.module.css";


 const NFTDetailPage =  () => {

    const {id } =useRouter().query;
    const { contract } = useContract(NFT_CONTRACT_ADDRESS);
    const { data:nft, isLoading: isLoadingNFTs } =useNFT(contract,id);
    const { data: events, isLoading: isLoadingEvents } = useContractEvents (
        contract,
        "Transfer",
        {

            queryFilter: {
                filters:{
                    tokenId: id,
                },
                order:"desc",
            }
        }
    );

    return (

 
        <div className={styles.container} >
            <h3>NFT from contract 0x1a92f7381b9f03921564a437210bb9396471050c, ethereum network</h3>
          <button onClick={() => router.back()} >Back</button>

         <h1> {nft?.metadata.name} </h1>
         
         
         
        

     
      
             <div>
                <h3>History:</h3>
            {!isLoadingEvents && (
                <div> 
                    {events.map((event, index) => (
                        <div key={index}>  
                        <strong>From:</strong> {event.data.from} <strong>to:</strong> {event.data.to}
                        </div>
                    ))} </div>
            )}
             </div>


        </div>

    )

 };

 export default NFTDetailPage;
