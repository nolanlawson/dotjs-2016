class: center, middle

# Service Worker and <br/> the Appification of the Web

Nolan Lawson

.footnote[.right.muted[Press P for speaker notes]]

???

This is a talk about Service Workers and how they "appify" the web.

I had an alternative title for this talk, which was "the appy-ness of the web." But for a French audience,
"appy-ness" might be too hard to distinguish from "happiness." So let's just stick to "appification," which is
less ambiguous.

---

# Service Workers

???

Now, if you're a web developer, you've probably heard a lot about Service Workers. How they're going to "revolutionize" the
web platform. How they change everything.

--

- They're hot <span class="emoji">&#x0001f525;</span>
- They "move the web forward"

???

So if you know nothing else about Service Workers, you can conclude that they're hot, and they "move the web forward."

But what exactly does that mean? We hear this phrase bandied around a lot, but some things aren't clear.

---

# "Move the web forward"

???

What direction is the web moving in? Why does it need to move at all? Why is Service Worker an important part of that?

Well, to understand what "move the web forward" means, you need to take a look at where the web has been. I'm a firm
believer that history can provide valuable lessons for the future – I know, a controversial opinion an industry where
we throw out our Javascript framework every 2 years! – but in this case it's definitely true.

--

> "History doesn't repeat itself, but it does rhyme."

.footnote[.right[– [Modern proverb](https://en.wikiquote.org/wiki/Talk:History)]]

???

Or, in a quote frequently mis-attributed to Mark Twain, "History doesn't repeat itself, but it does rhyme."

---

# 2004: Existential crisis for the web

???

Let's flash back to 2004, which is around the time HTML5 got started, in
one of the earliest efforts to really "push the web forward." What was motivating it?

Well, let's remember the context of the time. IE's market share, including IE4, IE5, and IE6, had peaked at 95%. Firefox and Opera were struggling to get a foothold. The W3C was focused on semantic web and XHTML 2, but not so much on pushing the envelope on the user experience for web sites. They weren't focused on web apps.

--

> "There is a rising threat of single-vendor solutions"

.footnote[.right[– [Original position paper on HTML5 (2004)](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html)]]

???

Against this backdrop, a ragtag group from Mozilla and Opera put forward the first position paper on what would later become HTML5.
Their motivating factor? A "rising tide of single-vendor solutions?"

---

# Rising threats

???

So what were these rising threats?

--

> "We were really scared of Silverlight."

.footnote[.right[– [Ian Hickson (2008)](https://youtu.be/xIxDJof7xxQ)]]

???

Ian Hickson, then of Opera, says very bluntly that they were scared that Microsoft Silverlight (then known as Project Avalon)
would offer a better experience than the web and eventually overtake it.

---

# Rising threats (cont.)

> Many vendors "rushing in to stake their turf":
> * Java (Sun)
> * Flash (Macromedia)
> * XUL (Mozilla)
> * Silverlight (Microsoft)

.footnote[.right[– [Chris Kaminski, Web Standards Project (2004)](http://www.webstandards.org/2004/10/01/the-web-as-platform/)]]

???

But even though Microsoft was the 800-pound gorilla in the room, plenty of others wanted to get in on the emerging
web app landscape. An article from 2004 notes Java, Flash, and XUL, and Silverlight were the primary competitors for HTML5.

---

# HTML5 was a response to Flash/Silverlight

???

So in this light, HTML5, and the work of the WHAT WG (Web Hypertext Application Technology Working Group) on what would later
become HTML5 can be seen as a response to Flash.

At the time, if you were building rich web applications, then Flash, Java applets,
Silverlight, and similar technologies were compelling alternatives to HTML because there was a lot you couldn't do with
the open web.

You can't really blame developers or users for preferring Flash or Silverlight at the time; it was just a better way
to build good user experiences, so people voted with their feet.

--

* File upload
* Video
* Clipboard
* Canvas
* SVG
* Animations
* etc.

???

This is where a lot of features of HTML5 come from. This is why we have file uploads, SVG, CSS animations
canvas, copy-paste, video, etc. The web looked at what native plugins like Silverlight and Flash were doing, 
and made sure that the open web could be competitive with that.

Otherwise, users would have just voted with their feet, and Flash, Silverlight, and Java would have continued to grow dominant.

---

# HTML5 won!


???

And it worked! Today, Flash and Silverlight are slowly fading away. Java applets are a distant memory. 
HTML5 reigns supreme.

If you want to build a compelling web application, whether it's an email app, a video website, or a 3D game, you can
do it today with purely open web technologies.

--

## ...but it might not have.

???

But the web didn't win by magic. It didn't win through historical inevitability, or birthright.
It won because it evolved, because it adapted to changing contexts.

---

# A future that could have been


.center[<img class="side-by-side" src="img/flash.png" alt="Best viewed in Flash" height="300" width="256"/><img class="side-by-side" src="img/slight.png" alt="Best viewed in Silverlight" height="300" width="256"/>]

???

We could have very easily ended up in a future where web sites were optimized for Flash, or for Silverlight, or maybe
for both, and you needed plugins to get anything done on the web. It could have looked like this.

"Designed for Flash." "Works best in Silverlight!" "Java support coming soon." 

You laugh, but in a sense this dystopian future isn't so far from our present reality.
Because although the web defeated Flash and Silverlight, a new
challenger emerged. Today we have this:

---

.center[<img class="side-by-side" src="img/app_store.png" alt="Get it on the App Store" height="130"/><img class="side-by-side" src="img/google_play.png" alt="Get it on Google Play" height="130"/>]

???

"Get it on the iOS App Store." "Android version coming soon!" 

People are rebuilding the same app over and over again, for different proprietary native platforms,
instead of making the web their primary focus.

This is the new threat to the web today.

---

# 2010's: a new threat

> "There's a new existential threat... It's not Flash and Silverlight – it's native apps, 
> \[which are\] feeding off the web, and arguably killing the web."

.footnote[.right[– [Bruce Lawson (2016)](https://www.youtube.com/watch?v=YxQUxCsNomM)]]

???

As Bruce Lawson says, today there's a new existential threat to the web. But this time it's not Flash, Silverlight, Java, or
similar platforms – it's native apps, which are born of the web, live alongisde the web, and arguably are killing it.

---

# Native apps dominate

> "Mobile users spend 18x more time in apps than on the web."

.footnote[.right[– [Luke Wroblewski (2015)](http://www.lukew.com/ff/entry.asp?1954)]]

???

As a share of user attention, native mobile apps are clearly winning. (Read quote.) You can argue whether or not this is the right
metric, but it's the reverse of desktop. Ask yourself: on desktop, do you use a web browser or a native app for email?
Now what about mobile? For most folks, it's the exact opposite.

---

# Progressive Web Apps: a new hope

???

So in a sense, this is the new context for Progressive Web Apps (PWAs). In the same way
that HTML5 was a response to the challenges presented by Flash and Silverlight, PWAs are a response to native mobile apps.

--

## Like HTML5, a loose collection of new technologies:
* Service Worker
* App Manifest

???

Like HTML5 before it, PWAs are less a single monolithic technology and more a loose collection of APIs defining new
capabilities for the web. The two most important are Service Worker and App Manifests. Let's see how Service Worker
fits into this.

---

# What are native apps so good at?

???

And to answer that, let's try to figure out what native apps are so darn good at in the first place? Why are folks
preferring to build for native rather than building for the web? What do they get that the web isn't offering?

--

* Offline
* Push notifications
* Background sync

???

Offline support, push
 notifications, background sync. Incidentally these are all things that Service Worker brings.

---

# Service Worker 101

* Intercept fetch events, respond with cache (offline)
* Intercept push events (push)
* Intercept sync/periodic events (background sync)

???

So what is a Service Worker exactly, and how does it accomplish this? Well essentially, a Service Worker is a web worker
that acts as a background proxy between your web site and the server. If you've ever worked with Nginx or Apache reverse
proxies, just imagine you have that, but on the client.

So you can intercept any request – for images, HTML, CSS, JavaScript, anything – and respond with a cached asset, a
network asset, or whatever you want.

You can also register for push events, which allows you to do push notifications or even to push data from the server to
a client-side database.

There is also an emerging spec called Background Sync, which allows you to wake up the Service Worker when the user
comes online, so that you can sync data from the client to the server. There is also a "periodic sync" spec that would
allow you to wake up the Service Worker at regular intervals, such as every 30 minutes, or once per day, etc.

---

# This is not a copy-pasta job

???

Now, it's important to note that this isn't just a copy-paste of what native platforms can do. On Android or iOS, apps
can register background services that stay awake whenever your device is on, and can do whatever they want, draining
your battery in the background. You wouldn't want every web site you visit to have those same powers.

--

* Only HTTPS
* Fire-and-forget

???

So Service Worker is designed very intelligently to avoid these kinds of problems. First off, it's only available on HTTPS,
so you won't get MiTM attacked. Second, it's designed in a sort of "fire and forget" way. The browser is free to kill
off a Service Worker whenever it wants to. Unlike a web worker, you're not supposed to have long-running processes
in there; if you do, then they might get unceremoniously terminated. You're suposed to respond to fetch, push, and sync
events and respond in a timely manner.

So like with Flash and Silverlight vs HTML5, this isn't a case where we just copied what the proprietary platforms
were doing and called that a standard. The web took a look at the context around it, and borrowed the best bits
while avoiding potential abuse.

---

# Service worker on Microsoft Edge

???

So, I work on the Microsoft Edge team. What is Edge doing to promote Service Worker and the new opportunities it unlocks?
Well, we're implementing it! Chrome and Firefox have already shipped their implementation of Service Worker, and we're
set to be the fourth implementation. The WebKit team was also in attendance at the most recent face-to-face meeting of
the Service Worker working group, so they've shown interest. They've also implemented the "fetch" API, which is an
important prerequisite for implementing Service Worker.

--

* Runs as a Windows service
* Can wake up the browser even when the browser is closed
* May spawn multiple Service workers at once for performance (under debate)

???

Our implementation isn't out yet, but there are a few interesting directions we're going with Service Worker. Unlike other
vendors, on desktop at least, we're experimenting with running the Service Worker as a Windows background service, meaning
that it would have the ability to wake up the browser from a push notification or sync event, even if the browser was
currently closed.
 
We're also experimenting with the ability to launch multiple Service Workers per origin. This may be an important
optimization for sites whose Service Workers are handling lots of concurrent requests, but it's also not guaranteed
this will make it into the final version.

---

# Progressive web apps in Microsoft Edge


???

We're also working on our own implementation of Progressive Web Apps, as part of our work on Service Worker and the new
App Manifest API.

--

> "The existing PWA implementations still leave web apps as second-class to native apps in many ways. We want to fix that."

.footnote[.right[– ["The Progress of Web Apps", Jacob Rossi (2016)](https://blogs.windows.com/msedgedev/2016/07/08/the-progress-of-web-apps/)]]

???

We're very ambitious in our goals: we want Progressive Web Apps to feel like full-fledged native apps.

---

# PWAs on Windows: current plan

???

What will this look like? Our current plan looks like this:

--

- Bing crawls web sites
- Any sites with a Web App Manifest are ingested into the Windows Store
- Apps in the store are true apps
- Site owners can "claim" their apps or just let them chill

???

(read slide) So essentially, Progressive Web Apps on Windows will really look and feel like native apps. You can Alt-Tab
to switch between apps, you can launch them from the app bar.

---

# PWAs across the Windows ecosystem

- Windows 10 desktop
- Windows 10 phone
- XBox
- HoloLens

???

And better yet, PWAs will run anywhere that Windows 10 runs. You build a web site, and suddenly you've got a desktop app,
a phone app, an XBox app, and a HoloLens app.

We want the web to be a true first-class citizen on all of these systems. Which is why this is what we're really aiming for.

This is just a snapshot of our current plans, but we're on schedule to ship this soon in an upcoming Edge release.

---

# Backlash

> "Pushing the web forward currently means cramming in more copies of native functionality at breakneck speed — interesting stuff, mind you, but there’s just too much of it."

.footnote[.right[– ["Stop pushing the web forward," Peter-Paul Koch (2015)](http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html)]]

???

Now, I've made some statements about how the web platform is trying to catch up with native.

Some folks in the web community bristle at this idea. "The web shouldn't just try to imitate native."

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
