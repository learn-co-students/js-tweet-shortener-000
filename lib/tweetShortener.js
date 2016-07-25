'use strict';

var wordsAllowed = {"hello" :'hi', "to" : "2", "two" : "2", "too" : "2", 
    "for" : "4", "four" : "4", "be" : "b", "you" : "u", "at" : "@", "and" : "&"};


var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweet;
    for (var word in wordsAllowed){        
        var exp = new RegExp(" " + word + " ","gi");
        tweet = tweet.replace(exp, " " + wordsAllowed[word] + " ");
      }
    return tweet;
  },
  bulkShortener: function(tweets){
    for (var i=0; i< tweets.length; i++){
      tweets[i] = this.wordSubstituter(tweets[i])
    }
    return tweets;
  },
  selectiveShortener: function(tweet){
    var response = tweet;
    if (tweet.length > 140) { 
      response = this.wordSubstituter(tweet);
    }
    return response;
  },
  shortenedTruncator: function(tweet){
    if (tweet.length < 140) {
      return tweet;
    }
    else {
      var response = this.selectiveShortener(tweet);
      if (response.length >140) {
        response = response.substring(0,137)+"...";
      }
      return response;
    }

  },
};