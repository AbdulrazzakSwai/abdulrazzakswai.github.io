import { setCertificationsAwardedCount, handleScrollAnimation } from './index_statistics-counter.js';
import { initTerminalTyping } from './index_terminal.js';

window.onload = () => {
  setCertificationsAwardedCount();
  initTerminalTyping();
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);