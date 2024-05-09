class Process {
  name;
  constructor(name) {
    console.log('Name', name);
    this.name = name
  }
  
}

const Singleton = (function(){
  let pProcess=null
  
  function createProcess(name) {
    pProcess = new Process(name);
    return pProcess
  }
  
  return {
    getProcess:()=>{
      if(pProcess){
       return pProcess
      }
      pProcess = new createProcess('Vishnu')
      return pProcess;
    }
  }
})()

const Employe =  Singleton.getProcess();
const Employe1 =  Singleton.getProcess();
console.log('Emp', Employe == Employe1)
