// ==========================
// 15 кейсов, 12 скинов в каждом
// Дешёвые кейсы: дешёвые скины
// Дорогие кейсы: редкие/легендарные
// Шансы настроены под экономику
// ==========================

const CASES = [
{
id:1,
name:"Starter Case",
price:49,
image:"images/cases/case1.png",
skins:[
{name:"Glock Fade", image:"images/skins/glock_fade.png", chance:25, price:50, rarity:"common"},
{name:"USP Kill", image:"images/skins/usp_kill.png", chance:20, price:60, rarity:"common"},
{name:"P250 Sand", image:"images/skins/p250.png", chance:15, price:70, rarity:"common"},
{name:"MP7 Neon", image:"images/skins/mp7.png", chance:10, price:80, rarity:"common"},
{name:"M4 Urban", image:"images/skins/m4_urban.png", chance:8, price:100, rarity:"rare"},
{name:"AK Redline", image:"images/skins/ak_redline.png", chance:7, price:120, rarity:"rare"},
{name:"AWP Boom", image:"images/skins/awp_boom.png", chance:5, price:150, rarity:"rare"},
{name:"Deagle Blaze", image:"images/skins/deagle_blaze.png", chance:4, price:200, rarity:"epic"},
{name:"AK Neon", image:"images/skins/ak_neon.png", chance:3, price:250, rarity:"epic"},
{name:"M4 Howl", image:"images/skins/m4_howl.png", chance:2, price:500, rarity:"legend"},
{name:"AWP Asiimov", image:"images/skins/awp_asiimov.png", chance:1, price:1000, rarity:"legend"},
{name:"Dragon Lore", image:"images/skins/awp_dragon.png", chance:0.5, price:5000, rarity:"legend"}
]
},
// Далее уникальные кейсы с разными скинами
{
id:2,
name:"Bronze Case",
price:199,
image:"images/cases/case2.png",
skins:[
{name:"Glock Water", image:"images/skins/glock_water.png", chance:20, price:60, rarity:"common"},
{name:"USP Night", image:"images/skins/usp_night.png", chance:18, price:80, rarity:"common"},
{name:"P90 Jungle", image:"images/skins/p90_jungle.png", chance:15, price:90, rarity:"common"},
{name:"MP9 Emerald", image:"images/skins/mp9_emerald.png", chance:12, price:100, rarity:"common"},
{name:"M4 Desert", image:"images/skins/m4_desert.png", chance:10, price:120, rarity:"rare"},
{name:"AK Blue Lam", image:"images/skins/ak_blue.png", chance:8, price:150, rarity:"rare"},
{name:"AWP Redline", image:"images/skins/awp_redline.png", chance:6, price:200, rarity:"rare"},
{name:"Deagle Blaze2", image:"images/skins/deagle_blaze2.png", chance:5, price:250, rarity:"epic"},
{name:"AK Fire Serpent", image:"images/skins/ak_fire.png", chance:4, price:400, rarity:"epic"},
{name:"M4 Howl2", image:"images/skins/m4_howl2.png", chance:3, price:600, rarity:"legend"},
{name:"AWP Asiimov2", image:"images/skins/awp_asiimov2.png", chance:2, price:1000, rarity:"legend"},
{name:"Dragon Lore2", image:"images/skins/awp_dragon2.png", chance:1, price:2000, rarity:"legend"}
]
},
// Аналогично создаём кейсы 3–15 с уникальными скинами
];

// Кейсы 1 и 2 оставляем как есть
// Далее создаём уникальные кейсы с 12 скинами каждый
{
id:3,
name:"Silver Case",
price:499,
image:"images/cases/case3.png",
skins:[
{name:"P90 Emerald", image:"images/skins/p90_emerald.png", chance:20, price:80, rarity:"common"},
{name:"MP9 Sand", image:"images/skins/mp9_sand.png", chance:18, price:90, rarity:"common"},
{name:"Glock Night", image:"images/skins/glock_night.png", chance:15, price:100, rarity:"common"},
{name:"USP Golden", image:"images/skins/usp_golden.png", chance:12, price:120, rarity:"common"},
{name:"M4 Nitro", image:"images/skins/m4_nitro.png", chance:10, price:150, rarity:"rare"},
{name:"AK Red Laminate", image:"images/skins/ak_redlam.png", chance:8, price:200, rarity:"rare"},
{name:"AWP Corticera", image:"images/skins/awp_corticera.png", chance:6, price:250, rarity:"rare"},
{name:"Deagle Code Red", image:"images/skins/deagle_code.png", chance:5, price:400, rarity:"epic"},
{name:"AK Fire Serpent", image:"images/skins/ak_fire2.png", chance:4, price:600, rarity:"epic"},
{name:"M4 Howl 2", image:"images/skins/m4_howl2.png", chance:3, price:900, rarity:"legend"},
{name:"AWP Asiimov 2", image:"images/skins/awp_asiimov2.png", chance:2, price:1200, rarity:"legend"},
{name:"Dragon Lore 2", image:"images/skins/awp_dragon2.png", chance:1, price:2000, rarity:"legend"}
]
},
];

{
id:4,
name:"Gold Case",
price:999,
image:"images/cases/case4.png",
skins:[
{name:"P2000 Ocean", image:"images/skins/p2000_ocean.png", chance:18, price:90, rarity:"common"},
{name:"MP7 Forest", image:"images/skins/mp7_forest.png", chance:15, price:110, rarity:"common"},
{name:"Glock Ironwork", image:"images/skins/glock_iron.png", chance:12, price:130, rarity:"common"},
{name:"USP Guardian", image:"images/skins/usp_guardian.png", chance:10, price:150, rarity:"rare"},
{name:"M4 Cyrex", image:"images/skins/m4_cyrex.png", chance:8, price:200, rarity:"rare"},
{name:"AK Vulcan", image:"images/skins/ak_vulcan.png", chance:6, price:250, rarity:"rare"},
{name:"AWP Hyper Beast", image:"images/skins/awp_hyper.png", chance:5, price:400, rarity:"epic"},
{name:"Deagle Blazing", image:"images/skins/deagle_blazing.png", chance:4, price:600, rarity:"epic"},
{name:"AK Fire Serpent 2", image:"images/skins/ak_fire3.png", chance:3, price:900, rarity:"legend"},
{name:"M4 Howl 3", image:"images/skins/m4_howl3.png", chance:2, price:1200, rarity:"legend"},
{name:"AWP Asiimov 3", image:"images/skins/awp_asiimov3.png", chance:1, price:1500, rarity:"legend"},
{name:"Dragon Lore 3", image:"images/skins/awp_dragon3.png", chance:0.5, price:3000, rarity:"legend"}
]
},
];

{
id:5,
name:"Platinum Case",
price:1999,
image:"images/cases/case5.png",
skins:[
{name:"P250 Supernova", image:"images/skins/p250_supernova.png", chance:15, price:120, rarity:"common"},
{name:"MP7 Oceanic", image:"images/skins/mp7_oceanic.png", chance:12, price:150, rarity:"common"},
{name:"Glock Reactor", image:"images/skins/glock_reactor.png", chance:10, price:180, rarity:"common"},
{name:"USP Orion", image:"images/skins/usp_orion.png", chance:8, price:250, rarity:"rare"},
{name:"M4 Atomic", image:"images/skins/m4_atomic.png", chance:7, price:400, rarity:"rare"},
{name:"AK Vulcan 2", image:"images/skins/ak_vulcan2.png", chance:6, price:600, rarity:"rare"},
{name:"AWP Hyper Beast 2", image:"images/skins/awp_hyper2.png", chance:5, price:900, rarity:"epic"},
{name:"Deagle Blaze 3", image:"images/skins/deagle_blaze3.png", chance:4, price:1200, rarity:"epic"},
{name:"AK Fire Serpent 3", image:"images/skins/ak_fire4.png", chance:3, price:2000, rarity:"legend"},
{name:"M4 Howl 4", image:"images/skins/m4_howl4.png", chance:2, price:3000, rarity:"legend"},
{name:"AWP Asiimov 4", image:"images/skins/awp_asiimov4.png", chance:1, price:5000, rarity:"legend"},
{name:"Dragon Lore 4", image:"images/skins/awp_dragon4.png", chance:0.5, price:8000, rarity:"legend"}
]
},
];


{
id:6,
name:"Diamond Case",
price:4999,
image:"images/cases/case6.png",
skins:[
{name:"P250 Ember", image:"images/skins/p250_ember.png", chance:12, price:150, rarity:"common"},
{name:"MP9 Frost", image:"images/skins/mp9_frost.png", chance:10, price:200, rarity:"common"},
{name:"Glock Blue", image:"images/skins/glock_blue.png", chance:9, price:250, rarity:"common"},
{name:"USP Orion 2", image:"images/skins/usp_orion2.png", chance:7, price:400, rarity:"rare"},
{name:"M4 Atomic 2", image:"images/skins/m4_atomic2.png", chance:6, price:600, rarity:"rare"},
{name:"AK Vulcan 3", image:"images/skins/ak_vulcan3.png", chance:5, price:900, rarity:"rare"},
{name:"AWP Hyper Beast 3", image:"images/skins/awp_hyper3.png", chance:4, price:1500, rarity:"epic"},
{name:"Deagle Blaze 4", image:"images/skins/deagle_blaze4.png", chance:3, price:2000, rarity:"epic"},
{name:"AK Fire Serpent 4", image:"images/skins/ak_fire5.png", chance:2, price:4000, rarity:"legend"},
{name:"M4 Howl 5", image:"images/skins/m4_howl5.png", chance:1, price:5000, rarity:"legend"},
{name:"AWP Asiimov 5", image:"images/skins/awp_asiimov5.png", chance:0.5, price:8000, rarity:"legend"},
{name:"Dragon Lore 5", image:"images/skins/awp_dragon5.png", chance:0.25, price:15000, rarity:"legend"}
]
},
];


// Далее аналогично создаём кейсы 7–15 с уникальными скинами, постепенно увеличивая цену и редкость скинов
