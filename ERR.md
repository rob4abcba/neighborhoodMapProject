
Christopher Salinas [Nov 28th at 6:12 AM]
Hello everyone I'm trying to work on my google API when i first start the app eveything works fine but after a couple of times testing it. i get this error message  You have exceeded your request quota for this API. and yesterday my sidebar and marker window was working  but now i get this error message for foursqaure file could not load 429 when i look up the error message it says it's because i exceeded my quota. do you know how long we have to wait to reset. or do we need another api for both . here is my code https://github.com/salinas23cfh/neighborhoodMapProject/tree/master/src
GitHub
salinas23cfh/neighborhoodMapProject
Contribute to salinas23cfh/neighborhoodMapProject development by creating an account on GitHub.
 


2 replies
Baaba KFF [FEND] [2 days ago]
I assume you are in FEND and talking about Project 7. It would be better if you posted your question in fend_live_help or fend_proj_7.

Are you using Google API? 
Did you put in your building details when you tried to create the API? 
If no, then that's probably why you are getting the "exceeding daily quota" request. You can put in your billing info and take advantage of the free billing credit offered. You will not be charged.

If those are the only errors you are receiving and you have met the basic requirements for the project, you are good to.

As to how long you have to wait to reset, it could be 24 hours if it's a daily quota restriction or till you put in your billing details.


Ryan [FEND] [2 days ago]
I ran into the same thing a few days ago. You're hitting Foursquare's API limit, which resets every day at midnight UTC.

https://developer.foursquare.com/docs/api/troubleshooting/rate-limits
