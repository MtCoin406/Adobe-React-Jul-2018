function logger(store){
	return function(next){
		return function(action){
			console.group(`Action -> ${action.type}`);
			console.log('Payload -> ',action.payload);
			console.log('prev state -> ', store.getState());
			let result = next(action);
			console.log('current state -> ', store.getState());
			console.groupEnd();
			return result;
		}
	}
}
export default logger;