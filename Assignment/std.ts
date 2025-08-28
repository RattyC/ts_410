    /*
    2. สร้างคลาส Student, Course
    - Course: ชื่อวิชา, เกรด(number)
    - Student: studentID, name, Course[]
    - เพิ่ม method ใน Student: addCourse, getAverage
    - สาธิตการใช้งาน: ก่อน/หลัง เพิ่มรายวิชาคนละ 1 วิชา
    */

function assertValidGrade(grade: number): void {
    if (!Number.isFinite(grade) || grade < 0 || grade > 4) {
        throw new RangeError(`เกรดต้องอยู่ระหว่าง 0.00-4.00 แต่ได้ ${grade}`);
    }
}

class Course {
    name: string;
    grade: number;

    constructor(name: string, grade: number) {
        assertValidGrade(grade);
        this.name = name;
        this.grade = grade;
    }
}

class Student {
    readonly studentID: string;
    name: string;
    private courses: Course[];

    constructor(studentID: string, name: string) {
        this.studentID = studentID;
        this.name = name;
        this.courses = [];
    }


    addCourse(course: Course): void;
    addCourse(name: string, grade: number): void;
    addCourse(arg1: string | Course, arg2?: number): void {
        if (typeof arg1 === "string") {
            this.courses.push(new Course(arg1, arg2 as number));
        } else {
            assertValidGrade(arg1.grade);
            this.courses.push(arg1);
        }
    }

    getAverage(): number {
        if (this.courses.length === 0) return 0;
        let total = 0;
        for (const c of this.courses) total += c.grade;
        return total / this.courses.length;
    }

    getCourses(): readonly Course[] {
        return [...this.courses];
    }
}


function printStudents(title: string, list: Student[]) {
    console.log(`\n=== ${title} ===`);
    for (const st of list) {
        const avg = st.getAverage().toFixed(2);
        const courseStr = st
            .getCourses()
            .map((c) => `${c.name}(${c.grade.toFixed(2)})`)
            .join(", ");
        console.log(
            `ID: ${st.studentID}, Name: ${st.name}\n  Courses: ${courseStr}\n  GPA: ${avg}\n`
        );
    }
}

// กำหนดข้อมูลนักศึกษา 3 คน คนละ 4 รายวิชา
const a = new Student("660001", "Alice");
a.addCourse("Math", 3.5);
a.addCourse("Physics", 3.0);
a.addCourse("Programming", 4.0);
a.addCourse("English", 3.0);

const b = new Student("660002", "Bob");
b.addCourse("Math", 2.5);
b.addCourse("Chemistry", 3.0);
b.addCourse("Data Structure", 3.5);
b.addCourse("History", 2.0);

const c = new Student("660003", "Charlie");
c.addCourse("Calculus", 3.2);
c.addCourse("Database", 3.8);
c.addCourse("Operating Systems", 3.4);
c.addCourse("Networking", 3.0);

const students: Student[] = [a, b, c];


printStudents("ก่อนเพิ่มวิชา", students);

// เพิ่มรายวิชาและเกรด คนละ 1 วิชา
a.addCourse("AI Fundamentals", 3.7);
b.addCourse("Web Programming", 3.3);
c.addCourse("Computer Graphics", 3.6);

// แสดงผลหลังเพิ่มวิชา
printStudents("หลังเพิ่มวิชา", students);
