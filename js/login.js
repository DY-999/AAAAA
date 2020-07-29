jQuery. get( '/path/to/file'，{param1: ' value1' }, function(data, textStatus, xhr) {
	//optional stuff to do after success
});

$. ajax({
url: ' /path/to/file',
type: ' default GET (Other values: POST)' ，
dataType: ' default: Intelligent Guess (other values: xm1, json, script, or html)',
data: {param1: 'value1'},
})
. done(function() {
console . log(" success");
})
fail(function() {
console .1og("error");
})
. alwvays (function() {
console .1og("complete' );
});