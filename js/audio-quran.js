window.onload = function(){
    getAudioQuran();
    populateDropdowns();
}

var reciter = document.querySelector("#aq-reciter");
var language = document.querySelector("#aq-language");
var chapter = document.querySelector("#aq-chapter");
var audioPlayer = document.querySelector("#aq-player");
var selectedChapter = 1;
var selectedReciter = "ur.khan";
var currentSurah = {
  "number":1
};
var currentVerse = 1;

audioPlayer.addEventListener("ended",function(e){
  currentVerse = currentSurah.ayahs[currentVerse-1].number+1;
  audioPlayer.setAttribute("src",currentSurah.ayahs[currentVerse-1].audio);
});

const chapters = [
  {
      "name": "The Opening",
      "verses": "7"
  },
  {
      "name": "The Cow",
      "verses": "286"
  },
  {
      "name": "The Family of Imraan",
      "verses": "200"
  },
  {
      "name": "The Women",
      "verses": "176"
  },
  {
      "name": "The Table",
      "verses": "120"
  },
  {
      "name": "The Cattle",
      "verses": "165"
  },
  {
      "name": "The Heights",
      "verses": "206"
  },
  {
      "name": "The Spoils of War",
      "verses": "75"
  },
  {
      "name": "The Repentance",
      "verses": "129"
  },
  {
      "name": "Jonas",
      "verses": "109"
  },
  {
      "name": "Hud",
      "verses": "123"
  },
  {
      "name": "Joseph",
      "verses": "111"
  },
  {
      "name": "The Thunder",
      "verses": "43"
  },
  {
      "name": "Abraham",
      "verses": "52"
  },
  {
      "name": "The Rock",
      "verses": "99"
  },
  {
      "name": "The Bee",
      "verses": "128"
  },
  {
      "name": "The Night Journey",
      "verses": "111"
  },
  {
      "name": "The Cave",
      "verses": "110"
  },
  {
      "name": "Mary",
      "verses": "98"
  },
  {
      "name": "Taa-Haa",
      "verses": "135"
  },
  {
      "name": "The Prophets",
      "verses": "112"
  },
  {
      "name": "The Pilgrimage",
      "verses": "78"
  },
  {
      "name": "The Believers",
      "verses": "118"
  },
  {
      "name": "The Light",
      "verses": "64"
  },
  {
      "name": "The Criterion",
      "verses": "77"
  },
  {
      "name": "The Poets",
      "verses": "227"
  },
  {
      "name": "The Ant",
      "verses": "93"
  },
  {
      "name": "The Stories",
      "verses": "88"
  },
  {
      "name": "The Spider",
      "verses": "69"
  },
  {
      "name": "The Romans",
      "verses": "60"
  },
  {
      "name": "Luqman",
      "verses": "34"
  },
  {
      "name": "The Prostration",
      "verses": "30"
  },
  {
      "name": "The Clans",
      "verses": "73"
  },
  {
      "name": "Sheba",
      "verses": "54"
  },
  {
      "name": "The Originator",
      "verses": "45"
  },
  {
      "name": "Yaseen",
      "verses": "83"
  },
  {
      "name": "Those drawn up in Ranks",
      "verses": "182"
  },
  {
      "name": "The letter Saad",
      "verses": "88"
  },
  {
      "name": "The Groups",
      "verses": "75"
  },
  {
      "name": "The Forgiver",
      "verses": "85"
  },
  {
      "name": "Explained in detail",
      "verses": "54"
  },
  {
      "name": "Consultation",
      "verses": "53"
  },
  {
      "name": "Ornaments of gold",
      "verses": "89"
  },
  {
      "name": "The Smoke",
      "verses": "59"
  },
  {
      "name": "Crouching",
      "verses": "37"
  },
  {
      "name": "The Dunes",
      "verses": "35"
  },
  {
      "name": "Muhammad",
      "verses": "38"
  },
  {
      "name": "The Victory",
      "verses": "29"
  },
  {
      "name": "The Inner Apartments",
      "verses": "18"
  },
  {
      "name": "The letter Qaaf",
      "verses": "45"
  },
  {
      "name": "The Winnowing Winds",
      "verses": "60"
  },
  {
      "name": "The Mount",
      "verses": "49"
  },
  {
      "name": "The Star",
      "verses": "62"
  },
  {
      "name": "The Moon",
      "verses": "55"
  },
  {
      "name": "The Beneficent",
      "verses": "78"
  },
  {
      "name": "The Inevitable",
      "verses": "96"
  },
  {
      "name": "The Iron",
      "verses": "29"
  },
  {
      "name": "The Pleading Woman",
      "verses": "22"
  },
  {
      "name": "The Exile",
      "verses": "24"
  },
  {
      "name": "She that is to be examined",
      "verses": "13"
  },
  {
      "name": "The Ranks",
      "verses": "14"
  },
  {
      "name": "Friday",
      "verses": "11"
  },
  {
      "name": "The Hypocrites",
      "verses": "11"
  },
  {
      "name": "Mutual Disillusion",
      "verses": "18"
  },
  {
      "name": "Divorce",
      "verses": "12"
  },
  {
      "name": "The Prohibition",
      "verses": "12"
  },
  {
      "name": "The Sovereignty",
      "verses": "30"
  },
  {
      "name": "The Pen",
      "verses": "52"
  },
  {
      "name": "The Reality",
      "verses": "52"
  },
  {
      "name": "The Ascending Stairways",
      "verses": "44"
  },
  {
      "name": "Noah",
      "verses": "28"
  },
  {
      "name": "The Jinn",
      "verses": "28"
  },
  {
      "name": "The Enshrouded One",
      "verses": "20"
  },
  {
      "name": "The Cloaked One",
      "verses": "56"
  },
  {
      "name": "The Resurrection",
      "verses": "40"
  },
  {
      "name": "Man",
      "verses": "31"
  },
  {
      "name": "The Emissaries",
      "verses": "50"
  },
  {
      "name": "The Announcement",
      "verses": "40"
  },
  {
      "name": "Those who drag forth",
      "verses": "46"
  },
  {
      "name": "He frowned",
      "verses": "42"
  },
  {
      "name": "The Overthrowing",
      "verses": "29"
  },
  {
      "name": "The Cleaving",
      "verses": "19"
  },
  {
      "name": "Defrauding",
      "verses": "36"
  },
  {
      "name": "The Splitting Open",
      "verses": "25"
  },
  {
      "name": "The Constellations",
      "verses": "22"
  },
  {
      "name": "The Morning Star",
      "verses": "17"
  },
  {
      "name": "The Most High",
      "verses": "19"
  },
  {
      "name": "The Overwhelming",
      "verses": "26"
  },
  {
      "name": "The Dawn",
      "verses": "30"
  },
  {
      "name": "The City",
      "verses": "20"
  },
  {
      "name": "The Sun",
      "verses": "15"
  },
  {
      "name": "The Night",
      "verses": "21"
  },
  {
      "name": "The Morning Hours",
      "verses": "11"
  },
  {
      "name": "The Consolation",
      "verses": "8"
  },
  {
      "name": "The Fig",
      "verses": "8"
  },
  {
      "name": "The Clot",
      "verses": "19"
  },
  {
      "name": "The Power, Fate",
      "verses": "5"
  },
  {
      "name": "The Evidence",
      "verses": "8"
  },
  {
      "name": "The Earthquake",
      "verses": "8"
  },
  {
      "name": "The Chargers",
      "verses": "11"
  },
  {
      "name": "The Calamity",
      "verses": "11"
  },
  {
      "name": "Competition",
      "verses": "8"
  },
  {
      "name": "The Declining Day, Epoch",
      "verses": "3"
  },
  {
      "name": "The Traducer",
      "verses": "9"
  },
  {
      "name": "The Elephant",
      "verses": "5"
  },
  {
      "name": "Quraysh",
      "verses": "4"
  },
  {
      "name": "Almsgiving",
      "verses": "7"
  },
  {
      "name": "Abundance",
      "verses": "3"
  },
  {
      "name": "The Disbelievers",
      "verses": "6"
  },
  {
      "name": "Divine Support",
      "verses": "3"
  },
  {
      "name": "The Palm Fibre",
      "verses": "5"
  },
  {
      "name": "Sincerity",
      "verses": "4"
  },
  {
      "name": "The Dawn",
      "verses": "5"
  },
  {
      "name": "Mankind",
      "verses": "6"
  }
]

function populateDropdowns() {
  let req = new XMLHttpRequest();
  req.open("GET", "https://api.alquran.cloud/v1/edition/format/audio");
  req.send();
  req.onprogress = function() {
    if(req.status == 404) {
      return;
    }

    let data = JSON.parse(req.responseText).data;
    let lang = "";
    for(d of data) {
      // listing reciters of Quran
      let reciter_opt = "<option value="+d.identifier+">"+d.englishName+"</option>";
      reciter.insertAdjacentHTML("beforeend",reciter_opt);

      // listing availabe languages for audio recitation
      if(d.language!=lang) {
        lang = d.language;
        let lang_opt = "<option value="+d.language+">"+d.language+"</option>";
        language.insertAdjacentHTML("beforeend",lang_opt);
      }
    }

    console.log(JSON.parse(req.responseText));
  }

  // listing chapters of Quran
  for(ch of chapters) {
    let index = chapters.indexOf(ch)+1;
    let opt = "<option value="+index+">"+index+" - "+ch.name+"</option>";
    chapter.insertAdjacentHTML("beforeend",opt);
  }
}

function getAudioQuran() {
  let req = new XMLHttpRequest();
  req.open("GET","https://api.alquran.cloud/v1/surah/"+currentSurah.number+"/"+selectedReciter);
  req.send();
  req.onprogress = function(){
    if(req.status==404) {
      return;
    }

    let data = JSON.parse(req.responseText).data;
    currentSurah = data;
    for(url of data.ayahs) {
      audioPlayer.setAttribute("src",url.audio);
    }
    console.log(data)
  }
}

