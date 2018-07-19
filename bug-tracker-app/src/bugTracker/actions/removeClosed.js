export function removeClosed(){
	return function(storeState){
		let closedBugs = storeState.bugsData.filter(bug => bug.isClosed);
		let removeAction = { type : 'REMOVE', payload : closedBugs};
		return removeAction;
	}
	
}