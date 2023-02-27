// const linksArray = ["/Users/jaydebradley/Desktop/CFG web development/Daytripper-group-project-local-copy/Sheffield-daytrip.html", "/Users/jaydebradley/Desktop/CFG web development/Daytripper-group-project-local-copy/Edale-daytrip.html", "/Users/jaydebradley/Desktop/CFG web development/Daytripper-group-project-local-copy/Chatsworth-House-daytrip.html", "/Users/jaydebradley/Desktop/CFG web development/Daytripper-group-project-local-copy/Castleton-daytrip.html", "/Users/jaydebradley/Desktop/CFG web development/Daytripper-group-project-local-copy/Alderley-Edge-daytrip.html"]

// function openURL(){
//     const randomLink = linksArray[Math.floor(Math.random()*linksArray.length)];
//     window.open(randomLink);
//    }

// document.getElementById("generator-button").addEventListener("click", openURL);

const daytrips = [
    {
      name: "Edale",
      overview: "Daniel Defoe called the Peak District “the most desolate, wild and abandoned” spot in all of England. Which is harsh. Sure, if you visit on a dank winter’s day, when the fog hangs low and the tiny lanes seem to narrow, it can be forbidding. But at most other times it’s a ravishing open-air playground, serving families, cyclists, cave aficionados, hikers and cutlery enthusiasts. Blissfully remote, yet accessible (it has its own little station), the village of Edale is the perfect jumping-off point.",
      highlight1: "Edale is the official start of the Pennine Way with many walks to choose from for all levels",
      highlight2: "‘The Moorland Centre’ provides a national focus for moorland research and an inspirational experience for visitors to the Peak District National Park.",
      highlight3: "Edale has a choice of pubs serving traditional English pub fare, great after a day of walking! Muddy boots welcome!"
    },

    {
        name: "Castleton",
        overview: "insert info about castleton",
        highlight1: "insert info about castleton",
        highlight2: "insert info about castleton",
        highlight3: "insert info about castleton"
      },

      {
        name: "Sheffield",
        overview: "insert info about castleton",
        highlight1: "insert info about castleton",
        highlight2: "insert info about castleton",
        highlight3: "insert info about castleton"
      },

      {
        name: "Chatsworth House",
        overview: "insert info about castleton",
        highlight1: "insert info about castleton",
        highlight2: "insert info about castleton",
        highlight3: "insert info about castleton"
      },
    
      {
        name: "Alderly Edge",
        overview: "insert info about castleton",
        highlight1: "insert info about castleton",
        highlight2: "insert info about castleton",
        highlight3: "insert info about castleton"
      },
  ]


function showdaytrip() {

    const destination = daytrips[Math.floor(Math.random() * daytrips.length)];
    document.getElementById("placename").textContent = destination.name;
    document.getElementById("highlight1").textContent = destination.highlight1;
    document.getElementById("highlight2").textContent = destination.highlight2;
    document.getElementById("highlight3").textContent = destination.highlight3;
    document.getElementById("overview").textContent = destination.overview;

    console.log(destination.name)

}

    showdaytrip()
    
  