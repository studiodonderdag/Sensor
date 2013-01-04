<?php

/*
* Creator: Jeroen Baron 
* Creation-date: 04-01-2013
* Description: Small dirty quick fix proxy script to convert XML/HTML from foto.imedia.han.nl Sensor albums to RSS
* Usage: Call the sensor.php script with the albumURL parameter, where the value should be the uri of the album 
*  	f.e. : http://studiodonderdag.nl/sensor.php?albumURL=http://foto.imedia.han.nl/fotoalbum/public/main.php/v/Sensor/biercantus/
*
*/

// $_GET is used to het the albumURL value
$albumURL = $_GET["albumURL"];
// use the wget shell commando to receive the album XML
$html = shell_exec ("wget -N -O - $albumURL ");
// remove/replace the <a href tags, so only the URL remains
$html = preg_replace('/(\<a.*?href=")(.*?)(">)/is', '$2', $html);
// remove/replace the <img tags, so only the URL remains
$html = preg_replace('/(\<img.*?src=")(.*?)(" \/>)/is', '$2', $html);
// find a regular expresion match for all lines containing http:// and put them in an Array $imageMatches
$imagePattern='/http:\/\/.*/i';
preg_match_all($imagePattern, $html, $imageMatches);

// start generating the RSS output
echo "<?xml version='1.0' encoding='iso-8859-1'?>
<rss version='2.0'>
<channel>
<title>fotoalbum</title>
<link>".$albumURL."</link>
<description>Sensor Albums</description>\n";

// for every image in the array
for ($i = 0; $i < count($imageMatches[0]); $i++) {
	// the &1 operator results in better performance then the modular (%) operator
	if ($i&1) {
		// the odd lines contain the image thumbnail link
		// in the original XML the & is replaced by the HTML entity &amp; 
		// the way it's used in the description it should be a normal link with a & sign
		$description = preg_replace('/&amp;/', '&', $imageMatches[0][$i]);
//		$description = urlencode($imageMatches[0][$i]);
		//$description = $imageMatches[0][$i];
echo "<description>".$description."</description>
</item>\n";
	} else {
		// the even lines contain the large image link
		$title = $imageMatches[0][$i];
echo "<item>
<title>photo</title>
<link>".$title."</link>\n";
	}
}

// last line of RSS feed
echo "</channel></rss>\n";

?>

