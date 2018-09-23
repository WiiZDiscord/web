alert("Bienvenue sur WiiZ Programmation\n\nSite web non fini !")

$(document).ready(function() {
	// open modal
	$('open_modal').click(function() {
		$('modal_to_open').css(
			{
				'display': 'block'
			}	
		);
	});
});
