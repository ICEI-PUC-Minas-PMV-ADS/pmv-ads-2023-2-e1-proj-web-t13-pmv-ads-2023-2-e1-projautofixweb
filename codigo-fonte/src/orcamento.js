function solicitarOrcamento(servico) {
    const formContainer = document.querySelector('.form-container');
    const selectedServiceInput = formContainer.querySelector('#selected-service');
    selectedServiceInput.value = servico;

    formContainer.style.display = 'block'; // Corrigido
    document.querySelector('.servicos').style.display = 'none'; // Corrigido
    formContainer.style.display = 'block';
}


function enviarFormulario() {
    const formData = new FormData(document.querySelector('.contact-form'));
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    const selectedService = formDataObject['selected-service'];
    alert(`Solicitação de orçamento para: ${selectedService} enviada!\n\nDetalhes:\nNome: ${formDataObject.name}\nE-mail: ${formDataObject.email}\nTelefone: ${formDataObject.phone}`);
    
    voltar();
    return false; // Evita o envio padrão do formulário
}

function voltar() {
    document.querySelector('.form-container').style.display = 'none';
}

function voltarParaServicos() {
    document.querySelector('.servicos').style.display = 'flex';
}

function voltarParaPaginaInicial() {
    window.location.href = "home.html";
}
