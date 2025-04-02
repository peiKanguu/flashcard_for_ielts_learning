export class Flashcard {
  constructor(element) {
    this.container = element;
    this.front = element.querySelector('.front');
    this.back = element.querySelector('.back');

    element.addEventListener('click', () => {
      this.container.classList.toggle('flip');
    });
  }

  display(wordObj) {
    this.container.classList.remove('flip');
    this.front.textContent = wordObj.word;
    this.back.innerHTML = `定义：${wordObj.definition}<br><br>例句1：${wordObj.example1}<br><br>例句2：${wordObj.example2}`;
  }
}