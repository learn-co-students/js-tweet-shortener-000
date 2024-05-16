'use strict';

var tweetShortener = {
	wordSubstituter: function(tweet) {
		for(var word in words) {
			if( tweet.indexOf(word) > 0 ) {
				let regex_string = "\\b" + word + "\\b";
				let regex = new RegExp(regex_string, "gi");
				tweet = tweet.replace(regex, words[word]);
			}
		}
		return tweet
	},
	bulkShortener: function(array){
		var bulk_array = [];
		for(var count in array) {
			bulk_array.push( this.wordSubstituter(array[count]) )
		}
		return bulk_array;
	},
	selectiveShortener: function(tweet){
		if (tweet.length > 140) {
			return tweet.slice(0, 140);
		}
		return tweet;
	},
	shortenedTruncator: function(tweet){
		if (tweet.length < 140) {
			return tweet
		}

		tweet = this.wordSubstituter(tweet)
		if (tweet.length > 140) {
			tweet = tweet.slice(0, 137);
		}
		return tweet + '...';
	}
};

var words = {
	"hello" : 'hi',
	"to"    : '2',
	"two"   : '2',
	"too"   : '2',
	"for"   : '4',
	"four"  : '4',
	"be"    : 'b',
	"you"   : 'u',
	"at"    : "@",
	"and"   : "&",
}
