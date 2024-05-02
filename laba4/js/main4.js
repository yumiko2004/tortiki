function convertToUpperCase(input) {
    input.value = input.value.toUpperCase();
}

function submitForm() {
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let age = parseInt(document.getElementById("age").value);

    if (age < 18) {
        alert("Карта выдается только после 18 лет");
        return;
    }

    let cardNumber = Math.floor(Math.random() * 1000000);

    let message = "Номер карты: " + cardNumber + "\n" +
        "Фамилия: " + lastName + "\n" +
        "Имя: " + firstName;

    alert(message);

    resetForm();
}

function resetForm() {
    document.getElementById("form1").reset();
}