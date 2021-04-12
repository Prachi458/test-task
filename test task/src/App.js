import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      progress : null
    };
   this.handleName=this.handleName.bind(this);
   this.handleProgress=this.handleProgress.bind(this);
   this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleName(event) {
      this.setState({ name :  event.target.value });
    };
  handleProgress(event){
    this.setState({progress : event.target.value})
  };
  handleSubmit(event){
    event.preventDefault();
    let progressbar = document.getElementById("progressbar");
    let progress = document.getElementById("progress-id");
    progressbar.value = progress.value;
    let formid = document.getElementById("form-id");
    let outputid = document.getElementById("output-id");
    formid.hidden = true;
    outputid.hidden = false;

  };
  
  render(){
    return(
      <div>
      <div id="form-id">
        <form onSubmit={this.handleSubmit} method="POST">
        <label for="Name" className="input-label">Name:</label><br/>
			  <input className="input-class" type="text" name="name" value={this.state.name} onChange={(event) => this.handleName(event, "name")} required/><br/>
			  <label for="progress" className="input-label">Progress:</label><br/>
		  	<input className="input-class" id="progress-id" type="number" name="number" value={this.state.progress} min={0} max={100} onChange={(event)=>this.handleProgress(event, "progress")} required/><br/>
        <input type="Submit" name="submit" className="submit-button"/>
        </form>
      </div>
      <div id = "output-id" hidden>
      <progress value="0" max="100" id="progressbar"></progress>
      <p className="name-class">{this.state.name}</p>
      <p className="progress-class">{this.state.progress}%</p>
      </div>
      </div>
    );
  }
};
ReactDOM.render(<MyForm/>,document.getElementById("root"));
export default MyForm;