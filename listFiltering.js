// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

/* filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

const l = [1, 2, 'a', 'b'];

/* function filter_list(l) {
	const newArr = l.filter((e) => e !== '');
	return typeof e === 'number';
} */

//var filtered = l.filter(function (item) {
//	return typeof item === 'number';
//});

//console.log(filtered);

function filter_list(l) {
	return l.filter((e) => {
		return typeof e !== 'string';
	});
}

console.log(filter_list([1, 2, 'a', 'b']));
