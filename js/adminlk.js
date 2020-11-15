function addRow () {
    contein = document.querySelector('.container');
 
    plc = [
        'учитель' ,
        'кол-во часов' ,
        'предмет'
    ]
 
    attr = [
        'teacher',
        'h/w',
        'subject',
        'class' 
    ]
 
    // Создаем row (линия с информацией)
    row = document.createElement('div');
    row.classList.add ('row');
    contein.appendChild(row);
    row.name = attr.pop();
 
    div = document.createElement('div');
    div.classList.add ('col-3');
    row.appendChild(div);
 
    for (i=0;i<3;i++) {
        div = document.createElement('div');
        div.classList.add ('col');
        row.appendChild(div);
 
        inp = document.createElement('input');
        div.appendChild(inp);
        inp.placeholder  = plc.pop();
        inp.name = attr.pop();
    }
 
    div = document.createElement('div');
    div.classList.add ('col-3');
    row.appendChild(div);
 
}
/*
function setEvent() {
    let add = document.querySelector('.add').childNodes[3];
    add.addEventListener('click' , () => { 
        addRow();
    })
 
 
}
*/
 
days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
 
//cоздаем класс
function newClass(){
    //создаем сам класс по нажатию на кнопку
    document.querySelector(".new_class").addEventListener('click', () => {
        $('.prev').append('<div class="roll_class"></div>');
        temp = $('.roll_class');
        temp = temp[temp.length - 1];
        $(temp).append('<div class="row"></div>');
        $(temp).append('<div class="class_content row"></div>');
        sub_temp = $(temp).children()[0];
        $(sub_temp).append('<div class="triangle-right button"></div>');
        $(sub_temp).append('<input type="text" class="class_number">');
        $(sub_temp).append('<button  class="submit" onclick="saveClass()">Сохранить</button>');
        //создаём дни недели по нажатию на кнопку
        $(sub_temp).children()[0].addEventListener('click' , (event) => {
            elem = event.target.parentNode.parentNode;
            elem = $(elem).children()[1];
            count = $(elem).children().length / 2;
            if (count == days.length) {
                alert("учебные дни закончились");
                return;
            }
            $(elem).append('<div class="col-2 days">' + days[count] +'</div>');
            $(elem).append('<div class="col-10 rasp">');
            rasp = $(elem).children();
            rasp = rasp[rasp.length - 1];
            $(rasp).append('<div class="triangle-right_2 button"></div>');
            $(rasp).append('<div class="add_lesson_mid"><div class="btn">+</div></div>');
            $($(rasp).children()[1]).children()[0].addEventListener('click', newLesson);
            /*$($(rasp).children()[1]).children()[0].addEventListener('click', () => {
                $($(rasp).children()[1]).before('<input type="text" name="" id="" class="less">');
            });*/
        });
    }); 
 
}
 
//добавляем урок
function newLesson() {
    $(this.parentNode).before('<input type="text" name="" id="" class="less">');
}

//собираем данные и формируем массив для отправки на сервер
function saveClass() {
    contain = event.target.parentNode.parentNode;
    console.log(contain);
    data_class = {};
    /* шаблон класса
    [ 
    class : {
        name : '';
        week : [
            day : {
                name : '';
                lesson : [];
                }
            ]
        }
    ]
    */
    //Получаем названия класса
    data_class.name = contain.querySelector('.class_number').value;
 
    //Получаем названия дней
    data_class.week = []
    name_days = contain.querySelectorAll('.days')
    name_days.forEach(elem => {
                data_class.week.push({name:elem.innerText})
    });
 
    //Получаем уроки    
    for ( i = 0; i < data_class.week.length; i++) {
        data_class.week[i].lesson = []
        lessons_input = contain.querySelectorAll(".rasp")[i].querySelectorAll("input")
 
        lessons_input.forEach(elem => {
            data_class.week[i].lesson.push(elem.value)
        });
    }
    sendData(data_class);
}
 
//Создание превью класса
function createMinClass(name){
    $('.prev').append('<div class="roll_class"></div>');
    temp = $('.roll_class');
    temp = temp[temp.length - 1];
    $(temp).append('<div class="row"></div>');
    $(temp).append('<div class="class_content row"></div>');
    sub_temp = $(temp).children()[0];
    $(sub_temp).append('<div class="triangle-right button"></div>');
    $(sub_temp).append(`<input type="text" class="class_number" value=${name}>`);
    $(sub_temp).append('<button  class="submit" onclick="saveClass()">Сохранить</button>');
}

//проверка открыто ли закрыто расписание у класса
function chekingOpenClass(event) {
    if (event.target.classList.contains('open') == false || event.target.classList.contains('close') == false) {
        secondLoadData(event.target);
        event.target.classList.add('open');
        console.log(event.target.classList);
    }
    else if (event.target.classList.contains('open') == false && event.target.classList.contains('close') == true) {
        //здесь должен быть вызов функции, которя будет разворачивать расписание
    }
    else if (event.target.classList.contains('open') == true && event.target.classList.contains('close') == false) {
        //здесь должен быть вызов функции, которя будет сворачивать расписание
    }
}

//создание блока с названием класса в боковое меню
function createMenuElem(classes){
    classes.forEach(elem => {
        console.log(elem);
        $('.menu').append(`<div class="menu_class-1">${elem}</div>`);
    });
}
 
//Отладка для ответа отправки данных
function success(response){
    console.log(response);
}
 //сохраниение классов
function sendData(data) {
    $.post("inputData.php", {data : data}, success = success);
}
//первый рендер странички превью классов
function renderFirst(response){
    console.log("рендер");
    response = JSON.parse(response);
    if(!response){
        return
    }
    classes_name = [];
    //рендер по спику имен классов
    response.forEach(elem => {
        str = elem.slice(-5);
        elem = elem.substr(0, elem.length - str.length);
        classes_name.push(elem);
        createMinClass(elem);
    });
    createMenuElem(classes_name);
    //Вызов функции проверяющей открыто ли наше расписание
    $(".triangle-right").bind('click', chekingOpenClass);
}

//рендеринг расписания
function renderSecond(response){
    response = JSON.parse(response);
    if(!response){
        return
    }
    class_rasp = $(`input[value=${response['name']}]`).parent().parent();  
    days.forEach(elem => {
        console.log(elem)
        $($(class_rasp).children()[1]).append(`<div class="col-2 days">${elem}</div>`);
    });
    //$($(class_rasp).children()[1]).append('<div class="col-2 days">Понедельник</div>');
    
}

//получение с сервера структуры классов
function secondLoadData(temp) {
    data = temp.parentNode.querySelector('.class_number').value
    $.get("secondLoadData.php", {data : data}, success = renderSecond);
}

//получение с сервера названий классов
function firstLoadData(){
    $.post("firstLoadData.php" , success = renderFirst);
}
 
function main() {
    //setEvent();
    firstLoadData();
    newClass();
    newLesson();   
}
 
main();