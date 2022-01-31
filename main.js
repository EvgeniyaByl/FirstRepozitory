//ts-check;
"use strict";
let login = prompt('Login?', '');

if (login == ('' || null)) {
    alert('Отмена');
}
else if (login == 'Админ') {
    let pass = prompt('Пароль?', '');
    if (pass == 'Я главный') {
        alert('Здравствуйте!');
    }
    else if (pass == ('' || null)) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
}
else {
    alert('Я вас не знаю');
}
