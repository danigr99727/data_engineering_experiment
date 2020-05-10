//Set up snowplow()
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","sp.js","snowplow"));

//Set up and configure new tracker    
window.snowplow('newTracker', 'cf', '<<COLLECTOR_URL>>', { // Initialise a tracker
  appId: 'test',
  cookieDomain: 'the_test.com',
  forceSecureTracker: false
});
snowplow('setUserId', username);

//Automatic tracking
snowplow('enableActivityTracking', 10, 10);
window.snowplow('trackPageView');
snowplow('enableFormTracking');
snowplow('enableErrorTracking');

//Structured events tracking
next_question_button.addEventListener("click", () => snowplow('trackStructEvent', 'quizNavigation','next_question'));
previous_question_button.addEventListener("click", () => snowplow('trackStructEvent', 'quizNavigation','previous_question'));


//Self-describing events tracking
function submitAnswersEvent() {
  eventTime = new Date();
  snowplow('trackSelfDescribingEvent', {
    schema: 'iglu:192.168.99.1:8080/myRepo/submit_schema/1-0-0',
    data: {
        userID: username,
        testID: "capitalCities",
        timeTaken: quiz.time_taken,
        eventTime: eventTime,
        answers: quiz.answers,
    }
  });
} 
submit_button.addEventListener("click", submitAnswersEvent);


