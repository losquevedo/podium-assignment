/// <reference types="cypress" />
import {clickOnPodiumBubble, navigate, verifyBackGroundImageCycle, verifyGandalfText, verifyNotBilboText, verifyPodiumBubble, verifyPodiumPrompt, verifyLocationSelectorPresent, locationSearch, verifyTermsAndConditions, verifyLocationsListItems, clickOnLocationItem, verifySendMessageForm, typeName, typeMobilePhone, typeMessage, verifyBilboText, verifyNotPartyParrotURL, clickSend, verifyConfirmationMessage } from "../page-objects/qa_webchat_page"


describe('QA Webchat Page', () => {
    
    beforeEach(() => {
        navigate()
    })

    afterEach(() => {
        cy.clearLocalStorage()
        cy.clearCookies()
    })

    it('should verify gandalf text on login', () => {
        verifyGandalfText()
    })

    it('should verify random background image is loaded from URL', () => {
        verifyBackGroundImageCycle()
    })

    it('verifies podium icon button is present', () => {
        verifyPodiumBubble()
    })

    it('verifies podium prompt message appears', () => {
        cy.wait(10000) //Prompt can take a while to appear sometimes
        verifyPodiumPrompt()
    })

    it('it clicks on podium bubble and verifies the location selector shows up', () => {
        clickOnPodiumBubble()
        verifyLocationSelectorPresent()
        verifyTermsAndConditions()
    })

    it('types something in the location searchbox and verifies the input value', () => {
        clickOnPodiumBubble()
        verifyLocationSelectorPresent()
        locationSearch()
    })


    //This test will fail as there are only 3 locations, should be 4 according to the docs
    it('verifies the length of the locations list', () => {
        clickOnPodiumBubble()
        verifyLocationSelectorPresent()
        verifyLocationsListItems()
    })

    it('clicks on a location and verifies the send message form appears', () => {
        clickOnPodiumBubble()
        verifyLocationSelectorPresent()
        clickOnLocationItem()
        verifySendMessageForm()
    })

    //Potential Bug found, cache/cookies are not cleared on successive runs without killing the cypress runner
    it('types a name, phone number, and message and hits send', () => {
        cy.clearLocalStorage() //Attempting to remove
        clickOnPodiumBubble()
        verifyLocationSelectorPresent()
        clickOnLocationItem()
        verifySendMessageForm()
        typeName()
        typeMobilePhone()
        typeMessage()
        clickSend()
        verifyConfirmationMessage()
    })

    //--:Negative Tests:--

    it('should verify background image is not Cult of the Party Parrot', () => {
        verifyNotPartyParrotURL()
    }) 
    
    it('should verify a different Gandalf line does not appear', () => {
        verifyNotBilboText()
    })
})