import { Selector, RequestMock } from 'testcafe';

const mock = RequestMock()
  .onRequest('../example.json')
  .respond([{
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
  }])

fixture(`Searching for talent`)
  .page(`../TalentSearch.html`)
  .requestHooks(mock);

test('Message displayed when no matches found', async t => {
    await t
      // select talent data to search
      .click('#talent-selector')
      .click(Selector('option', { text: 'North America' }))
      // enter search parameter
      .typeText('#location-input', 'Los Angeles')
      .click('#search-button')
      // click button
      .expect(Selector('#talent-display').innerHTML).eql('No matches found');
      // see results
});

//TypeError: event.setMock is not a function