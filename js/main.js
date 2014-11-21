jQuery(function($) {
	var radio_btn = $('#terms').change(function () {
 
		// First, clear out all radio buttons
		radio_btn.parent().removeClass('checked');
 
		// Add the checked class to the parent. (probably a label)
		$(this).parent().addClass('checked');
 
	});
});
