class Halloween{
    constructor (){
        this.event = {}
    }
    on(suger,fn) {
        const events = this.event[suger]
        if(events){
            this.event[suger].push(fn)
        }
        else{
            this.event[suger] = [fn]
            console.log('Pumpkin!')
        }
    }
    emit(suger,...data){
        console.log('It is Halloween now!')
        this.event[suger].map(fn => 
            fn.apply(this,data))
    }
    removeListener(suger,fn){
        this.event[suger].map(Fn =>
            Fn !== fn)
    }
    removeAllListeners(suger){
        this.event[suger].map(Fn =>
            Fn !== Fn)
    }
}
var halloween = new Halloween();
var fn1 = function(name){
    console.log('${name},Thanks for your suger!');
}
var fn2 = function(name){
    console.log('No sugers?Then we will play tricks on you, ${name}!');
}
halloween.on('suger',fn1);
halloween.on('nothing',fn2);
halloween.emit('suger');
setTimeout(function(){
    halloween.removeListener('suger',fn1);
    halloween.on('suger',fn2);
},2000);
halloween.emit('suger');
halloween.emit('nothing');