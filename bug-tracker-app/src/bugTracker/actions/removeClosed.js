import bugServer from '../services/bugServer';
export function removeClosed(){
	return function(dispatch, getState){
		let closedBugs = getState().bugsData.filter(bug => bug.isClosed);
		closedBugs.forEach(async function(closedBug){
			await bugServer.remove(closedBug);
			let removeAction = { type : 'REMOVE', payload : closedBug};
			dispatch(removeAction);
		});
	}
	
}