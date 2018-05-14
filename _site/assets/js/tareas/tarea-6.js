// Funny Jokes
;(function() {
  var funnyJokes = [{
      "joke": "Today at the bank, an old lady asked me to help check her balance.<br>So I pushed her over."
    }, {
      "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day."
    }, {
      "joke": "I told my girlfriend she drew her eyebrows too high. She seemed surprised."
    }, {
      "joke": "My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away."
    }, {
      "joke": "I'm so good at sleeping. I can do it with my eyes closed."
    }, {
      "joke": "My boss told me to have a good day.. so I went home."
    }, {
      "joke": "Why is Peter Pan always flying? He neverlands."
    }, {
      "joke": "A woman walks into a library and asked if they had any books about paranoia. The librarian says:<br>They're right behind you!"
    }, {
      "joke": "The other day, my wife asked me to pass her lipstick but I accidentally passed her a glue stick. She still isn't talking to me."
    }, {
      "joke": "Why do blind people hate skydiving? It scares the hell out of their dogs."
    }, {
      "joke": "When you look really closely, all mirrors look like eyeballs."
    }, {
      "joke": "My friend says to me: 'What rhymes with orange'<br>I said: 'No it doesn't'"
    }, {
      "joke": "What do you call a guy with a rubber toe? Roberto."
    }, {
      "joke": "What did the pirate say when he turned 80 years old? Aye matey."
    }, {
      "joke": "My wife told me I had to stop acting like a flamingo. So I had to put my foot down."
    }, {
      "joke": "I couldn't figure out why the baseball kept getting larger. Then it hit me."
    }, {
      "joke": "Why did the old man fall in the well? Because he couldn't see that well."
    }, {
      "joke": "I ate a clock yesterday, it was very time consuming."
    }, {
      "joke": "Whatdya call a frenchman wearing sandals? Phillipe Phillope."
    }, {
      "joke": "A blind man walks into a bar. And a table. And a chair."
    }, {
      "joke": "I know a lot of jokes about unemployed people but none of them work."
    }, {
      "joke": "What's orange and sounds like a parrot? A carrot."
    }, {
      "joke": "Did you hear about the italian chef that died? He pasta way."
    }, {
      "joke": "Why couldn't the bicycle stand up? Because it was two tired!"
    }, {
      "joke": "Parallel lines have so much in common. It’s a shame they’ll never meet."
    }],

    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next)
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },

    composeTweet = function composeTweet(text) {
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        related: "related=@&",
        text: "text=" + $('.joke_loading').html().replace(/<br>|\s/g, '+')
      };

      return window.open(
        tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text,
        "Tweet This Joke",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },

    randomJoke = new Random(funnyJokes.length),

    newJoke = function newJoke(e) {
      var
        joke = funnyJokes[randomJoke.generate()],

        $tarea6 = $('.tarea-6-jokes'),
        $button = $tarea6.find('.new-joke'),
        $funnyJokes = $tarea6.find('.funny-jokes'),
        $jokeText = $funnyJokes.find('.joke_text'),
        $tweetIt = $('.tweet a');

      $funnyJokes
        .find('.joke_loading')
        .html( joke.joke );
    },

    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-joke', newJoke)
        .on('click', '.tweet', composeTweet);
    },

    init = function init(){
      registerHandlers();
      newJoke();
    }();

})();



// Fun Facts
;(function() {
  var funnyJokes = [{
      "joke": "Farts have been clocked at a speed of 10 feet per second."
    }, {
      "joke": "Donkeys kill more people annually than plane crashes."
    }, {
      "joke": "On an average work day, a typist’s figures travel 12.6 miles"
    }, {
      "joke": "The longest recorded flight of a chicken is thirteen seconds."
    }, {
      "joke": "40,000 Americans are injured by toilets each year."
    }, {
      "joke": "Banging your head against a wall uses 150 calories a hour."
    }, {
      "joke": "Vending Machines Kill More People per year than sharks."
    }, {
      "joke": "There are three golf balls sitting on the moon!"
    }, {
      "joke": "Like fingerprints, everyone's tongue print is different."
    }, {
      "joke": "Butterflies taste with their feet."
    }, {
      "joke": "In France, it is legal to marry a dead person."
    }, {
      "joke": "To produce a single pound of honey, a single bee would have to visit 2 million flowers."
    }, {
      "joke": "You are born with 300 bones, by the time you are an adult you will have 206."
    }, {
      "joke": "A cockroach will live for weeks without its head before it starves to death"
    }, {
      "joke": "A pig's orgasm lasts 30 minutes."
    }, {
      "joke": "No word in the English language rhymes with month, orange, silver or purple."
    }, {
      "joke": "In Tokyo, a bicycle is faster than a car for most trips of less than 50 minutes!"
    }, {
      "joke": "An ostrich’s eye is bigger than its brain"
    }, {
      "joke": "Every year, kids in North America spend close to half a billion dollars on chewing gum!"
    }, {
      "joke": "Ketchup was sold in the 1830s as medicine."
    }, {
      "joke": "The electric chair was invented by a dentist."
    }, {
      "joke": "Donald Duck comics were banned from Finland because he doesn’t wear trousers."
    }, {
      "joke": "The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words."
    }, {
      "joke": "The word pencil comes from a Latin word meaning small penis."
    }, {
      "joke": "There is a French company that you can hire to kidnap you. They charge US$1600."
    }],

    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next)
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },

    composeTweet = function composeTweet(text) {
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        related: "related=@&",
        text: "text=" + $('.joke_loading').html().replace(/<br>|\s/g, '+')
      };

      return window.open(
        tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text,
        "Tweet This Joke",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },

    randomJoke = new Random(funnyJokes.length),

    newJoke = function newJoke(e) {
      var
        joke = funnyJokes[randomJoke.generate()],

        $tarea6 = $('.tarea-6-jokes'),
        $button = $tarea6.find('.new-joke'),
        $funFacts = $tarea6.find('.fun-facts'),
        $jokeText = $funFacts.find('.joke_text'),
        $tweetIt = $('.tweet a');

      $funFacts
        .find('.joke_loading')
        .html( joke.joke );
    },

    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-joke', newJoke)
        .on('click', '.tweet', composeTweet);
    },

    init = function init(){
      registerHandlers();
      newJoke();
    }();

})();


// Funny Compliments
;(function() {
  var funnyJokes = [{
      "joke": "Even if you were cloned, you'd still be one of a kind. And the better looking one."
    }, {
      "joke": "It's not easy to be me. Which is why I need you."
    }, {
      "joke": "I would love to spend every minute of every day with you, but some days I actually have to get stuff done."
    }, {
      "joke": "Your smile is proof that the best things in life are free."
    }, {
      "joke": "You're smarter than Google and Mary Poppins combined."
    }, {
      "joke": "I think the hardest part about being your friend is pretending as though I like my other friends as much as I like you."
    }, {
      "joke": "You're not someone I pretend to not see in public."
    }, {
      "joke": "I don't have a favourite colour, It's pretty much whatever you are wearing."
    }, {
      "joke": "I can never remember my dreams, but I assume you are always in them."
    }, {
      "joke": "You are like a corner piece of a puzzle. Without you, I'm completely lost."
    }, {
      "joke": "If the last two people on earth were us, I would have no problem repopulating it with you."
    }, {
      "joke": "Out of all my friends you are the best at being single."
    }, {
      "joke": "You inspire me and most likely strangers. Also, friends and stalkers. You are the inspiration to many."
    }, {
      "joke": "I don't know if sarcasm is a skill, but you've certainly mastered it."
    }, {
      "joke": "If you knew how much I think about you, I would be very embarrassed."
    }, {
      "joke": "You are so beautiful I would certainly steal your photos, make a fake account and impress people online."
    }, {
      "joke": "You're just as pretty as all the layers you hide behind."
    }, {
      "joke": "Your face makes other people ugly."
    }, {
      "joke": "I can't take my eyes off of you. Unless you notice me, then I'll quickly look away and act like it never happened."
    }, {
      "joke": "Are you a beaver, because damn."
    }, {
      "joke": "You're like the one sock that dissapears. I don't know what I did to lose you but I want you back."
    }, {
      "joke": "If it was legal to marry food, I would still choose you over pizza."
    }, {
      "joke": "You might be the primary reason for global warming."
    }, {
      "joke": "I bet you make babies smile."
    }, {
      "joke": "If there is one thing I like about you, its that I like more than one thing about you."
    }],

    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next)
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },

    composeTweet = function composeTweet(text) {
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        related: "related=@&",
        text: "text=" + $('.joke_loading').html().replace(/<br>|\s/g, '+')
      };

      return window.open(
        tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text,
        "Tweet This Joke",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },

    randomJoke = new Random(funnyJokes.length),

    newJoke = function newJoke(e) {
      var
        joke = funnyJokes[randomJoke.generate()],

        $tarea6 = $('.tarea-6-jokes'),
        $button = $tarea6.find('.new-joke'),
        $funnyCompliments = $tarea6.find('.funny-compliments'),
        $jokeText = $funnyCompliments.find('.joke_text'),
        $tweetIt = $('.tweet a');

      $funnyCompliments
        .find('.joke_loading')
        .html( joke.joke );
    },

    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-joke', newJoke)
        .on('click', '.tweet', composeTweet);
    },

    init = function init(){
      registerHandlers();
      newJoke();
    }();

})();


// Funny Insults
;(function() {
  var funnyJokes = [{
      "joke": "If laughter is the best medicine, your face must be curing the world."
    }, {
      "joke": "You're so ugly, you scared the crap out of the toilet."
    }, {
      "joke": "Your family tree must be a cactus because everybody on it is a prick."
    }, {
      "joke": "No I'm not insulting you, I'm describing you."
    }, {
      "joke": "It's better to let someone think you are an Idiot than to open your mouth and prove it."
    }, {
      "joke": "If I had a face like yours, I'd sue my parents."
    }, {
      "joke": "Your birth certificate is an apology letter from the condom factory."
    }, {
      "joke": "I guess you prove that even god makes mistakes sometimes."
    }, {
      "joke": "The only way you'll ever get laid is if you crawl up a chicken's ass and wait."
    }, {
      "joke": "You're so fake, Barbie is jealous."
    }, {
      "joke": "I’m jealous of people that don’t know you!"
    }, {
      "joke": "My psychiatrist told me I was crazy and I said I want a second opinion. He said okay, you're ugly too."
    }, {
      "joke": "You're so ugly, when your mom dropped you off at school she got a fine for littering."
    }, {
      "joke": "If I wanted to kill myself I'd climb your ego and jump to your IQ."
    }, {
      "joke": "You must have been born on a highway because that's where most accidents happen."
    }, {
      "joke": "Brains aren't everything. In your case they're nothing."
    }, {
      "joke": "I don't know what makes you so stupid, but it really works."
    }, {
      "joke": "I can explain it to you, but I can’t understand it for you."
    }, {
      "joke": "Roses are red violets are blue, God made me pretty, what happened to you?"
    }, {
      "joke": "Behind every fat woman there is a beautiful woman. No seriously, your in the way."
    }, {
      "joke": "Calling you an idiot would be an insult to all the stupid people."
    }, {
      "joke": "You, sir, are an oxygen thief!"
    }, {
      "joke": "Some babies were dropped on their heads but you were clearly thrown at a wall."
    }, {
      "joke": "Don't like my sarcasm, well I don't like your stupid."
    }, {
      "joke": "Why don't you go play in traffic."
    }],

    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next)
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },

    composeTweet = function composeTweet(text) {
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        related: "related=@&",
        text: "text=" + $('.joke_loading').html().replace(/<br>|\s/g, '+')
      };

      return window.open(
        tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text,
        "Tweet This Joke",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },

    randomJoke = new Random(funnyJokes.length),

    newJoke = function newJoke(e) {
      var
        joke = funnyJokes[randomJoke.generate()],

        $tarea6 = $('.tarea-6-jokes'),
        $button = $tarea6.find('.new-joke'),
        $funnyInsults = $tarea6.find('.funny-insults'),
        $jokeText = $funnyInsults.find('.joke_text'),
        $tweetIt = $('.tweet a');

      $funnyInsults
        .find('.joke_loading')
        .html( joke.joke );
    },

    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-joke', newJoke)
        .on('click', '.tweet', composeTweet);
    },

    init = function init(){
      registerHandlers();
      newJoke();
    }();

})();


// Blonde Jokes
;(function() {
  var funnyJokes = [{
      "joke": "Why can't a blonde dial 911?<br>She can't find the eleven."
    }, {
      "joke": "How come it takes so long to build a blonde snowman?<br>Because you have to hollow out the head."
    }, {
      "joke": "What did the blonde say when she saw the Cheerios box?<br>'Omg, donut seeds!'"
    }, {
      "joke": "Two blondes fell down a hole.<br>One said, 'It’s dark in here isn’t it?'<br>The other replied, 'I don’t know; I can’t see.'"
    }, {
      "joke": "What can strike a blonde without her even knowing it?<br>A thought."
    }, {
      "joke": "Why did the blonde stare at frozen orange juice can for 2 hours?<br>Because it said 'concentrate'."
    }, {
      "joke": "Why did the blonde scale the glass wall?<br>To see what was on the other side."
    }, {
      "joke": "Why were there bullet holes in the mirror?<br>A blonde tried killing herself."
    }, {
      "joke": "How did the blonde die while raking leaves?<br>She fell out of the tree."
    }, {
      "joke": "What do you do if a blonde throws a grenade at you?<br>Pull the pin and throw it back."
    }, {
      "joke": "How do you drown a blonde in a submarine?<br>Knock on the door."
    }, {
      "joke": "Why did the blonde tip-toe past the medicine cabinet?<br>So she wouldn’t wake up the sleeping pills."
    }, {
      "joke": "How can you tell when a brunette is actually a blonde who dyes her hair?<br>When she trips over the cordless phone."
    }, {
      "joke": "How can you make a blonde go on the roof?<br>Tell her that drinks are on the house."
    }, {
      "joke": "Three blondes walk into a building.<br>You'd think one of them would've seen it."
    }, {
      "joke": "Why do blondes wear underwear?<br>To keep their ankles warm."
    }, {
      "joke": "How did the blonde try to kill the bird?<br>She threw it off a cliff."
    }, {
      "joke": "Why can't blondes make ice cubes?<br>They always forget the recipe."
    }, {
      "joke": "How do you make a blonde laugh on Saturday?<br>Tell her a joke on Wednesday."
    }, {
      "joke": "How do you make a blonde's eyes light up?<br>Shine a flashlight in her ears."
    }, {
      "joke": "How do you confuse a blonde?<br>Put her in a circle and tell her to go to the corner."
    }, {
      "joke": "Why did the blonde put water on her computer?<br>To wash the Windows."
    }, {
      "joke": "What do you call a blonde with 2 brain cells?<br>Pregnant."
    }, {
      "joke": "A blonde crashed a helicopter.<br>A police officer asked her what happened. She says, It got cold so I turned off the fan."
    }, {
      "joke": "How do you keep a blonde busy for hours?<br>Write 'Please turn over' on both sides of a piece of paper."
    }],

    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next)
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },

    composeTweet = function composeTweet(text) {
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        related: "related=@&",
        text: "text=" + $('.joke_loading').html().replace(/<br>|\s/g, '+')
      };

      return window.open(
        tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text,
        "Tweet This Joke",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },

    randomJoke = new Random(funnyJokes.length),

    newJoke = function newJoke(e) {
      var
        joke = funnyJokes[randomJoke.generate()],

        $tarea6 = $('.tarea-6-jokes'),
        $button = $tarea6.find('.new-joke'),
        $blondeJokes = $tarea6.find('.blonde-jokes'),
        $jokeText = $blondeJokes.find('.joke_text'),
        $tweetIt = $('.tweet a');

      $blondeJokes
        .find('.joke_loading')
        .html( joke.joke );
    },

    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-joke', newJoke)
        .on('click', '.tweet', composeTweet);
    },

    init = function init(){
      registerHandlers();
      newJoke();
    }();

})();


// Dad Jokes
;(function() {
  var funnyJokes = [{
      "joke": "Did you hear about the restaurant on the moon?<br>Great food, no atmosphere."
    }, {
      "joke": "What do you call a fake noodle?<br>An Impasta."
    }, {
      "joke": "How many apples grow on a tree?<br>All of them."
    }, {
      "joke": "Want to hear a joke about paper?<br>Nevermind it's tearable."
    }, {
      "joke": "I just watched a program about beavers.<br>It was the best dam program I've ever seen."
    }, {
      "joke": "Why did the coffee file a police report?<br>It got mugged."
    }, {
      "joke": "How does a penguin build it's house?<br>Igloos it together."
    }, {
      "joke": "Dad, did you get a haircut?<br>No I got them all cut."
    }, {
      "joke": "What do you call a Mexican who has lost his car?<br>Carlos."
    }, {
      "joke": "Dad, can you put my shoes on?<br>No, I don't think they'll fit me."
    }, {
      "joke": "Why did the scarecrow win an award?<br>Because he was outstanding in his field."
    }, {
      "joke": "Why don't skeletons ever go trick or treating?<br>Because they have no body to go with."
    }, {
      "joke": "Ill call you later.<br>Don't call me later, call me Dad."
    }, {
      "joke": "What do you call an elephant that doesn't matter?<br>An irrelephant"
    }, {
      "joke": "Want to hear a joke about construction?<br>I'm still working on it."
    }, {
      "joke": "What do you call cheese that isn't yours?<br>Nacho Cheese."
    }, {
      "joke": "Why couldn't the bicycle stand up by itself?<br>It was two tired."
    }, {
      "joke": "What did the grape do when he got stepped on?<br>He let out a little wine."
    }, {
      "joke": "I wouldn't buy anything with velcro.<br>It's a total rip-off."
    }, {
      "joke": "The shovel was a ground-breaking invention."
    }, {
      "joke": "Dad, can you put the cat out?<br>I didn't know it was on fire."
    }, {
      "joke": "This graveyard looks overcrowded.<br>People must be dying to get in there."
    }, {
      "joke": "Whenever the cashier at the grocery store asks my dad if he would like the milk in a bag he replies,<br>'No, just leave it in the carton!'"
    }, {
      "joke": "5/4 of people admit that they’re bad with fractions."
    }, {
      "joke": "Two goldfish are in a tank. One says to the other,<br>'do you know how to drive this thing?'"
    }],

    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next)
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },

    composeTweet = function composeTweet(text) {
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        related: "related=@&",
        text: "text=" + $('.joke_loading').html().replace(/<br>|\s/g, '+')
      };

      return window.open(
        tweet.url + tweet.hashtags + tweet.via + tweet.related + tweet.text,
        "Tweet This Joke",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },

    randomJoke = new Random(funnyJokes.length),

    newJoke = function newJoke(e) {
      var
        joke = funnyJokes[randomJoke.generate()],

        $tarea6 = $('.tarea-6-jokes'),
        $button = $tarea6.find('.new-joke'),
        $dadJokes = $tarea6.find('.dad-jokes'),
        $jokeText = $dadJokes.find('.joke_text'),
        $tweetIt = $('.tweet a');

      $dadJokes
        .find('.joke_loading')
        .html( joke.joke );
    },

    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-joke', newJoke)
        .on('click', '.tweet', composeTweet);
    },

    init = function init(){
      registerHandlers();
      newJoke();
    }();

})();
