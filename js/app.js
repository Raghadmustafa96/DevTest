'use strict';

// variable
var PlayArea_div = document.getElementById('PlayArea_div');
var replay = document.getElementById('Replay');
var div_0 = document.getElementById('div_0');
var div_1 = document.getElementById('div_1');
var div_2 = document.getElementById('div_2');
var div_3 = document.getElementById('div_3');
var div_4 = document.getElementById('div_4');
var div_5 = document.getElementById('div_5');
var div_6 = document.getElementById('div_6');
var div_7 = document.getElementById('div_7');
var div_8 = document.getElementById('div_8');

var b_0 = document.getElementById('div0');
var b_1 = document.getElementById('div1');
var b_2 = document.getElementById('div2');
var b_3 = document.getElementById('div3');
var b_4 = document.getElementById('div4');
var b_5 = document.getElementById('div5');
var b_6 = document.getElementById('div6');
var b_7 = document.getElementById('div7');
var b_8 = document.getElementById('div8');

var div_x = document.getElementById('div_x');
var div_o = document.getElementById('div_o');
var list = [div_0,div_2,div_6,div_8];
var allList = [div_0,div_1,div_2,div_3,div_4,div_5,div_6,div_7,div_8];
var value = '';
var value2 = '';
var counter = 0;
var lastCounter = 6;
var stop = 10;
var d0,d1,d2,d3,d4,d5,d6,d7,d8 = '';
value = 'X';

addClassEmpty();


div_x.addEventListener('click',div_x_updateValue);
function div_x_updateValue(event){
    event.preventDefault();
    value = 'X';
    console.log(div_0);
    console.log(counter);
}

div_o.addEventListener('click',div_o_updateValue);
function div_o_updateValue(event){
    event.preventDefault();
    value = 'O';
    console.log(div_0);
}


    // add Listener
    replay.addEventListener('click', replayFun);
    function replayFun(event){
        location.reload();
    }

    b_0.addEventListener('click',div_0_updateValue);
    function div_0_updateValue(event){
        event.preventDefault();
        div_0.textContent = value;
        div_0.classList.remove("empty");
        console.log(div_0);
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
        } else{
            alert('draw');
        }
    }

    b_1.addEventListener('click',div_1_updateValue);
    function div_1_updateValue(event){
        event.preventDefault();
        div_1.textContent = value;
        div_1.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
          }

    b_2.addEventListener('click',div_2_updateValue);
    function div_2_updateValue(event){
        event.preventDefault();
        div_2.textContent = value;
        div_2.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    }

    b_3.addEventListener('click',div_3_updateValue);
    function div_3_updateValue(event){
        event.preventDefault();
        div_3.textContent = value;
        div_3.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    }

    b_4.addEventListener('click',div_4_updateValue);
    function div_4_updateValue(event){
        event.preventDefault();
        div_4.textContent = value;
        div_4.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    }

    b_5.addEventListener('click',div_5_updateValue);
    function div_5_updateValue(event){
        event.preventDefault();
        div_5.textContent = value;
        div_5.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    }

    b_6.addEventListener('click',div_6_updateValue);
    function div_6_updateValue(event){
        event.preventDefault();
        div_6.textContent = value;
        div_6.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    }

    b_7.addEventListener('click',div_7_updateValue);
    function div_7_updateValue(event){
        event.preventDefault();
        div_7.textContent = value;
        div_7.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    }

    b_8.addEventListener('click',div_8_updateValue);
    function div_8_updateValue(event){
        event.preventDefault();
        div_8.textContent = value;
        div_8.classList.remove("empty");
        counter++ ;
        console.log(counter);
        if(counter <5){
            winFun();
            loseFun();
            player_2();
          } else{
            alert('draw');
          }
    } 


function player_2(){
    if(value === 'X'){
        value2 = 'O';
    } else{
        value2 = 'X';
    }

    console.log('player_2()');
    
    if(counter <5 && stop === 10){
        if(div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_4.textContent === value && counter === 1){
            do{
                var v0 = list.random();
            }while(v0.textContent === value2 || v0.textContent === value)
                v0.textContent = value2;
                v0.classList.remove("empty");
        } else if(div_0.textContent === value2 && div_1.textContent === value2 && div_2.classList.contains('empty')){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_1.textContent === value2 && div_2.textContent === value2  && div_0.classList.contains('empty')){
            div_0.textContent = value2; 
            div_0.classList.remove("empty");
        } else if(div_0.textContent === value2 && div_2.textContent === value2  && div_1.classList.contains('empty')){
            div_1.textContent = value2;
            div_1.classList.remove("empty");
        } else if(div_3.textContent === value2 && div_4.textContent === value2  && div_5.classList.contains('empty')){
            div_5.textContent = value2;
            div_5.classList.remove("empty");
        } else if(div_4.textContent === value2 && div_5.textContent === value2  && div_3.classList.contains('empty')){
            div_3.textContent = value2;
            div_3.classList.remove("empty");
        } else if(div_3.textContent === value2 && div_5.textContent === value2  && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_6.textContent === value2 && div_7.textContent === value2  && div_8.classList.contains('empty')){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else if(div_7.textContent === value2 && div_8.textContent === value2  && div_6.classList.contains('empty')){
            div_6.textContent = value2;
            div_6.classList.remove("empty");
        } else if(div_6.textContent === value2 && div_8.textContent === value2  && div_7.classList.contains('empty')){
            div_7.textContent = value2;
            div_7.classList.remove("empty");
        } else if(div_0.textContent === value2 && div_3.textContent === value2  && div_6.classList.contains('empty')){
            div_6.textContent = value2;
            div_6.classList.remove("empty");
        } else if(div_3.textContent === value2 && div_6.textContent === value2  && div_0.classList.contains('empty')){
            div_0.textContent = value2;
            div_0.classList.remove("empty");
        } else if(div_0.textContent === value2 && div_6.textContent === value2  && div_3.classList.contains('empty')){
            div_3.textContent = value2;
            div_3.classList.remove("empty");
        } else if(div_1.textContent === value2 && div_4.textContent === value2  && div_7.classList.contains('empty')){
            div_7.textContent = value2;
            div_7.classList.remove("empty");
        } else if(div_4.textContent === value2 && div_7.textContent === value2  && div_1.classList.contains('empty')){
            div_1.textContent = value2;
            div_1.classList.remove("empty");
        } else if(div_1.textContent === value2 && div_7.textContent === value2  && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_2.textContent === value2 && div_5.textContent === value2  && div_8.classList.contains('empty')){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else if(div_5.textContent === value2 && div_8.textContent === value2  && div_2.classList.contains('empty')){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_2.textContent === value2 && div_8.textContent === value2  && div_5.classList.contains('empty')){
            div_5.textContent = value2;
            div_5.classList.remove("empty");
        } else if(div_0.textContent === value2 && div_4.textContent === value2  && div_8.classList.contains('empty')){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else if(div_4.textContent === value2 && div_8.textContent === value2  && div_0.classList.contains('empty')){
            div_0.textContent = value2;
            div_0.classList.remove("empty");
        } else if(div_0.textContent === value2 && div_8.textContent === value2  && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_2.textContent === value2 && div_4.textContent === value2  && div_6.classList.contains('empty')){
            div_6.textContent = value2;
            div_6.classList.remove("empty");
        } else if(div_4.textContent === value2 && div_6.textContent === value2  && div_2.classList.contains('empty')){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_2.textContent === value2 && div_6.textContent === value2  && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_0.textContent === value && div_1.textContent === value && div_2.classList.contains('empty')){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_1.textContent === value && div_2.textContent === value && div_0.classList.contains('empty')){
            div_0.textContent = value2;
            div_0.classList.remove("empty");
        } else if(div_0.textContent === value && div_2.textContent === value && div_1.classList.contains('empty')){
            div_1.textContent = value2;
            div_1.classList.remove("empty");
        } else if(div_3.textContent === value && div_4.textContent === value && div_5.classList.contains('empty')){
            div_5.textContent = value2;
            div_5.classList.remove("empty");
        } else if(div_4.textContent === value && div_5.textContent === value && div_3.classList.contains('empty')){
            div_3.textContent = value2;
            div_3.classList.remove("empty");
        } else if(div_3.textContent === value && div_5.textContent === value && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_6.textContent === value && div_7.textContent === value && div_8.classList.contains('empty')){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else if(div_7.textContent === value && div_8.textContent === value && div_6.classList.contains('empty')){
            div_6.textContent = value2; 
            div_6.classList.remove("empty");
        } else if(div_6.textContent === value && div_8.textContent === value && div_7.classList.contains('empty')){
            div_7.textContent = value2;
            div_7.classList.remove("empty");
        } else if(div_0.textContent === value && div_3.textContent === value && div_6.classList.contains('empty')){
            div_6.textContent = value2;
            div_6.classList.remove("empty");
        } else if(div_3.textContent === value && div_6.textContent === value && div_0.classList.contains('empty')){
            div_0.textContent = value2;
            div_0.classList.remove("empty");
        } else if(div_0.textContent === value && div_6.textContent === value && div_3.classList.contains('empty')){
            div_3.textContent = value2;
            div_3.classList.remove("empty");
        } else if(div_1.textContent === value && div_4.textContent === value && div_7.classList.contains('empty')){
            div_7.textContent = value2;
            div_7.classList.remove("empty");
        } else if(div_4.textContent === value && div_7.textContent === value && div_1.classList.contains('empty')){
            div_1.textContent = value2;
            div_1.classList.remove("empty");
        } else if(div_1.textContent === value && div_7.textContent === value && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_2.textContent === value && div_5.textContent === value && div_8.classList.contains('empty')){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else if(div_5.textContent === value && div_8.textContent === value && div_2.classList.contains('empty')){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_2.textContent === value && div_8.textContent === value && div_5.classList.contains('empty')){
            div_5.textContent = value2;
            div_5.classList.remove("empty");
        } else if(div_0.textContent === value && div_4.textContent === value && div_8.classList.contains('empty')){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else if(div_4.textContent === value && div_8.textContent === value && div_0.classList.contains('empty')){
            div_0.textContent = value2;
            div_0.classList.remove("empty");
        } else if(div_0.textContent === value && div_8.textContent === value && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_2.textContent === value && div_4.textContent === value && div_6.classList.contains('empty')){
            div_6.textContent = value2;
            div_6.classList.remove("empty");
        } else if(div_4.textContent === value && div_6.textContent === value && div_2.classList.contains('empty')){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_2.textContent === value && div_6.textContent === value && div_4.classList.contains('empty')){
            div_4.textContent = value2;
            div_4.classList.remove("empty");
        } else if(div_0.textContent === value && div_4.textContent === value && counter === 2){
            var list1 = [div_2,div_6];
            do{
                var v2 = list1.random();
            } while(v2.textContent === value2 || v2.textContent === value)
                v2.textContent = value2;
                v2.classList.remove("empty");
        } else if(div_2.textContent === value && div_4.textContent === value && counter === 2){
            var list2 = [div_0,div_8];
            do{
                var v3 = list2.random();
            } while(v3.textContent === value2 || v3.textContent === value)
                v3.textContent = value2;
                v3.classList.remove("empty");
        } else if(div_6.textContent === value && div_4.textContent === value && counter === 2){
            var list2 = [div_0,div_8];
            do{
                var v4 = list2.random();
            } while(v4.textContent === value2 || v4.textContent === value)
                v4.textContent = value2;
                v4.classList.remove("empty");
        } else if(div_8.textContent === value && div_4.textContent === value && counter === 2){
            var list1 = [div_2,div_6];
            do{
                var v5 = list1.random();
            } while(v5.textContent === value2 || v5.textContent === value)
                v5.textContent = value2;
                v5.classList.remove("empty");
        } else if(div_8.textContent === value && div_0.textContent === value && div_4.textContent === value2 && counter === 2){
            var list1 = [div_1,div_3,div_5,div_7];
            do{
                var v5 = list1.random();
            } while(v5.textContent === value2 || v5.textContent === value)
                v5.textContent = value2;
                v5.classList.remove("empty");
        } else if(div_2.textContent === value && div_6.textContent === value && div_4.textContent === value2 && counter === 2){
            var list1 = [div_1,div_3,div_5,div_7];
            do{
                var v5 = list1.random();
            } while(v5.textContent === value2 || v5.textContent === value)
                v5.textContent = value2;
                v5.classList.remove("empty");
        } else if(div_1.textContent === value && div_3.textContent === value && div_4.textContent === value2 && counter === 2){
            div_0.textContent = value2;
            div_0.classList.remove("empty");
        } else if(div_1.textContent === value && div_5.textContent === value && div_4.textContent === value2 && counter === 2){
            div_2.textContent = value2;
            div_2.classList.remove("empty");
        } else if(div_3.textContent === value && div_7.textContent === value && div_4.textContent === value2 && counter === 2){
            div_6.textContent = value2;
            div_6.classList.remove("empty");
        } else if(div_5.textContent === value && div_7.textContent === value && div_4.textContent === value2 && counter === 2){
            div_8.textContent = value2;
            div_8.classList.remove("empty");
        } else{
            do{
            var v1 = allList.random();
            }while(v1.textContent === value2 || v1.textContent === value)
            v1.textContent = value2;
            v1.classList.remove("empty");
            console.log('random');
        }
        winFun();
        loseFun();
    }
}


Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

// win 
// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]
// [0, 3, 6]
// [1, 4, 7]
// [2, 5, 8]
// [0, 4, 8]
// [2, 4, 6]

function winFun(){
     if(div_0.textContent === value && div_1.textContent === value && div_2.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_3.textContent === value && div_4.textContent === value && div_5.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_6.textContent === value && div_7.textContent === value && div_8.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_0.textContent === value && div_3.textContent === value && div_6.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_1.textContent === value && div_4.textContent === value && div_7.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_2.textContent === value && div_5.textContent === value && div_8.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_0.textContent === value && div_4.textContent === value && div_8.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    } else if(div_2.textContent === value && div_4.textContent === value && div_6.textContent === value){
        alert('win');
        removeButtonListener();
        stop = 0;
    }
}

function loseFun(){
    if(div_0.textContent === value2 && div_1.textContent === value2 && div_2.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_3.textContent === value2 && div_4.textContent === value2 && div_5.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_6.textContent === value2 && div_7.textContent === value2 && div_8.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_0.textContent === value2 && div_3.textContent === value2 && div_6.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_1.textContent === value2 && div_4.textContent === value2 && div_7.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_2.textContent === value2 && div_5.textContent === value2 && div_8.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_0.textContent === value2 && div_4.textContent === value2 && div_8.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    } else if(div_2.textContent === value2 && div_4.textContent === value2 && div_6.textContent === value2){
        alert('lose');
        removeButtonListener();
        stop = 0;
    }
}

function removeButtonListener(){
    b_0.removeEventListener("click", div_0_updateValue);
    b_1.removeEventListener("click", div_1_updateValue);
    b_2.removeEventListener("click", div_2_updateValue); 
    b_3.removeEventListener("click", div_3_updateValue);
    b_4.removeEventListener("click", div_4_updateValue);
    b_5.removeEventListener("click", div_5_updateValue);
    b_6.removeEventListener("click", div_6_updateValue);
    b_7.removeEventListener("click", div_7_updateValue);
    b_8.removeEventListener("click", div_8_updateValue);
}

function addClassEmpty(){
    var allDiv = [div_0,div_1,div_2,div_3,div_4,div_5,div_6,div_7,div_8];
    for(var i=0 ; i<allDiv.length ; i++){
        allDiv[i].classList.add('empty');
        console.log('empty');
    }
}
