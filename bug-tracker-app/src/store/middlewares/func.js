
function func(store){
	return function(next){
		return function(action){
			if (typeof action === 'function'){
				let actObj = action(store.getState());
				return next(actObj);
			}
			next(action);
		}
	}
}
export default func;