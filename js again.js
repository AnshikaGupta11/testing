//objects
/*let lecture=10;
let section=3;
let title='javascript';

title='c sharp';

const course={
    lecture:10,                         //commas for seprating obj values
    section:3,
    title:'javascript',
    notes:{                             //nested object
        introduction:"welcome to js course"
    },
   enroll(){    //method
    console.log('you are successfully enrolled');
   }
}
course.enroll()
console.log(course);
console.log(course.title);
console.log(course.section);
console.log(course.lecture);
course.price= 999                           //adding one more key value pair in objs we can put them outside
console.log(course.price)*/

//factory functions also called object constructors
function createCourse(title){
return{
    title:title,
    
   enroll(){    //method
    console.log('you are successfully enrolled');
   }
}
}
const course = createCourse();
course.enroll(course)
