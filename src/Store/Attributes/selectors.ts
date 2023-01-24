import {RootState} from '../configureStore';

export const getCreateAttribute = ({attributes}: RootState) =>
  attributes.createAttributeProcess;

export const getAttributes = ({attributes}: RootState) => attributes.attributes;

export const getDeleteAttributeProcess = ({attributes}: RootState) =>
  attributes.deleteAttributeProcess;

export const getUpdateAttributePRocess = ({attributes}: RootState) =>
  attributes.updateAttributeProcess;
