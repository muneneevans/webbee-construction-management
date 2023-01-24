import {IProcess} from './../Shared/interfaces';
export interface ICategoriesInitialState {
  categories: ICategory[];
  createCategoryProcess: IProcess;
  deleteCategoryProcess: IProcess;
}

export interface ICategory {
  name: string;
  id: string;
}

export interface ICreateCategoryData {
  name: string;
}
