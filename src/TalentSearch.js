class TalentSearch {

  byLocation(data, location) {
    let matches = data.filter(talent => talent.location === location)
    let matchedNames = matches.map(talent => talent.name)
    return matchedNames
  }
}