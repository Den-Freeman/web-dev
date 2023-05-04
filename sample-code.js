function greeting(){
    alert('Hi there!');
}

function greetUser(name){

    alert('Hi ' + name);
}

function multiple(str1 , str2 ,str3){
    const multipleText = `(${str1} + ${str2} + ${str3})`;
    return multipleText;
}

greeting();
greetUser('Winning');

task3Element.addEventListener('click' , greeting);

const multipleString = multiple('hi' , 'welcome' , '!');
alert(multipleString);