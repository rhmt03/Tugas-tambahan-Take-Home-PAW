const angka = Array.from(document.getElementsByClassName('skor'));
angka.forEach((e)=>{
    e.addEventListener('touchstart', event=> {
      startschreenX = event.changedTouches[0].screenX;
      startschreenY = event.changedTouches[0].screenY;
    }, false);
    e.addEventListener('touchend', event=> {
      endschreenX = event.changedTouches[0].screenX;
      endschreenY = event.changedTouches[0].screenY;
      touchSwipped();
    }, false);  
    e.addEventListener('mousedown', event => {
      event.preventDefault();
      tabdownX = event.clientX;
      tabdownY = event.clientY;
    }, false);
    e.addEventListener('mouseup', event => {
      event.preventDefault();
      tabupX = event.clientX;
      tabupY = event.clientY;
      mouseSwipped();
    }, false);
    function mouseSwipped() {
        let angka = parseInt(e.textContent);
        if (Math.abs(tabupX - tabdownX) > 0 || Math.abs(tabupY - tabdownY) > 0) {
            if(tabupY < tabdownY && angka < 21) {
                let isiA = angka + 1;
                if (isiA < 10) {
                  e.innerHTML = `0${isiA}`;
                } else {
                  e.innerHTML = isiA;
                }
              }
              if(tabupY > tabdownY && angka > 0) {
                let isiA = angka - 1;
                if (isiA < 10) {
                  e.innerHTML = `0${isiA}`;
                } else {
                  e.innerHTML = isiA;
                }
              } 
          }
    }
    function touchSwipped() {
        let angka = parseInt(e.textContent);
        if(endschreenY < startschreenY && angka<21) {
            let isiA = angka+1;
            if(isiA<10){
                e.innerHTML = `0${isiA}`;
            }
            else{
                e.innerHTML = isiA;
            }
        }       
        if(endschreenY > startschreenY && angka>0) {  
            let isiA = angka-1;
            if(isiA<10){
                e.innerHTML = `0${isiA}`;
            }
            else{
            e.innerHTML = isiA;
            }
        }
    }
})