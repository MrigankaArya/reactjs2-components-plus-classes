import React from 'react';

const Spinner = (props) =>{
	return(
		<div className="ui segment">
			<div className="ui active dimmer">
				<div className = "ui massive text loader">{props.message}</div>
			</div>
			<p></p>
		</div>
		);
};

Spinner.defaultProps = {
	message: "Please provide your location."
}

export default Spinner;