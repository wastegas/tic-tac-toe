$(document).ready(function() {
	$('td').click(function() {
		let thisIndex = $('td').index(this);
		$('td:eq(' + thisIndex +')').html('X');
	})
})
