//! Inheritance (Miras Alma) Kavramı



//! Inheritance ile hayatımıza giren keywordler
// super : üst sınıfı gosterir.
// super() :

// class Person{
//     firstName = "Kaan";


//     write() {
//         console.log(this.firstName);
//     }
// }


// class Student extends Person{

//     write() {
//         console.log(this.firstName);
//     }
    
// }


// const student = new Student();
// student.write();


// const person = new Person();
// person.write();



// ? Super kullanımı :


class Person{

    constructor(firstName,lastName,salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }
}


// const person = new Person("Kaan");

// person.write();


class Student extends Person{

    constructor(firstName, lastName, salary) {
        
        super(firstName, lastName, salary);
    }
    
}


const student1 = new Student("Kaan","Kartal",5000);

student1.writeInfo();