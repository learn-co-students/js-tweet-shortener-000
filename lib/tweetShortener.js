'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    var newtweet0 = tweet.replace(/(\shello\s|\sHello\s)/g, " hi ");
    var newtweet1 = newtweet0.replace(/(\sto\s|\sTo\s)/g, " 2 ");
    var newtweet2 = newtweet1.replace(/(\stoo\s|\sToo\s)/g, " 2 ");
    var newtweet3 = newtweet2.replace(/(\stwo\s|\sTwo\s)/g, " 2 ");
    var newtweet4 = newtweet3.replace(/(\sfour\s|\sFour\s)/g, " 4 ");
    var newtweet5 = newtweet4.replace(/(\sfor\s|\sFor\s)/g, " 4 ");
    var newtweet6 = newtweet5.replace(/(\sbe\s|\sBe\s)/g, " b ");
    var newtweet7 = newtweet6.replace(/(\syou\s|\sYou\s)/g, " u ");
    var newtweet8 = newtweet7.replace(/(\sat\s|\sAt\s)/g, " @ ");
    var newtweet9 = newtweet8.replace(/(\sand\s|\sAnd\s)/g, " & ");
    return newtweet9
  },

  bulkShortener: function(tweetArray){
    var newTweetArray = new Array();
    tweetArray.forEach(function(tweet){
      newTweetArray.push(tweetShortener.wordSubstituter(tweet))
    });
    return newTweetArray

  },

  selectiveShortener: function(tweet){
    if ((tweet.split("")).length >= 140){
      var tweetSplitLength = ((tweet.split("")).length - 140)
      var tweetSplit = tweet.split("")
      tweetSplit.splice(139, tweetSplitLength)
        return tweetSplit.join("")
    } else
        return tweet
  },


  shortenedTruncator: function(tweet){
    if ((tweet.split("")).length >= 137){
      var tweetSplitLength = ((tweet.split("")).length - 137)
      var tweetSplit = tweet.split("")
      tweetSplit.splice(133, tweetSplitLength)
      tweetSplit.push("...")
        return tweetSplit.join("")
    } else
        return tweet
  },
};








































