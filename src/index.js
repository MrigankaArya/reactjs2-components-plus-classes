import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

	state = {lat: null, errorMessage: ''};								  //only direct assignment to the state object

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({lat: position.coords.latitude}), //never do a direct assignment to state obj, always call setState
			(err) =>this.setState({errorMessage: err.message})						 
		);
	}

	componentDidUpdate(){
		console.log("Component was re-rendered due to update");
	}
	
	//React specific function
	render(){

		if(!this.state.lat && this.state.errorMessage){
			//show error
			return(<div> Error: {this.state.errorMessage} </div>);
		}
		else if(!this.state.errorMessage){
			if (this.state.lat)
				return(<SeasonDisplay lat = {this.state.lat}/>);
			else 
				return(<div> Loading... </div>);
		}
		
	};
};

ReactDOM.render(<App/>,	document.querySelector('#root'));
