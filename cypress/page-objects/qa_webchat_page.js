import 'cypress-iframe'

export function cleartextField(selector) {
    cy
    .find(selector)
    .clear()
}

export function navigate () {
    cy.visit('https://demo.podium.tools/qa-webchat-usrw/')
}

export function verifyBackGroundImageCycle() {
    cy.get('.full-height')
    .url("https://demo.podium.tools/wp-content/themes/twentytwentyone-child/random-images/7.jpeg")
    .should('exist')
}

export function verifyNotPartyParrotURL() {
    cy.get('.full-height')
    .should('not.contain', "cultofthepartyparrot.com/")
}

export function verifyGandalfText() {
    cy.get('h1') //ideally this would have a class associated with it
    .should('have.text', 'All we have to decide is what to do with the time that is given us.')
}

export function verifyNotBilboText() {
    cy.get('h1') //ideally this would have a class associated with it
    .should('not.have.text', "Pity? It's a pity that stayed Bilbo's hand.")
}

export function verifyPodiumPrompt() {
    cy.get('#podium-prompt').should('exist')
}

export function verifyPodiumBubble() {
    cy.get('#podium-bubble').should('exist')
}

//TODO: Figure out how to get the .svg value to verify icon state
export function clickOnPodiumBubble() {
    cy.wait(3000) //Adding wait here since the bubble can take a minute to load
    cy.frameLoaded('#podium-bubble')
    cy.iframe('#podium-bubble').find('.ContactBubble__Bubble').should('be.visible').click()
}

export function verifyLocationSelectorPresent() {
    //cy.wait(3000)
    cy.frameLoaded('#podium-modal')
    cy.iframe('#podium-modal').find('.LocationSelector').should('be.visible')
}

export function locationSearch() {
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find('input')
      .clear()
      .type('94121')
      .should('have.value', '94121')
}

export function verifyTermsAndConditions() {
    cy.iframe('#podium-modal').find('a').should('be.visible')
}

export function verifyLocationsListItems() {
    cy.wait(3000) //Adding extra wait since
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find('button')
      .should('have.length', 4)
}

export function clickOnLocationItem() {
    cy.wait(3000) //Adding extra wait since
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find('button')
      .eq(1)
      .click()
}

export function verifySendMessageForm() {
    //cy.wait(3000) //Adding extra wait since
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find("#ComposeMessage")
      .should('be.visible')
}

export function typeName() {
    //cy.wait(3000) //Adding extra wait since
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find("#Name")
      .click()
      .type('Carlos')
}

export function typeMobilePhone() {
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find('[id="Mobile Phone"]')
      .click()
      .type('12345678910')   
}

export function typeMessage() {
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find("#Message")
      .clear()
      .click()
      .type('Hello!')
}

export function clickSend() {
    cy.frameLoaded('#podium-modal')
    cy.wait(5000)
    cy
      .iframe('#podium-modal')
      .find('button[class="SendButton SendButton--valid"]')
      .click()
}

export function verifyConfirmationMessage() {
    cy.wait(2000) //Adding extra wait since
    cy.frameLoaded('#podium-modal')
    cy
      .iframe('#podium-modal')
      .find('div[class="SendSmsPage__FormContainer"]')
      .should("exist")
}



