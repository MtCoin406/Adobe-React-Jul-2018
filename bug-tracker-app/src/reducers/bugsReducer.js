function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let {oldBug, newBug} = action.payload;
		let newState = currentState.map(bug => bug === oldBug ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let closedBugs = action.payload;
		let newState = currentState.filter(bug => closedBugs.indexOf(bug) === -1);
		return newState;
	}
	if (action.type === 'REPLACE_ALL'){
		let newState = action.payload;
		return newState;
	}
	return currentState;
}
export default bugsReducer;