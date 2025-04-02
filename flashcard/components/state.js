export const AppState = {
  words: [],
  currentIndex: 0,

  setWords(words) {
    this.words = words;
    this.currentIndex = 0;
  },

  getCurrentWord() {
    return this.words[this.currentIndex];
  },

  setCurrentIndex(index) {
    this.currentIndex = index;
  },

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.words.length;
  },

  shuffle() {
    for (let i = this.words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.words[i], this.words[j]] = [this.words[j], this.words[i]];
    }
    this.currentIndex = 0;
  }
};