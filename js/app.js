const add = $('#add');
const remove = $('#remove');
const clear = $('#clear');
let list = $('#list');
let number = 0;

add.on('click', function () {
    number ++;
    list.append($('<li>', {text: "Task number " + number}));
    remove.attr('disabled', false);
    clear.attr('disabled', false)
});

remove.on('click', function () {
    let last = list.children().last();
    last.remove();
    number --
});

clear.on('click', function () {
    list.empty();
    number = 0;
    remove.attr('disabled', true);
    $(this).attr('disabled', true)
});