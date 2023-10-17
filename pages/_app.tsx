import type { AppProps } from "next/app";
import { ThirdwebProvider, embeddedWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Toaster } from "../components/ui/toaster";
import { Polygon } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="polygon"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}
      supportedChains={[
        {...Polygon, rpc: ['https://polygon.rpc.thirdweb.com']}
      ]}
      supportedWallets={[
        embeddedWallet()
      ]}>
      <Component {...pageProps} />
      <Toaster />
    </ThirdwebProvider>
  );
}

export default MyApp;
