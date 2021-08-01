add = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 + operand_2;
    jQuery('#result').html(result);

	result = operand_1 + operand_2

	output = operand_1 + '+' + operand_2 + '=' + result;
	out_style = "<span class='coral'>" + output + "</span>";
	jQuery('#result').html(output);

	old = jQuery('#history').html();
	jQuery('#history').html(old + out_style + "<br>" + "<br>");

}

sub = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 - operand_2;
    jQuery('#result').html(result);

	result = operand_1 - operand_2

	output = operand_1 + '-' + operand_2 + '=' + result;
	out_style = "<span class='olive'>" + output + "</span>";
	jQuery('#result').html(output);

	old = jQuery('#history').html();
	jQuery('#history').html(old + out_style + "<br>" + "<br>");

}

mul = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 * operand_2;
    jQuery('#result').html(result);

	result = operand_1 * operand_2

	output = operand_1 + '*' + operand_2 + '=' + result;
	out_style = "<span class='lime'>" + output + "</span>";
	jQuery('#result').html(output);

	old = jQuery('#history').html();
	jQuery('#history').html(old + out_style + "<br>" + "<br>");

}

divi = function() {
    operand_1 = parseInt(jQuery('#operand_1').val());
    operand_2 = parseInt(jQuery('#operand_2').val());
    result = operand_1 / operand_2;
    jQuery('#result').html(result);

	result = operand_1 / operand_2

	output = operand_1 + '/' + operand_2 + '=' + result;
	out_style = "<span class='yellow'>" + output + "</span>";
	jQuery('#result').html(output);

	old = jQuery('#history').html();
	jQuery('#history').html(old + out_style + "<br>" + "<br>");

}

reveal = function() {

	jQuery('#history').show()
}

invisible = function() {

	jQuery('#history').hide()
}



setup = function() {
  jQuery('#add').click(add);
  jQuery('#sub').click(sub);
  jQuery('#mul').click(mul);
  jQuery('#divi').click(divi);
  jQuery('#show').click(reveal);
  jQuery('#hide').click(invisible);
  jQuery('#div').click(div);

}

jQuery(document).ready(setup)
