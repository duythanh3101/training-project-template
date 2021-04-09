import { FileEnum } from "../../entities/enums/FileEnum";
import { FileType } from "../../entities/FileType";
import { Folder } from "../../entities/Folder";
import { IFileEntity } from "../../entities/IFileEntity";

const dataFiles = [
    {
        id: 100,
        name: 'Hihi',
        modified: '03/03/2021',
        modifiedBy: 'Thanh Duy Pham',
        subFolders: [
            {
                id: 1,
                name: 'aaaa.exe',
                createDate: '09/04/2021',
                createBy: 'aaaa',
                type: 'FILE',
                modified: '09/03/2021',
                modifiedBy: 'Tran Minh Hoang',
            },
            {
                id: 2,
                name: 'bbb.exe',
                createDate: '09/04/2021',
                createBy: 'bbb',
                type: 'FILE',
                modified: '09/03/2021',
                modifiedBy: 'Tran Minh Hoang',
            },
            {
                subFolders: [
                    {
                        id: 3,
                        name: 'cccc.exe',
                        createDate: '09/04/2021',
                        createBy: 'cccc',
                        type: 'FILE',
                        modified: '09/03/2021',
                        modifiedBy: 'Tran Minh Hoang',
                    },
                    {
                        id: 4,
                        name: 'dddd.exe',
                        createDate: '09/04/2021',
                        createBy: 'dddd',
                        type: 'FILE',
                        modified: '09/03/2021',
                        modifiedBy: 'Tran Minh Hoang',
                    },
                ],
                type: 'FOLDER'
            },
        ],
        type: 'FOLDER'
    },

    {
        id: 5,
        name: 'eeee.exe',
        createDate: '09/04/2021',
        createBy: 'eeee',
        type: 'FILE',
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
    },
    {
        id: 6,
        name: 'ffff.exe',
        createDate: '09/04/2021',
        createBy: 'ffff',
        type: 'FILE',
        modified: '09/03/2021',
        modifiedBy: 'Tran Minh Hoang',
    },
];

class FileService {
    data: Array<IFileEntity> = [];

    public getData = async () => {
        let jsonData: any[] = dataFiles;

        jsonData.forEach(obj => {
            try {
                switch (obj.type) {
                    case FileEnum.File:
                        this.data.push(<FileType>obj);
                        break;
                    case FileEnum.Folder:
                        this.data.push(<Folder>obj);
                        break;
                    default:
                        throw new Error(
                            `Wrong file type ${JSON.stringify(obj)}`,
                        );
                }
            } catch (err) {
                console.error(err);
            }
        });
    }



    public Data() {
        return this.data;
    }
}

export default FileService;