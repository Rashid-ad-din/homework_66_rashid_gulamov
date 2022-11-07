//Task 3
const container = document.getElementById('container');
let colors = ['red', 'green', 'blue', 'violet', 'silver'];

for (let i = 1; i < 6; i++) {
    let element = document.createElement('div');
    element.classList.add('element');
    let text = document.createTextNode('Element ');

    let index = document.createElement('span');
    index.style.color = colors[i - 1]
    let indexText = document.createTextNode(i.toString());
    index.appendChild(indexText)

    element.appendChild(text);
    element.appendChild(index);

    container.appendChild(element);
}
console.log(container)
