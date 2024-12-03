const node_for_click = document.getElementById("for_click")

function find_edit(){
    if (document.getElementsByTagName('div')[4].innerHTML==='Кирсанов'){
        document.getElementsByTagName('div')[4].innerHTML='Kirsanov'
        document.getElementsByTagName('div')[5].innerHTML='Nikita'
        return
    }
    if(document.getElementsByTagName('div')[4].innerHTML==='Kirsanov'){
        document.getElementsByTagName('div')[5].innerHTML='Никита'
        document.getElementsByTagName('div')[4].innerHTML='Кирсанов'
        return
    }
}

node_for_click.addEventListener("click",find_edit)
