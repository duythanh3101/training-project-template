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
      html += `<tr>
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
  }
};

export default tableHandler;
