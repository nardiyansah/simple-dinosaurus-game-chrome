var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    // menambahkan class untuk lompat
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500); // setelah 500 ms class animate akan dihapus lagi
}

document.onkeypress = function (e) {
    // ketika tekan space karakter lompat
    if (e.keyCode == 32) {
        jump();
    }
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // intinya ini mengambil nilai top dari character saat ini dalam px
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); // mengambil nilai left dari block saat ini dalam px

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 330) { //block ada di posisi character dan top karakter lebih dari 330 yang berarti character tidak sedang melompat diatas block
        block.style.animation = "none"; // menghentikan animasi
        block.style.display = "none";
        alert("Oops, you Lose !");
    }

}, 10);

