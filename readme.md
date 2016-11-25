class: center, middle

# Service Worker and <br/> the Appification of the Web

Nolan Lawson

.footnote[.right.muted[Press P for speaker notes]]

???

This is a talk about Service Worker and how they "appify" the web.

---

# Service Workers

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

Well, to understand what "move the web forward" means, you need to take a look at where the web has been.

---

# 2004: Existential crisis for the web

--

> "There is a rising threat of single-vendor solutions"

.footnote[.right[– [Original position paper on HTML5](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html)]]

???

Let's flash back to 2004, which is around the time HTML5 got started, by some motivated folks at Opera and Mozilla, in
one of the earliest efforts to really "push the web forward." What was motivating them? Well, let's remember what was going
on. IE's market share, including IE4, IE5, and IE6, had peaked at 95%. Firefox and Opera were struggling to get a foothold. The
W3C was focused on semantic web and XHTML 2, not web apps.

Against this backdrop, a ragtag group from Mozilla and Opera put forward the first position paper on what would later become HTML5.
Their motivating factor? A "rising tide of single-vendor solutions?"

---

# Rising threats

--

> "We were really scared of Silverlight."

.footnote[.right[– [Ian Hickson, godfather of HTML5](https://youtu.be/xIxDJof7xxQ)]]

???

So what were these threats to the open web? Ian Hickson, then of Opera, says very bluntly that they were scared Silverlight
would offer a better experience than the web and eventually overtake it.

---

# Rising threats (cont.)

> "Rushing in to stake their turf in the emerging 'rich app' market: Java (Sun), Flash (Macromedia), XUL (Mozilla), Silverlight/Avalon (Microsoft)"

.footnote[.right[– ["The Web as Platform", Chris Kaminski 2004](http://www.webstandards.org/2004/10/01/the-web-as-platform/)]]

???

But to be fair, even though Microsoft was the 800-pound gorilla in the room, plenty of others wanted to get in on the emerging
web app landscape. An article from 2004 notes Java, Flash, XUL, and Silverlight (then known as "project Avalon") were the primary
targets for the recently-established WHATWG (Web Hypertext Application Technology Working Group).

So this is where the inspiration for HTML5 comes from. This is why we have file uploads, CSS animations, SVG, copy-paste, video, etc. The web looked at what native plugins like Silverlight and Flash were doing, and made sure that the open web could be competitive.

Now flash forward to the 2010's, and the web has a new existential thread: native mobile platforms. Bruce Lawson made this point in a talk on progressive web apps, where he says that in the same way that HTML5 was a response to Flash and Silverlight, Progressive Web Apps (and related technologies like Service Worker) can be thought of as a response to native mobile apps.

Some people bristle at this idea. "The web shouldn't just try to imitate native." "Stop moving the web forward."

They worry that the web is going to lose some fundamental webbiness by borrowing from other platforms. But it's always been this way.

It's easy to take the web for granted. But the web doesn't exist in a vacuum; it has a context. And it has to adapt within that context to remain relevant.

The web is like David Bowie. Yes, it changes from decade to decade. Yes, maybe it didn't always invent every wave that it caught. But Bowie is still identifiable from year to year. And when he does borrow something, he does it *best*. That's the web.

But this doesn't happen by magic. When the web was challenged by Flash and Silverlight, it could have lost. We might have ended up in a future where every web site says, "Designed for Macromedia Flash." Or "Designed for Flash or Silverlight. Java support coming soon!" You laugh, but this could have happened.

In fact, this is how native apps look today. "Get it on the App Store." "Android version coming soon!" Windows Phone, Firefox OS, Blackberry, Amazon Fire... meh?

Or how about this? "Read this Article on Apple News." "Available on Facebook Instant Articles." Plenty of content is only on Snapchat, Vine, Instagram, etc. These are native-only content distribution platforms that challenge the web. If the web doesn't take stock of what they're doing right, it could lose relevance.

OK, so how is service worker addressing this? Well, let's look at some of the stuff that native apps are particularly good at, compared to web sites.

- Offline
- Push notifications
- Background sync
- Multithreading

Hm, and interestingly, Service Worker addresses all four of these! That's quite the hat trick.
