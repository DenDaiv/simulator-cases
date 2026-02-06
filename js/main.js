function toggleMenu(){ document.getElementById("sideMenu").classList.toggle("show"); }

function updateBalance(){ document.getElementById("balance").innerText=`${user.balance} фришек`; }

function showPage(id){
    document.querySelectorAll(".page").forEach(p=>p.style.display="none");
    document.getElementById(id).style.display="block";
    if(id==="cases") renderCases();
    if(id==="inventory") renderInventory();
    if(id==="clicker") renderClicker();
    if(id==="profile") renderProfile();
}

function renderCases(){
    const page=document.getElementById("cases");
    page.innerHTML="<h2>Кейсы</h2>";
    CASES.forEach(c=>{
        page.innerHTML+=`
        <div class="case">
            <img src="${c.image}">
            <h3>${c.name}</h3>
            <p>${c.price} фришек</p>
            <button onclick="openCase(${c.id})">Открыть</button>
        </div>`;
    });
}

function renderInventory(){
    const page=document.getElementById("inventory");
    page.innerHTML="<h2>Инвентарь</h2>";
    user.inventory.forEach((item,index)=>{
        page.innerHTML+=`
        <div class="skin">
            <img src="${item.image}">
            <p>${item.name}</p>
            <button onclick="sellSkin(${index})">Продать за ${item.price}</button>
        </div>`;
    });
}

function sellSkin(index){
    user.balance+=user.inventory[index].price;
    user.inventory.splice(index,1);
    saveUser(user);
    renderInventory();
    updateBalance();
}

updateBalance();
showPage("cases");
