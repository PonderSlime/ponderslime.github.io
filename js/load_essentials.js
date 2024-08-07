document.getElementById('navbar').innerHTML =
    "<a href='home'>Home</a><a href='#news'>News</a><a href='#contact'>Contact</a>"

document.getElementById('myFooter').innerHTML =
	"<div class='container'><div class='d-flex'><a href='https://ponderslime.github.io' class='cagov-logo'>"
    + "<span class='sr-only'>PonderSlime.Github.io</span><span class='ca-gov-logo-svg'></span></a><ul class='footer-links'><li><a href='/conditions-of-use.html'>Conditions of use</a></li><li><a href='/privacy-policy.html'>Privacy policy</a></li><li><a href='/website-accessibility-certification.html'>Website accessibility certification</a></li><li><a href='/sitemap.html'>Sitemap</a></li></ul>"
    + "<ul class='socialsharer-container'><li><a href='https://github.com/ponderslime'><span class='ca-gov-icon-github' aria-hidden='true'></span><span class='sr-only'>GitHub</span></a></li></ul></div>"
    + "</div><!-- Copyright Statement --><div class='copyright'><div class='container text-right'>©<span id='thisyear'><script>document.getElementById('thisyear').appendChild(document.createTextNode(new Date().getFullYear()))</script>2024 </span>PonderSlime</div></div><button class='return-top'><span class='sr-only'>Back to top</span></button>"
    + "</footer><!-- Extra Decorative Content --><div class='decoration-last'>&nbsp;</div>"