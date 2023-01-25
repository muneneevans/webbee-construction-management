import {IMachineAttribute} from 'src/Store/Machines/interfaces';
import {ICategoryMachineMapping, IMachineAttributeDetails} from './interfaces';
import {RootState} from '../configureStore';
import {ICategory} from '../Categories/interfaces';

export const getMachines = ({machines}: RootState) => machines.machines;
export const getMachineCategoryMappings = ({
  machines,
  categories,
}: RootState): ICategoryMachineMapping[] => {
  return categories.categories.reduce(
    (accumulator: ICategoryMachineMapping[], current: ICategory) => {
      accumulator.push({
        title: current.name,
        categoryId: current.id,
        data: machines.machines.filter(
          machine => machine.categoryId === current.id,
        ),
      });
      return accumulator;
    },
    [],
  );
};

export const getMachineAttributes = ({
  machines,
}: RootState): IMachineAttribute[] => machines.machineAttributes;
export const getMachineAttributesWithParentAttribute = ({
  machines,
  attributes,
}: RootState) =>
  machines.machineAttributes.reduce(
    (accumulator: IMachineAttributeDetails[], current) => {
      accumulator.push({
        ...current,
        attributeDetails: attributes.attributes.find(
          item => item.id === current.attributeId,
        ),
      });
      return accumulator;
    },
    [],
  );

export const getCreateMachineAttributeProcess = ({machines}: RootState) =>
  machines.createMachineAttributeProcess;
export const getUpdateMachineAttributeProcess = ({machines}: RootState) =>
  machines.updateMachineAttributeProcess;
export const getDeleteMachineAttributeProcess = ({machines}: RootState) =>
  machines.updateMachineAttributeProcess;

export const getCreateMachineProcess = ({machines}: RootState) =>
  machines.createMachineProcess;
export const getUpdateMachineProcess = ({machines}: RootState) =>
  machines.updateMachineProcess;

export const getDeleteMachineProcess = ({machines}: RootState) =>
  machines.deleteMachineProcess;
