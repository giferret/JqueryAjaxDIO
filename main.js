function consultaCep(){
    var cep = document.getElementById("Cep").value;
    var url: "https://viacep.com.br/ws/" + cep + "json/";
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        sucess: function(response){
            console.log(response);
        }

    })
}