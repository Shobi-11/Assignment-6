//Write a 'Person' class to hold all the details:

class Person {
    constructor(Name, Age, Gender, Nationality, Religion, Email, PhoneNumber) {
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality;
        this.Religion = Religion;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        console.log(`Name:${this.Name}`);
        console.log(`Age:${this.Age}`);
        console.log(`Gender:${this.Gender}`);
        console.log(`Nationality:${this.Nationality}`);
        console.log(`Religion:${this.Religion}`);
        console.log(`Email:${this.Email}`);
        console.log(`PhoneNumber:${this.PhoneNumber}`);

    }
}
let person1 = new Person('Vetri', '20', 'Male', 'Indian', 'Hindu', 'vetri1105@gmail.com', 987654321)
