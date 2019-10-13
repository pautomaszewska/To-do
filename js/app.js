const add = $('#add');
const remove = $('#remove');
const clear = $('#clear');
let list = $('#list');
let number = 0;
let newtask = $('#newtask');
let tasklist = [];

function contains(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}

add.on('click', function () {
    if (newtask.val() !== '' && contains(tasklist, newtask.val())===false) {
        number ++;
        list.append($('<div>', {text: "Task number " + number + ': ' + newtask.val(), class: 'task'}));
        remove.attr('hidden', false);
        clear.attr('hidden', false);
        tasklist.push(newtask.val());
    } else if (contains(tasklist, newtask.val())===true){
        alert('This task already exists!')
    } else {
        alert('Task name cannot be empty!')
    }

});

remove.on('click', function () {
    let last = list.children().last();
    last.remove();
    number --;
    tasklist.pop(last);
    if (number==0) {
        $(this).attr('hidden', true);
        clear.attr('hidden', true)
    }
});

clear.on('click', function () {
    list.empty();
    number = 0;
    tasklist=[];
    $(this).attr('hidden', true);
    remove.attr('hidden', true)
});
