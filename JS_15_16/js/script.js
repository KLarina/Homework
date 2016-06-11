function Human(name,age,gender,height,weight){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.height=height;
    this.weight=weight;
}
function Worker(job,salary,humanArguments){
    Human.apply(this, humanArguments);
    this.job=job;
    this.salary=salary;
}
function Student(university,grants,humanArguments){
    Human.apply(this, humanArguments);
    this.university=university;
    this.grants=grants;
}
Worker.prototype = Object.create(Human.prototype);

Student.prototype = Object.create(Human.prototype);

Worker.prototype.work=function(){
    console.log(this.name+' любит свою работу')
};

Student.prototype.watch=function(){
    console.log(this.name+' смотрит сериалы!')
};

var Petro= new Worker('teacher',1000,['Петро ',52,'male',170,80]);
var Ivan = new Student('ZNTU', 500,['Иван',19,'male',180,73]);
console.log('newWorker.name=',Petro.name);
console.log('newWorker.age=',Petro.age);
console.log('newWorker.gender=',Petro.gender);
console.log('newWorker.height=',Petro.height + 'sm');
console.log('newWorker.weight=',Petro.weight + 'kg');
console.log('newWorker.job=',Petro.job);
console.log('newWorker.salary=',Petro.salary + 'UAH');
Petro.work();
console.log('newStudent.name=',Ivan.name);
console.log('newStudent.age=',Ivan.age);
console.log('newStudent.gender=',Ivan.gender);
console.log('newStudent.height=',Ivan.height + 'sm');
console.log('newStudent.weight=',Ivan.weight + 'kg');
console.log('newStudent.university=',Ivan.university);
console.log('newStudent.grants=',Ivan.grants + 'UAH');
Ivan.watch();