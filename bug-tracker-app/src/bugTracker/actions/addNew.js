import bugServer from '../services/bugServer';

export function addNew(bugName){
	/*return function(dispatch, getState){
		let newBugData = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		bugServer
			.addNew(newBugData)
			.then(newBug => {
				var addNewAction = { type : 'ADD_NEW', payload : newBug };
				dispatch(addNewAction);
			})
	}*/

	return async function(dispatch, getState){
		let newBugData = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		let newBug = await bugServer.addNew(newBugData);
		var addNewAction = { type : 'ADD_NEW', payload : newBug };
		dispatch(addNewAction);
	}
}