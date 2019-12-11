import { bar, barModulePath } from './modules/bar';
import { JPNumber } from '../../jp-number';

export const rootState = {
  count: 5,
};
export type RootState = typeof rootState;

export const root = {
  state: rootState,
  getters: {
    countJP(state: RootState) {
      return JPNumber(state.count);
    },
  },
  mutations: {
    addCount(state: RootState, payload: { qty: number }) {
      state.count += payload.qty;
    },
  },
  modules: {
    [barModulePath]: bar,
  },
};
