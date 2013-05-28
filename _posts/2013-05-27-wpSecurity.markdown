---
Title: WordPress Security Protocol
---
# Theme Development
<ul>
	<li>Disallow File Editing from Administration <pre>define('DISALLOW_FILE_EDIT', true);</pre></li>
	<li>Theme Check -> Plugin</li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
# WordPress Installation
<ul>
	<li>Salts</li>
	<li>Database Prefix Change</li>
	<li>Different database user per database</li>
	<li>Don't use "admin"</li>
</ul>
# Just After Installation
<ul>
	<li>.htaccess firewall <a href="http://perishablepress.com/5g-blacklist-2013/">5G Blacklist 2013 - Perishable Press</a></li>
	<li>Checking and Setting file permissions</li>
	<li>Kill PHP execution
		<p>wp-includes, uploads - with an .htaccess in that direcroty
			<pre>
				#Protect [Directory Name]
				<Files *.php>
				Deny from all
				</Files>
			</pre>
		</p>
	</li>
	<li><a href="http://en.blog.wordpress.com/2013/04/05/two-step-authentication/">Two Factor Authentication</a></li>
</ul>
# Continued Use
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
# Backups
<ul>
	<li>Passive Backups</li>
	<li>Backups at crucial points</li>
	<li></li>
</ul>
# Version Control
<ul>
	<li>GIT</li>
</ul>
# Extra Credit
<ul>
	<li>No PHP Write Permission</li>
	<li>Filter access by IP</li>
</ul>
# Plugins
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
# Links
<a href="http://codex.wordpress.org/Hardening_WordPress">Hardening WordPress</a>
<a href="http://ithemes.com/2013/04/15/ongoing-wordpress-attacks-details-and-solutions/">iThemes Ongoing WordPress Attacks Details and Solutions</a>