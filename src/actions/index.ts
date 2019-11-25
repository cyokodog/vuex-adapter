import { Store, ActionContext } from 'vuex';

export type Actions = { [name: string]: (state: any, payload: any) => any };
type ActionsPayload<T> = T extends (actionContext: any, payload: infer U) => any ? U : never;
export type ActionsAdapter<A extends Actions> = {
  [P in keyof A]: A[P] extends (state: any) => any
    ? () => Promise<any>
    : (payload: ActionsPayload<A[P]>) => Promise<any>;
};

export const getDispatchers = <S, R, A extends Actions>(
  context: Store<S> | ActionContext<S, R>,
  actions: A,
  options?: {
    modulePath?: string;
    root?: boolean;
  },
) => {
  return Object.keys(actions).reduce((output: { [name: string]: any }, key: string) => {
    output[key] = (payload: any) => {
      const name = options && options.modulePath ? `${options.modulePath}/${key}` : key;
      return context.dispatch(name as string, payload, options || {});
    };
    return output;
  }, {}) as ActionsAdapter<A>;
};
