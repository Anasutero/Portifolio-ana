const abrirjanela = document.querySelectorAll('.Janela.Abrir')

abrirjanela.forEach((abrir) =>{
    abrir.addEventListener('click', (e) =>{
      const Janela = abrir.parentElement 
      const isOpen = Janela.classlist.cotains('open')

      if (isOpen) {
        Janela.classlist.remove('open')
      }else {
        Janela.classlist.add('open')
      }
    })
})