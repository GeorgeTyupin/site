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

function setEvent() {
    let add = document.querySelector('.add').childNodes[3];
    add.addEventListener('click' , () => { 
        addRow();
    })
    

}
function main() {
    setEvent();
}

main();