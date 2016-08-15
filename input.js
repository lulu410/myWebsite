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

function strToArray(str){
    var dictionary = {};
    var lines = str.split("\n");
    for(var i = 0; i < lines.length; i++){
        if (lines[i] == lines[i].toLowerCase() && isNaN(lines[i].charAt(0))){
            dictionary[lines[i]]=[];
        }else{
            var chrs = lines[i].split(" ");   
            if (chrs.length == 2){
                dictionary["instructions"].push(chrs);
            }else{
                for(var j = 0; j < chrs.length; j++){
                    dictionary["numbers"].push(parseInt(chrs[j]));
                }
                
            }
        }
    }
    return dictionary;
}

function interpret(text, dictionary){
    var stack = [];
    var instructions = dictionary["instructions"];
    console.log("dictionary is \n");
    console.log(dictionary);
    console.log("instructions are \n");
    console.log(instructions);
    var numbers = dictionary["numbers"];
    console.log("numbers are ".concat(numbers));
    for(var i = 0; i < instructions.length; i++){
        var instruction = instructions[i][0];
        var argument = instructions[i][1];
        console.log("argument is ".concat(argument));
        if (instruction == "LOAD_VALUE"){            
            var number = numbers[argument];
            stack = LOAD_VALUE(stack, number);
            console.log(stack.concat("oh my god"));
        }
        else if (instruction == "ADD_TWO_VALUES"){
            stack = ADD_TWO_VALUES(stack);
            console.log(stack.concat("ohhhhhh my god"));
        }
        else if (instruction == "PRINT_ANSWER"){
            console.log("stack print ".concat(stack));
            stack = PRINT_ANSWER(stack);
            console.log(stack);
        }
    }
    return stack;

}
// var what_to_execute = {
//         "instructions": [["LOAD_VALUE", 0],
//                          ["LOAD_VALUE", 1],
//                          ["ADD_TWO_VALUES", NaN],
//                          ["LOAD_VALUE", 2],
//                          ["ADD_TWO_VALUES", NaN],
//                          ["PRINT_ANSWER", NaN]],
//         "numbers": [7, 5, 8] };

function main(){
    var text = "";
    var dictionary = {};
    $('.submit').click(function(){
        text = $('.inputbox').val();
        console.log(text);
        what_to_execute = strToArray(text);
        console.log(what_to_execute);
        $('.outputbox').text(interpret(text, what_to_execute));
        //console.log(interpret(text, what_to_execute));
    });
}

$(document).ready(main);

