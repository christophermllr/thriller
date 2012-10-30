#Thriller Party Entrance

Halloween party: MaKey MaKey + HTML5/JS. Epic party entrance for everyone.

Unfortunately, I didn't take any video of this an action at the party.  A video of the test run without the full sound system is available [here](http://www.youtube.com/watch?v=t4PBBS0RV14&hd=1 "Thriller Party Entrance"): 

MaKey MaKey is connected to the female end of the door handle latch (on the door frame), to the door hinge, and to ground creating a closed circuit.  Until the door is opened, the MaKey MaKey sends the spacebar key continuously.  The app listens for the keyup event and plays the audio.  After the audio finishes playing, a five second timer blocks repeat plays.  HTML5 &lt;progress&gt; element, Webkit Fullscreen API, and ASCII MJ for funzies.