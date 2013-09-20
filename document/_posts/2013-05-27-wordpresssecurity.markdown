---
title: WordPress Security
layout: single-document
excerpt: The whole shabang on things to consider for WordPress security.
---

First of all, I am not a security expert. But, anyone that is responsible for pretty much anything on the Internet needs to know a thing or two about security. I hope this document is useful. More importantly please help me improve it so that we can learn together. Feel free to send me more resources, information, etc.

<!-- WordPress security and web security in general is primarily about minimizing the likelihood of being attacked. There is no such thing as perfect security. <a href="http://arstechnica.com/security/2013/09/meet-hidden-lynx-the-most-elite-hacker-crew-youve-never-heard-of/" target="_blank">Hacking for hire</a> is big business. If there is will there is a way. So, the real questions are: How strong is their will? How easy is the way?
 -->

This document is not intended for those looking to store matters of national security or trade secrets. This document is intended for pretty regular WordPress installations. What do you need to know to keep your WordPress site up and running?

<!-- First, what are the real threats to the average WordPress installation? A malicious hacker is interested in information and control. The most common piece of information clients of mine occasionally have to deal with is credit card information. This in information that certainly attracts the interest of attackers and is critical to keep away from attackers. This is a prime area where security needs to be taken seriously. Frequently the most cost effective way to keep credit card information secure is to hire a third party to handle it. There are some great services out there that integrate directly into your website so that the user has a very consistent purchasing experience on your website, but the actual sensitive information never touches your server and goes directly to a very secure third party. So, first step of security: minimize your attackable surface.

http://mashable.com/category/ddos/ -->

### Why Attack?

Attackers are most motivated to steal sensitive information such as credit card numbers. However, by far the greatest threat to the average WordPress installation are bots trolling the Internet looking for websites with weaknesses ready to exploit. For the most part, these bots are looking for low hanging fruit. If your site puts up much of a barrier the bot will move on to look for an easier target.

Why do people make these bots? Maybe the most interesting, coolest, or scariest is to recruit your computer into a botnet. Basically, these attacks do not have interest in making it apparent that they have compromised your machine. They just want to be able to use your server in a Distributed Denial of Service (DDoS) attack. These attackers can bring down much bigger targets by bombarding them with massive amounts of requests coming from a similarly huge number servers like the server that hosts your site.

Another, much less interesting, motivation to attack your WordPress installation is so that they can deface it. Defacement falls into two categories: link injection and complete takeover. Spammers can artificially better their search ranking by injecting links to their site into yours. The more links to their site the more it appears to search engines that their site is legitimate. Some attackers, that honestly must not have much of a life, will break into your site just so that they can replace it with their own page. Either way, link injection or simple defacement, nobody wants links to spam or 'you got p0wn3d!!' plastered across your front page.

<!-- Step One: minimize attack surface.

Whenever possible do not store sensitive information anywhere that is web accessible. When practical, use a third party to store and handle credit card information. Stripe is great for this, because it still allows complete integration with your website so that the user never leaves the site in the purchase flow. -->

<!-- Why would someone want access to your WordPress installation? I break the motivation of malicious hackers down into two categories: steal your information, control your machine. For each of these I will as two questions: How important is it that your website not be compromised? and How motivated are others to getting into it?

Information is king. There is nothing more valuable that information these days. There is big money behind stealing information like trade secrets or matters of national security, but those issues are way out of my depth. With big money comes big motivation. Credit card information is likely the most valuable information that my clients may ask me to deal with. My advice is always to host credit card information with third party service. Stealing credit card information is not quite as big business as corporate espionage but the motivation is still very high, and your risk as a business owner is even higher.

Another example of information security that I have had to deal with is client patient confidentiality. So, what is the assessment of the threat here? Your business is totally dependent upon keeping this information private.


Private
	1. a :  intended for or restricted to the use of a particular person, group, or class <a private park>
	b :  belonging to or concerning an individual person, company, or interest <a private house>
	3. c :  preferring to keep personal affairs to oneself :  valuing privacy highly d :  unsuitable for public use or display
Secret
	1. a :  kept from knowledge or view :  hidden
	b :  marked by the habit of discretion :  closemouthed
	c :  working with hidden aims or methods :  undercover <a secret agent>
	d :  not acknowledged :  unavowed <a secret bride>
	e :  conducted in secret <a secret trial> -->

### What we can do

The first step is to minimize your exposure. Whenever possible do not store sensitive information anywhere that is web accessible. When practical, use a third party to store and handle credit card information. Stripe is great for this, because it still allows complete integration with your website so that the user never leaves the site in the purchase flow.

The next step is to make it harder for intruders to make it into your site. Bellow is a compilation of my research on making WordPress a harder nut to crack.

#### Theme Development
<ul>
	<li>Disallow File Editing from Administration <pre>define('DISALLOW_FILE_EDIT', true);</pre></li>
	<li>Theme Check -> Plugin</li>
</ul>
#### WordPress Installation
<ul>
	<li>Salts</li>
	<li>Database Prefix Change</li>
	<li>Different database user per database</li>
	<li>Don't use "admin"</li>
</ul>
#### Just After Installation
<ul>
	<li>.htaccess firewall <a href="http://perishablepress.com/5g-blacklist-2013/">5G Blacklist 2013 - Perishable Press</a></li>
	<li>Checking and Setting file permissions</li>
	<li>Kill PHP execution
		<p>wp-includes, uploads - with an .htaccess in that direcroty
<!-- 			<pre>
				#Protect [Directory Name]
				<Files *.php>
				Deny from all
				</Files>
			</pre> -->
		</p>
	</li>
	<li><a href="http://en.blog.wordpress.com/2013/04/05/two-step-authentication/">Two Factor Authentication</a></li>
</ul>
#### Continued Use
<ul>
	<li>Again, don't use "admin" etc.</li>
	<li>Strong Passwords</li>
	<li>Minimal Plugins</li>
	<li>Trusted Networks</li>
	<li>HTTPS</li>
	<li>Never Use FTP only SFTP (SSH if you can. More on that in GIT)</li>
	<li>Local Virus Scan</li>
	<li>never share accounts -> accountability</li>
	<li>never give someone higher privileges than they need</li>
</ul>
#### Backups
<ul>
	<li>Passive Backups</li>
	<li>Backups at crucial points</li>
	<li></li>
</ul>
#### Version Control
<ul>
	<li>GIT</li>
</ul>
#### Extra Credit
<ul>
	<li>No PHP Write Permission</li>
	<li>Filter access by IP</li>
</ul>
#### Plugins
<ul>
	<li>http://wordpress.org/plugins/sucuri-scanner/</li>
	<li>http://wordpress.org/plugins/limit-login-attempts/</li>
	<li>http://wordpress.org/plugins/wordfence/</li>
	<li>http://wordpress.org/plugins/theme-check/</li>
	<li>http://wordpress.org/plugins/force-strong-passwords/</li>
	<li></li>
	<li></li>
	<li></li>
</ul>
#### Links
<a href="http://codex.wordpress.org/Hardening_WordPress">Hardening WordPress</a>
<a href="http://ithemes.com/2013/04/15/ongoing-wordpress-attacks-details-and-solutions/">iThemes Ongoing WordPress Attacks Details and Solutions</a>
http://support.hostgator.com/articles/specialized-help/technical/wordpress/wordpress-login-brute-force-attack
http://blog.sucuri.net/2013/04/mass-wordpress-brute-force-attacks-myth-or-reality.html
http://wpengine.com/2013/05/brad-williams-on-secure-wordpress-development/
http://wpengine.com/2013/04/how-tony-perez-of-sucuri-sets-up-his-own-security/


