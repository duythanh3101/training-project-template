import { FileEnum } from '../../entities/enums/FileEnum';
import { IFileEntity } from '../../entities/IFileEntity';

const tableHandler = (
  list: Array<IFileEntity>,
  container: HTMLElement | null,
) => {
  console.log('data table', list);

  if (list && container) {
    let html = '';
    list.map(x => {
      html += `<tr data-id='${x.id}' data-type='${
        x.type
      }' data-row=''>
            <td data-label="File Type">
                ${
                  x.type == FileEnum.File
                    ? '<img src="https://img.icons8.com/color/50/000000/ms-excel.png" alt="excel-icon" class="excel-icon" />'
                    : '<i class="far fa-folder"></i>'
                }
            </td>
            <td data-label="Name">${x.name}</td>
            <td data-label="Modified">${x.modified}</td>
            <td data-label="Modified By">${x.modifiedBy}</td>
            <td></td>
        </tr>`;
    });
    container.innerHTML = html;

    // Add event click after loading finish
    // -- Only add events when innerHTML overwrites are done.
    const targetRows = container.querySelectorAll('tr[data-row]');
    for (const row in targetRows) {
      targetRows[row].addEventListener('click', onRowClick, false);
    }
  }
};

const onRowClick = (event: any): any => {
  console.log(event, 'aaaaaaaaaaaaaaaaaaaaaaaaa');
};

export default tableHandler;
