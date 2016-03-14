<?php


/*
comment:
Z:\home\localhost\www\PHPExcel\Classes\PHPExcel\Cell.php 
//$this->_parent->updateCacheData($this);

Z:\home\localhost\www\PHPExcel\Classes\PHPExcel\CachedObjectStorage\CacheBase.php
//$this->_currentObject->detach();


*/
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
//header("Content-Type: text/html; charset=utf8");
header("Content-Type: application/json"); 
require_once 'PHPExcel/Classes/PHPExcel.php';
require_once 'PHPExcel/Classes/PHPExcel/Worksheet.php';
require_once 'PHPExcel/Classes/PHPExcel/IOFactory.php';	
require_once 'transformer.lib';	
/*	
$ndirct = dirname(__FILE__); 
$nhdl=opendir($ndirct); 
while ($nfile = readdir($nhdl)) 
{ 
if (is_file($nfile)) 
        { 
                $na[] = $nfile; 
        } 
} 
closedir($nhdl); 
if (sizeof($na)!=0) 
{ 
	rsort($na); 
	$vsego=sizeof($na); 
	$mask = "*.xls|*.xlsx"; 
	foreach (glob($mask ) as $filename) { 
	   echo $filename.'<br>'; 
	} 
	print_r($na);
} 
*/
$mask = dirname(__FILE__)."\list_of_alcohol\*.xls"; 
$mask1 = dirname(__FILE__)."\list_of_alcohol\*.xlsx"; 

foreach (glob($mask ) as $filename) { 
	if (file_exists($filename)) {
		$tr = new Transformer($filename, 12);
	}else{
		print_r('Wrong path or file not exist.');
	}
	if ( $tr->definedFile() ) { print_r('File is good'); }else{
		echo $tr->error."\n";
		echo iconv("UTF-8", "cp1251", $tr->error_description);
	}
} 
foreach (glob($mask1 ) as $filename) { 
	if (file_exists($filename)) {
		$tr = new Transformer($filename, 12);
	}else{
		print_r('Wrong path or file not exist.');
	}
	if ( $tr->definedFile() ) { print_r('File is good'); }else{
		echo $tr->error."\n";
		echo iconv("UTF-8", "cp1251", $tr->error_description);
	}
} 
/*
if (file_exists('list_of_alcohol/true_vz.xls')) {
	$tr = new Transformer('list_of_alcohol/true_vz.xls', 12);
}else{
	print_r('Wrong path or file not exist.');
}
if ( $tr->definedFile() ) { print_r('File is good'); }else{
	echo $tr->error."\n";
	echo iconv("UTF-8", "cp1251", $tr->error_description);
}
*/
	
?>