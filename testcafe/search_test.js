import { Selector, RequestMock } from 'testcafe';
const url = new RegExp('example.json')
const mockedResponse = [{
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
}]
const mock = RequestMock()
  .onRequestTo(url)
  .respond(mockedResponse, 200, {'Access-Control-Allow-Origin': '*'});

fixture(`Searching for talent`)
  .page(`../index.html`)
  .requestHooks(mock);

test('Message displayed when no matches found', async t => {
    await t
      // select talent data to search
      .click('#talent-selector')
      .click(Selector('option', { text: 'North America' }))
      // enter search parameter
      .typeText('#location-input', 'New York')
      // click button
      .click('#search-button')
      // see results
      .expect(Selector('#talent-display').innerText).eql('No matches found');
});

test('Displays name when match found', async t => {
  await t  
    .click('#talent-selector')
    .click(Selector('option', { text: 'North America' }))
    .typeText('#location-input', 'Los Angeles')
    .click('#search-button')
    .expect(Selector('#talent-display').innerText).eql('Diane Nguyen');
});

test('Displays multiple names when matches found', async t => {
  await t  
    .click('#talent-selector')
    .click(Selector('option', { text: 'North America' }))
    .typeText('#location-input', 'Springfield')
    .click('#search-button')
    .expect(Selector('#talent-display').innerText).contains('Homer Simpson')
    .expect(Selector('#talent-display').innerText).contains('Krusty the Clown');
});