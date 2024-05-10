class Fedx {
  calculate() {
    console.log('Fedx calculate ');
    return 2.50;
  }
}

class DTDC {
  calculate() {
    console.log('DTDC calculate ');
    return 1.50;
  }
}

class EKart {
  calculate() {
    console.log('EKart calculate ');
    return 3.50;
  }
}

class Shipping {
  
  company='';
  
  setCompany(company){
    console.log('Compaonany set', company)
    this.company = company;
  }
  calculate(){
  return  this.company.calculate()
  }
  
}

const packege = {from:'vijayawada', to:'africa', weight:'1kg'};
const fedx = new Fedx();
const dtdc = new DTDC();
const ekart = new EKart();
const shipping = new Shipping();
shipping.setCompany(fedx);
console.log('shipping.calculate()', shipping.calculate())
shipping.setCompany(dtdc)
console.log('shipping.calculate()', shipping.calculate())
shipping.setCompany(ekart)
console.log('shipping.calculate()', shipping.calculate())
