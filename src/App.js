
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './client/layout/Home'
import "./styles.css";

function App() {
  	return (
		<Router>
			<div>
				<Switch>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
	 	</Router>
  	);
}

export default App;
