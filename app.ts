//
// const showUser = (user:{name: string, age: number}):void=>{
//     user.
// }

interface IUser {
    id?: number,
    name: string,
    age: number
}

const user: IUser = {age: 5, name: "Mac"}


interface IShapeActions {
    area: () => number;
    perimeter: () => number;
}

class Triangle implements IShapeActions {
    constructor(private a: number, private b: number, private c: number) {
    }

    area(): number {
        return this.a * this.b * this.c;
    }

    perimeter(): number {
        return this.a + this.b + this.c;
    }

}

class Rectangle implements IShapeActions {
    constructor(private a: number, private b: number) {
    }

    area(): number {
        return this.a * this.b;
    }

    perimeter(): number {
        return this.a + this.b;
    }

}

const shapes: IShapeActions[] = [new Triangle(1, 2, 3), new Rectangle(2, 7), new Triangle(1, 5, 8)]
for (const shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}