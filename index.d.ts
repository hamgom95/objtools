type Class = { new(...args: any[]): any; };
type PropKey = string | number | symbol;

export function setDefault(this: Object, key: PropKey, defaultValue: any): any;
export function setPath<V>(this: Object, value: V, ...levels: PropKey[]): V;
export function getPath(this: Object, ...levels: PropKey[]): any;

export function register(cls: Class): Class;