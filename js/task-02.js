    const ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];

    const ingredientsEl = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = ingredients[i]
    ingredientsEl.append(liEl)
}
console.log(ingredientsEl)