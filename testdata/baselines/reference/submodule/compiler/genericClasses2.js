//// [tests/cases/compiler/genericClasses2.ts] ////

//// [genericClasses2.ts]
interface Foo<T> {
	a: T;
}

class C<T> {
	public x: T;
	public y: Foo<T>;
	public z: Foo<number>;
}

var v1 : C<string>;

var y = v1.x; // should be 'string'
var w = v1.y.a; // should be 'string'
var z = v1.z.a; // should be 'number'

//// [genericClasses2.js]
class C {
    x;
    y;
    z;
}
var v1;
var y = v1.x; // should be 'string'
var w = v1.y.a; // should be 'string'
var z = v1.z.a; // should be 'number'
