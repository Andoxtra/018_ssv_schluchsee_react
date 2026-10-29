import {test, expect} from '@playwright/test';

for(const width of [320,375,768,1024,1440]) {
    test(`public pages fit a ${width}px viewport without browser errors`,async({page})=>{
        await page.setViewportSize({width,height:900});
        const errors:string[]=[];
        page.on('pageerror',error=>errors.push(error.message));
        page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
        for(const path of ['/','/about','/daniel-khan-leonhard','/schiessstaende','/standort','/kontakt','/kontaktformular','/faq','/jugend','/veranstaltungen','/neuigkeiten','/neuigkeiten/168','/erfolge','/standrekorde','/download','/links','/gesetz','/impressum','/datenschutz','/terms','/admin']) {
            await page.goto(path);
            await expect(page.locator('main h1')).toBeVisible();
            const overflow=await page.evaluate(()=>document.documentElement.scrollWidth > window.innerWidth);
            expect(overflow,`horizontal overflow at ${path}`).toBe(false);
        }
        expect(errors).toEqual([]);
        await page.goto('/');
        await page.screenshot({path:`/tmp/ssv-home-${width}.png`,fullPage:true});
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

test('unknown routes and news IDs offer recovery links',async({page})=>{
    await page.goto('/does-not-exist');await expect(page.getByRole('heading',{name:'Seite nicht gefunden'})).toBeVisible();
    await page.getByRole('link',{name:'Zur Startseite',exact:true}).click();await expect(page).toHaveURL('/');
    await page.goto('/neuigkeiten/missing');await expect(page.getByRole('heading',{name:'Beitrag nicht gefunden'})).toBeVisible();
    await expect(page.getByRole('link',{name:'Zu allen Neuigkeiten'})).toBeVisible();
});

test('contact submissions reach the authenticated inbox and articles publish with images',async({page})=>{
    await page.setViewportSize({width:375,height:812});
    await page.goto('/kontaktformular');
    await page.getByLabel('Name',{exact:true}).fill('Browser Test');await page.getByLabel('E-Mail',{exact:true}).fill('browser@example.com');
    await page.getByLabel('Betreff',{exact:true}).fill('Probetraining Browser Test');await page.getByLabel('Nachricht',{exact:true}).fill('Dies ist eine Testnachricht.');
    await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Nachricht senden'}).click();await expect(page.getByRole('heading',{name:'Vielen Dank für Ihre Nachricht'})).toBeVisible();
    await page.goto('/admin');await page.getByLabel('Benutzername').fill('browser-test');await page.getByLabel('Passwort',{exact:true}).fill('browser-test-password-only');await page.getByRole('button',{name:'Anmelden',exact:true}).click();
    await expect(page.getByRole('heading',{name:'Posteingang (1 ungelesen)'})).toBeVisible();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth > window.innerWidth)).toBe(false);
    await page.getByLabel('Titel',{exact:true}).fill('Browser Test Beitrag');await page.getByLabel('Autor/in',{exact:true}).selectOption({label:'Neuer Autor …'});await page.getByLabel('Neuer Autor').fill('Testredaktion');await page.getByLabel('Kurzbeschreibung').fill('Ein Test der Veröffentlichung.');
    await page.getByLabel('Text',{exact:true}).fill('## Vorschau\n\n**Formatierter Text**\n\n| A | B |\n|---|---|\n| 1 | 2 |');
    await expect(page.getByRole('heading',{name:'Vorschau',exact:true})).toBeVisible();
    await page.getByLabel('Bild hinzufügen',{exact:false}).setInputFiles({name:'test.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jB1kAAAAASUVORK5CYII=','base64')});
    await expect(page.getByRole('img',{name:'Bildbeschreibung ergänzen'})).toBeVisible();
    await page.getByRole('button',{name:'Entwurf speichern'}).click();await expect(page.getByRole('status')).toContainText('Entwurf wurde gespeichert');
    await page.getByLabel('Öffentlich anzeigen').check();await page.getByRole('button',{name:'Speichern & veröffentlichen'}).click();await expect(page.getByRole('status')).toContainText('Beitrag ist veröffentlicht');
    const articleUrl=await page.getByRole('link',{name:'Veröffentlichten Beitrag öffnen'}).getAttribute('href');
    await page.goto(articleUrl!);await expect(page.getByRole('heading',{name:'Browser Test Beitrag'})).toBeVisible();await expect(page.locator('main table')).toBeVisible();await expect(page.getByRole('img',{name:'Bildbeschreibung ergänzen'})).toBeVisible();
    await page.goto('/admin');await page.getByText('Neu: Probetraining Browser Test · Browser Test',{exact:true}).click();await expect(page.getByText('Dies ist eine Testnachricht.',{exact:true})).toBeVisible();
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
