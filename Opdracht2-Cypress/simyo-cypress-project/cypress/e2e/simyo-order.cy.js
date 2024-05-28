describe('Simyo Order', () => {
  it('should complete an order for a Simyo subscription', () => {
      // Step 1: Go to https://www.simyo.nl/
      cy.visit('https://www.simyo.nl/');

      // Step 2: Go to https://www.simyo.nl/sim-only/bestellen
      cy.visit('https://www.simyo.nl/sim-only/bestellen');

      // Step 3: Click on the pop-up to cancel cookies
      cy.xpath('/html/body/div[7]/section/div/div[2]/p[2]/a[2]').click();

      // Step 4: Select an option for data
      cy.xpath('/html/body/div[5]/div[2]/main/form/section/fieldset[2]/div[2]/div[5]').click();

      // Step 5: Select an option to get no extra data
      cy.xpath('/html/body/div[5]/div[2]/main/form/section/fieldset[2]/div[2]/div[1]').click();

      // Step 6: Select an option for Bellen/SMS 
      cy.xpath('/html/body/div[5]/div[2]/main/form/section/fieldset[3]/div[2]/div[2]').click();

      // Step 7: Select an option Looptijd
      cy.xpath('/html/body/div[5]/div[2]/main/form/section/fieldset[4]/div[2]/div[3]').click();

      // Step 8: Click the button Verder
      cy.xpath('/html/body/div[5]/div[2]/main/form/section/div[4]/input').click();

      // Step 9: Select an option Esim
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[1]/div[2]/div[2]/div[2]/p').click();

      // Step 10: Select an option from the dropdown Appple
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[1]/div[3]/div[1]/div/div[2]/select').select('Apple');

      // Step 11: Select an option from the dropdown Iphone13
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[1]/div[3]/div[2]/div/div[2]/select').select('iPhone 13, 13 mini, 13 Pro, 13 Pro Max');

      // Step 12: Wait till message for this element says 'Goed nieuws! Jouw telefoon is geschikt voor eSIM!'
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[1]/div[3]/div[4]').contains('Goed nieuws! Jouw telefoon is geschikt voor eSIM!');

      // Step 13: Wait till an element Verder is active and click it
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[2]/input').should('be.visible').click();

      // Step 14: After step 13, another page is opened and on that page select an option
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[2]/label[1]/input').click();

      // Step 15: Click on the button "Verder"
      cy.xpath('/html/body/div[5]/div[2]/main/section[1]/form/fieldset/div[4]/input').click();

      // Step 16: On the next screen, select an option "Nee, ik wil een nieuw nummer"
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[2]/div[2]/label[2]/input').click();

      // Step 17: In this element, type the name 'CypressTest'
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[3]/div[2]/input').type('CypressTest');

      // Step 18: Add the last name 'Testing'
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[4]/div[2]/input').type('Testing');

      // Step 19: Type the date of birth 01-01-2001
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[5]/div[2]/input').type('01-01-2001');

      // Step 20: Type the postcode 3452EL
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[7]/div[2]/input').type('3452EL');

      // Step 21: Type '10' in the element Huisnmr
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[8]/div[2]/input[1]').type('10');

      // Step 22: Click on a random area on the screen to reveal the next step
      cy.get('body').click(Math.random() * 500, Math.random() * 500);

      // Step 23: Generate a random number between 1 and 10000
      const randomNumber = Cypress._.random(1, 10000);

      // Step 24: Type email address with the random number in it
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[10]/div[2]/input').type(`yuliatest+${randomNumber}@gmail.com`);

      // Step 25: Click the button Verder
      cy.xpath('/html/body/div[5]/div[2]/main/section[3]/form/fieldset/div[12]/input').click();

      // Step 26: On the next screen, select an option ING for a bank
      cy.xpath('/html/body/div[5]/div[2]/main/section/fieldset/form/fieldset/div[1]/div[2]/select').select('ING');

      // Step 27: Check the checkbox that you agree with terms and conditions
      cy.xpath('/html/body/div[5]/div[2]/main/section/fieldset/form/div[3]/div[1]/div[1]/label').click();


      // Step 28: Check that the button "Betalen en afronden" is available and click it
      cy.xpath('/html/body/div[5]/div[2]/main/section/fieldset/form/div[3]/div[3]/div/input').should('be.visible').click();
    });
});

