;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
    p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
    };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;
    n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","sp.js","snowplow"));
    
window.snowplow('newTracker', 'cf', '192.168.99.100:9090', { // Initialise a tracker
  appId: 'test',
  cookieDomain: 'the_test.com',
  forceSecureTracker: false
});

snowplow('enableActivityTracking', 10, 10);

snowplow('enableFormTracking');

snowplow('enableErrorTracking');

function submitAnswersEvent() {
  quiz.answers = [1,3,1]; 
  snowplow('trackSelfDescribingEvent', {
    schema: 'iglu:myNewSchema',
    data: {
        studentID: '123456A',
        timeTaken: 'Dresses',
        answers: answers,
    }
  });
} 

var next_question_button = document.getElementById("nextQ");
var previous_question_button = document.getElementById("previousQ");
var submit_button = document.getElementById("submitAnswers");

next_question_button.addEventListener("click", () => snowplow('trackStructEvent', 'quizNavigation','next_question'));
previous_question_button.addEventListener("click", () => snowplow('trackStructEvent', 'quizNavigation','previous_question'));
submit_button.addEventListener("click", submitAnswersEvent)


window.snowplow('trackPageView');
