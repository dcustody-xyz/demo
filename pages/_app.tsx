import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  bloctoWallet,
  coinbaseWallet,
  frameWallet,
  magicLink,
  metamaskWallet,
  phantomWallet,
  rainbowWallet,
  smartWallet,
  trustWallet,
  walletConnect,
  zerionWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Toaster } from "../components/ui/toaster";
import { Mumbai, Polygon } from "@thirdweb-dev/chains";

const embeddedWalletConfig = embeddedWallet();
const smartWalletOptions = {
  factoryAddress: "0xcb8949693d9Ce804586f353e1F4514a4Ad21d654",
  gasless: true,
};
embeddedWalletConfig.meta.name    = "dCustody";
embeddedWalletConfig.meta.iconURL = "/logo.png";
embeddedWalletConfig.connectUI    = () => <p>Connect UI</p>;
embeddedWalletConfig.selectUI     = () => <p>Select UI</p>;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}
      supportedChains={[
        {...Mumbai, rpc: ['https://rpc-mumbai.maticvigil.com/']},
        {...Polygon, rpc: ['https://polygon-rpc.com/']},
      ]}
      supportedWallets={[
        smartWallet(embeddedWalletConfig, smartWalletOptions),
      ]}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
