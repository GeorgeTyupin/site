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

function newClass(){
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
            $($(rasp).children()[1]).children()[0].addEventListener('click', () => {
                $($(rasp).children()[1]).before('<input type="text" name="" id="" class="less">');
            });
        });
    }); 

}

function newLesson() {
    $(".btn").click(() => {
        console.log('hey');
        $('rasp').append('<input type="text" name="" id="" class="less">');
    });
}

function saveClass() {
    contain = event.target.parentNode.parentNode;
    // console.log($($(contain).children()[1]).children());
    temp_days = $($(contain).children()[1]).children();
    data_days = {};
    console.log(temp_days);
    for (var i = 0; i < temp_days.length; i+=2) {

        //[дети rasp]
        x =  $(temp_days[i+1]).children();
        x = x.slice(1 , x.length);
        a = [];
        // { "Понедльник" : [днти с 1 до предп] }
        data_days[temp_days[i].innerText] = $(x).each(function(index, value) {
            console.log(index);
            a.push(value.value);

        });
        console.log('h')
    }
    console.log(data_days);
}


function main() {
    //setEvent();
    newClass();
    newLesson();
}

main();