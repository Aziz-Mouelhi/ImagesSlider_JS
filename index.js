//images array //
let ImagesArray = Array.from(document.querySelectorAll("#images-conatiner img"));
//iamges array lengrth//
let LengthImagesArray = ImagesArray.length;
//console legth and images array //
console.log(LengthImagesArray);
console.log(ImagesArray);
//slide number //
let slideNumber = document.getElementById('imgNum');
console.log(slideNumber);
//index //
let index = 1;
// get buttons //
let nbutt = document.getElementById("next");
nbutt.onclick = forward;
let pbutt = document.getElementById("prev");
pbutt.onclick = back;
console.log(nbutt.innerText);
console.log(pbutt.innerText);

//create bullets //
let ul = document.createElement('ul');
ul.setAttribute('id','js_ul');
ul.setAttribute('class','js_ul')
for(let i = 1 ; i <= LengthImagesArray ; i++){
    var li = document.createElement('li');
    li.setAttribute('data-index',i);
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
}
//create array of bullets//

//add ul to html //

let ind = document.getElementById("ind");
console.log(ind);
ind.appendChild(ul);
console.log(ind);
BullArray = Array.from(document.querySelectorAll('#js_ul li'));
console.log(BullArray);
for(let g = 0 ; g <BullArray.length ; g++){
    BullArray[g].onclick = function(){
        index = parseInt(BullArray[g].getAttribute('data-index'));
        theChecker();
    }
}
//function call
theChecker();
function theChecker(){
    remove();
    slideNumber.innerHTML = 'slide ' + (index) +  ' of ' + (LengthImagesArray);
    ImagesArray[index - 1 ].classList.add('active');
    ul.children[index - 1 ].classList.add('active');


if(index == 1 ){
    pbutt.classList.add('disabled');
}
else{
   pbutt.classList.remove('disabled');
}
if(index == ImagesArray.length){
    nbutt.classList.add('disabled');
}
else{
    nbutt.classList.remove('disabled');
}


}

function forward(){
    if(nbutt.classList.contains('disabled')){

    }
    else{
        index++;
        theChecker();
    }
}
function back(){
    if(pbutt.classList.contains('disabled')){

    }
    else{
        index--;
        theChecker();
    }
}
function remove(){
    ImagesArray.forEach(function (img) {
        img.classList.remove('active');
    });
    BullArray.forEach(function(bul){
        bul.classList.remove('active');
    })
}

