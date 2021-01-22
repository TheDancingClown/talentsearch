import { Selector } from 'testcafe';

fixture `Searching for talent`
  .page `../TalentSearch.html`;

test('Search by location', async t => {
    
    await t
      // select talent data to search
      .click('#talent-selector')
      .click(Selector('option', { text: 'North America' }))
      // enter search parameter
      .typeText('#location-input', 'Los Angeles')
      .click('#search-button')
      // click button
      .expect(Selector('#talent-display').innerText).eql('No matches found');
      // see results
});