import '../styles/style.scss';
import '../fonts/font.scss';
import myCalendar from './app1';
window.onload = function() {
  let rootElement = document.getElementById('root');
  myCalendar(rootElement, 'selectRange', 35, new Date);
}
