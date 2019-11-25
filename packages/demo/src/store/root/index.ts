import { bar, barModulePath } from './modules/bar';

export const rootState = {
  count: 5,
};
export type RootState = typeof rootState;

export const root = {
  state: rootState,
  getters: {
    count(state: RootState) {
      return state.count;
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
