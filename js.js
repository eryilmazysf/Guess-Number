const random_number = Math.ceil(Math.random() * 100);
console.log(random_number);
const control = document.getElementById("button");
control.addEventListener("click", myfunction);
var counter = 0;
document.getElementById("number").addEventListener("keyup", function(event) {
    if (event.which === 13) {
        myfunction();

    }
});

function myfunction() {
    counter += 1;
    var number = (document.getElementById("number").value);
    if (isNaN(number)) {
        document.getElementById("result").innerHTML = 'please just enter a number';
    } else if (number < 0 || number > 100) {
        document.getElementById("result").innerHTML = 'please enter a number between 0 and 100'
    } else if (number == random_number) {
        alert(`CONGRATS!! YOU FIND IN ${counter} TIMES`)
        var next_game = confirm("You wanna play again?");
        if (next_game == true) {
            location.reload();
        } else {
            document.getElementById("result").innerHTML = "SEE YOU NEXT TIME";
            window.close();

        }

    } else if (number > random_number) {
        document.getElementById("result").innerHTML = "think lower number"
    } else {
        document.getElementById("result").innerHTML = "think higher number"
    }
    document.getElementById("number").value = "";
}