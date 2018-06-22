# MemoryCashGame
A little HTML5/CSS3/Javascript game made for a class I'm taking on Udacity.

Nothing much to say here to add to what the tin says.  If you stumble accross this and you are itching to tinker with it feel free to do so.  You can use it for whatever you want.  No worries mate!  But you do need a Greensock license if you intend to do more than tinkering.  See #1 below.

I would like it if, when you read my code, you give me some feedback.  What could I have done differently or better?  Even better, fork this and improve it and send it back at me.  That way I can see what you did.

My aim was to create this with mainly pure javascript and not rely on any libraries but what I felt was minimally needed to get the effects I was trying to acheive.  Why?  Well, it is a class.  But also, I am operating on the theory that if I understand the fundamentals and keep sharpening the axe, then later, using a framework like React, or Angular, or Node or Electron, etc. will be easier and I might actually get good at this!  Opinions are welcome.

I added two things that I did not create:

1. I used Greensock for the tweens.  There is a licensing restriction with them so if you do decide to grab this and fork it just understand that you will need to buy a license from them.  It's relatively cheap.
2. Normalize.css

# IMPORTANT:

You should start by opening the index.html file in the browser and simply trying out the game.  Then, when you are bored with that, open the testing.js file.  There you will find further instructions that will help you to evaluate what is going on.

One thing I just discovered, that I have yet to figure out...

I uploaded this to GoDaddy at http://memorycash.fatmunkey.com/ to test it out on the internet instead of just my chrome browser.  It's putting NaN on the page like this -  "Lifetime Earnings= $NaN Stars = NaN" at the bottom of the page.  In chrome on my local machine it shows the text as expected.  I used parseFloat(x), parseInt(x, 10) and toFixed(2), in several places to process the data so it would format correctly on the screen but still allow the needed math in th background.  Like I said I works fine in the browser on my local machine.  I wonder how I would even debug this...beyond trial and error and uploading the file a whole bunch of times.  sigh...maybe someone will have a suggestion. 

All I ever wanted was whirled peas.

Give peas a chance!

And lastly, the only Emporer is the Emporer of Ice Cream!  (tehehe - have fun googling that!)
