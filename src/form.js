import React from 'react';
class UserForm extends React.Component{
      render(){
        if(this.props.shown){
        return(
          <div>
          <div id="form-id">
            <form onSubmit={this.props.handleSubmit}>
            <label for="Name" className="input-label">Name:</label><br/>
            <input className="input-class" type="text" name="name" value={this.props.name} 
              onChange={this.props.handleName} required/><br/>
            <label for="progress" className="input-label">Progress:</label><br/>
            <input className="input-class" type="number" name="number" value={this.props.progress}
             min={0} max={100} onChange={this.props.handleProgress} required/><br/>
            <input type="Submit" name="submit" className="submit-button"/>
            </form>
          </div>
         
          </div>
        );
      } else{
        return null;
      }
      }

    };
    export default UserForm;
    //{(event)=>this.props.handleProgress(event, "progress")