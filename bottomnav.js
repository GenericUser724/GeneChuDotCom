var upfloor;
var downfloor;
var backpage;
var prevpage;
var nextpage;
switch (webpagename){
	case "metaphysicalmain":
		upfloor='none';
		downfloor='warmain.html';
		backpage='main.html';
		prevpage='metaphysicalmain3.html';
		nextpage='metaphysicalmain2.html';
	break;
	case "metaphysicalmain2":
		upfloor='none';
		downfloor='warmain.html';
		backpage='main.html';
		prevpage='metaphysicalmain.html';
		nextpage='metaphysicalmain3.html';
	break;
	case "metaphysicalmain3":
		upfloor='none';
		downfloor='warmain.html';
		backpage='main.html';
		prevpage='metaphysicalmain2.html';
		nextpage='metaphysicalmain.html';
	break;
	case "mdanceoftheshadows":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain.html';
		prevpage='mrainbow1.html';
		nextpage='msoundsofsilence.html';
	break;
	case "msoundsofsilence":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain.html';
		prevpage='mdanceoftheshadows.html';
		nextpage='mgateofmysteries.html';
	break;
	case "mgateofmysteries":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain.html';
		prevpage='msoundsofsilence.html';
		nextpage='mtheriver.html';
	break;
	case "mtheriver":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain2.html';
		prevpage='mgateofmysteries.html';
		nextpage='mfallingangel.html';
	break;
	case "mfallingangel":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain2.html';
		prevpage='mtheriver.html';
		nextpage='mrainbow3.html';
	break;
	case "mrainbow3":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain3.html';
		prevpage='mfallingangel.html';
		nextpage='mrainbow2.html';
	break;
	case "mrainbow2":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain3.html';
		prevpage='mrainbow3.html';
		nextpage='mrainbow1.html';
	break;
	case "mrainbow1":
		upfloor='none';
		downfloor='warmain.html';
		backpage='metaphysicalmain3.html';
		prevpage='mrainbow2.html';
		nextpage='mdanceoftheshadows.html';
	break;
	case "warmain":
		upfloor='metaphysicalmain.html';
		downfloor='fliesmain.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "wdesolation":
		upfloor='metaphysicalmain.html';
		downfloor='fliesmain.html';
		backpage='warmain.html';
		prevpage='wcageofeternity.html';
		nextpage='wcaptivity.html';
	break;
	case "wcaptivity":
		upfloor='metaphysicalmain.html';
		downfloor='fliesmain.html';
		backpage='warmain.html';
		prevpage='wdesolation.html';
		nextpage='wcageofeternity.html';
	break;
	case "wcageofeternity":
		upfloor='metaphysicalmain.html';
		downfloor='fliesmain.html';
		backpage='warmain.html';
		prevpage='wcaptivity.html';
		nextpage='wdesolation.html';
	break;
	case "fliesmain":
		upfloor='warmain.html';
		downfloor='spidermain.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "f13":
		upfloor='warmain.html';
		downfloor='spidermain.html';
		backpage='fliesmain.html';
		prevpage='none';
		nextpage='none';
	break;
	case "spidermain":
		upfloor='fliesmain.html';
		downfloor='antmain.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "spidermain":
		upfloor='fliesmain.html';
		downfloor='antmain.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "s4":
		upfloor='fliesmain.html';
		downfloor='antmain.html';
		backpage='spidermain.html';
		prevpage='s1morningdew.html';
		nextpage='s3afternoonhustle.html';
	break;
	case "s3":
		upfloor='fliesmain.html';
		downfloor='antmain.html';
		backpage='spidermain.html';
		prevpage='s4eveningchill.html';
		nextpage='s2middaywrestle.html';
	break;
	case "s2":
		upfloor='fliesmain.html';
		downfloor='antmain.html';
		backpage='spidermain.html';
		prevpage='s3afternoonhustle.html';
		nextpage='s1morningdew.html';
	break;
	case "s1":
		upfloor='fliesmain.html';
		downfloor='antmain.html';
		backpage='spidermain.html';
		prevpage='s2middaywrestle.html';
		nextpage='s4eveningchill.html';
	break;
	case "antmain":
		upfloor='spidermain.html';
		downfloor='artist.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "a6":
		upfloor='spidermain.html';
		downfloor='artist.html';
		backpage='antmain.html';
		prevpage='a5victors.html';
		nextpage='a5victors.html';
	break;
	case "a5":
		upfloor='spidermain.html';
		downfloor='artist.html';
		backpage='antmain.html';
		prevpage='a6victorsvanquished.html';
		nextpage='a6victorsvanquished.html';
	break;
	case "artist":
		upfloor='antmain.html';
		downfloor='printtech.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "printtech":
		upfloor='artist.html';
		downfloor='review.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "review":
		upfloor='printtech.html';
		downfloor='contact.html';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	case "contact":
		upfloor='review.html';
		downfloor='none';
		backpage='main.html';
		prevpage='none';
		nextpage='none';
	break;
	default:
		upfloor='none';
		downfloor='none';
		backpage='main.html';
		prevpage='none';
		nextpage='none';

	break;
}


document.write('<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" height=\"120\">');
document.write('<tr height=\"41\"><td></td><td></td></tr>');
document.write('<tr height=\"79\">');
document.write('	<td align=\"left\" valign=\"bottom\">');
document.write('		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"280\" height=\"79\">');
document.write('		<tr height=\"79\">');

if (backpage!="main.html")
{
document.write('			<td width=\"90\" height=\"79\"><a href=\"' + backpage + '\"><img src=\"layoutimages/bottomnavbackexhall.gif\" width=\"90\" height=\"79\" border=\"0\"></a></td>');
}
else
{
document.write('			<td width=\"90\" height=\"79\"><a href=\"' + backpage + '\"><img src=\"layoutimages/bottomnavbackgaldir.gif\" width=\"90\" height=\"79\" border=\"0\"></a></td>');
}

document.write('			<td height=\"79\" width=\"90\">');
document.write('				<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"68\">');
document.write('				<tr height=\"40\">');

if (upfloor=="none")
{document.write('					<td width=\"90\" height=\"40\"><img src=\"layoutimages/bottomnavupflrdis.gif\" width=\"90\" height=\"40\" border=\"0\"></td>');}
else
{
document.write('					<td width=\"90\" height=\"40\"><a href=\"' + upfloor + ' \"><img src=\"layoutimages/bottomnavupflr.gif\" width=\"90\" height=\"40\" border=\"0\"></a></td>');
}

document.write('				</tr>');
document.write('				<tr height=\"39\">');

if (downfloor!="none")
{
document.write('					<td width=\"90\" height=\"39\"><a href=\"' + downfloor + ' \"><img src=\"layoutimages/bottomnavdownflr.gif\" width=\"90\" height=\"39\" border=\"0\"></a></td>');}
else
{
document.write('					<td width=\"90\" height=\"39\"><img src=\"layoutimages/bottomnavdownflrdis.gif\" width=\"90\" height=\"39\" border=\"0\"></td>');
}

document.write('				</tr>');
document.write('				</table>');
document.write('			</td>');
document.write('			<td height=\"79\"><img src=\"layoutimages/bottomnavshadow.gif\" width=\"100\" height=\"79\" border=\"0\"></td>');
document.write('		</tr>');
document.write('		</table>');
document.write('	</td>');
document.write('	<td align=\"right\" valign=\"bottom\">');
document.write('		<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"120\" height=\"79\">');
document.write('		<tr height=\"40\">');
document.write('			<td width=\"40\" height=\"40\"><img src=\"layoutimages/bottomnavgraysquare.gif\" width=\"40\" height=\"40\" border=\"0\"></td>');
document.write('			<td height=\"40\" width=\"40\"><img src=\"layoutimages/bottomnavgraysquare1.gif\" width=\"40\" height=\"40\" border=\"0\"></td>');
document.write('			<td height=\"40\" width=\"40\"><img src=\"layoutimages/bottomnavgraysquare2.gif\" width=\"40\" height=\"40\" border=\"0\"></td>');
document.write('		</tr>');
document.write('		<tr height=\"39\">');

if (prevpage!="none")
{
document.write('			<td width=\"40\" height=\"39\"><a href=\"' + prevpage + '\"><img src=\"layoutimages/bottomnavprev.gif\" width=\"40\" height=\"39\" border=\"0\"></a></td>');
}
else
{
document.write('			<td width=\"40\" height=\"39\"><img src=\"layoutimages/bottomnavprevdis.gif\" width=\"40\" height=\"39\" border=\"0\"></td>');
}

if (nextpage!="none")
{
document.write('			<td width=\"40\" height=\"39\"><a href=\"' + nextpage + '\"><img src=\"layoutimages/bottomnavnext.gif\" width=\"40\" height=\"39\" border=\"0\"></a></td>');
}
else
{
document.write('			<td width=\"40\" height=\"39\"><img src=\"layoutimages/bottomnavnextdis.gif\" width=\"40\" height=\"39\" border=\"0\"></td>');
}

document.write('			<td width=\"40\" height=\"39\"><img src=\"layoutimages/bottomnavprevnextshadow.gif\" width=\"40\" height=\"39\" border=\"0\"></td>');

document.write('		</tr>');
document.write('		</table>');
document.write('	</td>');
document.write('</tr>');
document.write('</table>');
