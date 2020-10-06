var str = ''
var m = 0
var result

$('.number').click(function(event) {
	if (str === result) {
		str = ''
		$('.display').text('')
	}
	symbol = $(this).text()
	$('.display').append(symbol)
	str += symbol
});

$('.inner_clear').click(function(event) {
	str = ''
	$('.display').text('')
});

$('.memory_plus').click(function(event) {
	m = String($('.display').text())
});

$('.memory_r').click(function(event) {
	str += m
	$('.display').text(str)
});

$('.radical').click(function(event) {
	result = Math.sqrt(Number(str))
	$('.display').text(result)
	str = result
});

$('.square').click(function(event) {
	result = Math.pow(Number(str), 2)
	$('.display').text(result)
	str = result
});

$('.plus').click(function(event) {
		if (str[str.length - 1] !== '+') {
			str += '+'
			$('.display').append('+')
		}
});

$('.minus').click(function(event) {
		if (str[str.length - 1] !== '-') {
			str += '-'
			$('.display').append('-')
		}
});

$('.multiply').click(function(event) {
		if (str[str.length - 1] !== '*') {
			str += '*'
			$('.display').append('*')
		}
});

$('.divide').click(function(event) {
		if (str[str.length - 1] !== '/') {
			str += '/'
			$('.display').append('/')
		}
});

$('.dot').click(function(event) {
		if (str[str.length - 1] !== '.') {
			str += '.'
			$('.display').append('.')
		}
	console.log(str)
});

$('.iner_result').click(function(event) {
	result = eval(str)
	$('.display').text(result)
	str = result
});


