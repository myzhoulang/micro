import {
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";

export const state = {
  age: 1
}

const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((currentState, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  Object.assign(state, currentState)
});
export default actions