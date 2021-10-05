import { observable } from '@/core/observer';
import { hasKey } from '@/utils';

export const createStore = (reducer: Function) => {
  // reducer 가 반환하는 객체의 상태변화를 감지하게끔 observable 함수로 감싸줌
  let state = observable(reducer());

  // immutable 한 frozenState 생성
  const frozenState = {};
  Object.keys(state).forEach(key => {
    Object.defineProperty(frozenState, key, {
      get(): any {
        return hasKey(state, key) && state[key];
      },
    });
  });

  // dispatch 로 state 값 변경
  const dispatch = (action: Object) => {
    const newState = reducer(state, action);
    state = { ...state, newState };
  };

  const getState = () => frozenState;

  return { getState, dispatch };
};
export default createStore;
