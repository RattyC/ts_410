/*1. สร้างอาเรย์ employees: Employee[] กำหนดข้อมูลของพนักงานอย่างน้อย 3 คน 
    o ประกาศ Employee เป็น Interface
    o ประกาศตัวแปรใน Employee มีข้อมูล: id, name, position, salary
    o เขียนฟังก์ชัน findEmployeeByName
    o แสดงผลข้อมูลพนักงานทั้งหมด
    o แสดงผลการค้นหาพนักงาน */

interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

const employees: Employee[] = [
    { id: 1, name: "Alice", position: "Developer", salary: 60000 },
    { id: 2, name: "Bob", position: "Designer", salary: 55000 },
    { id: 3, name: "Charlie", position: "Manager", salary: 80000 },
];

function findEmployeeByName(name: string): Employee | undefined {
    const q = name.trim().toLowerCase();
    return employees.find((emp) => emp.name.toLowerCase() === q);
}

// แสดงผลแบบจัดรูปเงินเดือน
const money = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
//แสดงผลข้อมูลพนักงานทั้งหมด

console.log("All Employees:");
for (const emp of employees) {
    console.log(`- ${emp.name}, Position: ${emp.position}, Salary: ${money.format(emp.salary)}`);
}
//แสดงผลการค้นหาพนักงาน 
console.log("\nFind Employee by Name:");
const searchName = "Bob";
const found = findEmployeeByName(searchName);

console.log("\nSearch Result:");
if (found) {
    console.log(`Found Employee: ${found.name}, Position: ${found.position}, Salary: ${money.format(found.salary)}`);
} else {
    console.log(`Employee with name ${searchName} not found.`);
}
