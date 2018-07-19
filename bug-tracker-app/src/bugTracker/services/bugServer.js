import axios from 'axios';

let baseUrl = 'http://localhost:3030/bugs';

function load(){
	return axios.get(baseUrl)
		.then(response => response.data)
}

function addNew(bugData){
	return axios.post(baseUrl, bugData)
		.then(response => response.data);
}

function update(bugData){
	return axios.put(`${baseUrl}/${bugData.id}`, bugData)
		.then(response => response.data);	
}

function remove(bug){
	return axios.delete(`${baseUrl}/${bug.id}`)
		.then(response => response.data);	
}

let bugServer = { load, addNew, update, remove };

export default bugServer;