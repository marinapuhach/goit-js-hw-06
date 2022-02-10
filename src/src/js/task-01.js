console.log(`Number of categories: ${document.querySelectorAll('.item').length}`);
const aritemEl = document.querySelectorAll('.item');
 aritemEl.forEach((categ) => {
     console.log(`Category: ${categ.querySelector('h2').textContent}`);
     console.log(`Elements: ${categ.querySelectorAll('li').length}`);
});