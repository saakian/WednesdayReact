import Navigation from './Navigation/Navigation'
import ArxikiAnazitisi from '../src/ArxikiAnazitisi/ArxikiAnazitisi'
import Dimiourgia from '../src/Dimiourgia/Dimiourgia'
import Search from './Search/Search'
import Ergasia_Page from '../src/Ergasia_Page/Ergasia_Page'
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (

    <Router>

      <div className="App">
        <Navigation />
        
        <Switch>
            <Route path="/" exact component={ArxikiAnazitisi} />
            <Route path="/New" component={Dimiourgia}/>
            <Route path="/Search"component={Search} />
            <Route path="/Ergasia_Page" component={Ergasia_Page}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
