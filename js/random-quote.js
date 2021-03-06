var textArray = [
    '&quot;A year from now you may wish you had started today.&quot;<br><cite>Karen Lamb</cite>',
    '&quot;Action is the foundational key to all success.&quot;<br><cite>Pablo Picasso</cite>',
    '&quot;All our dreams can come true–if we have the courage to pursue them.&quot;<br><cite>Walt Disney</cite>',
    '&quot;Always be a first-rate version of yourself, instead of a second-rate version of somebody else.&quot;<br><cite>Judy Garland</cite>',
    '&quot;An obstacle is often a stepping stone.&quot;<br><cite>William Prescott</cite>',
    '&quot;Build your own dreams, or someone else will hire you to build theirs.&quot;<br><cite>Farrah Grayrogers</cite>',
    '&quot;Challenge yourself with something you know you could never do, and what you&#8217;ll find is that you can overcome anything.&quot;<br><cite>Unknownroosevelt</cite>',
    '&quot;Challenges are what make life interesting and overcoming them is what makes life meaningful.&quot;<br><cite>Joshua J. Marine</cite>',
    '&quot;Champions keep playing until they get it right.&quot;<br><cite>Billie Jean King</cite>',
    '&quot;Change your thoughts and you change your world.&quot;<br><cite>Norman Vincent Peale</cite>',
    '&quot;Conformity is the jailer of freedom and the enemy of growth.&quot;<br><cite>John F. Kennedy</cite>',
    '&quot;Do what you love and the money will follow.&quot;<br><cite>Marsha Sinetar</cite>',
    '&quot;Don&#8217;t be pushed by your problems. Be led by your dreams.&quot;<br><cite>Ralph Waldo Emerson</cite>',
    '&quot;Don&#8217;t count the days, make the days count.&quot;<br><cite>Muhammad Ali</cite>',
    '&quot;Don&#8217;t wait. The time will never be just right.&quot;<br><cite>Napoleon Hilleinstein</cite>',
    '&quot;Don&#8217;t wish it were easier, wish you were better.&quot;<br><cite>Jim Rohn</cite>',
    '&quot;Don&#8217;t worry about failures, worry about the chances you miss when you don&#8217;t even try.&quot;<br><cite>Jack Canfield</cite>',
    '&quot;Dream big and dare to fail.&quot;<br><cite>Norman Vaughan</cite>',
    '&quot;Either write something worth reading or do something worth writing.&quot;<br><cite>Benjamin Franklin</cite>',
    '&quot;Either you run the day, or the day runs you.&quot;<br><cite>Jim Rohn</cite>',
    '&quot;Even if you fall on your face, you&#8217;re still moving forward.&quot;<br><cite>Victor Kiam</cite>',
    '&quot;Even if you&#8217;re on the right track, you&#8217;ll get run over if you just sit there.&quot;<br><cite>Will Rogers</cite>',
    '&quot;Every man dies. Not every man really lives.&quot;<br><cite>William Wallace</cite>',
    '&quot;Every strike brings me closer to the next home run.&quot;<br><cite>Babe Ruth</cite>',
    '&quot;Everything has beauty, but not everyone can see.&quot;<br><cite>Confuciusvaynerchuk</cite>',
    '&quot;Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.&quot;<br><cite>Booker T. Washington</cite>',
    '&quot;Freedom is not the absence of commitments, but the ability to choose yours.&quot;<br><cite>Paulo Coelho</cite>',
    '&quot;Happiness cannot be traveled to, owned, earned, or worn. It is the spiritual experience of living every minute with love, grace & gratitude.&quot;<br><cite>Denis Waitley</cite>',
    '&quot;Happiness is not something readymade. It comes from your own actions.&quot;<br><cite>Dalai Lama</cite>',
    '&quot;I am thankful for all of those who said NO to me. Its because of them I&#8217;m doing it myself.&quot;<br><cite>Albert Einstein</cite>',
    '&quot;I am tomorrow, or some future day, what I establish today. I am today what I established yesterday or some previous day.&quot;<br><cite>James Joyce</cite>',
    '&quot;I didn&#8217;t fail the test. I just found 100 ways to do it wrong.&quot;<br><cite>Benjamin Franklin</cite>',
    '&quot;I don&#8217;t regret the things I&#8217;ve done, I regret the things I didn&#8217;t do&quot;<br><cite>Lucas ( Rory Cochrane, Empire Records)</cite>',
    '&quot;I don&#8217;t regret the things I&#8217;ve done, I regret the things I didn&#8217;t do when I had the chance.&quot;<br><cite>Unknown</cite>',
    '&quot;I will go anywhere as long as it is forward.&quot;<br><cite>David Livingston</cite>',
    '&quot;I would rather die of passion than of boredom.&quot;<br><cite>Vincent van Gogh</cite>',
    '&quot;If the wind will not serve, take to the oars.&quot;<br><cite>Latin Proverb</cite>',
    '&quot;If there is no struggle, there is no progress.&quot;<br><cite>Frederick Douglass</cite>',
    '&quot;If you aren&#8217;t going all the way, why go at all?&quot;<br><cite>Joe Namath</cite>',
    '&quot;If you can dream it, you can achieve it.&quot;<br><cite>Zig Ziglar</cite>',
    '&quot;If you can&#8217;t outplay them, outwork them.&quot;<br><cite>Ben Hogangerrit</cite>',
    '&quot;If you cannot do great things, do small things in a great way.&quot;<br><cite>Napoleon Hill</cite>',
    '&quot;If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.&quot;<br><cite>Henry David Thoreau</cite>',
    '&quot;If you&#8217;re offered a seat on a rocket ship, don&#8217;t ask what seat! Just get on.&quot;<br><cite>Sheryl Sandberg</cite>',
    '&quot;In three words I can sum up everything I&#8217;ve learned about life: It goes on.&quot;<br><cite>Robert Frost</cite>',
    '&quot;It does not matter how slowly you go as long as you do not stop.&quot;<br><cite>Confucius</cite>',
    '&quot;It is never too late to be what you might have been.&quot;<br><cite>George Eliot</cite>',
    '&quot;It is never too late to be what you might have been.&quot;<br><cite>George Eliot</cite>',
    '&quot;It wasn&#8217;t raining when Noah built the ark.&quot;<br><cite>Howard Ruff</cite>',
    '&quot;It&#8217;s time to start living the life you&#8217;ve imagined&quot;<br><cite>Henry James</cite>',
    '&quot;Just keep going. Everybody gets better if they keep at it.&quot;<br><cite>Ted Williamsjobs</cite>',
    '&quot;Just know, when you truly want success, you&#8217;ll never give up on it. No matter how bad the situation may get.&quot;<br><cite>Unknown</cite>',
    '&quot;Keep your face to the sunshine and you can never see the shadow.&quot;<br><cite>Helen Keller</cite>',
    '&quot;Life is what happens to you while you&#8217;re busy making other plans.&quot;<br><cite>John Lennon</cite>',
    '&quot;Life is what we make it, always has been, always will be.&quot;<br><cite>Grandma Moses</cite>',
    '&quot;Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.&quot;<br><cite>Jamie Paolinetti</cite>',
    '&quot;Make each day your masterpiece.&quot;<br><cite>John Wooden</cite>',
    '&quot;Never give up on something that you can&#8217;t go a day without thinking about.&quot;<br><cite>Unknown</cite>',
    '&quot;Never let your memories be greater than your dreams.&quot;<br><cite>Doug Ivester</cite>',
    '&quot;Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don&#8217;t have a plan.&quot;<br><cite>Larry Winget</cite>',
    '&quot;Nothing important was ever achieved without someone taking a chance.&quot;<br><cite>H. Jackson Brown, Jr</cite>',
    '&quot;Obsessed is just a word the lazy use to describe the dedicated.&quot;<br><cite>Russell Warren</cite>',
    '&quot;Only those who will risk going too far can possibly find out how far one can go.&quot;<br><cite>T.S. Eliot</cite>',
    '&quot;Someday is not a day of the week.&quot;<br><cite>Denise Brennan-Nelson</cite>',
    '&quot;Success is going from failure to failure without losing your enthusiasm.&quot;<br><cite>Winston Churchill</cite>',
    '&quot;The aim of an argument or discussion should not be victory, but progress.&quot;<br><cite>Joseph Joubert</cite>',
    '&quot;The best dreams happen when you&#8217;re awake.&quot;<br><cite>Cherie Gilderbloom</cite>',
    '&quot;The best revenge is massive success.&quot;<br><cite>Frank Sinatra</cite>',
    '&quot;The best way out is always through.&quot;<br><cite>Robert Frost</cite>',
    '&quot;The best way to predict the future is to invent it.&quot;<br><cite>Alan Kay</cite>',
    '&quot;The creation of a thousand forests is in one acorn.&quot;<br><cite>Ralph Waldo Emerson</cite>',
    '&quot;The difference between ordinary and extraordinary is that little extra.&quot;<br><cite>Jimmy Johnson</cite>',
    '&quot;The dreamers are the saviors of the world.&quot;<br><cite>James Allen</cite>',
    '&quot;The greatest discovery of my generation is that a human being can alter his life by altering the attitudes of his mind.&quot;<br><cite>William James</cite>',
    '&quot;The harder I work, the luckier I get.&quot;<br><cite>Gary Player</cite>',
    '&quot;The journey of a thousand miles begins with one step.&quot;<br><cite>Lao Tzu</cite>',
    '&quot;The more I want to get something done, the less I call it work.&quot;<br><cite>Richard Bach</cite>',
    '&quot;The only way to do great work is to love what you do.&quot;<br><cite>Steve Jobs</cite>',
    '&quot;The purpose of our lives is to be happy.&quot;<br><cite>Dalai Lamacliff</cite>',
    '&quot;There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.&quot;<br><cite>Denis Waitley</cite>',
    '&quot;There is only one way to avoid criticism: do nothing, say nothing, and be nothing.&quot;<br><cite>Aristotle</cite>',
    '&quot;Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.&quot;<br><cite>Carl Bard</cite>',
    '&quot;To live is the rarest thing in the world. Most people exist, that is all.&quot;<br><cite>Oscar Wilde</cite>',
    '&quot;Too many of us are not living our dreams because we are living our fears.&quot;<br><cite>Les Brown</cite>',
    '&quot;Tough times never last, but tough people do.&quot;<br><cite>Dr. Robert Schullerscher</cite>',
    '&quot;We are what we repeatedly do. Excellence, then, is not an act, but a habit.&quot;<br><cite>Aristotle</cite>',
    '&quot;What lies behind us and what lies before us are tiny matters compared to what lies within us.&quot;<br><cite>Henry S. Haskins</cite>',
    '&quot;What we fear doing most is usually what we most need to do.&quot;<br><cite>Tim Ferriss</cite>',
    '&quot;What you do speaks so loudly that I cannot hear what you say.&quot;<br><cite>Ralph Waldo Emerson</cite>',
    '&quot;When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.&quot;<br><cite>Henry Ford</cite>',
    '&quot;When I let go of what I am, I become what I might be.&quot;<br><cite>Lao Tzu</cite>',
    '&quot;When you feel like giving up, remember why you held on for so long in the first place.&quot;<br><cite>Unknown</cite>',
    '&quot;Winning isn&#8217;t everything, but wanting to win is.&quot;<br><cite>Vince Lombardi</cite>',
    '&quot;You make a living by what you get; you make a life by what you give.&quot;<br><cite>Winston Churchill</cite>',
    '&quot;You may be disappointed if you fail, but you are doomed if you don&#8217;t try.&quot;<br><cite>Beverly Sills</cite>',
    '&quot;You must be the change you wish to see in the world.&quot;<br><cite>Gandhi</cite>',
    '&quot;You must not only aim right, but draw the bow with all your might.&quot;<br><cite>Henry David Thoreau</cite>',
    '&quot;Your imagination is your preview of life&#8217;s coming attractions.&quot;<br><cite>Albert Einstein</cite>',
    '&quot;Your time is limited, so don&#8217;t waste it living someone else&#8217;s life.&quot;<br><cite>Steve Jobs</cite>'
];

$(document).ready(function() {
    var randomNumber = Math.floor(Math.random()*textArray.length);
    var randomQuote = textArray[randomNumber];
   $('#random-quote').html('Random motivational quote:<br><br>' + randomQuote);
});

$('#random-quote').click(function() {
    randomNumber = Math.floor(Math.random()*textArray.length);
    randomQuote = textArray[randomNumber];
    $('#random-quote').html('Random motivational quote:<br><br>' + randomQuote);
});