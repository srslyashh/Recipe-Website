# CS 494 Final Project 
**Code due at the time of your final project grading demo**<br>
**(grading demos will occur during finals week; more details TBA)**

In this course, a final programming project will take the place of formal exams to test your understanding of the material.  The final project will involve working in a team of 3-4 to implement a complete React-based web application that’s connected to an API.  Your app will specifically have to satisfy these requirements:


* It should have interactive components that maintain component state.
* It should be created using either Create React App or Next.js (or, if you’re feeling ambitious, you can do something wild like write a custom server, e.g. based on Express, and manually configure Babel and Webpack to build your application).
* It should have at least 5 distinct routes, at least one of which should be a parameterized route for which content is dynamically generated based on application data.
* It should communicate via HTTP(s) with a third-party API to provide data for the app and to send data back to the API.  Some possible APIs you might use are listed below.  Alternatively, you may implement a custom API for your application.
* It should have at least one page that collects data from the user and sends that data back to the API.  This could be as simple as performing a search based on a user-specified query, or it could involve uploading application data to the API (e.g. creating a new tweet on Twitter).
* It should have polished design and styling and should provide reasonably good support for small-screen devices via responsive CSS.

This document contains a few more details about the process for the project.

## Choosing an app to work on
Within the boundaries of the requirements above, there are limitless possibilities for apps you could write.  I encourage you to be creative and to implement an app you find interesting or that solves a real problem for its potential users.  However, you should also be realistic about what you can accomplish with a small team in a few weeks.  In particular, feel free to treat the final project as an opportunity to deliver a prototype of an idea, not a complete marketable product.  If you're having trouble thinking of an idea for an app to implement, please reach out to me.

## GitHub repositories
The code for your final project must be in a GitHub repository set up via GitHub Classroom.  You can use this link to form your team and create your final project repository:

https://classroom.github.com/a/xRupV__C

The repository created for your team will be private by default, but you will have full administrative control over the repository that’s created for your project, which means you’ll be able to make it public if you wish.  I encourage you to make it public if you’re comfortable with that.  These final projects should be nice demonstrations of your web development abilities and will be a good item to have in your CS portfolio.  It will be great to have the code in a public GitHub repo so you can share it easily when you want to.  

If you’ve already started a GitHub repo for your project, don’t worry.  The repository created via the GitHub classroom link above will be completely empty, so you can simply use git remotes to work with both repositories.  I can help you set that up if needed.
## Working with a team on a shared GitHub repo
When working with a team on a shared GitHub repo, it’s a good idea to use a workflow that uses branches and pull requests.  This has a few advantages:

* By not working within the same branch, you can better avoid causing conflicts, which can occur when you and another member of your team edit the same parts of the code at the same time.
* It helps you to be more familiar with the entire code base, even the parts that other team members are working on, because you’ll see all of the changes to the code as you review pull requests.  This can help you develop more rapidly because you won’t have to spend as much time understanding code that others have written.
* It helps to ensure high quality code.  Code in pull requests is not incorporated into the master code branch until the code request is reviewed and approved.  That means everyone has a chance to improve pull request code before it becomes permanent.

One simple but effective branch- and pull-request-based workflow you might consider is the GitHub flow: https://guides.github.com/introduction/flow/.

## Grading demonstrations
The grade for your project will include a brief (10-15 minute) demonstration to me of your project’s functionality.  To get a grade for your project, your team must do a demo.  Demonstrations will be scheduled for finals week.  I’ll send more details on scheduling via email.
## Code submission
All code for your final project must be pushed to the main branch of the repo created for your team using the GitHub Classroom link above before your grading demo.
## Grading criteria
Your team’s grade (out of 100 points) will be computed based on the following criteria:
50 points – Your app satisfies the requirements listed on the first page of this document.
25 points – Your app has a high-quality design and implementation.
For example, your app is free of bugs and has an effective user interface.
25 points – Your app is creative and original.
If your project proposal is approved, this should be no problem.

**Remember, also, that if your team does not do a demo for your project, you will receive a zero for it.**

**Individual grades**
Your individual grade for the project will be based on your team’s grade and also on evidence of your meaningful participation in your team’s work on the project, including from these sources:

The commit log of your GitHub repository.
Your presence at and participation in your team’s project demo.
A team evaluation completed by each member of your project team.

In particular, if your GitHub commit log shows that you did not make meaningful contributions to your team’s implementation of your app, if you do not participate in your team’s demonstration of your app (without explicit prior approval by me), or if your project teammates submit team evaluations in which they agree that you did not do an appropriate share of the work on your final project, you will receive a lower grade on the project than your teammates.  I may use other sources as evidence of your participation, as well.

## Some APIs you could use
Below is a list of third-party APIs you could consider using for your app.  These are only suggestions, and you’re not restricted to use only these APIs, so if you’ve got your own API in mind, go ahead and include it in your proposal.  You can always ask me if you’re in doubt about the API you want to use.  Also, remember that you can write your own custom API for the app if you want.

OSU Developers API: https://developer.oregonstate.edu/
Note that many of the APIs here require permission granted from OSU Information Services (details in the documentation linked above), so make sure to ask for permission early if you want to use these APIs.
Twitter API: https://dev.twitter.com/rest/public
Facebook APIs: https://developers.facebook.com/docs/
YouTube Data API: https://developers.google.com/youtube/v3
Reddit API: https://www.reddit.com/dev/api
Zillow API: https://www.zillow.com/howto/api/APIOverview.htm
Dropbox API: https://www.dropbox.com/developers
Wikipedia API (follow the “Documentation" link for more info): https://en.wikipedia.org/w/api.php
TikTok Display API: https://developers.tiktok.com/doc/display-api-get-started/
Yelp API: https://www.yelp.com/developers/
Spotify API: https://developer.spotify.com/
Flickr API: https://www.flickr.com/services/api/
The World Bank APIs: https://datahelpdesk.worldbank.org/knowledgebase/topics/125589
The US Bureau of Labor Statistics API: https://www.bls.gov/developers/home.htm
The Socrata Open Data API: https://dev.socrata.com/
BreweryDB API: http://www.brewerydb.com/developers
Google Fit API: https://developers.google.com/fit/
Twitch APIs: https://dev.twitch.tv/docs/api/
IBM Watson API: https://developer.ibm.com/watson/
The Star Wars API: https://swapi.dev/
The SoundCloud API: https://developers.soundcloud.com/
Microsoft Computer Vision API: https://www.microsoft.com/cognitive-services/en-us/computer-vision-api
The Discord API: https://discordapp.com/developers/docs/intro
Riot Games API: https://developer.riotgames.com/
Etsy API: https://www.etsy.com/developers/
Goodreads API (note that many of this API's methods only return XML): https://www.goodreads.com/api
The US Patent and Trademark Office API: https://developer.uspto.gov/api-catalog
The Macrostrat API: https://macrostrat.org/#api
Artsy API: https://developers.artsy.net/
NASA API: https://api.nasa.gov/index.html
The USDA Food Composition Databases API: https://ndb.nal.usda.gov/ndb/api/doc
Marvel Comics API: https://developer.marvel.com/
Steam Web API: https://developer.valvesoftware.com/wiki/Steam_Web_API
Google Cloud Prediction API: https://cloud.google.com/prediction/docs/
World Bank Climate Data API: https://datahelpdesk.worldbank.org/knowledgebase/articles/902061-climate-data-api
Slack API: https://api.slack.com/
Adapt API by Mycroft: https://adapt.mycroft.ai/
Guild Wars API: https://wiki.guildwars2.com/wiki/API:Main
RocketLeagueStats API: http://documentation.rocketleaguestats.com
The Movie Database API: https://developers.themoviedb.org/3/getting-started/introduction
