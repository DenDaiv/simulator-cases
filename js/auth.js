function renderProfile() {
    const page = document.getElementById("profile");
    page.innerHTML = `
    <h2>Профиль</h2>
    <input id="nicknameInput" value="${user.nickname}" />
    <button onclick="saveProfile()">Сохранить</button>
    `;
}

function saveProfile() {
    user.nickname = document.getElementById("nicknameInput").value;
    saveUser(user);
    alert("Сохранено!");
}
