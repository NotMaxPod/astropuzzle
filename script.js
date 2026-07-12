//Buttons for sessions page
const viewMoreButtons = document.querySelectorAll(".view_more");

viewMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".session_card");
        const dropdowndetails = card.querySelector(".details");

        card.classList.toggle("open");

        if (card.classList.contains("open")) {
            dropdowndetails.style.maxHeight = dropdrowndetails.scrollHeight + "px";
            button.textContent = "Закрыть";
        } else {
            dropdowndetails.style.maxHeight = "0px";
            button.textContent = "Подробнее";
        }
    });
});

window.addEventListener("resize", () => {
    const openCards = document.querySelectorAll(".session_card.open");
    
    openCards.forEach(card => {
        const details = card.querySelector(".details");
        dropdowndetails.style.maxHeight = dropdowndetails.scrollHeight + "px";
    });
});