import React from "react";
import { Button, Select } from "antd";
import { ENDPOINTS, useConnectionConfig } from "../../contexts/connection";
import { useWallet } from "../../contexts/wallet";

export const Settings = () => {
  const { connected, disconnect } = useWallet();
  const { endpoint, setEndpoint } = useConnectionConfig();

  return (
    <>
     
    </>
  );
};
