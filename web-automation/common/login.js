import Page from '../sample/pages/page-model';
const page = new Page();

export default function () {
    test('Click an array of labels and then check their states', async t => {
        for (const feature of page.featureList) {
            await t
                .click(feature.label)
                .expect(feature.checkbox.checked).ok();
        }
    });
 }