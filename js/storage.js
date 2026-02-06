const defaultUser = {
nickname:"Player",
avatar:"images/avatars/default.png",
balance:500,
inventory:[],
lastBonus:0
};

function loadUser() { return JSON.parse(localStorage.getItem("user")) || defaultUser; }
function saveUser(user) { localStorage.setItem("user", JSON.stringify(user)); }

let user = loadUser();
