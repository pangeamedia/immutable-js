import OrderedIterable = require('./OrderedIterable');
declare class Vector<T> extends OrderedIterable<T, Vector<T>> {
    constructor(...values: T[]);
    static empty(): Vector<any>;
    static fromArray<T>(values: T[]): Vector<T>;
    public length: number;
    public has(index: number): boolean;
    public get(index: number): T;
    public first(): T;
    public last(): T;
    public empty(): Vector<T>;
    public set(index: number, value: T): Vector<T>;
    public push(...values: T[]): Vector<T>;
    public pop(): Vector<T>;
    public delete(index: number): Vector<T>;
    public unshift(...values: T[]): Vector<T>;
    public shift(): Vector<T>;
    public reverse(): Vector<T>;
    public merge(vector: Vector<T>): Vector<T>;
    public concat(...vectors: Vector<T>[]): Vector<T>;
    public slice(begin: number, end?: number): Vector<T>;
    public splice(index: number, removeNum: number, ...values: T[]): Vector<T>;
    public isTransient(): boolean;
    public asTransient(): Vector<T>;
    public asPersistent(): Vector<T>;
    public clone(): Vector<T>;
    public iterate(fn: (value?: T, index?: number, vector?: Vector<T>) => any, thisArg?: any): boolean;
    public toArray(): T[];
    private _origin;
    private _size;
    private _level;
    private _root;
    private _tail;
    private _ownerID;
    private static _make<T>(origin, size, level, root, tail, ownerID?);
    private _nodeFor(rawIndex);
}
export = Vector;
