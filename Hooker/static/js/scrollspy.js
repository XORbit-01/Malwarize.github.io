const liList = document.querySelectorAll(".spyscroll-list li");
// add event listener to each element
liList.forEach(function(spyscroll) {
    spyscroll.addEventListener("click", function() {
        // remove active class from all elements
        liList.forEach(function(spyscroll) {
            spyscroll.classList.remove("spyscroll-selected-item");
        });
        // add active class to current element
        spyscroll.classList.add("spyscroll-selected-item");
    });
});