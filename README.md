# data_engineering_experiment
This simple app built using HTML and JavaScript was created in order to experiment with Snowplow's [JavaScript tracker](https://github.com/snowplow/snowplow/wiki/javascript-tracker).

How to use:
  - Set up [snowplow micro](https://github.com/snowplow-incubator/snowplow-micro/), or another collector of your choice, and change <<COLLECTOR_URL>> in line 6 of tracker.js
  - Clone this repository.
  - Open "main.html" in your browser.

Tracker features explored in this app:
  - Automatic tracking features:
    - Page view tracking:
    - Form tracking:
    - Activity tracking:
    - Error tracking:
         
  - Structured events: Quiz navigation tracking.
  - Self-describing events: Answer submission tracking:
 
Things that could be investigated further:
          - Using snowplow micro to build a test suite that covers all edge cases and ensures the app and tracker work as expected.
          - User consent, privacy and security-related concerns: If this app was to be used in a real-world business application, how can I make sure that my app is secure and respects privacy and data protection regulations?
          - Set up iglu repositories to handle 
