import { BaseEntity } from "./BaseEntity";

export interface Folder extends BaseEntity{
    subFolders: BaseEntity[];
}