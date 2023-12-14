const pole = document.querySelector('.pole');
const btn = document.getElementById('btn');
let section = document.getElementsByClassName('section');
let shag = 0;

pole.addEventListener('click', function(event) {
    console.log(event.target)
    if (event.target != pole) {
        if ( shag % 2 === 0) {
            event.target.innerText = 'x';
        } else {
            event.target.innerText = '0';
        }
        shag++;
        winner();
    } else {
        return 0;
    }
})

function winner() {
    console.log(section);
    if (section[0].innerHTML == section[1].innerHTML && section[1].innerHTML == section[2].innerHTML && section[0].innerHTML != '') {
        let player = section[0].innerHTML;
        alert(player + ' Win');
    }
    else if (section[3].innerHTML == section[4].innerHTML && section[4].innerHTML == section[5].innerHTML && section[3].innerHTML != '') {
        let player = section[3].innerHTML;
        alert(player + ' Win');
    }
    else if (section[6].innerHTML == section[7].innerHTML && section[7].innerHTML == section[8].innerHTML && section[6].innerHTML != '') {
        let player = section[6].innerHTML;
        alert(player + ' Win');
    }
    else if (section[0].innerHTML == section[3].innerHTML && section[3].innerHTML == section[6].innerHTML && section[0].innerHTML != '') {
        let player = section[0].innerHTML;
        alert(player + ' Win');
    }
    else if (section[1].innerHTML == section[4].innerHTML && section[4].innerHTML == section[7].innerHTML && section[1].innerHTML != '') {
        let player = section[1].innerHTML;
        alert(player + ' Win');
    }
    else if (section[2].innerHTML == section[5].innerHTML && section[5].innerHTML == section[8].innerHTML && section[2].innerHTML != '') {
        let player = section[2].innerHTML;
        alert(player + ' Win');
    }
    else if (section[2].innerHTML == section[4].innerHTML && section[4].innerHTML == section[6].innerHTML && section[2].innerHTML != '') {
        let player = section[2].innerHTML;
        alert(player + ' Win');
    }
    else if (section[0].innerHTML == section[4].innerHTML && section[4].innerHTML == section[8].innerHTML && section[0].innerHTML != '') {
        let player = section[0].innerHTML;
        alert(player + ' Win');
    }
}

btn.addEventListener('click', function(event) {
    console.log(event.target);
    console.log(section);
    for(let i = 0; i < section.length; i++) {
        section[i].innerHTML = '';
    }
 })