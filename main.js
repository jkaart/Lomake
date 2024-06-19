const lahetaBtn = document.getElementById("lahetaBtn");
lahetaBtn.addEventListener("click", lahetaLomake);

const pwInput = document.getElementById("pw");
pwInput.addEventListener("input", validoiSalasana);
pwInput.addEventListener("blur", validoiSalasana);

const kayttajaId = document.getElementById("kayttajaId");
kayttajaId.addEventListener("input", validoiKayttajaId);
kayttajaId.addEventListener("blur", validoiKayttajaId);

const nimi = document.getElementById("nimi");
nimi.addEventListener("input", validoiNimi);
nimi.addEventListener("blur", validoiNimi);

const osoite = document.getElementById("osoite");
osoite.addEventListener("input", validoiOsoite);
osoite.addEventListener("blur", validoiOsoite);

const maa = document.getElementById("maa");
maa.addEventListener("change", validoiMaa);

const postinro = document.getElementById("postinro");
postinro.addEventListener("input", validoiPostiNro);
postinro.addEventListener("blur", validoiPostiNro);

const email = document.getElementById("email");
email.addEventListener("input", validoiEmail);
email.addEventListener("blur", validoiEmail);

const sukupuoli = document.getElementsByName("sukupuoli");
sukupuoli[0].addEventListener("click", validoiSukupuoli);
sukupuoli[1].addEventListener("click", validoiSukupuoli);

const kieli = document.getElementsByName("kieli");
kieli[0].addEventListener("click", validoiKieli);
kieli[1].addEventListener("click", validoiKieli);

let validitKentat = [true,true,true,true,true,true,true,true,true];

validoiKaikki();

function validoiKayttajaId() {
    validitKentat[0] = true;
    const virhe = document.getElementById("kayttajaIdVirhe");
    if (kayttajaId.value.length <= 6) {
        virhe.textContent = "Käyttäjä ID tulee olla 6 merkkiä tai yli pitkä";
        virhe.style.display = "block";
        validitKentat[0] = false;
    }
    else {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
}

function validoiSalasana() {
    let salasanaValidi = true;

    const regex = [/[0-9]/, /[a-z]/, /[A-Z]/, /(!|@|£|\$|€|&|%|#)/];
    const salasana = pwInput.value;

    if (salasana.length < 8) {
        document.getElementById("pwVirhe0").innerText = "Salasanan tulee olla 8 merkkiä tai yli pitkä";
        salasanaValidi = false;
    }
    else {
        document.getElementById("pwVirhe0").innerText = "";
    }
    if (!regex[0].test(salasana)) {
        document.getElementById("pwVirhe1").innerText = "Salasanassa tulee olla numero";
        salasanaValidi = false;
    }
    else {
        document.getElementById("pwVirhe1").innerText = "";
    }
    if (!regex[1].test(salasana)) {
        document.getElementById("pwVirhe2").innerText = "Salasanassa tulee olla pieni kirjain";
        salasanaValidi = false;
    }
    else {
        document.getElementById("pwVirhe2").innerText = "";
    }
    if (!regex[2].test(salasana)) {
        document.getElementById("pwVirhe3").innerText = "Salasanassa tulee olla iso kirjain";
        salasanaValidi = false;
    }
    else {
        document.getElementById("pwVirhe3").innerText = "";
    }
    if (!regex[3].test(salasana)) {
        document.getElementById("pwVirhe4").innerText = "Salasanassa tulee olla jokin !@£$€&%# erikoismerkistä";
        salasanaValidi = false;
    }
    else {
        document.getElementById("pwVirhe4").innerText = "";
    }
    if (salasanaValidi == true) {
        validitKentat[1] = true;
        document.getElementById("pwVirheDiv").parentElement.style.display = "none";
    }
    if(salasanaValidi == false) {
        validitKentat[1] = false;
        document.getElementById("pwVirheDiv").parentElement.style.display = "block";
    }
}

function validoiNimi() {
    validitKentat[2] = true;
    const virhe = document.getElementById("nimiVirhe");
    if (nimi.value.length == 0) {
        virhe.textContent = "Nimi puuttuu";
        virhe.style.display = "block";
        validitKentat[2] = false;
    }
    else {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
}

function validoiOsoite() {
    validitKentat[3] = true;
    const virhe = document.getElementById("osoiteVirhe");
    if (osoite.value.length == 0) {
        virhe.textContent = "Osoite puuttuu";
        virhe.style.display = "block";
        validitKentat[3] = false;
    }
    else {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
}

function validoiMaa() {
    validitKentat[4] = true
    const virhe = document.getElementById("maaVirhe");
    if (maa.selectedIndex == 0) {
        virhe.textContent = "Valitse maa";
        virhe.style.display = "block";
        validitKentat[4] = false;
    }
    else {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
}

function validoiPostiNro() {
    validitKentat[5] = true;
    const regex = /^[0-9]+$/;
    const virhe = document.getElementById("postinroVirhe");

    if (postinro.value.length == 5 && regex.test(postinro.value)) {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
    else {
        virhe.textContent = "Postinumeron pitää olla 5 merkkiä pitkä ja sisältää vain numeroita";
        virhe.style.display = "block";
        validitKentat[5] = false;
    }
}

function validoiEmail() {
    validitKentat[6] = true;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const virhe = document.getElementById("emailVirhe");
    if (regex.test(email.value)) {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
    else {
        virhe.textContent = "Anna sähköpostiosoite oikeassa muodossa";
        virhe.style.display = "block";
        validitKentat[6] = false;
    }
}

function validoiSukupuoli() {
    validitKentat[7] = true;
    const virhe = document.getElementById("sukupuoliVirhe");

    if (sukupuoli[0].checked == false && sukupuoli[1].checked == false) {
        virhe.textContent = "Valitse sukupuoli";
        virhe.style.display = "block";
        validitKentat[7] = false;
    }
    else {
        virhe.textContent = "";
        virhe.style.display = "none";
    }
}

function validoiKieli() {
    validitKentat[8] = true;
    const virhe = document.getElementById("kieliVirhe");

    if (kieli[0].checked == true || kieli[1].checked == true) {
        virhe.textContent = "";
        virhe.style.display = "none";
    }

    if (kieli[0].checked == true && kieli[1].checked == true) {
        virhe.textContent = "Valitse yksi kieli valinta";
        virhe.style.display = "block";
        validitKentat[8] = false;
    }
    if (kieli[0].checked == false && kieli[1].checked == false) {
        virhe.textContent = "Valitse kieli";
        virhe.style.display = "block";
        validitKentat[8] = false;
    }
}

function validoiKaikki() {
    validoiKayttajaId();
    validoiSalasana();
    validoiNimi();
    validoiOsoite();
    validoiMaa();
    validoiPostiNro();
    validoiEmail();
    validoiSukupuoli();
    validoiKieli();
}

function lahetaLomake() {
    window.scrollTo(0, 0);
    const infoViesti = document.getElementById("infoViesti");
    const infoBox = document.getElementById("infoBox");
    
    console.log(validitKentat);
    validoiKaikki();

    infoBox.style.display = "block";
    if (validitKentat.every(Boolean)) {
        infoViesti.innerText = "Lomake on validi";
        infoBox.style.backgroundColor = "#3cb371";
        // document.getElementById("reklomake").submit();
    }
    else {
        infoViesti.innerText = "Lomake ei ole validi";
        infoBox.style.backgroundColor = "#FF6464";
    }
    setTimeout(() => {
            infoBox.style.display = "none";
            infoViesti.innerText = "";
        }, 5000);
}
