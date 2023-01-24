import {IProcess} from './../Shared/interfaces';
export interface IAttributeInitialState {
  createAttributeProcess: IProcess;
  deleteAttributeProcess: IProcess;
  updateAttributeProcess: IProcess;
  attributes: IAttribute[];
}

export enum IAttributeType {
  text = 'TEXT',
  number = 'NUMBER',
  date = 'DATE',
  checkbox = 'CHECKBOX',
}

export interface IAttribute {
  id: string;
  name: string;
  categoryId: string;
  type: IAttributeType;
  isTitle: boolean;
}
