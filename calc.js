var str = '0';
var m = 0
$('.number').click(function(event) {
	symbol = $(this).text()
	$('.display').append(symbol)
	str += symbol
});

$('.inner_clear').click(function(event) {
	str = '0'
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
	str = Math.sqrt(Number(str))
	$('.display').text(str)
});

$('.square').click(function(event) {
	str = Math.pow(Number(str), 2)
	$('.display').text(str)
});

$('.plus').click(function(event) {
	str += '+'
	$('.display').append('+')

});

$('.minus').click(function(event) {
	str += '-'
	$('.display').append('-')

});

$('.multiply').click(function(event) {
	str += '*'
	$('.display').append('*')
});

$('.divide').click(function(event) {
	str += '/'
	$('.display').append('/')
});

$('.dot').click(function(event) {
	str += '.'
	$('.display').append('.')
});

$('.iner_result').click(function(event) {
	str = eval(str)
	$('.display').text(str)
});


