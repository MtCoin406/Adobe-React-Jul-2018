function bugsReducer(currentState = [], action){
	if (action.type === 'LOADED'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let bugToUpdate = action.payload;
		let newState = currentState.map(bug => bug.id === bugToUpdate.id ? bugToUpdate : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugToRemove = action.payload;
		let newState = currentState.filter(bug => bug.id !== bugToRemove.id);
		return newState;
	}
	if (action.type === 'REPLACE_ALL'){
		let newState = action.payload;
		return newState;
	}
	return currentState;
}
export default bugsReducer;