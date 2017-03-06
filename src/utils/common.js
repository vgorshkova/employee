export function toULCase( initialString ) {
	return initialString[0].toLocaleUpperCase() + initialString.slice(1).toLocaleLowerCase()
}

//
// items - array of items
// id - id, which need to find
// propname - string property name, need to be returned
//          - if 'undefined' return the item
//
export function findItemById( items, id, propName ) {
	if (items && items.length) {
		const findItem = items.filter( item => (item.id == id));

		if (propName)
			return findItem[0] && findItem[0][propName];
		else
			return findItem;
	}

	return  undefined;
}