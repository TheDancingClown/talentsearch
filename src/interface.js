const search = new TalentSearch();
searchButtonPressed();

function searchForTalent(talentPool, location) {
  if(talentPool==='North America') {
    var request = '../example.json'
  } //conditional in case other talent pools needed
  fetch(request)
  .then(response => response.json())
  .then(data => {
    let matchedNames = search.byLocation(data, location);
    let rows = ''
    for(let i = 0; i < matchedNames.length; i++) {
      rows += `<p>${matchedNames[i]}</p>`;
    }
    document.getElementById('talent-display').innerHTML = rows ? rows : "<p>No matches found</p>"
  });
};

function searchButtonPressed() {
  document.getElementById("search-button").addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    let talentPool = document.getElementById("talent-selector").value
    let location = document.getElementById("location-input").value
    searchForTalent(talentPool, location);
  })
};



