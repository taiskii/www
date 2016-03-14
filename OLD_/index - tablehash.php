<?
	echo '<pre>';
	$file = file_get_contents ('licence-client-ACTIVE.txt');	
	$pattern = '/(.*?)\n/'; 
	preg_match_all($pattern, $file, $matches); 
	$f = fopen("tablehash.txt", "w");	
	foreach ($matches[1] as $mail){		
		$mail = trim($mail);
		$Sole = "HASNMREJCUX1+LOD~LD!LC65#$%";
		$md5mail = md5(Sole.'+'.$mail);
		fwrite($f, $mail." - ".$md5mail."\n");
		//print_r($mail." - ".$md5mail."\n");
	}	
	fclose($f);
?>