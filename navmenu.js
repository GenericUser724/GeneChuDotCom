if (!submenu)
{
	var submenu = "none"
}
document.write('<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"155\" height=\"380\">');

document.write('<tr>');
document.write('<td width=\"20\">');
document.write('</td>');
document.write('<td width=\"135\"><img src=\"layoutimages/navgenechu.gif\" width=\"135\" height=\"40\" border=\"0\"></td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td width=\"20\">');
if (menu=='metaphysical')
{
	document.write('<img src=\"layoutimages/navmetaphysicalmark.gif\" width=\"20\" height=\"40\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"metaphysicalmain.html\"><img src=\"layoutimages/navmetaphysical.gif\" width=\"135\" height=\"40\" border=\"0\"></a>');
if (submenu=='metaphysical1')
{
	document.write('<br>');
	document.write('<a href=\"metaphysicalmain.html\"><img src=\"layoutimages/navmetaphysicalmark2.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain2.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain3.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
}
else if (submenu=='metaphysical2')
{
	document.write('<br>');
	document.write('<a href=\"metaphysicalmain.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain2.html\"><img src=\"layoutimages/navmetaphysicalmark2.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain3.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
}
else if (submenu=='metaphysical3')
{
	document.write('<br>');
	document.write('<a href=\"metaphysicalmain.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain2.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain3.html\"><img src=\"layoutimages/navmetaphysicalmark2.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
}
else
{
	document.write('<br>');
	document.write('<a href=\"metaphysicalmain.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain2.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
	document.write('<a href=\"metaphysicalmain3.html\"><img src=\"layoutimages/navmetaphysicalmark1.gif\" width=\"16\" height=\"7\" border=\"0\"></a>');
}
document.write('</td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td width=\"20\">');
if (menu=='war')
{
	document.write('<img src=\"layoutimages/navwarmark.gif\" width=\"20\" height=\"40\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"warmain.html\"><img src=\"layoutimages/navwar.gif\" width=\"135\" height=\"40\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td width=\"20\">');
if (menu=='flies')
{
	document.write('<img src=\"layoutimages/navfliesmark.gif\" width=\"20\" height=\"40\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"fliesmain.html\"><img src=\"layoutimages/navflies.gif\" width=\"135\" height=\"40\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td width=\"20\">');
if (menu=='spider')
{
	document.write('<img src=\"layoutimages/navspidermark.gif\" width=\"20\" height=\"40\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"spidermain.html\"><img src=\"layoutimages/navspider.gif\" width=\"135\" height=\"40\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td width=\"20\">');
if (menu=='ant')
{
	document.write('<img src=\"layoutimages/navantmark.gif\" width=\"20\" height=\"40\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"antmain.html\"><img src=\"layoutimages/navant.gif\" width=\"135\" height=\"40\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr height=\"20\">');
document.write('<td width=\"20\"></td>');
document.write('<td width=\"135\"><img src=\"layoutimages/navarchives.gif\" width=\"135\" height=\"20\" border=\"0\"></td>');
document.write('</tr>');


document.write('<tr height=\"20\">');
document.write('<td width=\"20\">');
if (menu=='artist')
{
	document.write('<img src=\"layoutimages/navdash.gif\" width=\"20\" height=\"20\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"artist.html\"><img src=\"layoutimages/navartist.gif\" width=\"135\" height=\"20\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr height=\"20\">');
document.write('<td width=\"20\">');
if (menu=='printtech')
{
	document.write('<img src=\"layoutimages/navdash.gif\" width=\"20\" height=\"20\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"printtech.html\"><img src=\"layoutimages/navprinttech.gif\" width=\"135\" height=\"20\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr height=\"20\">');
document.write('<td width=\"20\">');
if (menu=='review')
{
	document.write('<img src=\"layoutimages/navdash.gif\" width=\"20\" height=\"20\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"review.html\"><img src=\"layoutimages/navreview.gif\" width=\"135\" height=\"20\" border=\"0\"></a></td>');
document.write('</tr>');

document.write('<tr height=\"20\">');
document.write('<td width=\"20\">');
if (menu=='contact')
{
	document.write('<img src=\"layoutimages/navdash.gif\" width=\"20\" height=\"20\" border=\"0\">');
}
document.write('</td>');
document.write('<td width=\"135\"><a href=\"contact.html\"><img src=\"layoutimages/navcontact.gif\" width=\"135\" height=\"20\" border=\"0\"></a></td>');
document.write('</tr>');



document.write('</table>');
