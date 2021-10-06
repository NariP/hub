import { hasKey, isObjectEqual } from '@/utils';

let currentObserver: Function | null = null;
export const observe = (func: Function) => {
  // 함수를 실행함
  currentObserver = func;
  func();
  currentObserver = null;
};

export const observable = (obj: object) => {
  let observers = new Set();

  return new Proxy(obj, {
    get(target: object, key: string | symbol, receiver: any): any {
      // object['key'] 이런식으로 값을 불러 왔을 때 실행
      console.log('** Observable state is changed! **');
      currentObserver && observers.add(currentObserver);
      return hasKey(target, key) && target[key];
    },
    set(
      target: object,
      key: string | symbol,
      value: any,
      receiver: any,
    ): boolean {
      if (hasKey(target, key)) {
        if (target[key] === value) return true;
        if (JSON.stringify(target[key]) === JSON.stringify(value)) return true;
      }

      // fixme: 수정하기
      // @ts-ignore
      target[key] = value;

      // 구독하고 있는 target 에 변화가 있을 때 등록해놓은 함수 실행
      observers.forEach(fn => {
        fn instanceof Function && fn();
      });
      return true;
    },
  });
};

export class Observable {
  obj: object;
  events: Set<any>;
  currentEvent: Function | null;

  constructor(obj: object = {}) {
    this.obj = obj;
    this.events = new Set();
    this.currentEvent = null;
  }

  // observable 한 객체 반환 (Proxy)
  get() {
    const { obj, events, currentEvent } = this;
    return new Proxy(obj, {
      get(target: object, key: string | symbol, receiver: any): any {
        // add currentEvent to events
        currentEvent && events.add(currentEvent);
        return Reflect.get(obj, key);
      },
      set(
        target: object,
        key: string | symbol,
        value: any,
        receiver: any,
      ): boolean {
        // 이전 값과 현재 값이 같으면 return
        const _value = Reflect.get(obj, key);
        if (_value === value) return true;
        if (isObjectEqual(_value, value)) return true;

        // 값 수정
        Reflect.set(obj, key, value);

        // 구독하고 있는 target 에 변화가 있을 때 등록해놓은 함수 실행
        events.forEach(fn => {
          fn instanceof Function && fn();
        });
        return true;
      },
    });
  }

  observe(func: Function) {
    this.currentEvent = func;
    func();
    this.currentEvent = null;
  }
}
