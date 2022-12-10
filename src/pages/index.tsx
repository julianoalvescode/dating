import { Title, Button } from "presentation/components";

import { Box, Grid } from "@mui/material";

import Image from "next/image";
import QRCode from "assets/qr-code.svg";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const setActive = () => setIsActive(true);

  return (
    <>
      <Box padding="10px 20px">
        <Box marginBottom="20px">
          <Title>OFERTA EXCLUSIVA, QUER NAMORAR COMIGO?</Title>
        </Box>
        <Grid container spacing={2}>
          <Grid item>
            <Button onClick={() => setActive()}>SIM</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => setActive()}>COM CERTEZA</Button>
          </Grid>
        </Grid>
        <Grid display={isActive ? "grid" : "none"}>
          <Grid marginTop="4rem">
            <Title textAlign="center" fontSize="1.6rem" letterSpacing="0.1rem">
              LEIA QRCODE
            </Title>
          </Grid>
          <Grid marginTop="20px" textAlign="center">
            <Image
              width={200}
              height={200}
              quality="100"
              src={QRCode}
              alt="QR Code"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
