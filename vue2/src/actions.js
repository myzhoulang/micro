let actions = null;

export function init(instance){
  actions = instance
  instance.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('vue2',state, prev);
  });
}

export function changeState(state){
  actions.setGlobalState(state)
}
export default actions;