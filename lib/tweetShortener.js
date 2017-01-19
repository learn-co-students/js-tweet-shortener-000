'use strict';

var tweetShortener = {
	wordSubstituter: function(tweet) {
		for(var word in words) {
			if( tweet.indexOf(word) > 0 ) {
				var regex_string = "\\b" + word + "\\b";
				let regex = new RegExp(regex_string, "g");
				tweet = tweet.replace(regex, words[word]);
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
