// class Person{
//     constructor(n){
//         this.name=n;
        
//     }
//     print = function(){
        // console.log(this.name);//It will go in prototype
//     };
// }

// let p1= new Person("Ejaz");
// console.log(p1);

// WE Problem

// class Stack{
//         constructor(){
//                 this.length=0;
//                 this.stack=[];    
//         }

//         push(el){
//                 this.stack[this.length]=el;
//                 this.length++;
//         }
//         pop(){
//                 this.stack.pop();
//                 this.length--;
//         }





//         peek(el){

//                 return this.stack[this.length-1];
                

//         }
       
// }


// let s1=new Stack();

// s1.push(1);
// s2.push(2);
// console.log(s1.peek());

// s1.pop()

// console.log(s1);

//INHERITANCE 2ND TOPIC;

class Mobile{
        constructor(b,bt){//Blueprint
                this.brand=b;
                this.calling=true;
                this.battery=bt;
        }

}


let m1=new Mobile("samsung",5000);

console.log(m1);

class Smartphone extends Mobile{

        constructor(b,bt,c,s){
                super(b,bt);
                this.camera=c;
                this.screensize=s

        }
}

let m2=new Smartphone("iphone",5000,"30px","6inch");

console.log(m2);