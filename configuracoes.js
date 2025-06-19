document.getElementById('seletorArquivo').addEventListener('change', function (e){

    const arquivos = e.target.files;

    const galeria = document.getElementById('galeria');

    Array.from(arquivos).forEach(arquivo =>{

        if(arquivo.type.startsWith('image/')){

            const leitor = new FileReader();

            leitor.onload = function (e) {

                const descricao = prompt("Insira uma descrição para a imagem '" + arquivo.name + "':");

                const div = document.createElement('div');

                    div.classList.add('image');

                const img = new Image();

                img.src = e.target.result;

                img.alt = arquivo.name;

                img.onclick = function() { abrirModal(e.target.result, descricao);};

                div.appendChild(img);

                galeria.appendChild(div);
                
            };

            leitor.readAsDataURL(arquivo);
        
        }
    });
});

function abrirModal(src, descricao){


}