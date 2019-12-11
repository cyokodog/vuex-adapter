import { ActionContext } from 'vuex';

import { RootState } from '../..';
import { getRootAdapter } from '../../adapter';
import { getBarAdapter } from './adapter';
import { JPNumber } from '../../../../jp-number';

const barState = {
  count: 10,
};
type BarState = typeof barState;

export const barModulePath = 'bar';

export const bar = {
  namespaced: true,
  state: barState,
  getters: {
    countJP(state: BarState) {
      return JPNumber(state.count);
    },
  },
  mutations: {
    addCount(state: BarState, payload: { qty: number }) {
      state.count += payload.qty;
    },
    clearCount(state: BarState) {
      state.count = 0;
    },
  },
  actions: {
    passCountToRoot(context: ActionContext<BarState, RootState>) {
      const rootStore = getRootAdapter();
      const barStore = getBarAdapter();
      // or
      // const rootStore = new VuexAdapter(context, root, { root: true });
      // const barStore = new VuexAdapter(context, bar);

      // context.commit('addCount', { qty: context.state.count }, { root: true });
      rootStore.committers.addCount({ qty: context.state.count });

      // context.commit('clearCount');
      // context.dispatch('dummyAction');
      barStore.committers.clearCount();
      barStore.dispatchers.dummyAction();
    },
    dummyAction() {
      console.log('called dummyAction');
    },
  },
};
