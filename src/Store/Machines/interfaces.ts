import {IAttribute} from 'src/Store/Attributes/interfaces';
import {IProcess} from './../Shared/interfaces';

export interface IMachineInitialState {
  createMachineProcess: IProcess;
  updateMachineProcess: IProcess;
  deleteMachineProcess: IProcess;

  updateMachineAttributeProcess: IProcess;

  machines: IMachine[];
  machineAttributes: IMachineAttribute[];
}
export interface IMachine {
  id: string;
  categoryId: string;
}

export interface IMachineAttribute {
  id: string;
  attributeId: string;
  value: string | number | boolean | Date | null;
  machineId: string;
}
export interface IMachineAttributeDetails extends IMachineAttribute {
  attributeDetails: IAttribute;
}

export interface ICategoryMachineMapping {
  title: string;
  categoryId: string;
  data: IMachine[];
}
