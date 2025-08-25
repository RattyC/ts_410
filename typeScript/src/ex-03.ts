type Member = {
    nameTH: string;    // ชื่อภาษาไทย
    nameEN: string;    // ชื่อภาษาอังกฤษ
    heightCm: number;  // ส่วนสูง (เซนติเมตร)
    age: number;       // อายุ (ปี)
};

const BUS_MEMBERS: Member[] = [
{ nameTH: "อลัน พศวีร์ ศรีอรุโณทัย", nameEN: "Alan", heightCm: 185, age: 23 },
{ nameTH: "มาร์ค กฤษณ์ กัญจนาทิพย์", nameEN: "Marckris", heightCm: 172, age: 22 },
{ nameTH: "ขุนพล ปองพล ปัญญามิตร", nameEN: "Khunpol", heightCm: 179, age: 22 },
{ nameTH: "ฮาร์ท ชุติวัฒน์ จันเคน", nameEN: "Heart", heightCm: 174, age: 22 },
{ nameTH: "จินวุค คิม", nameEN: "Jinwook", heightCm: 178, age: 21 },
{ nameTH: "ไทย ชญานนท์ ภาคฐิน", nameEN: "Thai", heightCm: 178, age: 20 },
{ nameTH: "เน็กซ์ ณัฐกิตติ์ แช่มดารา", nameEN: "Nex", heightCm: 180, age: 20 },
{ nameTH: "ภู ธัชชัย ลิ้มปัญญากุล", nameEN: "Phu", heightCm: 180, age: 20 },
{ nameTH: "คอปเปอร์ เดชาวัต พรเดชาพิพัฒ", nameEN: "Copper", heightCm: 173, age: 19 },
{ nameTH: "เอเอ อชิรกรณ์ สุวิทยะเสถียร", nameEN: "AA", heightCm: 178, age: 19 },
{ nameTH: "จั๋ง ธีร์ บุญเสริมสุวงศ์", nameEN: "Jungt", heightCm: 173, age: 19 },
{ nameTH: "ภีม วสุพล พรพนานุรักษ์", nameEN: "Peem", heightCm: 187, age: 19 }];

// ฟังก์ชัน: เพิ่มสมาชิกคนใหม่เข้า array BUS_MEMBERS
function addMember(member: Member): void {
    BUS_MEMBERS.push(member);
}

// ฟังก์ชัน: ค้นหาตามชื่อ (ไทยหรืออังกฤษ)
function findByName(name: string): Member | undefined {
    const q = name.trim().toLowerCase();
    return BUS_MEMBERS.find(m =>
        m.nameTH.toLowerCase() === q || m.nameEN.toLowerCase() === q
    );
}

// ฟังก์ชัน: ค้นหาตามอายุ filter
function findByAge(age: number): Member[] {
    return BUS_MEMBERS.filter(m => m.age >= age);
}



// -------------------------
// ตัวอย่างการใช้งาน
// -------------------------

console.log("สมาชิกทั้งหมด:");
BUS_MEMBERS.forEach(m => {
    console.log(`- ${m.nameTH} (${m.nameEN}), สูง ${m.heightCm} ซม., อายุ ${m.age} ปี`);
});

// เพิ่มสมาชิกคนใหม่
addMember({ nameTH: "รัฐภูมิ", nameEN: "Rattapoom", heightCm: 171, age: 20 });

// ค้นหาชื่อ Joe
const memberJoe = findByName("Joe");
if (memberJoe) {
    console.log(`พบสมาชิกชื่อ Joe: ${memberJoe.nameTH} (${memberJoe.nameEN})`);
} else {
    console.log("ไม่พบสมาชิกชื่อ Joe");
}

// ค้นหาตามอายุ
const membersByAge = findByAge(20);
console.log("สมาชิกที่มีอายุ 20 ปีขึ้นไป:");
membersByAge.forEach(m => {
    console.log(`- ${m.nameTH} (${m.nameEN}), สูง ${m.heightCm} ซม., อายุ ${m.age} ปี`);
});

//ลบสมาชิกคนสุดท้าย
BUS_MEMBERS.pop();
console.log("สมาชิกหลังจากลบคนสุดท้าย:");
BUS_MEMBERS.forEach(m => {
    console.log(`- ${m.nameTH} (${m.nameEN}), สูง ${m.heightCm} ซม., อายุ ${m.age} ปี`);
}); 

