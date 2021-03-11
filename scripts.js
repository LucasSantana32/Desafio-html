function calculaGrau(){
    let ge_esq = document.getElementById('ge_esq');
    let ge_dir = document.getElementById('ge_dir');
    let gc_esq = document.getElementById('gc_esq');
    let gc_dir = document.getElementById('gc_dir');

    if(ge_esq.value == 0 && ge_dir.value == 0 && gc_esq.value == 0 && gc_dir.value == 0){
        res.innerHTML = 'Por favor insira valores!';
    }
    else if(ge_esq.value <= -3 && ge_dir.value <= -3 && ge_esq.value >= -12 && ge_dir.value >= -12){
        if(gc_esq.value >= -2 && gc_dir.value >= -2){
            if(ge_esq.value >= -10 && ge_dir.value >= -10){
                res.innerHTML = 'A lente indicada para você é a Prime!<br>';
                var img= document.createElement('img');
                img.setAttribute('src', 'assets/prime.png');
                res.appendChild(img);
            }
            else{
                res.innerHTML = 'A lente indicada para você é a Vision!<br>';
                var img= document.createElement('img');
                img.setAttribute('src', 'assets/vision.png');
                res.appendChild(img);
            }
        }
    }
    else if (ge_esq.value <= 0 && ge_dir.value <= 0 && ge_esq.value >= -12 && ge_dir.value >= -12){
        if(gc_esq.value >= -5 && gc_dir.value >= -5){
            res.innerHTML = 'A lente indicada para você é a Vision!<br>';
            var img= document.createElement('img');
            img.setAttribute('src', 'assets/vision.png');
            res.appendChild(img);
        }
    }
}