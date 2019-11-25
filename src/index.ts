import { Store, ActionContext } from 'vuex';

import { Getters, GettersAdapter, getGetters } from './getters';
import { Mutations, MutationsAdapter, getCommitters } from './mutations';
import { Actions, ActionsAdapter, getDispatchers } from './actions';

interface ModuleAdapter<G extends Getters, M extends Mutations, A extends Actions> {
  getters?: G;
  mutations?: M;
  actions?: A;
}

export class VuexAdapter<S, R, G extends Getters, M extends Mutations, A extends Actions> {
  private _getters: GettersAdapter<G>;
  private _committers: MutationsAdapter<M>;
  private _dispatchers: ActionsAdapter<A>;

  constructor(
    store: Store<S> | ActionContext<S, R>,
    module: ModuleAdapter<G, M, A>,
    options?: {
      modulePath?: string;
      root?: boolean;
    },
  ) {
    this._getters = getGetters<S, R, G>(store, module.getters || ({} as G), options);
    this._committers = getCommitters<S, R, M>(store, module.mutations || ({} as M), options);
    this._dispatchers = getDispatchers<S, R, A>(store, module.actions || ({} as A), options);
  }

  get getters() {
    return this._getters;
  }

  get committers() {
    return this._committers;
  }

  get dispatchers() {
    return this._dispatchers;
  }
}
