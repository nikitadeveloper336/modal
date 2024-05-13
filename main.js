const btnModal = document.querySelector('.btn_modal')
const modal = document.querySelector('.modal')

btnModal.addEventListener('click', () => {
    modal.classList.toggle('show')
})

modal.addEventListener('click', (event) => {
    const target = event.target
    if (target === modal) {
        modal.classList.toggle('show')
    }
})