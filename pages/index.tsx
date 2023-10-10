import { useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";
import ConnectWalletScreen from "../components/ConnectWalletScreen";
import MintNftScreen from "../components/MintNftScreen";

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center flex-col pb-12">
      <div className="px-2">
        <h1 className="mt-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Web3 Onboarding demo
        </h1>
        <p className="text-xl text-muted-foreground mt-6 text-center mb-8">
          A demo flow for onboarding both new and existing users onto a web3
          app.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-xl shadow-xl h-auto max-w-3xl w-11/12 backdrop-blur-xl backdrop-filter bg-white bg-opacity-5 px-8 py-8">
        {!address ? <ConnectWalletScreen /> : <MintNftScreen />}
      </div>
    </main>
  );
};

export default Home;
