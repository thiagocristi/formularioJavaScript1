document.getElementById("submitBtn").addEventListener("click", function() {
    const nome = document.getElementById("name").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;
    const experiencia = document.querySelector('input[name="fav_language"]:checked')?.value;

    if (idade < 18) {
        document.getElementById("resultado").innerHTML = "<p>A idade tem que ser igual ou maior que 18 para prosseguir!</p>";
        return;
    }

    document.getElementById("resultado").innerHTML = `
    <p>Nome: ${nome}</p>
    <p>Idade: ${idade}</p>
    <p>Curso: ${curso}</p>
    <p>Nível de Experiência: ${experiencia}</p>
`;
document.querySelector("form").reset();

    
})