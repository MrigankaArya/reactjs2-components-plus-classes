import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {

	state = {lat: null, errorMessage: ''};								  //only direct assignment to the state object

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({lat: position.coords.latitude}), //never do a direct assignment to state obj, always call setState
			(err) =>this.setState({errorMessage: err.message})						 
		);
	}

	// componentDidUpdate(){
	// }
	
	renderContent(){
		if(!this.state.lat && this.state.errorMessage){
			//show error
			return(<div> Error: {this.state.errorMessage} </div>);
		}
		else if(!this.state.errorMessage){
			if (this.state.lat)
				return(<SeasonDisplay lat = {this.state.lat}/>);
			else 
				return(<Spinner message="Please accept the location request."/>);
		}
	}

	//React specific function
	render(){
		return(<div className="border red">
				{this.renderContent()}
			</div>);
	};
};

ReactDOM.render(<App/>,	document.querySelector('#root'));
