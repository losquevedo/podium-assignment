# Summary 
This test suite is created to test the core functionality of Podium's user messaging app. It contains 11 tests (9 Positive and a 2 Negative cases) and also included a Docker File to build from. The suite should take around 67 seconds to complete.

It's structured using the Page Object Model, the page objects file can be found  in cypress/page-objects.

Thanks so much for reviewing my code! I learned a lot from it. More notes below!

## Test Case Prioritization Breakdown ##
**Smoke**
- Verify Gandalf Text (from Chapter 2 of Fellowship/Moria sequence in the movies)
- Verify Image URL Lodaed
- Verify Messaging Icon is Present
- Verify User can click on Podium Bubble to see Location Selector
- Verify User can type in to search box
- Verify Length of Location list
- Verify User can click on the link, type name, phone Number, and message, hit send, and message will send

**Regression**
- Verify Gandalf Text
- Verify Gandalf Text is NOT the text from his passage re: Bilbo's Pity and Gollum (also from Chapter 2 of Fellowship/Moria sequence in the movies)
- Verify URL Image does NOT link to the Cult of the Party Parrot Website
- Verify Image URL Loaded
- Verify Messaging Icon is Present
- Verify User can click on Podium Bubble to see Location Selector
- Verify User can type in to search box
- Verify Length of Location list
- Verify User can click on the link, type name, phone Number, and message, hit send, and message will send


## Bugs Found
1. Only 3 Locations Showed Up When Looking at The Location Selector **
    - ### Repro Steps: 
        - Load Page
        - Tap on Podium Messaging Icon
        - Review Locations List
    - ### Result: 
        - Locations List only has 3 locations
    - ### Expected Result:
        - Locations List should have 4
      ### Frequency
       - Consistent

2. Podium Button and Prompt do not show up in the same place **
    - ### Repro Steps: 
        - Load Page
        - Verify Podium Button and Prompt Position
        - Reload Page
    - ### Result: 
        - Button will appear on the opposite corner from previous position
    - ### Expected Result:
        - Position should be consistent
      ### Frequency
       - Inconsistent

3. Podium Button and Prompt Switches Colors and Image **
    - ### Repro Steps: 
        - Load Page
        - Verify Podium Button and Prompt Color (Red or Purple)
        - Verify Purple Icon is Podium Logo OR Red Icon is generic Phone Logo
        - Clear Cache
        - Reload Page
    - ### Result: 
        - Button will sometimes switch color between Red and Purple
        - Button will sometimes switch icons to Podium or Generic Phone Logo
    - ### Expected Result:
        - Color should be static
      ### Frequency
       - Inconsistent

4. Successive runs did not delete the previous message sent **
    - ### Repro Steps: 
        - Go to Message Form and Type a message, press send
        - Reload page and go back again
    - ### Result: 
        - Previous message steps will appear
    - ### Expected Result:
        - Message field should be empty
    - ## Frequency
        - Consistent

## Questions/Comments ##
- Is there a good way to extract an xlmns vlaue from a nested.svg? I had a really hard time figuring out to do that in Cypress which led to a missed opportunity for me to catch the icon

- One thing I'd build on going from here is adding more custom ids and other identifiers to elements lists, might even include dome [data-cy] tags for easier cypress access but all that requires dev coordination