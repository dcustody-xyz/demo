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
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Toaster } from "../components/ui/toaster";
import { Ethereum, Mumbai } from "@thirdweb-dev/chains";

const smartWalletOptions = {
  factoryAddress: "0xcb8949693d9Ce804586f353e1F4514a4Ad21d654",
  gasless: true,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}
      supportedChains={[Ethereum, Mumbai]}
      supportedWallets={[
        smartWallet(metamaskWallet(), smartWalletOptions),
        smartWallet(coinbaseWallet(), smartWalletOptions),
        smartWallet(walletConnect(), smartWalletOptions),
        smartWallet(trustWallet(), smartWalletOptions),
        smartWallet(zerionWallet(), smartWalletOptions),
        smartWallet(bloctoWallet(), smartWalletOptions),
        smartWallet(frameWallet(), smartWalletOptions),
        smartWallet(rainbowWallet(), smartWalletOptions),
        smartWallet(phantomWallet(), smartWalletOptions),
        magicLink({
          apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
          oauthOptions: {
            providers: ["google"],
          },
          type: "auth",
          emailLogin: false,
          smsLogin: false,
        }),
      ]}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
