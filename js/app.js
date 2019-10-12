const add = $('#add');
const remove = $('#remove');
const clear = $('#clear');
let list = $('#list');
let number = 0;

add.on('click', function () {
    number ++;
    list.append($('<li>', {text: "Task number " + number}))
});

remove.on('click', function () {
    let last = list.children().last();
    last.remove();
    number --
});

clear.on('click', function () {
    list.empty();
    number = 0
});