const moedaorigem = document.querySelector(".valor-de-origem select");
const moedadestino = document.querySelector(".valor-de-destino select");
const clicarbotao = document.querySelector("form button");
const icone = document.querySelector("form .reverse");
const quantiaorigem = document.querySelector("form input");
const quantiadestino = document.querySelector("form .Resultado-da-Conversao");
// Lista de seleção das moedas de origem, as nacionais de alguns países.
[moedaorigem].forEach((select, i) => {
    for (let codigomoeda in lista_de_paises) {
        const selecionado_origem = (i === 0 && codigomoeda === "USD")
        select.insertAdjacentHTML("beforeend", `<option value="${codigomoeda}" ${selecionado_origem}>${codigomoeda}</option>`);
    }
    // Troca da imagem da bandeira junto com os países.
    select.addEventListener("change", () => {
        const codigo = select.value;
        const imttag = select.parentElement.querySelector("img");
        imttag.src = `img/${lista_de_paises[codigo].toLowerCase()}.png`;
    });
});
// Lista de seleção das moedas de destino, as criptomoedas mais famosas.
[moedadestino].forEach((select, i) => {
    for (let codigocripto in lista_de_criptomoedas) {
        const selecionado_destino = (i === 0 && codigocripto === "BTC")
        select.insertAdjacentHTML("beforeend", `<option value="${codigocripto}" ${selecionado_destino}>${codigocripto}</option>`);
    }
});

async function obtertaxadecambio() {

}

