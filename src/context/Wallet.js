import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo
} from 'react'

const walletContext = createContext(null);

//hook
export function useWallet() {
  return useContext(walletContext)
}

//provider
export function WalletProvider({ children }) {


  const [walletAdress, setWalletAdress] = useState(null)

  //tells if a wallet is connected
  const isConnected = useMemo(() => {
    return walletAdress !== null;
  }, [walletAdress])


  //initially checks if wallet is already connected
  const checkWallet = async () => {
    const { solana } = window;
    if (!(solana && solana.isPhantom)) {
      alert("Please install the phantom wallet")
      return;
    }
    try {
      const response = await solana.connect({ onlyIfTrusted: true })
      setWalletAdress(response.publicKey.toString())
    } catch {
      console.log("wallet doesn't trust us yet")
    }
  }

  //initially runs to check if already connected
  useEffect(() => {
    window.addEventListener('load', checkWallet)
    return () => {
      window.removeEventListener('load', checkWallet)
    }
  }, [])

  //connect button onClick
  const connect = async () => {
    const { solana } = window;

    //skipping if there is no phantom
    if (!(solana && solana.isPhantom)) return;

    //connecting on click button
    const response = await solana.connect()
    setWalletAdress(response.publicKey.toString())
  }

  //disconnect button onClick
  const disconnect = () => {
    setWalletAdress(null)
  }

  const value = {
    connect,
    disconnect,
    isConnected
  }

  return (
    <walletContext.Provider value={value}>
      {children}
    </walletContext.Provider>
  )
}
