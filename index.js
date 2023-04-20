async function buscarPais() {
    const nomePais = document.getElementById("pais").value;
    const resposta = await fetch(`https://restcountries.com/v2/name/${nomePais}`);
    const dados = await resposta.json();
    const pais = dados[0];
    const nome = pais.name;
    const capital = pais.capital;
    const populacao = pais.population;
    const lingua = pais.languages[0].name;
    const bandeira = pais.flag;
    const resultado = `
      <img src="${bandeira}" width="200">
      <p><strong>País:</strong> ${nome}</p>
      <p><strong>Capital:</strong> ${capital}</p>
      <p><strong>População:</strong> ${populacao}</p>
      <p><strong>Língua Oficial:</strong> ${lingua}</p>
    `;
    document.getElementById("resultado").innerHTML = resultado;
  }