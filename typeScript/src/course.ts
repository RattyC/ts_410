// 2) สร้างคลาส Student, Course
export class Course {
    constructor(
        public name: string,
        public grade: number 
    ) {
        if (grade < 0 || grade > 4) {
            throw new Error(`Invalid grade for ${name}: ${grade}`);
        }
    }
}


