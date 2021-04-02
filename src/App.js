import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProduct from './components/AddProduct/AddProduct';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      {!user.userName ? (
        <Login />
      ) : (
        <Switch>
          <Route path='/addproduct'>
            <AddProduct />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
