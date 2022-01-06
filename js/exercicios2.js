
// Crie um programa que entre com os dados de altura e sexo de 5 pessoas.Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino.Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.

function showResult(){
    let heightPerson1 = document.getElementById("txtPessoa1").value
    let heightPerson2 = document.getElementById("txtPessoa2").value
    let heightPerson3 = document.getElementById("txtPessoa3").value
    let heightPerson4 = document.getElementById("txtPessoa4").value
    let heightPerson5 = document.getElementById("txtPessoa5").value

    let personSex1 = document.getElementsByName("Ps1Sexo")
    let personSex2 = document.getElementsByName("Ps2Sexo")
    let personSex3 = document.getElementsByName("Ps3Sexo")
    let personSex4 = document.getElementsByName("Ps4Sexo")
    let personSex5 = document.getElementsByName("Ps5Sexo")
    
    let sexo;
    for (var i = 0 in personSex1) 
        if (personSex1[i].checked)
            sexo = sexo.push(personSex1[i].value)
            alert(sexo[0])
    
            
    
    
}