<?

header('Content-Type: text/html; charset=utf-8');
include "simple_html_dom.php";
require_once 'PHPExcel/Classes/PHPExcel.php';
require_once 'PHPExcel/Classes/PHPExcel/Worksheet.php';
require_once 'PHPExcel/Classes/PHPExcel/IOFactory.php';	
echo "<pre>";

$objReader = PHPExcel_IOFactory::createReader('Excel5');
$objPHPExcelReader = $objReader->load('info.xls');
$objPHPExcelReader->setActiveSheetIndex(0);


//$objReader->getCellByColumnAndRow($column, $tmp_row)->setValue();
$k = 1;

for ($j=1; $j<=42; $j++){ //129
	$strCookie = 'PHPSESSID=lk5tu0c74otttpkkf6fucdmpe6; path=/';      // rqt8es8bfomlnghq0nfu2fnof1   -  вот это взять из браузера
	$curl_handle = curl_init('http://www.fsrar.ru/licens/reestr?region=04&address=%D0%93%D0%BE%D1%80%D0%BD%D0%BE-%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA&lictype=799&page='.$j);
	//http://www.fsrar.ru/licens/reestr?region=01&address=%D0%BC%D0%B0%D0%B9%D0%BA%D0%BE%D0%BF&lictype=799&page=129
	curl_setopt ($curl_handle, CURLOPT_VERBOSE, true);
	curl_setopt( $curl_handle, CURLOPT_COOKIE, $strCookie );
	curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
	$res = curl_exec($curl_handle);
	curl_close($curl_handle);

	//print_r($res);
	$patern = "/table(.*)table/";
	preg_match_all($patern,$res,$out);
	$str = $out[0][0];
	$patern = "/<td>(.*?)<\/td>/";
	preg_match_all($patern,$res,$out);
	$arr_td = $out[1];
	//print_r($arr_td);exit;
	$m = 1;
	for ($i = 0; $i < 80; $i++){		
		if ((($i == 0)&&($j<>1) )||($i == 20)||($i == 40)||($i == 60) ) {$k++;$m=1;} // new str
		$objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($m, $k)->setValue( $arr_td [$i] );
		$m++;
	}
	$objPHPExcelReader->getSheet(0)->getCellByColumnAndRow(0, $k)->setValue( $j );
	$m=1;
	//echo "string #".$j."\n";
	//print_r($arr_td);
	sleep (1);
	$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcelReader, 'Excel5');														
	$objWriter->save('info.xls');
}

echo "happy end!";
?>
