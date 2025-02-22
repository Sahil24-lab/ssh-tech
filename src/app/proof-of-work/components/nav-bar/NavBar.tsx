import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Proof of Work
          </Typography>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/proof-of-work">
            Projects
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
