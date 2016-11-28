class: center, middle

# Service Worker and <br/> the Appification of the Web

Nolan Lawson

.footnote[.right.muted[Press P for speaker notes]]

???

This is a talk about Service Workers and how they "appify" the web.

Alternative title for my French audience: "Service Workers and web appy-ness." Francophones will get the joke.

---

# Service Workers

???

Now, if you're a web developer, you've probably heard a lot about Service Workers. How they're going to "revolutionize" the
web platform. How they change everything.

--

- They're hot <span class="emoji">&#x0001f525;</span>
- They "move the web forward"

???

So if you know nothing else about Service Workers, what can you conclude? Well, they're certainly 
hot, and they "move the web forward."

But what exactly does "move the web forward" mean?

---

# "Move the web forward"

???

We hear this phrase bandied around a lot, but 
what direction is the web moving in? Why does it need to move at all? Why is Service Worker an important part of that?

Well, to understand what "move the web forward" means, you need to take a look at where the web has been. I'm a firm
believer that history can provide valuable lessons for the future – I know, a controversial opinion an industry where
we throw out our Javascript framework every 2 years! – but in this case it's definitely true.

--

> "History doesn't repeat itself, but it does rhyme."

.footnote[.right[– [Modern proverb](https://en.wikiquote.org/wiki/Talk:History)]]

???

As the proverb goes, "history doesn't repeat itself, but it does rhyme."

---

# 2004: Existential crisis for the web

???

So let's flash back to 2004, which is around the time HTML5 got started, in
one of the earliest efforts to really "push the web forward." What was motivating it?

Well, let's remember the context of the time. IE's market share, including IE4, IE5, and IE6, had peaked at 95%. Firefox and Opera were struggling to get a foothold. The W3C was focused on semantic web and XHTML 2, but not so much on web apps, on so called "rich" web experiences.

--

> "There is a rising threat of single-vendor solutions"

.footnote[.right[– [Original position paper on HTML5 (2004)](https://www.w3.org/2004/04/webapps-cdf-ws/papers/opera.html)]]

???

Against this backdrop, a ragtag group from Mozilla and Opera put forward the first position paper on what would later become HTML5.
Their motivating factor? A "rising threat of single-vendor solutions?"

---

# Rising threats

???

So what were these rising threats?

--

> Many vendors "rushing in to stake their turf":
> * Java (Sun)
> * Flash (Macromedia)
> * XUL (Mozilla)
> * Silverlight (Microsoft)

.footnote[.right[– [Chris Kaminski, Web Standards Project (2004)](http://www.webstandards.org/2004/10/01/the-web-as-platform/)]]

???

Well, as this article from the Web Standards Project says, there were lots of vendors "rushing in to stake their turf"
in the emerging "rich app" market, including Java, Flash, XUL, and Silverlight (then known as Project Avalon).

Ian Hickson, Godfather of HTML5, also said ["we were really scared of Silverlight"](https://youtu.be/xIxDJof7xxQ).

---

# Flash/Silverlight/etc posed a real threat

???

So at the time, technologies like Flash and Silverlight posed a real challenge to the open web.

--

## In many ways, they were just better

???

If you were building rich web applications, then Flash,
Silverlight, and similar technologies were compelling alternatives to the open web, because they had a lot more crucial features that the web lacked.

You can't really blame developers or users for preferring these platforms at the time. It was just a better way
to build good user experiences. People were voting with their feet, against the web.

---

# HTML5 was a response to Flash/Silverlight

???

So in this light, HTML5 can be seen as a response to the challenges to the web posed by Flash and Silverlight.

--
* File upload
* Video
* Clipboard
* Canvas
* SVG
* Animations
* etc.

???

And ultimately this competitive environment was good for the web. 
This is where a lot of features of HTML5 come from. This is why we have file uploads, video, canvas, clipboard, SVG, CSS animations, etc.

Now, this wasn't a matter of just copy-pasting those APIs from Flash or Silverlight and calling it a day. There was hard work here
to make sure these APIs were standardized, and that they didn't sacrifice user security, privacy, and performance for the sake of new features.

But the point is that the web didn't just stand still when it was getting outcompeted. It looked at what native platforms like Silverlight and Flash were doing, 
and made sure it could remain competitive.

---

# HTML5 won!


???

And it worked! Today, Flash and Silverlight are slowly fading away. Java applets are a distant memory. 
HTML5 reigns supreme.

Today, if you want to build a rich desktop application – whether it's an email app, a video-sharing site, or a 3D game – you can
do it today with purely open web technologies. This is an amazing accomplishment.

--

## ...but it might not have.

???

But the web isn't something that just automatically wins. It won because people at browser vendors and
in the larger web community fought to keep it competitive.

It's not a fait accompli that "the web always wins."
The web didn't win through magic, or historical inevitability, or birthright.
It won because it evolved, because it adapted to changing contexts.

---

# A future that could have been

.center[<img class="side-by-side" src="img/flash.png" alt="Best viewed in Flash" height="300" width="256"/><img class="side-by-side" src="img/slight.png" alt="Best viewed in Silverlight" height="300" width="256"/>]

???

We could have very easily ended up in a future where web sites were optimized for Flash, or for Silverlight, or maybe
for both. Maybe the web would have been segregated based on proprietary technologies.

"Designed for Flash." "Works best in Silverlight!" "Java support coming soon." 

You laugh, but in a sense this possible future isn't so far from our present reality.
The web may have defeated Flash and Silverlight, but today we have this:

---

# Today's reality

.center[<img class="side-by-side" src="img/app_store.png" alt="Get it on the App Store" height="130"/><img class="side-by-side" src="img/google_play.png" alt="Get it on Google Play" height="130"/>]

???

"Download on the App Store." "Get it on Google Play." "Windows Phone version coming soon!" "Amazon Fire version coming soon!" 

Today, for many developers, native mobile platforms offer a compelling alternative to the web. The same apps that are primarily
consumed via the web on desktop – social networks, email clients, news readers – are today largely consumed via native apps on mobile.

It turns out the web only really won on desktop. When mobile devices, and their accompanying app ecosystems, started to grow dominant, the web was largely unprepared. HTML5 wasn't enough.

---

# 2010's: a new threat

> "There's a new existential threat... It's not Flash and Silverlight – it's native apps, 
> \[which are\] feeding off the web, and arguably killing the web."

.footnote[.right[– [Bruce Lawson (2016)](https://www.youtube.com/watch?v=YxQUxCsNomM)]]

???

As Bruce Lawson notes, today there's a new existential threat to the web. But this time it's not Flash or Silverlight –
it's native apps, which are feeding off the web, and arguably killing the web.

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

So in a sense, this is where Progressive Web Apps (or PWAs) come in. In the same way
that HTML5 was a response to the challenges presented by Flash and Silverlight, PWAs are a response to native mobile apps.

--

## Like HTML5, a loose collection of new technologies:
* Service Worker
* App Manifest

???

And like HTML5 before it, PWAs are less a single monolithic technology and more a loose collection of APIs defining new
capabilities for the web. The two most important are Service Worker and App Manifests. I'll talk about App Manifest
later, but first let's delve into the most important one, Service Worker. Where does it fit in?

---

# What are native apps so good at?

???

Well to answer that, let's first try to figure out what native apps are so darn good at in the first place? Why are developers
preferring to build for native (at greater cost, since they have to build the same app multiple times!)
rather than building for the web? What do they get that the web isn't offering?

--

* Offline
* Push notifications
* Background sync

???

Well, there are lots of reasons, but here are a handful.
Offline support, push notifications, background sync.
Incidentally these are all things that Service Worker brings.

---

# Service Worker 101

???

So what is a Service Worker exactly, and how does it accomplish this? Well essentially, a Service Worker is a web worker
that acts as a background proxy between your web site and the server. If you've ever worked with Nginx or Apache reverse
proxies, just imagine you have that, but on the client.

--
* Intercept fetch events, respond with cache (offline)

???

So you can intercept any request – for images, HTML, CSS, JavaScript, anything – and respond with a cached asset, a
network asset, or whatever you want. This allows for very flexible offline scenarios.

--
* Intercept push events (push)

???

You can also register for push events, which allows you to do push notifications or even to push data from the server to
a client-side database.

--
* Intercept sync/periodic events (background sync)

???

There is also an emerging spec called Background Sync, which allows you to wake up the Service Worker when the user
comes online, or on periodic intervals, so that you can send data from the client to the server.

---

# This is not a copy-paste job

???

Now, it's important to note that this isn't just a copy-paste of what native platforms can do. On Android or iOS, apps
can register background services that stay awake whenever your device is on, and can do whatever they want, draining
your battery in the background. This is an enormous power, you wouldn't want every web site you visit to do that.

--
* Only HTTPS

???

You see, Service Worker is designed very intelligently to avoid these kinds of problems.

First off, it's only available on HTTPS, so only trusted sites can use it, and you won't get MiTM'd.

--
* Fire-and-forget

???

Second, it's designed in a "fire and forget" model. The browser is free to terminate and restart
a Service Worker whenever it wants to. You're not supposed to use it for long-running background processes.
You're supposed to respond to fetch, push, and sync events and respond in a timely manner.

--
* Notifications require permission

???

Also, if you want to send notifications, the user has to explicitly grant permission, and can revoke it at any time.

So as with Flash and Silverlight vs HTML5, this isn't a case where the web just copied what the proprietary platforms
were doing and called that a standard. The web looked at the context around it, and borrowed the best bits
while avoiding potential abuse.

---

# Service worker on Microsoft Edge

???

So, I work on the Microsoft Edge team. What is Edge doing to promote Service Worker and the new opportunities it unlocks?

Well, for one thing, we're implementing it! Chrome and Firefox have already shipped their implementation of Service Worker, and we're
set to be the third implementation.

--

* Runs as a Windows service
* Can wake up the browser even when the browser is closed

???

Our implementation isn't out yet, but there are a few interesting directions we're going with Service Worker.

Unlike other vendors, on desktop at least, we're experimenting with running the Service Worker as a Windows background service, meaning
that it would have the ability to wake up the browser from a push notification or sync event, even if the browser is
closed.

--
* May spawn multiple Service Workers at once for performance (under debate)

???

We're also experimenting with the ability to launch multiple Service Workers per origin, so that we can parallelize
the work that the Service Worker is doing. This may not make it into our final design, but it's being discussed by the
vendors. Apple is interested in this model too, but Chrome and Firefox currently only run one Service Worker per origin.

This is a good reason, though, to continue designing your Service Worker in a "fire-and-forget" way. It allows browser
vendors to optimize by terminating, restarting, or running multiple Service Workers as necessary. Don't rely on in-memory
state in your Service Worker!

---

# Progressive web apps in Microsoft Edge


???

We're also working on our own implementation of Progressive Web Apps, as part of our work on Service Worker and the new
App Manifest API.

--

> "The existing PWA implementations still leave web apps as second-class to native apps in many ways. We want to fix that."

.footnote[.right[– ["The Progress of Web Apps", Jacob Rossi (2016)](https://blogs.windows.com/msedgedev/2016/07/08/the-progress-of-web-apps/)]]

???

We're very ambitious in our goals. Here's my coworker Jacob Rossi describing what we want to do with PWAs.

---

# PWAs on Windows: current plan

???

What will this look like? Our current plan looks like this:

--

- Bing crawls web sites
- Sites with a manifest go into the Windows Store
- These webapps are _real_ apps

???

Well, our plan is for Bing to crawl web sites, and automatically convert any sites with a Web App Manifest into a PWA,
which is then ingested into the Windows Store. And these will be true apps – you can Alt-Tab them, you can save it to your desktop,
you can uninstall them, they have their own storage, etc.

So essentially, Progressive Web Apps on Windows will really look and feel like native apps.

---

# Your PWA will be a 

- Windows Desktop app
- Windows Phone app
- XBox app
- HoloLens app

???

And better yet, PWAs will run anywhere that Windows 10 runs. The idea is that you 
build a web site, and suddenly you've got a desktop app, a phone app, an XBox app, and a HoloLens app.

This is just a snapshot of our current plans, but we're on schedule to ship this soon in an upcoming Edge release.

---

# Pushing back

> "Pushing the web forward currently means cramming in more copies of native functionality at breakneck speed — interesting stuff, mind you, but there’s just too much of it."

.footnote[.right[– ["Stop pushing the web forward," Peter-Paul Koch (2015)](http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html)]]

???

Now, I've made some statements about how we're trying to "push the web forward," in particular by catching up with native.

Some folks in the web community bristle at this idea. As PPk says in "stop pushing the web forward," (read quote).

---

# Pushing back (cont.)

> "People seem to be so caught up in the attempt to get native-like functionality that they’re willing to give up the very things that make the web great."

.footnote[.right[– ["Regressive web apps," Jeremy Keith (2016)](https://adactio.com/journal/10708)]]

???

Or as Jeremy Keith says, in a milder rebuke (read quote).

There is a worry here that the web is going to lose some fundamental webbiness by borrowing from other platforms. I think
this concern comes from a good place, and I think it's a good discussion to ahve. But I also think these fears are unfounded,
because it's _always_ been this way with the web.

The web doesn't exist in a vacuum; it has a context. And it has to adapt within that context to remain relevant.

Just as we did with Flash and Silverlight, we'll borrow the best bits from native platforms. But it's not a copy-paste job;
the web will retain its fundamental webbiness.

---

.center[<img src="img/bowie.jpg" alt="David Bowie – four albums" height="600" width="600"/>]

???

In a sense, the web is kind of like David Bowie.

Bowie changed wildly from decade to decade, and he often borrowed or outright stole from the context around him when
he explored new musical genres, themes, and hairstyles. But there's still an identifiable thread of Bowie-ness that you can see throughout his career.

And when he did borrow something from the context around him, be it glam rock or kraut rock, he did it _best_. That's the web.

---

# Keeping the web awesome

???

So I've talked a lot about what browser vendors are doing to bring these new features to the web platform. But you're all
web developers – what can you do to keep it awesome?

--
## What makes the web great?

???

Well, I would say you should just keep in mind what makes the web great, what makes it worth defending.

It's not necessarily the most cutting-edge platform.
It doesn't always have the latest features. It might not boast the most seamless developer environment.

---

# The web is the freest platform

???

But the web is unique in that it's the one platform that isn't owned by any one person or organization. As Anne van Kesteren has said,
[the web is a _public good_](https://annevankesteren.nl/presentations/lucerne).

Anyone in the world can make a web site, and the standards behind web browsers are designed out in the open, unencumbered
by patents, or royalties, or censors, or gatekeepers.

---

background-image: url(img/webworks.png)

???

This is a mural we have in the Edge office, created by the wonderful JThree Concepts. The title is "The web works for everyone."

I really love this vision of the web as a diverse place where all kinds of people with all kinds of browsers and devices can
enjoy this one experience together.

---

# Test on more than one browser!

???

So even if you primarily develop on Chrome, fire up Firefox from time to time! See what your site looks like in Safari.
Give Edge a whirl!

And especially, go grab a cheap Windows laptop or an old Android phone and make sure your site performs well for users who can't afford a 16-core MacBook Pro.

--
## Free IE/Edge VMs: http://edge.ms

???

And quick side note: if you're on a Mac and you want to test IE or Edge, we have free virtual machines.

---

# Use progressive enhancement!

???

Note I'm not asking you to make your web sites look amazing in every browser. Actually I prefer the opposite – use progressive
enhancement!

Features like Service Worker should work great for browsers that support Service Worker, and just okay for
browsers that don't. That's great, because that's what encourages browser vendors to actually build the feature!

If you don't use the feature, browser vendors have no reason to implement it.

---

# Moving the web forward, together

???

So that, to me, this is the true definition of "move the web forward." As browser vendors, we'll work hard
to bring those much-desired features from other platforms that you developers are clamoring for, as we've done with
Flash and Silverlight, and as we're now doing with native mobile platforms.

And you can – and should! – use these awesome new features. All we ask in return
is that you help make sure the web doesn't work for just one browser or just one vendor.

Even as the web becomes more "appy," let's make sure the web remains open, and pluralistic, and that it works for everyone regardless
of their device or browser. Thank you.