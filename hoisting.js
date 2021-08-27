var example;
console.log(example);
example = "I am th example";

// console.log(example);
// let example = "I'm the example!";   

// 1
var hello = 'world';
console.log(hello);

// 2
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4
var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food= 'gone';
    console.log(food);
}
eat();

// 5
console.log(food);
var mean = function(){
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
    
}
console.log(food);
mean();

// 6
var genre = 'disco';
function rewind(){
    genre = 'rock';
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();

// 7
doo = "san ose";
console.log(doo);
function learn(){
    doo = "seattle";
    console.log(doo);
    var doo = "burbank";
    console.log(doo);
}
console.log(doo);
learn();

// 8
function makeDoo(name, students){
    const doo = {};
    doo.name = name;
    doo.students = students;
    if(doo.students > 50){
        doo.hiring = true;
    }
    else if(doo.students <= 0){
        doo = "closed for now";
    }
    return doo;
}
console.log(makeDoo("Chicago", 65));
console.log(makeDoo("Berkeley", 0));













