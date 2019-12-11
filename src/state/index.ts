import { Store, ActionContext } from 'vuex';

export type State = { [name: string]: any };
export type StateAdapter<S extends State> = {
  [P in keyof S]: S[keyof S];
};

export const getState = <S extends State, R>(
  store: Store<S> | ActionContext<S, R>,
  state: S,
  options?: {
    modulePath?: string;
  },
) => {
  return Object.keys(state).reduce((output, key) => {
    const path = options && options.modulePath ? `${options.modulePath}/${key}` : key;
    Object.defineProperty(output, key, {
      get() {
        return path.split('/').reduce((output, name) => {
          return output[name];
        }, store.state);
      },
    });
    return output;
  }, {}) as StateAdapter<S>;
};
