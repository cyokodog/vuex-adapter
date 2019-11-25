import { VuexAdapter } from '../../../../../../../dist';
import { store } from '../../..';
import { bar, barModulePath } from '.';

export const getBarAdapter = () => {
  return new VuexAdapter(store, bar, { modulePath: barModulePath });
};
