// TODO: add tests
import Page from './pages/page-model';
import loginFunction from '../common/login'

fixture `A set of examples that illustrate how to use TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`;

// Page model
const page = new Page();

// Tests
loginFunction();
test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter') // Type name
        .typeText(page.nameInput, 'Paker', { replace: true }) // Replace with last name
        .typeText(page.nameInput, 'r', { caretPos: 2 }) // Correct last name
        .expect(page.nameInput.value).eql('Parker'); // Check result
});


fixture `A set of examples that illustrate how to use TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`;

    