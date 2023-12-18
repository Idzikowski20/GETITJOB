import * as React from "react";
import Button from "@mui/material/Button";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

export default function ButtonUsage() {
  return (
    <div>
      <div>
        Jesteś pracodawcą i chcesz umieścić swoją ofertę? Dołącz do współpracy!
      </div>
      <div>
        <Button id="btn-explore" variant="contained">
          Zarejestruj się
        </Button>
      </div>
    </div>
  );
}
