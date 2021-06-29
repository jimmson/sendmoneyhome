import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Container,
  AppBar,
  Grid,
  Typography,
  Toolbar,
  Button,
  CardActionArea,
  Card,
  CardContent
} from "@material-ui/core";

export default function App() {
  return (
    <Router>
      <div>
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item spacing={0}>
              <AppBar>
                <Toolbar>
                  <Typography variant="h6">Send money home</Typography>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item spacing={0} style={{paddingTop: "100px"}}>

              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      BALANCE
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      R 10000
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions> */}
              </Card>

            </Grid>
            <Grid item spacing={0}>
              <Button variant="contained" color="primary">
                Send
              </Button>
              <Button variant="contained" color="primary">
                Deposit
              </Button>
              <Button variant="contained" color="primary">
                Withdraw
              </Button>
            </Grid>
          </Grid>
        </Container>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
