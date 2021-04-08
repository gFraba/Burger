$(function () {
    // change burger state to devoured_burger
    $(".devoure-burger").on("click", function (event) {
        let id = $(this).data("id");
        let newState = $(this).data("newstate");

        let newBurgerState = {
            devoured: true
        };

        // put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(() => {
            console.log("changed state to", newState);
            // reload to update list
            location.reload();
        });
    });

    $("#addBurgerForm").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#add-burger").val().trim()
        };

        //post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger");
            //reload page for updated list
            location.reload();
        });
    });

    $(".delete-burger").on("click", function (event) {
        let id = $(this).data("id");

        // delete request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            console.log("deleted burger", id);
            //reload page to update list
            location.reload();
        });
    });
});