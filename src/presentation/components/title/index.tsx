import { Typography } from "@mui/material";

import * as I from "./types";

export function Title({
  children,
  fontSize = "3.5rem",
  letterSpacing = "0.3rem",
  textAlign,
}: I.TitleProps) {
  return (
    <Typography
      textAlign={textAlign ? "center" : "left"}
      fontWeight="bold"
      fontFamily="Insanibu, arial, sans-serif"
      variant="h1"
      fontSize={fontSize}
      color="#502213"
      letterSpacing={letterSpacing}
    >
      {children}
    </Typography>
  );
}
