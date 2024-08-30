// Event listener
document.getElementById("validateButton").addEventListener("click", function() {
    const petString = document.getElementById("petInput").value;
    const isValid = validateSyntax(petString);

    // Boolean (condition ? expression1 : expression2)
    const result = isValid ? "Valid Syntax!" : "Invalid Syntax!";
    document.getElementById("result").innerText = result;
});

function validateSyntax(petString) {
    if (!petString.startsWith("pet_")) {
        return false;
    }

    // Extract year and name
    const yearAndName = petString.slice(4);

    // Year is first four characters after "pet_"
    const year = yearAndName.slice(0, 4);

    // Validate year (Not a Number)
    if (isNaN(year) || year.length !== 4 || year < 2000 || year > new Date().getFullYear()) {
        return false;
    }

    // Name follows the year (not empty)
    const name = yearAndName.slice(4);
    if (name.length === 0) {
        return false;
    }

    return true;
}
