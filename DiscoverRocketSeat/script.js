function toggleMode() {
    const html = document.documentElement
    //if(html.classList.contains("light")){
    //   html.classList.remove("light")
    // }
    //else{
    //  html.classList.add("light")
    //}
    html.classList.toggle("light")

    //pegar tag img
    let imagem = document.querySelector("#profile img") //msm seletor do css

    //se tiver lightmode add img light
    if (html.classList.contains("light")) {

        //substituir a img
        imagem.setAttribute("src", "./DevLinks • Projeto Discover (Community)/Avatar(1).png")
    }
    else {
        //se tiver dark mode, manter img dark
        imagem.setAttribute("src", "./DevLinks • Projeto Discover (Community)/avatar.png")
    }
}
