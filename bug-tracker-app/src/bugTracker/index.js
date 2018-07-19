import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bugActionCreators from './actions';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, addNew, removeClosed, sort } = this.props;
			
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort bugs={bugs} sort={sort}/>
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

export default connect(
	({spinnerData, bugsData}) => ({bugs : bugsData.filter((bug, index) => index % 2 === spinnerData % 2)}),
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);