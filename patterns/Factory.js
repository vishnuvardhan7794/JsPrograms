class Developer { 
  name;
  type;
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
}

class Tester { 
  name;
  type;
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
}

class EmployeFactory {
  
  constructor(){
    
  }
  createEmploye(name, type){
    switch (type) {
      case 1:
        return new Developer(name, 'Developer')
        break;
       case 2:
        // code
        return new Tester(name, 'Tester')
        break;
      default:
        // code
    }
    
  }
}
function say() {
  console.log(`Hello ${this.name} , your ${this.type}`)
}
const emp = new EmployeFactory();
empList = [];
empList.push(emp.createEmploye('Vishnu', 1))
empList.push(emp.createEmploye('Prashanth', 2))
empList.push(emp.createEmploye('Vivek', 1))
empList.forEach((emp)=>{
  say.call(emp)
})
