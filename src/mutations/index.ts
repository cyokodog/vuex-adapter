import { Store, ActionContext } from 'vuex';

export type Mutations = { [name: string]: (state: any, payload: any) => void };
type MutationsPayload<T> = T extends (state: any, payload: infer U) => void ? U : never;
export type MutationsAdapter<M extends Mutations> = {
  [P in keyof M]: M[P] extends (state: any) => void
    ? () => void
    : (payload: MutationsPayload<M[P]>) => void;
};

export const getCommitters = <S, R, M extends Mutations>(
  context: Store<S> | ActionContext<S, R>,
  mutations: M,
  options?: {
    modulePath?: string;
    root?: boolean;
  },
) => {
  return Object.keys(mutations).reduce((output: { [name: string]: any }, key: string) => {
    output[key] = (payload: any) => {
      const name = options && options.modulePath ? `${options.modulePath}/${key}` : key;
      context.commit(name as string, payload, options || {});
    };
    return output;
  }, {}) as MutationsAdapter<M>;
};
