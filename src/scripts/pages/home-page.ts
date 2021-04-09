// import $ from 'jquery';
import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import modal from '../components/modalHandler';
import tableHandler from '../components/tableHandler';
import FileService from '../service/dataService';

const tableHtml = document.querySelector<HTMLTableElement>(
  '#table-list tbody',
);

ready(() => {
  renderGrid();

  const dataService = new FileService();
  dataService
    .getData()
    .then(response => tableHandler(dataService.data, tableHtml))
    .catch(err => console.error(err));
});
