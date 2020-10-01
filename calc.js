var str = '';

$('.number').click(function(event) {
	symbol = $(this).text()
	$('.display').append(symbol)
	str += symbol
console.log(str)
});

$('.inner_clear').click(function(event) {
	str = '';
	$('.display').text(' ')
});

$('.plus').click(function(event) {
		$('.display').append('+')
	str += '+'
	console.log(str)
});

$('.minus').click(function(event) {
		$('.display').append('-')
	str += '-'
	console.log(str)
});

$('.multiply').click(function(event) {
		$('.display').append('*')
	str += '*'
	console.log(str)
});

$('.divide').click(function(event) {
		$('.display').append('/')
	str += '/'
	console.log(str)
});

$('.iner_result').click(function(event) {
	str = eval(str)
	$('.display').text(str)
		console.log(str)
});


