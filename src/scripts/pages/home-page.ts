import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';

function myFunction() {
  console.log('hello');
}
ready(() => {
  renderGrid();
});
