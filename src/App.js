import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import UserForm from './form.js';
import Progressfunc from './progressbar.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name : '',
      progress : null,
      shown : true,
    };
  }
     handleName = (event) => this.setState({ name :  event.target.value }); 
     handleProgress = (event) => this.setState({progress : event.target.value});
     handleSubmit = (event) => {
      event.preventDefault();
      this.setState({shown : !this.state.shown});
    }
  render()
  {
    return(
       
     <div>
        
      <UserForm name={this.state.name} progress={this.state.progress} shown={this.state.shown} 
      handleName={this.handleName} handleProgress={this.handleProgress} handleSubmit={this.handleSubmit}/>
      <Progressfunc name={this.state.name} progress={this.state.progress} shown={this.state.shown}/>
     </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById("root"));
export default UserForm;