import React from "react";
import {
  ConnectWallet,
  magicLink,
  useConnect,
  useConnectionStatus,
} from "@thirdweb-dev/react";
import { Button } from "./ui/button";
import Image from "next/image";

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

        <ConnectWallet
          btnTitle="Connect to Web3!"
          switchToActiveChain={true}
          style={{
            marginTop: 12,
            width: "90%",
          }}
        />
      </div>
    </>
  );
}
