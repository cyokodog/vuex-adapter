import { VuexAdapter } from '../../../../../dist';

import { store } from '../../store';
import { root } from '.';

export const getRootAdapter = () => {
  return new VuexAdapter(store, root);
};
