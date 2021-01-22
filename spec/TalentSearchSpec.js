describe("TalentSearch", () => {

  let search
  const example = [
    {
      "name": "Homer Simpson",
      "location": "Springfield",
      "date_of_birth": "1956-05-12"
    },
    {
      "name": "Frank Reynolds",
      "location": "Philidelphia",
      "date_of_birth": "1944-11-17"
    },
    {
      "name": "Diane Nguyen",
      "location": "Los Angeles",
      "date_of_birth": "1980-03-19"
    },
    {
      "name": "Krusty the Clown",
      "location": "SpringField",
      "date_of_birth": "1957-10-29"
    }
  ]

  beforeEach(function() {
    search = new TalentSearch();
  });

  describe("byLocation", () => {
    it("returns an array of a single matching name", () => {
      expect(search.byLocation(example, "Philidelphia")).toEqual(["Frank Reynolds"]);
      expect(search.byLocation(example, "Los Angeles")).toEqual(["Diane Nguyen"])
    });

    it("returns an empty array if no matches found", () => {
      expect(search.byLocation(example, "New York")).toEqual([])
    })
  });
});