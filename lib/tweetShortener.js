'use strict';

var tweetShortener = {
  "tweetLib": {"hello": 'hi',
              "to": '2',
              "two": '2',
              "too": '2',
              "for": '4',
              "four": '4',
              'be': "b",
              'you': 'u',
              "at": '@',
              "and": '&'},
  wordSubstituter: function(tweet){
    var subs = tweetShortener["tweetLib"];
    for (var sub in subs){
      var shorterVersion = subs[sub];
      if (tweet.indexOf(sub) > 0) {
        var exp = new RegExp(" " + sub + " ","gi");
        tweet = tweet.replace(exp, " " + shorterVersion + " ");
      }
    }
    return tweet;
  },
  bulkShortener: function(tweetArr){
    var returnArr = [];
    for (var i = 0; i < tweetArr.length; i++) {

      returnArr.push(tweetShortener.wordSubstituter(tweetArr[i]));
    }
    return returnArr;
  },
  selectiveShortener: function(tweet){
    if (tweet.length > 140) {
      return tweet.slice(0,140);  
    } 
    else {
      return tweet;
    }
  },
  shortenedTruncator: function(tweet){
    if (tweet.length > 140) {
      var shortTweet = tweetShortener.wordSubstituter(tweet);
      shortTweet = tweetShortener.selectiveShortener(shortTweet);
      shortTweet = shortTweet.split("");
      shortTweet.splice(137,3,"...");
      return shortTweet.join("");
    }
    else {
      return tweet;
    }
  }
};
