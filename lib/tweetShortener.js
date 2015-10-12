'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/be\s/g, "b ").replace(/to\s|two\s|too\s/g, "2 ").replace(/you\s/g, "u ").replace(/\sat\s/g, " @ ").replace(/and\s/g, "& ").replace(/[fF]or|four/g, "4").replace(/hello/g, "hi");
  },
  bulkShortener: function(tweetArray){
    var collection = [];
    var tS = this;
    tweetArray.forEach(function(tweet) {
      collection.push(tS.wordSubstituter(tweet));
    });
    return collection;
  },
  selectiveShortener: function(longTweet){
    if (longTweet.length > 140) {
      return this.wordSubstituter(longTweet);
    } else {
      return longTweet;
    }
  },
  shortenedTruncator: function(longTweet){
    if (longTweet.length > 140) {
      return longTweet.slice(0, 137) + "...";
    } else {
      return longTweet;
    }
  },
};
