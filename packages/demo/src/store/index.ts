import Vue from 'vue';
import Vuex from 'vuex';

import { root } from './root';

Vue.use(Vuex);

export const store = new Vuex.Store(root);
