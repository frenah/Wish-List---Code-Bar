/* Exercise 1: Wish list */

//Appends entered item to the html as a list. Later item is text entered to the webpage
function addToList(item) {
	$('#items').append('<li>' + item + "<span class='label pending'>Pending</span>" + '</li>');
}

//The event of clicking on add to list causes the entered text to be appended to the webpage
$(document).on("click", "#add-to-list", function() {
	addToList($("#item").val());
//This clears the wish list input box so you can easily enter something new
	$("#item").val("");
//This places tge curser back to the input box for you (you're welcome)
	$("#item").focus();
//updateTotal updates the pending vs active part of the wihs list
	updateTotal()
});

//The event of clicking of clicking the "pending" box on the page turns them into "done!"
$(document).on("click", ".label.pending", function() {
//Finds the appropriate place to append "done" and then apppends it in the next line
	var li_node = $(this).parent();
	li_node.append("<span class='label success'>Done!</span>");
//Removes the pending box
	$(this).remove();
//Adds the class completed fot the CSS to play with
	li_node.addClass('completed');
//updateTotal updates the pending vs active part of the wihs list
	updateTotal()
});

//This function updates the total active vs pending counter
function updateTotal() {
//creates variables for how many elements there are with the given classes
	var pending = $(".pending").length
	var completed = $(".completed").length
//replaces the appropriate text with the updated information
	$(".total").text("Pending: " + pending + " Completed: " + completed) 	
}


















var JoesVibe = "Immense"

function Dabbing() {
	var Awesome = 0;
	JoesVibe = Awesome;
}

Dabbing()

JoesVibe