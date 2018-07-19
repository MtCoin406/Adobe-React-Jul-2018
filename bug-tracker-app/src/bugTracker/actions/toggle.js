import bugServer from '../services/bugServer';

export function toggle(bugToToggle){
	return async function(dispatch, getState){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		let toggledBug = await bugServer.update(toggledBugData);
		let updateAction = { type : 'UPDATE', payload : toggledBug };
		dispatch(updateAction);			

	}
}