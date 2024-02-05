class User {
    constructor(propreties) {
        this.title = propreties.title;
        this.firstName = propreties.firstName;
        this.lastName = propreties.lastName;
        this.age = propreties.age;
        this.city = propreties.city;
        this.country = propreties.country;
        this.email = propreties.email;
        this.picture = propreties.picture;
        this.attendance = false;
        this.element = this.generateCardElement();

        this.element.addEventListener('click', () => {
            this.attendanceSwitch();
            let counter = 0;
            counter = counter + 1;
        });
    }

    generateCardElement() {
        const card = document.createElement("div");
        card.classList.add("user");
        card.dataset.present = this.attendance;

        const childHTML = `
		<img src="${this.picture}">
		<div class="user--info">
				<h1>${this.title} ${this.firstName} ${this.lastName}</h1>
				<p>${this.age} years old</p>
				<p>${this.location}, ${this.country}</p>
		</div>
        <a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		</a>`

        card.insertAdjacentHTML("afterbegin", childHTML);

        return card;
    }

    render() {
        document.querySelector("main").appendChild(this.element);
        return this;
    }

    attendanceSwitch() {
        if (this.attendance === false) {
            0
            this.attendance = true;
        } else {
            this.attendance = false
        }
        this.updateVisualState();
    }

    updateVisualState() {
        this.element.dataset.present = this.attendance;
    }
}

export default User;