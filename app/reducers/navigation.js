import MainStack from '../navigators/mainstack';

const initialState = MainStack.router.getStateForAction(MainStack.router.getActionForPathAndParams('Home'));

export const navReducer = (state = initialState, action) => {
  if(state.routes[state.routes.length-1].routeName==action.routeName){
    return state
  }else{

  const nextState = MainStack.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
  // return state;
}
};
