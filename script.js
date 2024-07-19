function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagen
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagen light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "uhihuihuguuygu")
  } else {
    // se tiver sem light mode, mander a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo,usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}
