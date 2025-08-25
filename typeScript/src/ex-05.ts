// user.ts
export type User = {
    name: string;
    age: number;
};

export function sayHello(u: User): void {
    console.log(`Hello ${u.name}, age ${u.age}`);
}
