export class Sidebar {
  constructor(listElement, onClickCallback) {
    this.listElement = listElement;
    this.onClick = onClickCallback;
  }

  renderList(words) {
    this.listElement.innerHTML = '';
    words.forEach((word, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${word.word}`;
      li.setAttribute('data-definition', word.definition);
      li.addEventListener('click', () => this.onClick(index));
      this.listElement.appendChild(li);
    });
  }
}