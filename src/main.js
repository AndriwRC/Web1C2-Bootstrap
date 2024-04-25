// Nodes
const form = document.querySelector('#form');
const formInputs = document.querySelectorAll('.form-input');
const nameInput = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const registerBtn = document.querySelector('#registerBtn');

const tableBody = document.querySelector('#tableBody');

const data = [
    {
        name: 'Elena',
        lastName: 'Rodríguez',
        email: 'elena.kittycuddles@hotmail.com',
    },
    {
        name: 'Jamal',
        lastName: 'Williams',
        email: 'jamal.kittyfanatic@aol.com',
    },
    {
        name: 'Lars',
        lastName: 'Johansen',
        email: 'lars.kittytamer@yahoo.com',
    },
    {
        name: 'Diego',
        lastName: 'Silva',
        email: 'diego.kittyenthusiast@gmail.com',
    },
    {
        name: 'Sofia',
        lastName: 'Santos',
        email: 'sofia.kittybliss@yahoo.com',
    },
];

function loadUsers() {
    tableBody.innerHTML = '';
    data.forEach((user, index) => {
        const userRow = document.createElement('tr');
        userRow.innerHTML = `
            <th scope="row">${++index}</th>
            <td>${user.name}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        `;

        tableBody.appendChild(userRow);
    });
}

// Event Listener
registerBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Missing Inputs
    let missingInputs = 0;

    formInputs.forEach((input) => {
        if (input.value == '') {
            missingInputs++;
        }
    });

    if (missingInputs) {
        alert(
            'Some fields are missing! Please complete all information to register a new user.'
        );
    } else if (password.value != confirmPassword.value) {
        // Confirm Password
        alert('Password fields does not match');
    } else {
        const newUser = {
            name: nameInput.value,
            lastName: lastName.value,
            email: email.value,
        };

        data.push(newUser);

        alert(
            `New User ${nameInput.value} ${lastName.value} registered successfully!`
        );

        form.reset();
        loadUsers();
    }
});

window.addEventListener('DOMContentLoaded', loadUsers);
