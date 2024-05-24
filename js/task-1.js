
const liCategories = document.querySelector('#categories');


const countOfCategories = (elementOfMarkup) => {
    console.log(`Number of categories: ${elementOfMarkup.children.length}`);

    for (const elem of [...elementOfMarkup.children]) {
        console.log(`Category: ${elem.firstElementChild.textContent}`);
        console.log(`Elements: ${elem.lastElementChild.children.length}`);
    }
}
countOfCategories(liCategories);


