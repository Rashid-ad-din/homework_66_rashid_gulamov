//Task 2
const task2 = document.getElementsByClassName('element');
for (let i = 0; i < task2.length; i++) {
    const element = task2[i]
    if (element.textContent.includes('1') || element.textContent.includes('2') || element.textContent.includes('3')) {
        element.style.color = 'red';
    } else {
        element.style.color = 'green';
    }
}
