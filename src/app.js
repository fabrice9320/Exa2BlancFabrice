"use strict"
import User from "./User.js";

const randomuserURL = "https://randomuser.me/api/?results=20";

const apiRequest = async (url) => {

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
};

const cleanData = (users) => {
    const cleanedData = users.map(user => {
        return {
            title: user.name.title,
            firstName: user.name.first,
            lastName: user.name.last,
            city: user.location.city,
            country: user.location.country,
            age: user.dob.age,
            email: user.email,
            picture: user.picture.large
        };
    });
    return cleanedData;
}

const sortUsers = (tab) => {
    const sortedUsers = tab.slice();

    sortedUsers.sort(function (a, b) {
        if (a.lastName < b.lastName) {
            return -1;
        }
        if (a.lastName > b.lastName) {
            return 1;
        }
        return 0;
    });

    return sortedUsers;
}

const sortUsersAge = (tab) => {
    const sortedUsersAge = tab.slice();

    sortedUsersAge.sort(function (a, b) {
        if (a.age < b.age) {
            return -1;
        }
        if (a.age > b.age) {
            return 1;
        }
        return 0;
    });

    return sortedUsersAge;
}

const displayUsers = (tab) => {
    tab.forEach(userProperties => {
        const user = new User(userProperties);
        user.render();
    });
}

const sortNameBtn = document.querySelector("#sort--name");
sortNameBtn.addEventListener("click", () => {
    sortNameBtn.classList.add("selected");
    sortAgeBtn.classList.remove("selected");
})

const sortAgeBtn = document.querySelector("#sort--age");
sortAgeBtn.addEventListener("click", () => {
    sortNameBtn.classList.remove("selected");
    sortAgeBtn.classList.add("selected");
})

const users = await apiRequest(randomuserURL);
const usersClean = cleanData(users);

console.log(users);
console.log(usersClean);

const usersSorted = sortUsers(usersClean);

console.log(usersSorted);

displayUsers(usersSorted);


// new User(usersClean[0]).render();
// new User(usersClean[1]).render();







