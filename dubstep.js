//songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
// =>  WE ARE THE CHAMPIONS MY FRIEND

//inserts a certain number of words "WUB" before the first word of the song (the number may be zero)
//after the last word (the number may be zero),
//and between words

//(at least one between any pair of neighbouring words)

const songDecoder = (song) => {
	return song.replace(/(WUB)+/g, ' ').trim();
};

console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));
console.log(songDecoder('WUBAWUBBWUBCWUB'));
/*describe("Fixed tests", function(){
    it("It should pass fixed tests", function(){
      Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
      Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
      Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
    });
  });*/
