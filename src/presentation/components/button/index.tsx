import { Button as ButtonCustom } from "@mui/material";

import * as I from "./types";

export function Button({ children, onClick }: I.Button) {
  return (
    <ButtonCustom onClick={onClick} color="primary" variant="outlined">
      {children}
    </ButtonCustom>
  );
}
