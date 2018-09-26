var tmp = 123;
if(true){
    tmp = 456;   // ReferenceError: tmp is not defined
    let tmp;
}
