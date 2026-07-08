//Buttons for sessions page
const viewMoreButtons = document.querySelectorAll(".view_more");

viewMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".session_card");

        card.classList.toggle("open");

        if (card.classList.contains("open")) {
            button.textContent = "Закрыть";
        } else {
            button.textContent = "Читать Более";
        }
    });
});
