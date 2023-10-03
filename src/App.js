import './assets/css/App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './assets/css/App.css'

import {routes} from "./routes";
import Layout from './components/layout';


function App() {
    return (
        <Router>
            <Layout>
            <Routes>
                {routes.map(route => <Route {...route} key={route} />)}
            </Routes>
            </Layout>
        </Router>
    );
}

export default App;
