import { BaseEntity } from "./BaseEntity";
import { FileEnum } from "./enums/FileEnum";

export interface FileType extends BaseEntity{
    extension: string
    
}