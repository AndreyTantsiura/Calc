var symbol = '';

$('.number').click(function(event) {
	symbol = $(this).text()
	$('.display').append(symbol)
});

$('.plus').one('click', function(event) {
	$('.display').append('+')
});

$('.iner_result').one('click', function(event) {
	$('.display').val()
});

$('.inner_clear').click(function(event) {
	$('.display').text(' ')
});