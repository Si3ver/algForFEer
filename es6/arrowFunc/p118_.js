function foo1()
{
    setTimeout(()=>{
        console.log('id1: ', this.id);
    })
}
function foo2()
{
    setTimeout(function(){
        console.log('id2: ', this.id);
    })
}

var id = 21;
foo1.call({id: 41});
foo2.call({id: 41});
foo2();