import { Store, ActionContext } from 'vuex';

export type Getters = { [name: string]: (state: any) => any };
export type GettersAdapter<G extends Getters> = {
  [P in keyof G]: ReturnType<G[keyof G]>;
};

export const getGetters = <S, R, G extends Getters>(
  store: Store<S> | ActionContext<S, R>,
  getters: G,
  options?: {
    modulePath?: string;
  },
) => {
  return Object.keys(getters).reduce((output, key) => {
    const name = options && options.modulePath ? `${options.modulePath}/${key}` : key;
    Object.defineProperty(output, key, {
      get() {
        return store.getters[name];
      },
    });
    return output;
  }, {}) as GettersAdapter<G>;
};
