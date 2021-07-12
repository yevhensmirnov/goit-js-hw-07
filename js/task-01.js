const category = document.querySelectorAll(".item");
console.log(`В списке ${category.length} категории.`);



for (let el of category) {
    console.log(`Категория: ${el.children[0].textContent}`);
    console.log(`Количество элементов: ${el.children[1].children.length}`);
  }