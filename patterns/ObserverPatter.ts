function Subject () {
    this.observer = []
  }
  
  Subject.prototype={
    subscribe : function (fn){
      this.observer.push(fn)
    },
    unsubscribe: function (fn) {
      console.log('fn', fn)
      this.observer = this.observer.filter((oldFn) => {
        console.log('Fn', fn)
        return oldFn !== fn});
  
    },
    fire:function(data){
      console.log('Test', data)
      this.observer.forEach((fn)=>{
        console.log('Test New', data)
        fn.call('', "Vivian");
      })
    }
  };
  
  const observer1 = function (data){
    console.log('Observer1 fired', data)
  }
  const observer2 = function (data){
    console.log('Observer2 fired', data)
  }
  
  const subject =  new Subject();
  subject.subscribe(observer1);
  subject.subscribe(observer2);
  subject.unsubscribe(observer2)
  subject.fire('Hellow')