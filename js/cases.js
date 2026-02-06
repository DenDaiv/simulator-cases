function getRandomSkin(skins){
    let rand = Math.random()*100;
    let current = 0;
    for(let s of skins){
        current += s.chance;
        if(rand<=current) return s;
    }
    return skins[skins.length-1];
}

function openCase(caseId){
    const caseItem = CASES.find(c=>c.id===caseId);
    if(user.balance<caseItem.price){ alert("Недостаточно фришек"); return; }
    user.balance -= caseItem.price;
    updateBalance();

    // Создание рулетки
    const roll=[];
    for(let i=0;i<30;i++) roll.push(getRandomSkin(caseItem.skins));
    const winner = roll[25];

    const track = document.getElementById("rollTrack");
    track.innerHTML="";
    roll.forEach(s=>{
        const d=document.createElement("div");
        d.className=`roll-item ${s.rarity}`;
        d.innerHTML=`<img src="${s.image}"><p>${s.name}</p>`;
        track.appendChild(d);
    });

    document.getElementById("caseRoll").classList.remove("hidden");
    track.style.transform="translateX(0)";
    setTimeout(()=>{
        track.style.transition="transform 4s cubic-bezier(.15,.85,.35,1)";
        track.style.transform="translateX(-3000px)";
    },50);

    setTimeout(()=>{
        user.inventory.push(winner);
        saveUser(user);
        document.getElementById("caseRoll").classList.add("hidden");
        renderInventory();
        alert("Выпало: "+winner.name);
    },4200);
}
