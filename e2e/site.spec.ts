import {test, expect} from '@playwright/test';

for(const colorScheme of ['light','dark'] as const) for(const width of [320,375,768,1024,1440]) {
    test(`public pages fit a ${width}px viewport without browser errors (${colorScheme})`,async({page})=>{
        await page.emulateMedia({colorScheme});
        await page.setViewportSize({width,height:900});
        const errors:string[]=[];
        page.on('pageerror',error=>errors.push(error.message));
        page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
        for(const path of ['/','/about','/daniel-khan-leonhard','/schiessstaende','/standort','/kontakt','/kontaktformular','/faq','/jugend','/veranstaltungen','/neuigkeiten','/neuigkeiten/168','/erfolge','/standrekorde','/download','/links','/gesetz','/position','/impressum','/datenschutz','/terms','/admin']) {
            await page.goto(path);
            await expect(page.locator('main h1')).toBeVisible();
            const overflow=await page.evaluate(()=>document.documentElement.scrollWidth > window.innerWidth);
            expect(overflow,`horizontal overflow at ${path}`).toBe(false);
        }
        expect(errors).toEqual([]);
        await page.goto('/');
        await page.screenshot({path:`/tmp/ssv-home-${width}-${colorScheme}.png`,fullPage:true});
    });
}

test('FAQ and mobile navigation work with the keyboard, restore focus, and navigate without a reload',async({page})=>{
    await page.setViewportSize({width:375,height:812});await page.goto('/faq');
    const question=page.locator('main summary').first(); await question.focus(); await page.keyboard.press('Enter');
    await expect(page.locator('main details').first()).toHaveAttribute('open','');
    const menu=page.getByRole('button',{name:'Menü',exact:true});await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded','true');
    await expect(page.getByRole('button',{name:'Schließen',exact:true})).toBeFocused();
    expect(await page.evaluate(()=>document.body.style.overflow)).toBe('hidden');
    await page.keyboard.press('Shift+Tab');await expect(page.getByRole('dialog').getByRole('link',{name:'Nutzungsbedingungen'})).toBeFocused();
    await page.keyboard.press('Escape');await expect(menu).toBeFocused();
    expect(await page.evaluate(()=>document.body.style.overflow)).not.toBe('hidden');
    await page.evaluate(()=>{document.documentElement.dataset.navigationTest='retained';});
    await menu.click();await page.getByRole('dialog').getByRole('link',{name:'Anfahrt',exact:true}).click();
    await expect(page).toHaveURL('/standort');await expect(page.getByRole('dialog')).not.toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.dataset.navigationTest)).toBe('retained');
});

test('clicking the backdrop closes the mobile navigation',async({page})=>{
    await page.setViewportSize({width:375,height:812});await page.goto('/faq');
    const menu=page.getByRole('button',{name:'Menü',exact:true});await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded','true');
    await page.mouse.click(5,5);
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(menu).toBeFocused();
});

test('unknown routes and news IDs offer recovery links',async({page})=>{
    await page.goto('/does-not-exist');await expect(page.getByRole('heading',{name:'Seite nicht gefunden'})).toBeVisible();
    await page.getByRole('link',{name:'Zur Startseite',exact:true}).click();await expect(page).toHaveURL('/');
    await page.goto('/neuigkeiten/missing');await expect(page.getByRole('heading',{name:'Beitrag nicht gefunden'})).toBeVisible();
    await expect(page.getByRole('link',{name:'Zu allen Neuigkeiten'})).toBeVisible();
});

test('the guest link moves focus to the guest training heading',async({page})=>{
    await page.goto('/');
    await page.getByRole('link',{name:'Informationen für Gastschützen'}).click();
    await expect(page).toHaveURL('/kontakt');
    await expect(page.locator('#gast-training')).toBeFocused();
});

test('contact submissions reach the authenticated inbox and articles publish with images',async({page})=>{
    await page.setViewportSize({width:375,height:812});
    await page.goto('/kontaktformular');
    await page.getByLabel('Name',{exact:true}).fill('Browser Test');await page.getByLabel('E-Mail',{exact:true}).fill('browser@example.com');
    await page.getByLabel('Betreff',{exact:true}).fill('Probetraining Browser Test');await page.getByLabel('Nachricht',{exact:true}).fill('Dies ist eine Testnachricht.');
    await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Nachricht senden'}).click();await expect(page.getByRole('heading',{name:'Vielen Dank für Ihre Nachricht'})).toBeVisible();
    await page.goto('/admin');await page.getByLabel('Benutzername').fill('browser-test');await page.getByLabel('Passwort',{exact:true}).fill('browser-test-password-only');await page.getByRole('button',{name:'Anmelden',exact:true}).click();
    await page.getByRole('tab',{name:'Posteingang'}).click();await expect(page.getByRole('heading',{name:'Posteingang (1 ungelesen)'})).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth > window.innerWidth)).toBe(false);
    await page.getByRole('tab',{name:'Beiträge'}).click();
    await page.getByLabel('Titel',{exact:true}).fill('Browser Test Beitrag');await page.getByLabel('Autor/in',{exact:true}).selectOption({label:'Neuer Autor …'});await page.getByLabel('Neuer Autor').fill('Testredaktion');await page.getByLabel('Kurzbeschreibung').fill('Ein Test der Veröffentlichung.');
    await page.getByLabel('Text',{exact:true}).fill('## Vorschau\n\n**Formatierter Text**\n\n| A | B |\n|---|---|\n| 1 | 2 |');
    await expect(page.getByRole('heading',{name:'Vorschau',exact:true})).toBeVisible();
    await page.getByLabel('Bild hinzufügen',{exact:false}).setInputFiles({name:'test.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jB1kAAAAASUVORK5CYII=','base64')});
    await expect(page.getByRole('img',{name:'Bildbeschreibung ergänzen'})).toBeVisible();
    await page.getByRole('button',{name:'Entwurf speichern'}).click();await expect(page.getByRole('status')).toContainText('Entwurf wurde gespeichert');
    await page.getByLabel('Öffentlich anzeigen').check();await page.getByRole('button',{name:'Speichern & veröffentlichen'}).click();await expect(page.getByRole('status')).toContainText('Beitrag ist veröffentlicht');
    const articleUrl=await page.getByRole('link',{name:'Veröffentlichten Beitrag öffnen'}).getAttribute('href');
    await page.goto(articleUrl!);await expect(page.getByRole('heading',{name:'Browser Test Beitrag'})).toBeVisible();await expect(page.locator('main table')).toBeVisible();await expect(page.getByRole('img',{name:'Bildbeschreibung ergänzen'})).toBeVisible();
    await page.goto('/admin');await page.getByRole('tab',{name:'Posteingang'}).click();await page.getByText('Neu: Probetraining Browser Test · Browser Test',{exact:true}).click();await expect(page.getByText('Dies ist eine Testnachricht.',{exact:true})).toBeVisible();
    await page.getByRole('button',{name:'Als gelesen markieren'}).click();await expect(page.getByRole('heading',{name:'Posteingang (0 ungelesen)'})).toBeVisible();
});

test('secondary buttons expose readable default, hover and keyboard focus states',async({page})=>{
    await page.goto('/testing');const button=page.getByRole('link',{name:'Secondary Button',exact:true});
    await expect(button).toHaveCSS('background-color','rgb(154, 101, 8)');await expect(button).toHaveCSS('color','rgb(255, 255, 255)');
    await button.hover();await expect(button).toHaveCSS('background-color','rgb(130, 85, 6)');
    await page.mouse.move(0,0);await button.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');await expect(button).toBeFocused();await expect(button).toHaveCSS('outline-style','solid');
});

test('unsaved article edits survive cancelled navigation and event dates are editable',async({page})=>{
    await page.goto('/admin');await page.getByLabel('Benutzername').fill('browser-test');await page.getByLabel('Passwort',{exact:true}).fill('browser-test-password-only');await page.getByRole('button',{name:'Anmelden',exact:true}).click();
    await page.getByLabel('Titel',{exact:true}).fill('Ungespeicherter Entwurf');
    await page.getByRole('button',{name:'Veranstaltungstag hinzufügen'}).click();await page.getByLabel('Tag 1',{exact:true}).fill('2027-04-01');
    await page.getByRole('button',{name:'Veranstaltungstag hinzufügen'}).click();await page.getByLabel('Tag 2',{exact:true}).fill('2027-04-02');
    await expect(page.getByLabel('Tag 1',{exact:true})).toHaveValue('2027-04-01');
    await page.getByRole('link',{name:'SSV Schluchsee – Startseite'}).click();await page.getByRole('button',{name:'Auf Seite bleiben'}).click();
    await expect(page).toHaveURL('/admin');await expect(page.getByLabel('Titel',{exact:true})).toHaveValue('Ungespeicherter Entwurf');
    await page.getByRole('link',{name:'SSV Schluchsee – Startseite'}).click();await page.getByRole('button',{name:'Verwerfen & weiter'}).click();await expect(page).toHaveURL('/');
});

test('the result-table filter search hides entries that do not match',async({page})=>{
    await page.goto('/standrekorde');
    const table=page.locator('main table').first();
    await table.getByRole('columnheader',{name:/Schütze/}).getByRole('button').click();
    const dropdown=page.locator('.ant-table-filter-dropdown:visible');
    await dropdown.getByPlaceholder('In Filtern suchen').fill('neubron');
    await expect(dropdown.getByText('Rainer Neubronner',{exact:true})).toBeVisible();
    await expect(dropdown.getByText('Klaus Strübe',{exact:true})).toHaveCount(0);
    await dropdown.getByText('Rainer Neubronner',{exact:true}).click();
    await dropdown.getByRole('button',{name:'Ok'}).click();
    await expect(table.locator('tbody tr.ant-table-row')).toHaveCount(3);
    await expect(table.locator('tbody')).not.toContainText('Klaus Strübe');
});

// WCAG contrast of an element's text against its first opaque background (no gradients).
const textContrast=(element: Element, pseudo?: string): number=>{
    const parse=(color: string)=>{const parts=color.match(/[\d.]+/g)!.map(Number);return {r:parts[0],g:parts[1],b:parts[2],a:parts[3]??1};};
    const background=(start: Element|null)=>{for(let node=start;node;node=node.parentElement){const color=parse(getComputedStyle(node).backgroundColor);if(color.a>0)return color;}return {r:255,g:255,b:255,a:1};};
    const luminance=({r,g,b}: {r:number;g:number;b:number})=>[r,g,b].map(value=>{value/=255;return value<=0.03928?value/12.92:((value+0.055)/1.055)**2.4;}).reduce((sum,value,index)=>sum+value*[0.2126,0.7152,0.0722][index],0);
    const back=background(element);const front=parse(getComputedStyle(element,pseudo).color);
    const blended={r:front.r*front.a+back.r*(1-front.a),g:front.g*front.a+back.g*(1-front.a),b:front.b*front.a+back.b*(1-front.a)};
    const [light,dark]=[luminance(blended),luminance(back)].sort((a,b)=>b-a);
    return (light+0.05)/(dark+0.05);
};

for(const colorScheme of ['light','dark'] as const) test(`checked filter entries, placeholders and card text keep readable contrast (${colorScheme})`,async({page})=>{
    await page.emulateMedia({colorScheme});
    await page.goto('/standrekorde');
    await page.locator('main table').first().getByRole('columnheader',{name:/Schütze/}).getByRole('button').click();
    const dropdown=page.locator('.ant-table-filter-dropdown:visible');
    const entry=dropdown.getByText('Rainer Neubronner',{exact:true});
    await entry.click();await page.mouse.move(0,0);
    expect(await entry.evaluate(textContrast)).toBeGreaterThanOrEqual(4.5);
    expect(await dropdown.getByPlaceholder('In Filtern suchen').evaluate(textContrast,'::placeholder')).toBeGreaterThanOrEqual(4.5);
    await page.goto('/');
    expect(await page.getByText('Bild folgt').first().evaluate(textContrast)).toBeGreaterThanOrEqual(4.5);
    const card=page.locator('main .mediumBox').first();
    for(const element of [card.locator('.site-heading').first(),card.locator('p').first(),card.locator('a').first()]) {
        expect(await element.evaluate(textContrast)).toBeGreaterThanOrEqual(4.5);
    }
});

test('dark mode follows the browser setting and the header toggle overrides it across reloads',async({page})=>{
    const toggle=page.locator('header .theme-toggle, .theme-toggle').first();
    const theme=()=>page.evaluate(()=>document.documentElement.dataset.theme);
    const pageBackground=()=>page.evaluate(()=>getComputedStyle(document.body).backgroundColor);
    await page.emulateMedia({colorScheme:'dark'});
    await page.goto('/');
    expect(await theme()).toBe('dark');
    expect(await pageBackground()).toBe('rgb(16, 24, 19)');
    await page.emulateMedia({colorScheme:'light'});
    await expect.poll(theme).toBe('light');
    await expect(toggle).toHaveAccessibleName('Darstellung: Automatisch – wechseln zu Hell');
    await toggle.click();
    await expect(toggle).toHaveAccessibleName('Darstellung: Hell – wechseln zu Dunkel');
    expect(await theme()).toBe('light');
    await toggle.click();
    await expect(toggle).toHaveAccessibleName('Darstellung: Dunkel – wechseln zu Automatisch');
    expect(await theme()).toBe('dark');
    await page.reload();
    expect(await theme()).toBe('dark');
    await expect(toggle).toHaveAccessibleName('Darstellung: Dunkel – wechseln zu Automatisch');
    await toggle.click();
    await expect(toggle).toHaveAccessibleName('Darstellung: Automatisch – wechseln zu Hell');
    expect(await theme()).toBe('light');
    expect(await page.evaluate(()=>localStorage.getItem('ssv-theme'))).toBeNull();
    await page.setViewportSize({width:375,height:812});
    await expect(toggle).toBeVisible();
});

test('the admin tabs stay readable in dark mode',async({page})=>{
    await page.emulateMedia({colorScheme:'dark'});
    await page.goto('/admin');await page.getByLabel('Benutzername').fill('browser-test');await page.getByLabel('Passwort',{exact:true}).fill('browser-test-password-only');await page.getByRole('button',{name:'Anmelden',exact:true}).click();
    const activeTab=page.getByRole('tab',{name:'Beiträge'});
    await expect(activeTab).toHaveAttribute('aria-selected','true');
    expect(await activeTab.evaluate(textContrast)).toBeGreaterThanOrEqual(4.5);
});
