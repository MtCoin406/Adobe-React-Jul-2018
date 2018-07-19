function getComparerFor(attrName){
	return function(item1, item2){
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescendingComparerFor(comparer){
	return function(item1, item2){
		return comparer(item1, item2) * -1;
	}
}

export function sort(bugs, sortBy, isDescending){
	let comparer = getComparerFor(sortBy);
	if (isDescending)
		comparer = getDescendingComparerFor(comparer);
	bugs.sort(comparer);
	let sortedBugs = [...bugs];
	let replaceAllAction = { type : 'REPLACE_ALL', payload : sortedBugs};
	return replaceAllAction;
}