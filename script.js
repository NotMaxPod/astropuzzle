//Buttons for sessions page
const viewMoreButtons = document.querySelectorAll(".view_more");

viewMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".session_card");
        const dropdowndetails = card.querySelector(".details");

        if (!card || !dropdowndetails) return;
        const isOpen = card.classList.contains("open");

        if (isOpen) {
            dropdowndetails.style.maxHeight = "0px";
            card.classList.remove("open");
            button.textContent = "Закрыть";
        } else {
            card.classList.add("open");
            dropdowndetails.style.maxHeight = dropdowndetails.scrollHeight + "0px";
            button.textContent = "Подробнее";
        }
    });
});

window.addEventListener("resize", () => {
    const openCards = document.querySelectorAll(".session_card.open");
    
    openCards.forEach(card => {
        const dropdowndetails = card.querySelector(".details");

        if (dropdowndetails) {
            dropdowndetails.style.maxHeight = dropdowndetails.scrollHeight + "px";
        }
    });
});