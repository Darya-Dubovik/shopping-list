/* Новые элементы должны добавляться в список по нажатию на Enter */

const input = document.querySelector('#input');
const items = document.querySelector('#item');
const pointContainer = document.querySelector('.groceries');

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {

    const pointText = input.value;

    const newPoint = document.createElement('p');
    newPoint.classList.add('item');
    newPoint.textContent = pointText;

    if (pointText != '') {
        pointContainer.append(newPoint);
    }
  
    const elements = document.querySelectorAll('.item'); 
    for (let item of elements) {
        item.addEventListener('click', function () {
        item.classList.toggle('done');
        })
    }

    input.value = '';

    }
});

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
