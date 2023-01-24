export enum IProcessTypes {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  DISCONNECTED = 'DISCONNECTED',
}

export interface IProcess {
  status: IProcessTypes;
  error: string;
  message: string;
}
