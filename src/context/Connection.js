import React, { createContext, useCallback, useContext, useEffect } from 'react'
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import { useWallet } from './Wallet';
import idl from '../assets/idl.json'

//initilization of connection to smart contract
const { SystemProgram, Keypair } = web3;
let baseAccount = Keypair.generate();
const programID = new PublicKey(idl.metadata.address)
const network = clusterApiUrl('devnet')
const opts = {
  preflightCommitment: "processed"
}

const ConnectionContext= createContext(null);

export function useConnection(){
  return useContext(ConnectionContext)
}

export function ConnectionProvider({children}) {

  const { walletAddress } = useWallet()

  const getProvider = useCallback(()=>{
    const connection = new Connection(network, opts.preflightCommitment)
    console.log(Provider)
    const provider = new Provider(connection, window.solana, opts.preflightCommitment)
    console.log(provider)
    return provider;
  },[])

  const getOrdersList = useCallback(()=>{

  },[])

  useEffect(()=>{
    // return if wallet not connected
    if(!walletAddress) return ; 
    // getProvider()
  },[walletAddress])


  const value= {
    getProvider
  }

  return (
    <ConnectionContext.Provider value={value}>
      {children}
    </ConnectionContext.Provider>
  )
}
