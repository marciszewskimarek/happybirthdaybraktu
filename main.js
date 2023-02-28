const content = document.getElementById("content");
const cover = document.getElementById("cover");
const text = document.getElementById("text");
content.style.backgroundColor = "#000";

cover.addEventListener("click", () => {
    cover.classList.add("hide");
}, false);

const ids = [];
for (let i = 1; i < 33; i++)
{
    ids.push(i);
}

shuffleArray(ids);
for (const id of ids)
{
    // const btn = document.createElement("button");
    // btn.id = id;
    // btn.innerText = id;
    // content.appendChild(btn);
    const video = document.createElement("video");
    video.id = id;
    video.src = "happybirthdaybraktu/" + id + ".mov";
    video.muted = true;
    video.loop = true;
    video.play = true;
    video.autoplay = true;
    video.controls = false;
    video.addEventListener("click", handleClick, false);
    content.appendChild(video);
}

function handleClick(event)
{
    console.log(event.target.id);
    cover.classList.remove("hide")
    text.innerText = data[event.target.id - 1][event.target.id]
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

 var data = [
    {
        1: "Jestes wyjatkowym i wspanialym czlowiekiem." 
    },
    {
        2: "Szybko dzialajacy, zmotywowany i do tego zawsze motywuje innych wokolo." 
    },
    {
        3: "Najlepszy brat na swiecie." 
    },
    {
        4: "Potrafisz porywac sie na cos nowego i trudnego. Jestes bardzo odwazny." 
    },
    {
        5: "Mozna na tobie polegac." 
    },
    {
        6: "Jestes slowny i zawsze dotrzymujesz slowa." 
    },
    {
        7: "Z nas dwojga to ty jestes ten lepszy." 
    },
    {
        8: "Swietnie sie ubierasz." 
    },
    {
        9: "Jestem z ciebie dumny." 
    },
    {
        10: "Dziekuje ze nas odwiedziles w tym roku." 
    },
    {
        11: "Super ojciec chrzestny." 
    },
    {
        12: "Wspanialy wujek." 
    },
    {
        13: "Nie wiem jak to robiesz ale zawsze znajdujesz dla kazdego czas." 
    },
    {
        14: "Dasz sie lubic." 
    },
    {
        15: "Najlepszy project manager jakiego znam." 
    },
    {
        16: "Gdyby nie ty - mnie by tu nie bylo - gdize teraz jestem." 
    },
    {
        17: "Masz swietny gust." 
    },
    {
        18: "Dziekuje za pomoc przy naprawianiu plotu." 
    },
    {
        19: "Niesamowity i niezrownany." 
    },
    {
        20: "Wspanialy maz i tato." 
    },
    {
        21: "Dobrego dnia Nekromancie???." 
    },
    {
        22: "Sto lat. Sto lat. Sto lat." 
    },
    {
        23: "Kocham Cie." 
    },
    {
        24: "Wysportowany." 
    },
    {
        25: "Nieugiety w dazeniu do celu." 
    },
    {
        26: "Kto stworzyl budke. Adam stworzyl budke." 
    },
    {
        27: "Kto mi kupil mikrofon w 2013?. Dziekuje. Do teraz go uzywam." 
    },
    {
        28: "Zyj nam dwiescie lat." 
    },
    {
        29: "Gdyby nie to ze musiales sie stac najlepszym Project Managerem bylbys najepszym full stackiem." 
    },
    {
        30: "Najpierw wszystko musi dzialac. Potem mozna ulepszac. Twoje slowa." 
    },
    {
        31: "Pozdrawiamy Mala, Marek i Molly.  ...a i momo tez." 
    },
    {
        32: "Wszystkiego najelpszego z okazji 32 urodzin bratku." 
    },

]

