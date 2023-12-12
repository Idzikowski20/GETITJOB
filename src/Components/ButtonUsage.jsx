import * as React from "react";
import Button from "@mui/material/Button";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

export default function ButtonUsage() {
  return (
    <div>
      <Button id="btn-explore" variant="contained">
        Zaloguj się
      </Button>
      LUB
      <Button id="btn-explore" variant="contained">
        Zarejestruj
      </Button>
    </div>
  );
}
