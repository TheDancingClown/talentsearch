class TalentSearch {

  byLocation(data, location) {
    let matches = data.filter(talent => talent.location.toLowerCase() === location.toLowerCase())
    let matchedNames = matches.map(talent => talent.name)
    return matchedNames
  }
}