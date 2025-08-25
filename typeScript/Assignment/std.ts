/*2.	สร้างคลาส Student, Course
o	Course มีข้อมูล(property): ชื่อวิชา, เกรด(number)
o	Student มีข้อมูล(property): studentID, name, Course[ ]   (1 คนมีหลายรายวิชา)
o	สร้าง Constructor ของทั้ง 2 Class
o	ใน Student มี method การทำงาน
	addCourse: เพิ่มรายวิชาใหม่เข้าไปใน Array
	getAverage: คำนวณเกรดเฉลี่ยรวม
o	การทำงานหลัก 
	ให้กำหนดข้อมูลนักศึกษา 3 คน คนละ 4 รายวิชา
	แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย
	เพิ่มรายวิชาและเกรด คนละ 1 รายวิชา
	แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย

*/
class Course {
    name: string;
    grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }
}

class Student {
    studentID: string;
    name: string;
    courses: Course[];

    constructor(studentID: string, name: string) {
        this.studentID = studentID;
        this.name = name;
        this.courses = [];
    }

    addCourse(course: Course): void {
        this.courses.push(course);
    }

    getAverage(): number {
        if (this.courses.length === 0) return 0;
        let total = 0;
        for (let c of this.courses) {
            total += c.grade;
        }
        return total / this.courses.length;
    }
}

// ---------- การทำงานหลัก ----------

// กำหนดข้อมูลนักศึกษา 3 คน คนละ 4 รายวิชา
const s1 = new Student("660001", "Alice", [
    new Course("Math", 3.5),
    new Course("Physics", 3.0),
    new Course("Programming", 4.0),
    new Course("English", 3.0),
]);

const s2 = new Student("660002", "Bob", [
    new Course("Math", 2.5),
    new Course("Chemistry", 3.0),
    new Course("Data Structure", 3.5),
    new Course("History", 2.0),
]);

const s3 = new Student("660003", "Charlie", [
    new Course("Calculus", 3.2),
    new Course("Database", 3.8),
    new Course("Operating Systems", 3.4),
    new Course("Networking", 3.0),
]);

const students: Student[] = [s1, s2, s3];

// ฟังก์ชันช่วยพิมพ์ข้อมูลนักศึกษาทุกคน
function printStudents(title: string, list: Student[]) {
    console.log(`\n=== ${title} ===`);
    for (const st of list) {
        const avg = st.getAverage().toFixed(2);
        const courseStr = st.courses
            .map((c) => `${c.name}(${c.grade.toFixed(2)})`)
            .join(", ");
        console.log(
            `ID: ${st.studentID}, Name: ${st.name}\n  Courses: ${courseStr}\n  GPA: ${avg}\n`
        );
    }
}

// แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย (รอบแรก)
printStudents("Before Add", students);

// เพิ่มรายวิชาและเกรด คนละ 1 รายวิชา
s1.addCourse(new Course("AI Fundamentals", 3.7));
s2.addCourse(new Course("Web Programming", 3.3));
s3.addCourse(new Course("Computer Graphics", 3.6));

// แสดงผลข้อมูลของนักศึกษาทุกคน พร้อมทั้งเกรดเฉลี่ย (หลังเพิ่ม)
printStudents("After Add", students);

// สร้างข้อมูลนักศึกษาใหม่ 3 คน คนละ 4 วิชา
const st1 = new Student("680101", "Nina");
st1.addCourse(new Course("Thai", 3.2));
st1.addCourse(new Course("Math", 2.8));
st1.addCourse(new Course("English", 3.5));
st1.addCourse(new Course("Science", 3.0));

const st2 = new Student("680102", "Mark");
st2.addCourse(new Course("Thai", 2.5));
st2.addCourse(new Course("Math", 3.0));
st2.addCourse(new Course("English", 2.7));
st2.addCourse(new Course("Science", 2.9));

const st3 = new Student("680103", "Jane");
st3.addCourse(new Course("Thai", 3.8));
st3.addCourse(new Course("Math", 3.6));
st3.addCourse(new Course("English", 3.9));
st3.addCourse(new Course("Science", 3.7));

const students: Student[] = [st1, st2, st3];

function showStudents(title: string, arr: Student[]) {
    console.log(`\n${title}`);
    for (let s of arr) {
        let courseList = s.courses.map(c => `${c.name}(${c.grade})`).join(", ");
        console.log(`ID: ${s.studentID}, Name: ${s.name}`);
        console.log(`  Courses: ${courseList}`);
        console.log(`  GPA: ${s.getAverage().toFixed(2)}\n`);
    }
}

// แสดงผลข้อมูลนักศึกษาทุกคน พร้อมเกรดเฉลี่ย
showStudents("ข้อมูลนักศึกษาก่อนเพิ่มวิชา", students);

// เพิ่มรายวิชาใหม่และเกรด คนละ 1 วิชา
st1.addCourse(new Course("Art", 3.4));
st2.addCourse(new Course("Music", 2.8));
st3.addCourse(new Course("PE", 3.5));

// แสดงผลข้อมูลนักศึกษาทุกคน พร้อมเกรดเฉลี่ย หลังเพิ่มวิชา
showStudents("ข้อมูลนักศึกษาหลังเพิ่มวิชา", students);
