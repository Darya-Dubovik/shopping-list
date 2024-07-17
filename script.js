/* Новые элементы должны добавляться в список по нажатию на Enter */

const input = document.querySelector('#input');
const elements = document.querySelector('#items');

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {

    const pointText = input.value;

    const newPoint = document.createElement('p');
    newPoint.classList.add('item');
    
    newPoint.addEventListener('click', function () {
    newPoint.classList.toggle('done');
    })
    
    newPoint.textContent = pointText;

    if (pointText != '') {
        elements.append(newPoint);
    }

    input.value = '';

    }
});

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
