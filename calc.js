var str = '0';
var m = 0
$('.number').click(function(event) {
	symbol = $(this).text()
	$('.display').append(symbol)
	str += symbol
});

$('.inner_clear').click(function(event) {
	$('.display').text('')
});

$('.memory_plus').click(function(event) {
	m = String($('.display').text())
	$('.display').text('')
});

$('.memory_r').click(function(event) {
	$('.display').append(m)
});

$('.radical').click(function(event) {
	str = Math.sqrt(Number(str))
	$('.display').text(str)
});

$('.square').click(function(event) {
	str = Math.pow(Number(str), 2)
	$('.display').text(str)
});

$('.plus').click(function(event) {
		$('.display').append('+')
	str += '+'
});

$('.minus').click(function(event) {
		$('.display').append('-')
	str += '-'
});

$('.multiply').click(function(event) {
		$('.display').append('*')
	str += '*'
});

$('.divide').click(function(event) {
		$('.display').append('/')
	str += '/'
});

$('.dot').click(function(event) {
		$('.display').append('.')
	str += '.'
});

$('.iner_result').click(function(event) {
	str = eval(str)
	$('.display').text(str)
});


