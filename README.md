# data_engineering_experiment
This app built using HTML and JavaScript was created to experiment with Snowplow's [JavaScript tracker](https://github.com/snowplow/snowplow/wiki/javascript-tracker).

The app consits of a simple multiple choice test where a fictional user "John_Smith1999" has been logged in and asked to complete the test. The user can select an answer to several questions. Then, when the "submit answers" button is pressed, the user is redirected to a "test_completed" page. A "tracker.js" file was added to the app to handle the tracker.

## How to use:
  - Set up [snowplow micro](https://github.com/snowplow-incubator/snowplow-micro/), or another collector of your choice, and change <<COLLECTOR_URL>> in line 8 of tracker.js
  - Clone this repository.
  - Open app/main.html in your browser.

## Tracker features implemented:
The JavaScript tracker was set up and provided with the username using 'setUserId'. Then, three different types of tracking events were explored:
  - Automatic tracking:
    - Page view tracking: Sends information when the user first visits "main.html"
    - Form tracking: Reacts to any changes in the radio buttons of the mutliple choice test. 
    - Activity tracking: Every 10 seconds, it sends informacion about the user's engagement (e.g. how much has the mouse moved in the last 10 seconds?). It could be used together with form tracking to understand how the user behaves in the different questions (does the user change his mind a lot by selecting different options?, do they spend more time in a particular question?, do they leave the tab for long periods of time?).
    - Error tracking: Could be very useful for developers to find any bugs or unexpected behaviour in the app if it was to be released to the wider public.
         
  - Structured events: Test navigation tracking. It sends information when the left or right buttons of the test are pressed. It could be combined with form tracking and activity tracking to fully understand what question the user is in at each moment in time.
  
  - Self-describing events: The capabilities of the self-describing event feature were explored. This feature allows for every field and data type of the JSON sent by the tracker to be personalised. This way, a self-describing event is sent when the user clicks "Submit Answers", informing among other things how long the user took to complete the test, and the answers submitted. For the self-describing event to be received properly by the collector, a JSON Schema had to be defined for the event. The "iglu" folder in this repository shows a private iglu repository with a schema describing this event.
 
## TODO list:
  - Use snowplow micro to build a test suite that covers all edge cases and ensures the app and tracker work as expected.
  - Address User consent, privacy and security-related concerns: If this app was to be used in a real-world business application, how can I make sure that it is secure and respects privacy and data protection regulations?
  - Set up snowplow micro to handle additional iglu repositories such as the one defined in this repo.
