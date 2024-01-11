import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
<meta name="viewport" content="initial-scale=1, width=device-width" />;

export default function ButtonUsage() {
  return (
    <div>
      <div>
        Jesteś pracodawcą i chcesz umieścić swoją ofertę? Dołącz do współpracy!
        <br></br>
        Nasze oferty codziennie przegląda ponad 80 tyś osob.
      </div>
      <div>
        <br></br>
        <Link to="/register">
          <Button id="btn-explore" variant="contained">
            Załóż konto pracodawcy
          </Button>
        </Link>
      </div>
    </div>
  );
}
