
function func(store){
	return function(next){
		return function(action){
			console.log('func invoked');
			if (typeof action === 'function'){
				let actObj = action(store.getState());
				return next(actObj);
			}
			next(action);
		}
	}
}
export default func;