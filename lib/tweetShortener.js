'use strict';

var tweetShortener = {
	wordSubstituter: function(tweet) {
		for(var word in words) {
			if( tweet.match(word) ) {
				let regex = new RegExp('^' + word, 'g')
				tweet = tweet.replace(regex, words[word])
			}
		}
		return tweet
	},
  bulkShortener: function(){},
  selectiveShortener: function(){},
  shortenedTruncator: function(){}
};

var words = {
	"hello" : 'hi',
	"to" : '2',
	"two" : '2',
	"too" : '2',
	"for, four" : '4',
	"be" : 'b',
	"you" : 'u',
	"at" : "@",
	"and" : "&",
}
