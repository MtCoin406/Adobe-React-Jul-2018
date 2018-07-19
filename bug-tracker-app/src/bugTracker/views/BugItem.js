import React, { Component } from 'react';

class BugItem extends Component{
	onBugNameClick = () => {
		let { bug, toggle} = this.props;
		toggle(bug);
	}
	render(){
		let { bug } = this.props; 
		let bugStyle = bug.isClosed ? 'bugname closed' : 'bugname';
		return(
			<li>
				<span className={bugStyle} onClick={this.onBugNameClick}>{bug.name}</span>
				<div className="datetime">[{bug.createdAt.toString()}]</div>
				<div>[{bug.isClosed.toString()}]</div>
			</li>
		)
	}
}
export default BugItem;