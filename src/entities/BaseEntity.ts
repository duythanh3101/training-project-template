import { FileEnum } from "./enums/FileEnum";

export interface BaseEntity{
    id: string,
    createAt: Date,
    createBy: string,
    name: string,
    type: FileEnum
}