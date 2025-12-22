export function Open_Selected_Card_Details(element, target_content_id) {
    console.log("Expanding card details for " + target_content_id);
    // get list of expanding card details, reference to provided expanding card detail
    var card_parent = element.parentElement;
    var all_expanding_target_contents = card_parent.parentElement.querySelectorAll(".expanding-content-from-card");
    var all_cards = card_parent.querySelectorAll(".selectable-card")
    var target_content = document.getElementById(target_content_id);
    if (target_content == null) {
        console.error("Target " + target_content_id + " does not exist on the page. Please contact the developer.");
        return;
    }

    // hide current expanded card, remove selected card background
    all_expanding_target_contents.forEach(expansion_div => {
        expansion_div.style.display = "none";
    });
    all_cards.forEach(card => {
        card.classList.remove("selected-card");
    });

    // turn on selected card, change its background
    target_content.style.display = "block";
    element.classList.add("selected-card");
    console.log("Expanded card details for " + target_content_id);
}