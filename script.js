console.log('proba');
document.body.style.height=window.innerHeight+'px';
let mozog = false;
let nagysag = 3;
document.getElementById('palya').style.width=nagysag*200+'px';

let tomb = [];
//Csináljuk meg a pályát
for(i=0; i<nagysag;i++){
    let sor = document.createElement('div');
    sor.className="sor";
    for(j=0; j<nagysag ; j++){
        let cella=document.createElement('div');
        cella.className="cella";

//adjunk hozzá számot
do{
    var szam=Math.round(Math.random()*(nagysag*nagysag-1));
    for (var num of tomb)
    if (num ===szam) break;
} while (num===szam);

tomb.push(szam);
if(szam==0){
    cella.classList.add('ures');
}
else {cella.innerHTML = szam;}
cella.onclick=csuszik;
sor.appendChild(cella);
    }
    document.getElementById('palya').appendChild(sor);
};

function csuszik(){
    if(!mozog){
    console.log("Csúszik", this.previousElementSibling);
    let mozog=false;
    //Megnézem h az őt megelőző elem üres
   if((this.previousElementSibling) && (this.previousElementSibling.classList[1]=="ures"))
   {
    this.classList.add('bal');
    mozog=true;
   };
   if((this.nextElementSibling) && (this.nextElementSibling.classList[1]=="ures"))
   {
    this.classList.add('jobb');
    mozog=true;
   };


   let hanyadik = 0;
   let elozo=this.previousElementSibling;
   while(elozo)
   {
        hanyadik++;
        elozo=elozo.previousElementSibling;
   }
   console.log("Hányadik: ", hanyadik);
//Felfelé
   if((this.parentNode.previousElementSibling)
   && (this.parentNode.previousElementSibling.children[hanyadik].classList[1]=='ures') )
   {
    this.classList.add('fel');
    mozog=true;
   }
//Lefelé
   if((this.parentNode.nextElementSibling)
   && (this.parentNode.nextElementSibling.children[hanyadik].classList[1]=='ures') )
   {
    this.classList.add('le');
    mozog=true;
   }

//Törlések és üres
   if (mozog) setTimeout(function (c){
    document.getElementsByClassName('ures')[0].innerHTML=c.innerHTML;
    document.getElementsByClassName('ures')[0].classList.remove("ures");
    c.classList.add('ures');
    c.classList.remove('bal');
    c.classList.remove('jobb');
    c.classList.remove('fel');
    c.classList.remove('le');
    c.innerHTML="";
    mozog=false;

    //Kirakte-e??
    kesz();
   },500,this);
}

};
function kesz(){
    let cellak = document.getElementsByClassName('cella');

    for (i=0; i<cellak.length; i++) {
        if(cellak[i].innerHTML==(i+1)) cellak[i].classList.add('jo');
        else cellak[i].classList.remove('jo');
    }
    if(document.getElementsByClassName('jo').length==(cellak.length)-1)
    console.log('Győzelem');
}