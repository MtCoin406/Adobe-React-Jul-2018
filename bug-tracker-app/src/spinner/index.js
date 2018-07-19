import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

var spinnerActionCreators = {
	increment(delta){
		let action = { type : 'INCREMENT' , payload : delta};
		return action;
	},
	decrement(delta){
		let action = { type : 'DECREMENT' , payload : delta};
		return action;
	}
}

class Spinner extends Component{
	deltaValue = 1;
	onDecrementClick = () => {
		this.props.decrement(this.deltaValue);
	}
	onIncrementClick = () => {
		this.props.increment(this.deltaValue);
	}
	render(){
		return (
			<div>
				<input type="number" onChange={evt => this.deltaValue = evt.target.valueAsNumber}/>
				<br/>
				<input type="button" value="Decrement" onClick={this.onDecrementClick}/>
				<span> [{this.props.value}] </span>
				<input type="button" value="Increment" onClick={this.onIncrementClick}/>
			</div>
		);
	}
}



function mapStateToSpinnerProps(storeState){
	let spinnerValue = storeState.spinnerData;
	return { value : spinnerValue };
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}
export default connect(mapStateToSpinnerProps, mapDispatchToSpinnerProps)(Spinner);
