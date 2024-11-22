// Robert made code down below
// This is the code for the accordion menu
// also am leaving notes below so you can understand what is happening

// Content for each section
const accordionData = {// This is an object that contains arrays of objects
    "menu-items": [
        // title is for the name of the button and content is for the content that will be displayed when the button is clicked
        { title: "Hot Chicken Slider", content: "Details about Hot Chicken Slider" },
        { title: "Hot Chicken & Waffle", content: "Details about Hot Chicken & Waffle" },
        { title: "Hot Tender Salad", content: "Chicken Salad with Lettuce, Special Sauce, Ranch, and Pickles" },
        { title: "Nash + Tender Fries", content: "Loaded Fries with Mac N'Cheese, Chicken Tender, Coleslaw, Special Sauce, and Pickles" },
        { title: "Tender + Mac Sandwich", content: "Chicken Sandwich on White Bread with Mac N' Cheese, Coleslaw, Pickles, and Special Sauce" },
        { title: "3 Tenders", content: "Three Chicken Tenders Served w/ Special Sauce" },
        { title: "Waffle Sandwich", content: "Sandwich with Waffle Crust, Chicken Tender, Mac N' Cheese, Coleslaw, Pickles, and Special Sauce" }
    ],
    "classic-combos": [
        { title: "#1", content: "2 Chicken Sliders with Fries" },
        { title: "#2", content: "2 Chicken Tenders Over White Bread with Coleslaw, Pickles, and Special Sauce" },
        { title: "#3", content: "Chicken Slider and Chicken Tender Over White Bread" },
        { title: "#4", content: "Chicken Slider with Extra Tender on the side and Mac N' Cheese" }
    ],
    "kids-menu": [
        { title: "Kiddo Combo", content: "Two Tenders w/ Pickles. Served w/ fries, Special Sauce, juice + chocolate chip cookie." },
        { title: "Grilled Cheese Sandwich", content: "A delightful combination of melted cheese nestled between perfectly toasted bread." }
    ],
    "secret-menu": [
        { title: "Nashrito", content: "Hot Chicken Breakfast Style Burrito with Coleslaw, Mac N' Cheese, Eggs, Fries, and Special Sauce" },
        { title: "Tender Taco", content: "Classic Chicken Taco with a Twist, topped with Coleslaw, Pickles, and Special Sauce, over a Flour Tortilla" },
        { title: "2 Tender Tacos", content: "2 Tender Tacos w/ Pickles , Coleslaw , Special Sauce , and Spicy Sauce" }
    ],
    "fire-packs": [
        { title: "15 Tenders", content: "15 Tenders. Comes w/ Pickles & 8oz of Special Sauce" },
        { title: "25 Tenders", content: "25 Tenders. Comes w/ Pickles and 16oz of Special Sauce." },
        { title: "35 Tenders", content: "35 Tenders. Comes w/ Pickles and 24oz of Special Sauce." },
        { title: "8 Chicken Sliders", content: "Description: Placeholder" },
        { title: "8 Tender + Mac Sandwiches", content: "Description: Placeholder" },
        { title: "Coleslaw - Fire Pack Size", content: "Description: Placeholder" },
        { title: "Fries - Fire Pack Size", content: "Served w/ 16oz of Special Sauce" }
    ],
    "sides": [
        { title: "Waffle", content: "Description: Placeholder" },
        { title: "Fries", content: "Description: Placeholder" },
        { title: "Mac N' Cheese", content: "Description: Placeholder" },
        { title: "Pickles", content: "Description: Placeholder" },
        { title: "Extera Tender", content: "Description: Placeholder" },
        { title: "Coleslaw", content: "Description: Placeholder" },
        { title: "Spicy Sauce", content: "Description: Placeholder" },
        { title: "Ranch", content: "Description: Placeholder" },
        { title: "BBQ", content: "Description: Placeholder" },
        { title: "Special Sauce", content: "Description: Placeholder" }
    ],
    "drinks": [
        { title: "Fiji Bottled Water", content: "Description: Placeholder" },
        { title: "Fountain Drinks", content: "Pepsi, Diet Pepsi, Mountain Dew, Sierra Mist, Gatorade, Dr. Pepper" },
        { title: "Fresh Lemonade", content: "Strawberry Kiwi or Regular" },
        { title: "Juice", content: "Orange or Apple" }
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
        event.preventDefault(); // Prevent the page from scrolling
        const section = this.dataset.section;
        loadAccordion(section);
    });
});

// Load default section on page load
loadAccordion("menu-items");