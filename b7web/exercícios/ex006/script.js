function addTask(e) {
    if (e.key == 'Enter') {
        const list = document.querySelector("ul")
        let item = document.createElement('li')
        list.appendChild(item)
        item.innerHTML += input.value
        input.value = ''
        input.focus()
    }
}

const input = document.querySelector('input')
input.addEventListener('keyup', addTask)

