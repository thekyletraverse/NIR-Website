import Artists from './Artists';
import Home from './Home';
import Music from './Music';
import Navigation from "./Navigation.js";
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './footer'
function App() {
return (
<div className="App">
<Router>
<Navigation></Navigation>
<Route exact path="/" component={Home}></Route>
<Route path="/artists" component={Artists}></Route>
<Route exact path="/music" component={Music}></Route>
</Router>
<Footer/>
</div>
);
}
export default App;
