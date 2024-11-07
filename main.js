// Counter for age block
const btnContainer = document.querySelector('.form__age');

document.querySelector('.form__button-increment').addEventListener('click', (e) => {
    e.preventDefault();
    const input = btnContainer.querySelector('input[type=number]');
    input.value = parseInt(input.value) + 1;
});

document.querySelector('.form__button-decrement').addEventListener('click', (e) => {
    e.preventDefault();
    const input = btnContainer.querySelector('input[type=number]');
    input.value = parseInt(input.value) - 1;
});


// Check all option
const btnCheckAll = document.getElementById('selectAll');
const checkboxeOptions = document.querySelectorAll('.option');

btnCheckAll.addEventListener('change', () => {
        checkboxeOptions.forEach((checkbox) => {
        checkbox.checked = btnCheckAll.checked;
    });
});

checkboxeOptions.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        btnCheckAll.checked = Array.from(checkboxeOptions).every((box) => box.checked);
    });
});

// Add university button
const addButton = document.querySelector('.form__add-button');
const universityInputsContainer = document.querySelector('.form__university-inputs');

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const inputGroup = document.createElement('div');
    inputGroup.classList.add('form__input-group');

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('form__input');
    input.placeholder = 'Например, ВолГУ';

    const removeButton = document.createElement('button');
    removeButton.classList.add('form__remove-button');

    removeButton.addEventListener('click', () => {
        inputGroup.remove();
    });

    inputGroup.appendChild(input);
    inputGroup.appendChild(removeButton);

    universityInputsContainer.appendChild(inputGroup);
});
