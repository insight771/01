const header = document.querySelector("header");

window.addEventListener("scroll" , function() {
    header.classList.toggle("sticky", this.window.scrollY > 60)
})
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
