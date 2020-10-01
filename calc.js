var str = '0';

$('.number').click(function(event) {
	symbol = $(this).text()
	$('.display').append(symbol)
	str += symbol
console.log(str)
});

$('.inner_clear').click(function(event) {
	$('.display').text('')
});

$('.memory').click(function(event) {
	console.log(str)
});

$('.radical').click(function(event) {
	str = Math.sqrt(Number(str))
	$('.display').text(str)
	console.log(str)
});

$('.square').click(function(event) {
	str = Math.pow(Number(str), 2)
	$('.display').text(str)
	console.log(str)
});

$('.plus').click(function(event) {
		$('.display').append('+')
	str += '+'
	console.log(str)
	$(thit).removeClass('active')
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

$('.dot').click(function(event) {
		$('.display').append('.')
	str += '.'
	console.log(str)
});

$('.iner_result').click(function(event) {
	str = eval(str)
	$('.display').text(str)
		console.log(str)
});


