const add = $('#add');
const remove = $('#remove');
const clear = $('#clear');
let list = $('#list');
let number = 0;
let newtask = $('#newtask');

console.log(newtask)

add.on('click', function () {
    if (newtask.val() !== '') {
        number ++;
        list.append($('<div>', {text: "Task number " + number + ': ' + newtask.val(), class: 'task'}))
        remove.attr('hidden', false);
        clear.attr('hidden', false)
    } else {
        alert('Task name cannot be empty!')
    }

});

remove.on('click', function () {
    let last = list.children().last();
    last.remove();
    number --;
    if (number==0) {
        $(this).attr('hidden', true);
        clear.attr('hidden', true)
    }
});

clear.on('click', function () {
    list.empty();
    number = 0;
    $(this).attr('hidden', true);
    remove.attr('hidden', true)
});