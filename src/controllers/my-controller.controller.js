// Some ES6 code
class MyController {
    constructor() {
        this.title = 'This is MyController!';
        this.description = 'It is a seperate module';
        alert(this.innerFunction());
    }
    
    innerFunction() {
        const person = 'Harshil';
        return person;
    }
}

export default MyController;