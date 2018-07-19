import bugServer from '../services/bugServer';

export function load(){
	
	/*return function(dispatch, getState){
		bugServer
			.load()
			.then(bugs => {
				let loadAction = { type : 'LOADED', payload : bugs};
				dispatch(loadAction);
			});
	}*/

	return async function(dispatch, getState){
		try{
			let bugs = await bugServer.load();
			let loadAction = { type : 'LOADED', payload : bugs};
			dispatch(loadAction);
		} catch (err){
			console.log(err);
		}
	}
	
}