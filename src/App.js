import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Cover } from "./pages/Cover";
import { FrontPage } from "./pages/FrontPage";
import { Learn } from "./pages/Learn";
import './theme/general.css';
import { TalkProvider } from "./tools/Talk";

function App() {
  return (
    <BrowserRouter>
      <TalkProvider>
        <Switch>
          <Route exact path="/" render={()=><FrontPage/>}/>
          {/*<Route exact path="/" render={()=><Cover/>}/>*/}
          <Route exact path="/learn" render={()=><Learn/>}/>
        </Switch>
      </TalkProvider>
    </BrowserRouter>
  );
}

export default App;
