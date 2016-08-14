function LOAD_VALUE(stack, number){
    stack.push(number);
    return stack;
}

function PRINT_ANSWER(stack){
    return stack.pop();
}

function ADD_TWO_VALUES(stack){
    var first = stack.pop();
    var second = stack.pop();
    var total = first + second;
    stack.push(total);
    return stack;
}

function interpret(text){
    var stack = [];

    return text;

}

function main(){
    var text = "";
    $('.submit').click(function(){
        text = $('.inputbox').val();
        $('.outputbox').text(interpret(text));
    });
}

$(document).ready(main);

