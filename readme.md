class: center, middle

# Service Worker and <br/> the Appification of the Web

Nolan Lawson

.footnote[.right.muted[Press P for speaker notes]]

???

This is a talk about Service Worker and how they "appify" the web.

---

# Service Workers

--

- They're hot &#x0001f525;
- They "move the web forward"

???

Now, if you're like me, you've probably heard a lot about Service Workers. How they're going to "revolutionize" the
web platform. How you should "look busy" because they're coming. How they change everything.

So Service Workers are hot, and they "move the web forward."

---

# "Move the web forward"

???

But what exactly does that mean? We hear this phrase bandied around a lot but some things aren't clear: what direction
is the web moving in? Why does it need to move at all? Why is Service Worker an important part of that?

Well, to understand what "move the web forward" means, you need to take a look at where the web has been. I'm a firm
believer that history can provide valuable lessons for the future – I know, a controversial opinion an industry where
we throw out our Javascript framework every 2 years! – but in this case it's definitely true.

---

# Lessons from history

> "History doesn't repeat itself, but it does rhyme."

.footnote[.right[– [Unattributed proverb](https://en.wikiquote.org/wiki/Talk:History)]]

???

Or, in a quote frequently mis-attributed to Mark Twain (actually its origin is unknown).

---

# 2004: Existential crisis for the web

???

Let's flash back to 2004, which is around the time HTML5 got started, in
one of the earliest efforts to really "push the web forward." What was motivating it? Well, let's remember what was going
on at the time. IE's market share, including IE4, IE5, and IE6, had peaked at 95%. Firefox and Opera were struggling to get a foothold. The
W3C was focused on semantic web and XHTML 2, not web apps.

--

> "There is a rising threat of single-vendor solutions"

.footnote[.right[– [Original position paper on HTML5 (2004)](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html)]]

???

Against this backdrop, a ragtag group from Mozilla and Opera put forward the first position paper on what would later become HTML5.
Their motivating factor? A "rising tide of single-vendor solutions?"

---

# Rising threats

--

> "We were really scared of Silverlight."

.footnote[.right[– [Ian Hickson (2008)](https://youtu.be/xIxDJof7xxQ)]]

???

So what were these threats to the open web? Ian Hickson, then of Opera, says very bluntly that they were scared Silverlight
would offer a better experience than the web and eventually overtake it.

---

# Rising threats (cont.)

> Many vendors "rushing in to stake their turf":
> * Java (Sun)
> * Flash (Macromedia)
> * XUL (Mozilla)
> * Silverlight/Avalon (Microsoft)

.footnote[.right[– [Chris Kaminski, Web Standards Project (2004)](http://www.webstandards.org/2004/10/01/the-web-as-platform/)]]

???

But to be fair, even though Microsoft was the 800-pound gorilla in the room, plenty of others wanted to get in on the emerging
web app landscape. An article from 2004 notes Java, Flash, XUL, and Silverlight (then known as "project Avalon") were the primary
competitors for HTML5.

---

# HTML5 won!

???

So this is where the inspiration for HTML5 comes from. This is why we have file uploads, CSS animations, SVG, copy-paste, video, etc. The web looked at what native plugins like Silverlight and Flash were doing, and made sure that the open web could be competitive.

And it worked! Today, Flash and Silverlight are slowly fading away. HTML5 reigns supreme.

---

# 2010's: a new threat

> "There's a new existential threat... It's not Flash and Silverlight – it's native apps, 
> \[which are\] feeding off the web, and arguably killing the web."

.footnote[.right[– [Bruce Lawson (2016)](https://www.youtube.com/watch?v=YxQUxCsNomM)]]

???

Now flash forward to the 2010's, and the web has a new existential thread: native mobile platforms.

---

# Native apps dominate

> "Mobile users spend 18x more time in apps than on the web."

.footnote[.right[– [Luke Wroblewski (2015)](http://www.lukew.com/ff/entry.asp?1954)]]

???

As a share of user attention, native mobile apps are clearly winning. You can argue whether or not this is the right
metric, but it's the reverse of desktop. On desktop, people spend most of their time in web browsers.

---

# PWAs are the new HTML5

???

So as Bruce argues in his talk, this is the context in which PWAs and Service Workers were born. In the same way
that HTML5 was a response to the challenges presented by Flash and Silverlight, PWAs are a response to native mobile apps.

---


# Backlash

> "Pushing the web forward currently means cramming in more copies of native functionality at breakneck speed — interesting stuff, mind you, but there’s just too much of it."

.footnote[.right[– ["Stop pushing the web forward," Peter-Paul Koch (2015)](http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html)]]

???

Some people bristle at this idea. "The web shouldn't just try to imitate native."

They worry that the web is going to lose some fundamental webbiness by borrowing from other platforms. But it's always been this way.

It's easy to take the web for granted. But the web doesn't exist in a vacuum; it has a context. And it has to adapt within that context to remain relevant.

---

.center[<img src="img/bowie.jpg" alt="David Bowie – four albums" height="600" width="600"/>]

???

The web is like David Bowie. Yes, it changes from decade to decade. Yes, maybe it didn't always invent musical genre or hairstyle that he made famous. But Bowie is still identifiable from year to year. And when he does borrow something from the context around him, be it glam rock or kraut rock, he does it *best*. That's the web.

---

.center[<img class="side-by-side" src="img/flash.png" alt="Best viewed in Flash" height="300" width="256"/><img class="side-by-side" src="img/slight.png" alt="Best viewed in Silverlight" height="300" width="256"/>]

???

But this doesn't happen by magic. When the web was challenged by Flash and Silverlight, it could have lost. We might have ended up in a future where every web site says, "Designed for Macromedia Flash." Or "Designed for Flash or Silverlight. Java support coming soon!" You laugh, but this could have happened.

---

.center[<img class="side-by-side" src="img/app_store.png" alt="Get it on the App Store" height="130"/><img class="side-by-side" src="img/google_play.png" alt="Get it on Google Play" height="130"/>]

???

And in fact, this is how native apps look today. "Get it on the App Store." "Android version coming soon!" People are rebuilding the same app over and over again,
for different native platforms, instead of making the web their primary focus.

But you can't really blame web developers, or users. In the end, "the customer is always right." If people are spending more time in native mobile apps than
in mobile web apps, it's because it's offering something they can't get elsewhere. It's because somehow it's worth it to rebuild for multiple proprietary platforms. This is exactly the same situation we were in in 2004, when a lot of folks were concluding that the web wasn't up to snuff, and that if you wanted
to build a really great experience, you needed to look to Flash, Java, or Silverlight.

---

# What are native apps good at?

--

* Offline
* Push notifications
* Background sync
* Multithreading

???

OK, so how is service worker addressing this? Well, let's look at some of the stuff that native apps are particularly good at, compared to web sites.

- Offline
- Push notifications
- Background sync
- Multithreading

Hm, and interestingly, Service Worker addresses all four of these! That's quite the hat trick.
