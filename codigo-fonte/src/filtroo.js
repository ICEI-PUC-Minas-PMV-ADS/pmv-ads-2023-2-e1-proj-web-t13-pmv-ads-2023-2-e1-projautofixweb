document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const services = document.querySelectorAll(".servico");
  
    searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      services.forEach(function(service) {
        const text = service.textContent.trim().toLowerCase();
        const card = service.nextElementSibling; // Próximo elemento após o serviço (o card)
  
        if (text.includes(searchTerm)) {
          service.style.display = "block";
          card.style.display = "block";
        } else {
          service.style.display = "none";
          card.style.display = "block"; // Mantém os cartões visíveis
        }
      });
    });
  });

  
  