// Robert made code down below
// This is the code for the accordion menu
// also am leaving notes below so you can understand what is happening

// Content for each section
const accordionData = {// This is an object that contains arrays of objects
    "menu-items": [
        // title is for the name of the button and content is for the content that will be displayed when the button is clicked
        { title: "Hot Chicken Slider", content: "Details about Hot Chicken Slider" },
        { title: "Hot Chicken & Waffle", content: "Details about Hot Chicken & Waffle" }
    ],
    "classic-combos": [
        { title: "Combo 1", content: "Details about Combo 1" },
        { title: "Combo 2", content: "Details about Combo 2" }
    ],
    "kids-menu": [
        { title: "Kids Nugget Meal", content: "Details about Kids Nugget Meal" },
        { title: "Mini Slider Meal", content: "Details about Mini Slider Meal" }
    ],
    "secret-menu": [
        { title: "Secret Slider", content: "Details about Secret Slider" },
        { title: "Secret Combo", content: "Details about Secret Combo" }
    ],
    "fire-packs": [
        { title: "Fire Pack A", content: "Details about Fire Pack A" },
        { title: "Fire Pack B", content: "Details about Fire Pack B" },
        { title: "Fire Pack C", content: "Details about Fire Pack C" }
    ],
    "sides": [
        { title: "Fries", content: "Details about Fries" },
        { title: "Coleslaw", content: "Details about Coleslaw" }
    ],
    "drinks": [
        { title: "Soda", content: "Details about Soda" },
        { title: "Lemonade", content: "Details about Lemonade" }
    ]
};

// Function to generate accordions dynamically
function loadAccordion(section) {// This function is used to create the accordion menu
    const accordionContainer = document.getElementById("dynamicAccordion");
    accordionContainer.innerHTML = ""; // Clear existing content

    // This is a loop that goes through the object and creates the buttons and content for the accordion menu
    accordionData[section].forEach((item, index) => {
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";

        accordionItem.innerHTML =
            `<h2 class="accordion-header" id="heading-${section}-${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${section}-${index}" aria-expanded="false" aria-controls="collapse-${section}-${index}">
                    ${item.title}
                </button>
            </h2>
            <div id="collapse-${section}-${index}" class="accordion-collapse collapse" aria-labelledby="heading-${section}-${index}" data-bs-parent="#dynamicAccordion">
                <div class="accordion-body">
                    ${item.content}
                </div>
            </div>`// This is where the content is added to the accordion menu

        accordionContainer.appendChild(accordionItem);// This is where the content is added to the accordion menu
    });
}

// had troble on this part of the code
document.querySelectorAll(".load-accordion").forEach(link => {// This is a query selector that selects all the top bar links
    link.addEventListener("click", function (event) {// This is an event listener that listens for a click on the top bar links
        const section = this.dataset.section;
        loadAccordion(section);
    });
});

// Load default section on page load
loadAccordion("menu-items");