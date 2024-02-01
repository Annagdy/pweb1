document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    document.querySelector('.next-button').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    document.querySelector('.prev-button').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }
});

function signInWithGoogle() {
    const authUrl = 'https://accounts.google.com/o/oauth2/auth';
    const clientId = 'SEU_ID_DE_CLIENTE';
    const redirectUri = 'URL_DE_RETORNO';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';
    const authLink = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  
    window.location.href = authLink;
  }
  
  // Adicionando um ouvinte de evento ao link
  document.getElementById("googleSignInLink").addEventListener("click", function() {
    signInWithGoogle();
  });
  
  function addStep() {
    const stepsList = document.getElementById('stepsList');
    const newStep = document.createElement('li');
    newStep.innerHTML = '<label>Passo ' + (stepsList.childElementCount + 1) + ':</label>' +
                        '<textarea name="step' + (stepsList.childElementCount + 1) + '" required></textarea>' +
                        '<label>Imagem do Passo:</label>' +
                        '<input type="file" name="stepImage' + (stepsList.childElementCount + 1) + '" accept="image/*">';
    stepsList.appendChild(newStep);
}

function removeStep() {
    const stepsList = document.getElementById('stepsList');
    if (stepsList.childElementCount > 0) {
        stepsList.removeChild(stepsList.lastChild);
    }
}

function createCheckboxes() {
  var ingredientsTextArea = document.getElementById('ingredients');
  var ingredientsListDiv = document.getElementById('ingredientsList');
  
  // Limpa a lista de checkboxes existente
  ingredientsListDiv.innerHTML = '';

  // Separa os ingredientes por linha
  var ingredientsArray = ingredientsTextArea.value.split('\n');

  // Cria uma checkbox para cada ingrediente
  ingredientsArray.forEach(function(ingredient) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'ingredientCheckbox';
      checkbox.value = ingredient.trim(); // Remove espaços em branco extras
      var label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(ingredient.trim()));
      
      ingredientsListDiv.appendChild(label);
  });
}

// Adiciona um ouvinte de evento para chamar a função quando o conteúdo do textarea muda
document.getElementById('ingredients').addEventListener('input', createCheckboxes);

// Chama a função inicialmente para criar as checkboxes se houver algum conteúdo preexistente no textarea
createCheckboxes();





// Função para formatar texto (negrito, itálico)
function formatText(command) {
  document.execCommand(command, false, null);
}

// Função para inserir link
function insertLink() {
  var url = prompt("Insira o URL do link:");
  if (url) {
      document.execCommand("createLink", false, url);
  }
}

// Função para inserir imagem
function insertImage() {
  var url = prompt("Insira o URL da imagem:");
  if (url) {
      document.execCommand("insertImage", false, url);
  }
}


document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    search();
  }
});

function search() {
  // Implemente a lógica de pesquisa aqui
  var searchTerm = document.getElementById('searchInput').value;
  // Faça algo com o termo de pesquisa, por exemplo, redirecione para uma página de resultados
  window.location.href = 'resultados.html?q=' + encodeURIComponent(searchTerm);
}
