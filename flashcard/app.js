console.log("JS 加载成功");
import { loadWordsFromFile } from './components/fileHandler.js';
import { Flashcard } from './components/flashcard.js';
import { Sidebar } from './components/sidebar.js';
import { AppState } from './components/state.js';

const flashcardElement = document.getElementById('flashcard');
const wordListElement = document.getElementById('word-list');
const fileInput = document.getElementById('file-input');
const expandBtn = document.getElementById('expandBtn');
const sidebar = document.getElementById('sidebar');

const flashcard = new Flashcard(flashcardElement);
const sidebarComponent = new Sidebar(wordListElement, handleWordClick);

document.getElementById('uploadBtn').addEventListener('click', () => fileInput.click());
document.getElementById('nextBtn').addEventListener('click', () => {
  AppState.next();
  flashcard.display(AppState.getCurrentWord());
});

fileInput.addEventListener('change', async () => {
  const words = await loadWordsFromFile(fileInput.files[0]);
  AppState.setWords(words);
  sidebarComponent.renderList(words);
  flashcard.display(words[0]);
});

document.getElementById('shuffleBtn').addEventListener('click', () => {
  AppState.shuffle();
  sidebarComponent.renderList(AppState.words);
  flashcard.display(AppState.getCurrentWord());
});

document.getElementById('collapseBtn').addEventListener('click', () => {
  sidebar.classList.add('collapsed');
  expandBtn.classList.remove('hidden');
});

expandBtn.addEventListener('click', () => {
  sidebar.classList.remove('collapsed');
  expandBtn.classList.add('hidden');
});

function handleWordClick(index) {
  AppState.setCurrentIndex(index);
  flashcard.display(AppState.getCurrentWord());
}