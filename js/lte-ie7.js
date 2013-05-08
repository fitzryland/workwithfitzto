/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'workwithfitzto-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-list' : '&#xe004;',
			'icon-github' : '&#xe001;',
			'icon-twitter' : '&#xe000;',
			'icon-facebook' : '&#xe002;',
			'icon-mail' : '&#xe008;',
			'icon-feed' : '&#xe007;',
			'icon-dribbble' : '&#xe009;',
			'icon-linkedin' : '&#xe005;',
			'icon-share2' : '&#xf147;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};