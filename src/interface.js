const search = new TalentSearch();
searchButtonPressed();

function searchForTalent(talentPool, location) {
  if(talentPool==='North America') {
    var requestURL = './example.json'
  }
  let request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    const data = request.response;
    showTalent(data, location);
  };
};

function showTalent(obj, location) {
  let matchedNames = search.byLocation(obj, location);
  let rows = '';
  for(let i = 0; i < matchedNames.length; i++) {
    rows += `<p>${matchedNames[i]}</p>`;
  };
  document.getElementById('talent-display').innerHTML = rows ? rows : "<p>No matches found</p>";
}

function searchButtonPressed() {
  document.getElementById("search-button").addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    let talentPool = document.getElementById("talent-selector").value;
    let location = document.getElementById("location-input").value;
    searchForTalent(talentPool, location);
  })
};



