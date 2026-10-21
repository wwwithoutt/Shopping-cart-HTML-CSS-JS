const users = [
    { username: "admin", password: "1234" },
    { username: "ahmet", password: "1235" },
    { username: "zeynep", password: "4562" },
    { username: "mehmet", password: "7894" }
];

const magazaSayfasi = "index.html";

const form = document.getElementById("girisFormu");
const sonucAlani = document.getElementById("sonuc");
const sifreAlani = document.getElementById("sifre");
const sifreCheckbox = document.querySelector(".password-checkbox");

/* Şifreyi göster/gizle  */
sifreCheckbox.addEventListener("change", function () {
    sifreAlani.type = sifreCheckbox.checked ? "text" : "password";
});

/* Giriş kontrolü */
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formVerisi = new FormData(form);
    const kullaniciAdi = formVerisi.get("kullanici_adi");
    const sifre = formVerisi.get("sifre");

    if (sifre.length < 4) {
        sonucAlani.innerHTML =
            '<div class="alert alert-danger">En az 4 karakter olmalı</div>';
        return;
    }

    const bulunanKullanici = users.find(
        user => user.username === kullaniciAdi && user.password === sifre
    );

    if (bulunanKullanici) {
        sonucAlani.innerHTML =
            `<div class="alert alert-success">Hoş geldiniz ${bulunanKullanici.username}! Yönlendiriliyorsunuz...</div>`;

        setTimeout(function () {
            window.location.href = magazaSayfasi;
        }, 1000);
    } else {
        sonucAlani.innerHTML =
            '<div class="alert alert-danger">Kullanıcı adı veya şifre hatalı!</div>';
    }
});