//BURGER MENU
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    })

    //Hacer una llamada GET a https://jsonplaceholder.typicode.com/posts para pedir la información de los 3 primeros posts y pintarla en la sección de “Recent projects”.
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
      const title1 = document.getElementById("title1");
      const title2 = document.getElementById("title2");
      const title3 = document.getElementById("title3");
      const content1 = document.getElementById("content1");
      const content2 = document.getElementById("content2");
      const content3 = document.getElementById("content3");
      title1.innerHTML = data[0].title;
      title2.innerHTML = data[1].title;
      title3.innerHTML = data[2].title;
      content1.innerHTML = data[0].body;
      content2.innerHTML = data[1].body;
      content3.innerHTML = data[2].body;
    })

    //Hacer una llamada POST desde el formulario de Contacto a la misma URL, y si el servidor devuelve un código 201, mostrar un mensaje tipo “El formulario se ha enviado correctamente”.

    let fetchPostData = new Request(url, {
      method: "POST",
      id: 420,
    })

    fetch(fetchPostData)
    .then(function(data) {
        console.log(data)
        console.log("El formulario se ha enviado correctamente")
    })

    //Hacer una llamada GET a https://jsonplaceholder.typicode.com/posts/1 para la página individual del proyecto, y pintar dentro la información

    fetch(url)
    .then(res => res.json())
    .then((data)=>{
      console.log(data)
      const titleIndividual = document.getElementById("titleIndividual");
      const contentIndividual = document.getElementById("contentIndividual");
      titleIndividual.innerHTML = data[0].title;
      contentIndividual.innerHTML = data[0].body;
    })
