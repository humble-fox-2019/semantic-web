window.onload = () => {
    var fortuneArray = [
        "Kamu ga Cocok Kerja Di Darat Cocoknya di Air",
        "Kamu Sebaiknya Jadi Developer",
        "Jodoh Kamu dengan Komputer Bukan Manusia",
        "Butuh Uang? KERJA!",
        "Takdirnya dirimu ditulis oleh dirimu sendiri",
        "Sebaik baiknya ilmu adalah yang bermanfaat",
        "Kalau kerja hanya kerja, kera dikebun juga bekerja"
    ]

    var button = document.createElement("button");
    button.innerHTML = "Click";
    document.getElementsByClassName("fortune-btn")[0].appendChild(button);

    button.addEventListener("click", () => {
        var randomNumber = Math.floor(Math.random() * 7);
        var word = fortuneArray[randomNumber]
        document.getElementById("ramalan-text").innerHTML = word;
    })

}