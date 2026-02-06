function renderClicker(){
    const page=document.getElementById("clicker");
    page.innerHTML=`
    <h2>Кликер</h2>
    <button onclick="clickMoney()">+1 фришка</button>
    <br><br>
    <button onclick="claimBonus()">Забрать 5000 (30 мин)</button>
    `;
}

function clickMoney(){ user.balance+=1; saveUser(user); updateBalance(); }

function claimBonus(){
    const now=Date.now();
    if(now-user.lastBonus<1800000){ alert("Бонус ещё не готов"); return; }
    user.balance+=5000;
    user.lastBonus=now;
    saveUser(user);
    updateBalance();
}
