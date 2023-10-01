document.addEventListener("DOMContentLoaded", function() {
    const formDiv = document.getElementById("formDiv");
    const replacementDiv = document.getElementById("replacementDiv");
    const myForm = document.getElementById("myForm");
    const selectedOptionText = document.getElementById("score-result");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the selected radio option
        const selectedOption = document.querySelector('input[name="score"]:checked');

        if (selectedOption) {
            // Store the selected value in a variable
            const selectedValue = selectedOption.value;

            // Update the content of the replacement div with the selected value
            selectedOptionText.textContent = `You selected ${selectedValue} out of 5`;

            // Hide the form and show the replacement content
            formDiv.classList.add("hidden");
            replacementDiv.classList.remove("hidden");
        }
    });
});
