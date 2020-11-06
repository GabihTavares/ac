var formulario = document.getElementById("form")
var input = ["x", "x", "x", "x", "x"]


formulario.addEventListener("submit", function(e){
    e.preventDefault()
    input[0] = document.getElementById("nome").value
    input[1] = document.getElementById("idade").value
    input[2] = document.getElementById("prof").value
    input[3] = document.getElementById("mail").value
    input[4] = document.getElementById("tel").value

    console.log(input)

    for(i=0; i<input.length; i++){
        console.log(input[i])
    }

    function recarrega() {
        var p = document.getElementById('Foo');
        var filhos = p.childNodes;
        for( i = filhos.length - 1; i >= 0; i-- ) {
          if( filhos[i].tagName == 'LI' ) {
            p.removeChild( filhos[i] );
          }
        }
      
        var li = document.createElement('li');
        li.innerHTML = 'seis';
        p.appendChild(li);
      
        var li = document.createElement('li');
        li.innerHTML = 'sete';
        p.appendChild(li);
      }
})