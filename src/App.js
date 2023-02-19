import {Component} from 'react';
import './App.css';
import { Cardlist } from './component/cardlist/Cardlist';
import { Searchbox } from './component/Searchbox/Searchbox';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''
    };
    // this.handelchange = this.handelchange.bind(this)
  } 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(users => this.setState({monsters : users}))


  }
  handelchange = (e) => {
    this.setState({searchField: e.target.value});
  }
  render(){
    const{monsters,searchField} = this.state;
    const filtredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return(
      <div className="App">
      <h1> Monsters Rolodex</h1>
      <Searchbox
      placeholder='Search for Monster' 
      handelchange={this.handelchange}
      />

      <Cardlist monsters = {filtredmonsters}></Cardlist>
      </div> 
    )
  }
}


export default App;
