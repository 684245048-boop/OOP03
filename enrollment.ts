enum CourseStatus{
    Open = "Open",
    Closed = "Closed",
    Full = "Full"
}
interface Student{
    name: string;
    id: string;
}
interface Course{
    title: string;
    code: string;
    status: CourseStatus;
    students: Student[];
}
function  enroll(student: Student, course: Course){
    if (course.status === CourseStatus.Open){
        course.students.push(student);
        console.log("ลงทะเบียนสำเร็จ!");
    } else{
        console.log("ลงทะเบียนไม่สำเร็จ เนื่องจากสถานะราชวิชาไม่ใช่ Open");
    }
}