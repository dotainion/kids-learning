import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { Cover } from "./pages/Cover";
import { Learn } from "./pages/Learn";
import './theme/general.css';
import { TalkProvider } from "./tools/Talk";

function App() {
  return (
    <BrowserRouter>
      <TalkProvider>
        <Switch>
          <Route exact path="/" render={()=><Cover/>}/>
          <Route exact path="/learn" render={()=><Learn/>}/>
        </Switch>
      </TalkProvider>
    </BrowserRouter>
  );
}

export default App;
