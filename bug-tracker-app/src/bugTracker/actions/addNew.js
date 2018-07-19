export function addNew(bugName){
	let newBug = {
		name : bugName,
		isClosed : false,
		createdAt : new Date()
	};
	var addNewAction = { type : 'ADD_NEW', payload : newBug };
	return addNewAction;
}