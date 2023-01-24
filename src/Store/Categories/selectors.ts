import {RootState} from '../configureStore';

export const getCategories = ({categories}: RootState) => categories.categories;
export const getCreateCategoryProcess = ({categories}: RootState) =>
  categories.createCategoryProcess;

export const getDeleteCategoryProcess = ({categories}: RootState) =>
  categories.deleteCategoryProcess;

export const getUpdateCategoryProcess = ({categories}: RootState) =>
  categories.updateCategoryProcess;
