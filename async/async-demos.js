var app = (function(){
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Client] result = ${result}`);
	}

	function addAsync(x,y, z){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning result`);
			if (typeof callback === 'function')
				callback(result);
		},3000);
	}

	function addAsyncClient(x,y){
		console.log(`[@Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[@Client] result = ${result}`);
		});
	}

	function addAsyncPromise(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);

		var promise = new Promise(function(resolve, reject){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning result`);
				resolve(result);
			},3000);
		});

		return promise;
	}

	return { addSyncClient, addAsyncClient, addAsyncPromise };

})();