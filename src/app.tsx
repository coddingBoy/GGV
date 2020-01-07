
import React from 'react';
import { hot } from "react-hot-loader/root";
import './styles.css'
import Users from './containers/Users';

class App extends React.Component {
  render() {
    return <Users />
  }
}

export default hot(App);
