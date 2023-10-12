import React from "react";
import {
  ConnectWallet,
  embeddedWallet,
  smartWallet,
  useConnect,
  useConnectionStatus,
} from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";
import { Button } from "./ui/button";
import Image from "next/image";

const embeddedWalletConfig = embeddedWallet();
// const factoryAddress = "0xcb8949693d9Ce804586f353e1F4514a4Ad21d654"; // Mumbai
const factoryAddress = "0x4fd9238875183B42cE1a50250dD9ef6537613888"; // Polygon
const smartWalletConfig = smartWallet(embeddedWalletConfig, { factoryAddress, gasless: true });

export default function ConnectWalletScreen() {
  const connectWallet = useConnect();
  const connectionStatus = useConnectionStatus();
  const isLoading =
    connectionStatus === "connecting" || connectionStatus === "unknown";
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <p className="text-md text-muted-foreground">
          Welcome!
        </p>

          <Button className="border border-solid border-white border-opacity-20 mt-6 bg-[#22232b] text-white p-4 rounded-lg flex flex-row items-center hover:bg-inherit"
                  style={{ marginTop: 12, height: 46, width: "90%" }}
                  disabled={isLoading}
                  onClick={async () => {
                    const wallet      = await connectWallet(embeddedWalletConfig);
                    const smartWallet = await connectWallet(smartWalletConfig, {
                      chainId: Polygon.chainId,
                      personalWallet: wallet,
                    });
                  }}>
            {isLoading ? (
              <div
                className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1s_linear_infinte]"
                role="status"
              />
            ) : (
              <>
                <Image
                  src="/google.png"
                  alt="Google Logo"
                  width={24}
                  height={24}
                  className="mr-2"
                />

                <span className="text-sm font-semibold">Sign in with Google</span>
              </>
            )}
          </Button>
      </div>
    </>
  );
}
