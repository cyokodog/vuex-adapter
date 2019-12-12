# vuex-adapter

A library that makes vuex type-safe.

## demo

https://github.com/cyokodog/vuex-adapter/tree/master/packages/demo

```bash
git clone git@github.com:cyokodog/vuex-adapter.git
cd vuex-adapter
npm run setup
npm run demo:serve
```

http://localhost:8080

![](https://raw.githubusercontent.com/cyokodog/vuex-adapter/master/assets/vuex-adapter-demo-1.gif)

## install

```bash
npm i -S vuex-adapter
```

## store

### root module

```ts
import { bar, barModulePath } from './modules/bar';

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
```

### sub module

```ts
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
  ...
```

### store instance

```ts
import Vue from 'vue';
import Vuex from 'vuex';

import { root } from './root';

Vue.use(Vuex);

export const store = new Vuex.Store(root);
```

## usage

```ts
import { VuexAdapter } from 'vuex-adapter';

const rootStore = new VuexAdapter(store, root);
const barStore =  new VuexAdapter(store, bar, { modulePath: barModulePath });

@Component
export default class Counter extends Vue {
  get rootCount(): number {
    // return this.$store.state.count;
    return rootStore.state.count;
  }

  get rootCountJP(): string {
    // return this.$store.getters.countJP;
    return rootStore.getters.countJP;
  }

  get barCount(): number {
    // return this.$store.state.bar.count;
    return barStore.state.count;
  }

  get barCountJP(): string {
    // return this.$store.getters['bar/countJP'];
    return barStore.getters.countJP;
  }

  rootCountUp() {
    // this.$store.commit('addCount', { qty: 1 });
    rootStore.committers.addCount({ qty: 1 });
  }
  ...
```

### intelligence

![](https://raw.githubusercontent.com/cyokodog/vuex-adapter/master/assets/vuex-adapter-demo-2.gif)
