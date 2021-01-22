import { Selector } from 'testcafe';

fixture `Searching for talent`
  .page `../TalentSearch.html`;

test('Search by location', async t => {
    // select talent data to search

    // enter search parameter
    await t
        .typeText('#location', 'Los Angeles')
    // click button
    // see results
});