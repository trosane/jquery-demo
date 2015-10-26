/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$('#change-content').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).html(content);
});

$('#add-at-end').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).append(content);
});

$('#add-at-start').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).prepend(content);
});

$('#insert-before').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).before(content);
});

$('#move-after').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).insertAfter(content);
});

$('#surround-class').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).addClass(content);
});

$('#hide-text').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    if ($(selector).html(content).length > 12) {
        $(selector).addClass('hidden');
    }
});

$('#remove-word').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    if ($(selector):contains(content)) {
        $(selector).addClass('hidden');
    }
});





