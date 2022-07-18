export type Fn = () => unknown;

export function call<P extends unknown[], R>(
  fn: ((...args: P) => R) | undefined,
  ...args: P
): R | undefined {
  if (fn) {
    return fn(...args);
  } else {
    return undefined;
  }
}

export type Accessible<T> = T | (() => T);

export function access<T>(accessible: Accessible<T>): T {
  if (accessible instanceof Function) {
    return accessible();
  } else {
    return accessible;
  }
}
