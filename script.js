window.addEventListener('load', function () {
    fetch('https://api.github.com/users/derikbf').then((res) => {
      res.json().then((data) => {
        showData(data);
      });
    });
  });
  
  
  function showData(data) {
    const user = document.querySelector('#user');
    const nome = document.querySelector('#nome');
    const comp = document.querySelector('#company');
    const id = document.querySelector('#id');
    const url = document.querySelector('#url');
    const bio = document.querySelector('#bio');
    const followe = document.querySelector('#followers');
    const followi = document.querySelector('#following');
    const created = document.querySelector('#created_at');
  
    user.textContent = data.login;
    nome.textContent = data.name;
    comp.textContent = data.company + ' ' + data.location;
    id.textContent = data.id;
    url.textContent = data.url;
    bio.textContent = data.bio;
    followe.textContent = data.followers;
    followi.textContent = data.following;
    created.textContent = data.created_at;
  }
  