var textArray = [
    'A year from now you may wish you had started today.<br><cite>Karen Lamb</cite>',
    'Action is the foundational key to all success.<br><cite>Pablo Picasso</cite>',
    'All our dreams can come true–if we have the courage to pursue them.<br><cite>Walt Disney</cite>',
    'Always be a first-rate version of yourself, instead of a second-rate version of somebody else.<br><cite>Judy Garland</cite>',
    'An obstacle is often a stepping stone.<br><cite>William Prescott</cite>',
    'Build your own dreams, or someone else will hire you to build theirs.<br><cite>Farrah Grayrogers</cite>',
    'Challenge yourself with something you know you could never do, and what you&#8217;ll find is that you can overcome anything.<br><cite>Unknownroosevelt</cite>',
    'Challenges are what make life interesting and overcoming them is what makes life meaningful.<br><cite>Joshua J. Marine</cite>',
    'Champions keep playing until they get it right.<br><cite>Billie Jean King</cite>',
    'Change your thoughts and you change your world.<br><cite>Norman Vincent Peale</cite>',
    'Conformity is the jailer of freedom and the enemy of growth.<br><cite>John F. Kennedy</cite>',
    'Do what you love and the money will follow.<br><cite>Marsha Sinetar</cite>',
    'Don&#8217;t be pushed by your problems. Be led by your dreams.<br><cite>Ralph Waldo Emerson</cite>',
    'Don&#8217;t count the days, make the days count.<br><cite>Muhammad Ali</cite>',
    'Don&#8217;t wait. The time will never be just right.<br><cite>Napoleon Hilleinstein</cite>',
    'Don&#8217;t wish it were easier, wish you were better.<br><cite>Jim Rohn</cite>',
    'Don&#8217;t worry about failures, worry about the chances you miss when you don&#8217;t even try.<br><cite>Jack Canfield</cite>',
    'Dream big and dare to fail.<br><cite>Norman Vaughan</cite>',
    'Either write something worth reading or do something worth writing.<br><cite>Benjamin Franklin</cite>',
    'Either you run the day, or the day runs you.<br><cite>Jim Rohn</cite>',
    'Even if you fall on your face, you&#8217;re still moving forward.<br><cite>Victor Kiam</cite>',
    'Even if you&#8217;re on the right track, you&#8217;ll get run over if you just sit there.<br><cite>Will Rogers</cite>',
    'Every man dies. Not every man really lives.<br><cite>William Wallace</cite>',
    'Every strike brings me closer to the next home run.<br><cite>Babe Ruth</cite>',
    'Everything has beauty, but not everyone can see.<br><cite>Confuciusvaynerchuk</cite>',
    'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.<br><cite>Booker T. Washington</cite>',
    'Freedom is not the absence of commitments, but the ability to choose yours.<br><cite>Paulo Coelho</cite>',
    'Happiness cannot be traveled to, owned, earned, or worn. It is the spiritual experience of living every minute with love, grace & gratitude.<br><cite>Denis Waitley</cite>',
    'Happiness is not something readymade. It comes from your own actions.<br><cite>Dalai Lama</cite>',
    'I am thankful for all of those who said NO to me. Its because of them I&#8217;m doing it myself.<br><cite>Albert Einstein</cite>',
    'I am tomorrow, or some future day, what I establish today. I am today what I established yesterday or some previous day.<br><cite>James Joyce</cite>',
    'I didn&#8217;t fail the test. I just found 100 ways to do it wrong.<br><cite>Benjamin Franklin</cite>',
    'I don&#8217;t regret the things I&#8217;ve done, I regret the things I didn&#8217;t do<br><cite>Lucas ( Rory Cochrane, Empire Records)</cite>',
    'I don&#8217;t regret the things I&#8217;ve done, I regret the things I didn&#8217;t do when I had the chance.<br><cite>Unknown</cite>',
    'I will go anywhere as long as it is forward.<br><cite>David Livingston</cite>',
    'I would rather die of passion than of boredom.<br><cite>Vincent van Gogh</cite>',
    'If the wind will not serve, take to the oars.<br><cite>Latin Proverb</cite>',
    'If there is no struggle, there is no progress.<br><cite>Frederick Douglass</cite>',
    'If you aren&#8217;t going all the way, why go at all?<br><cite>Joe Namath</cite>',
    'If you can dream it, you can achieve it.<br><cite>Zig Ziglar</cite>',
    'If you can&#8217;t outplay them, outwork them.<br><cite>Ben Hogangerrit</cite>',
    'If you cannot do great things, do small things in a great way.<br><cite>Napoleon Hill</cite>',
    'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.<br><cite>Henry David Thoreau</cite>',
    'If you&#8217;re offered a seat on a rocket ship, don&#8217;t ask what seat! Just get on.<br><cite>Sheryl Sandberg</cite>',
    'In three words I can sum up everything I&#8217;ve learned about life: It goes on.<br><cite>Robert Frost</cite>',
    'It does not matter how slowly you go as long as you do not stop.<br><cite>Confucius</cite>',
    'It is never too late to be what you might have been.<br><cite>George Eliot</cite>',
    'It is never too late to be what you might have been.<br><cite>George Eliot</cite>',
    'It wasn&#8217;t raining when Noah built the ark.<br><cite>Howard Ruff</cite>',
    'It&#8217;s time to start living the life you&#8217;ve imagined<br><cite>Henry James</cite>',
    'Just keep going. Everybody gets better if they keep at it.<br><cite>Ted Williamsjobs</cite>',
    'Just know, when you truly want success, you&#8217;ll never give up on it. No matter how bad the situation may get.<br><cite>Unknown</cite>',
    'Keep your face to the sunshine and you can never see the shadow.<br><cite>Helen Keller</cite>',
    'Life is what happens to you while you&#8217;re busy making other plans.<br><cite>John Lennon</cite>',
    'Life is what we make it, always has been, always will be.<br><cite>Grandma Moses</cite>',
    'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.<br><cite>Jamie Paolinetti</cite>',
    'Make each day your masterpiece.<br><cite>John Wooden</cite>',
    'Never give up on something that you can&#8217;t go a day without thinking about.<br><cite>Unknown</cite>',
    'Never let your memories be greater than your dreams.<br><cite>Doug Ivester</cite>',
    'Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don&#8217;t have a plan.<br><cite>Larry Winget</cite>',
    'Nothing important was ever achieved without someone taking a chance.<br><cite>H. Jackson Brown, Jr</cite>',
    'Obsessed is just a word the lazy use to describe the dedicated.<br><cite>Russell Warren</cite>',
    'Only those who will risk going too far can possibly find out how far one can go.<br><cite>T.S. Eliot</cite>',
    'Someday is not a day of the week.<br><cite>Denise Brennan-Nelson</cite>',
    'Success is going from failure to failure without losing your enthusiasm.<br><cite>Winston Churchill</cite>',
    'The aim of an argument or discussion should not be victory, but progress.<br><cite>Joseph Joubert</cite>',
    'The best dreams happen when you&#8217;re awake.<br><cite>Cherie Gilderbloom</cite>',
    'The best revenge is massive success.<br><cite>Frank Sinatra</cite>',
    'The best way out is always through.<br><cite>Robert Frost</cite>',
    'The best way to predict the future is to invent it.<br><cite>Alan Kay</cite>',
    'The creation of a thousand forests is in one acorn.<br><cite>Ralph Waldo Emerson</cite>',
    'The difference between ordinary and extraordinary is that little extra.<br><cite>Jimmy Johnson</cite>',
    'The dreamers are the saviors of the world.<br><cite>James Allen</cite>',
    'The greatest discovery of my generation is that a human being can alter his life by altering the attitudes of his mind.<br><cite>William James</cite>',
    'The harder I work, the luckier I get.<br><cite>Gary Player</cite>',
    'The journey of a thousand miles begins with one step.<br><cite>Lao Tzu</cite>',
    'The more I want to get something done, the less I call it work.<br><cite>Richard Bach</cite>',
    'The only way to do great work is to love what you do.<br><cite>Steve Jobs</cite>',
    'The purpose of our lives is to be happy.<br><cite>Dalai Lamacliff</cite>',
    'There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.<br><cite>Denis Waitley</cite>',
    'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.<br><cite>Aristotle</cite>',
    'Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.<br><cite>Carl Bard</cite>',
    'To live is the rarest thing in the world. Most people exist, that is all.<br><cite>Oscar Wilde</cite>',
    'Too many of us are not living our dreams because we are living our fears.<br><cite>Les Brown</cite>',
    'Tough times never last, but tough people do.<br><cite>Dr. Robert Schullerscher</cite>',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit.<br><cite>Aristotle</cite>',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.<br><cite>Henry S. Haskins</cite>',
    'What we fear doing most is usually what we most need to do.<br><cite>Tim Ferriss</cite>',
    'What you do speaks so loudly that I cannot hear what you say.<br><cite>Ralph Waldo Emerson</cite>',
    'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.<br><cite>Henry Ford</cite>',
    'When I let go of what I am, I become what I might be.<br><cite>Lao Tzu</cite>',
    'When you feel like giving up, remember why you held on for so long in the first place.<br><cite>Unknown</cite>',
    'Winning isn&#8217;t everything, but wanting to win is.<br><cite>Vince Lombardi</cite>',
    'You make a living by what you get; you make a life by what you give.<br><cite>Winston Churchill</cite>',
    'You may be disappointed if you fail, but you are doomed if you don&#8217;t try.<br><cite>Beverly Sills</cite>',
    'You must be the change you wish to see in the world.<br><cite>Gandhi</cite>',
    'You must not only aim right, but draw the bow with all your might.<br><cite>Henry David Thoreau</cite>',
    'Your imagination is your preview of life&#8217;s coming attractions.<br><cite>Albert Einstein</cite>',
    'Your time is limited, so don&#8217;t waste it living someone else&#8217;s life.<br><cite>Steve Jobs</cite>'
];

var randomNumber = Math.floor(Math.random()*textArray.length);
randomQuote = textArray[randomNumber];
document.getElementById("random-quote").innerHTML = 'Random motivational quote<br>' + randomQuote;