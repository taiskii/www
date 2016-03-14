<?

header('Content-Type: text/html; charset=utf-8');
include "simple_html_dom.php";
require_once 'PHPExcel/Classes/PHPExcel.php';
require_once 'PHPExcel/Classes/PHPExcel/Worksheet.php';
require_once 'PHPExcel/Classes/PHPExcel/IOFactory.php';	
echo "<pre>";




//$objReader->getCellByColumnAndRow($column, $tmp_row)->setValue();
//$k = 1;
$objReader = PHPExcel_IOFactory::createReader('Excel5');
	$objPHPExcelReader = $objReader->load('info.xls');
	$objPHPExcelReader->setActiveSheetIndex(0);
for ($j=1; $j<=3; $j++){ //2845
	
	$strCookie = 'PHPSESSID=1vgtkig96trn754dhvqtptrcm2; path=/';      // rqt8es8bfomlnghq0nfu2fnof1   -  вот это взять из браузера
	//$curl_handle = curl_init('http://www.fsrar.ru/licens/reestr?region=61&address=&lictype=799&page='.$j);
	$curl_handle = curl_init('http://www.fsrar.ru/frap/frap?regnum=&zaivitel=&name_prod=%D0%BD%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8&page='.$j);
	curl_setopt ($curl_handle, CURLOPT_VERBOSE, true);
	curl_setopt( $curl_handle, CURLOPT_COOKIE, $strCookie );
	curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, true);
	$res = curl_exec($curl_handle);
	curl_close($curl_handle);

	
	$patern = "/<table border=\"1\" cellspacing=\"0\" cellpadding=\"1\">(.*?)<\/table>/s";
	preg_match_all($patern,$res,$out);		
	$str = $out[1][0];
	
	$patern = "/<tr>(.*?)<tr>/s";
	preg_match_all($patern,$str,$out);
	$data = $out[1];
	$patern = "/<td>(.*?)<\/td>/s";
	$patern1 = "/<td\s><b>(.*?)<\/b><\/td>/s";
	$k = 7*($j-1)+1;
	for ($i = 0; $i <= 27; $i++){		
		if ($i == 27){
			$patterns = "/<a href=\"\/frap/";			
			$replacements = "www.fsrar.ru/frap";			
			$data[$i] = preg_replace($patterns, $replacements, $data[$i] );
			$patterns = "/\">.*?<\/a>/";			
			$replacements = "";			
			$data[$i] = preg_replace($patterns, $replacements, $data[$i] );
		}
		
		
		preg_match_all($patern,$data[$i],$out);
		preg_match_all($patern1,$data[$i],$out1);		
		$article = $out1[1][0];
		$data_table = $out[1];
		$objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($i, 1)->setValue( $article );
		if($j == 1){$k = 2;}else{ $k = 7*($j-1)+1;}
		foreach ($data_table as $data_tab){
			$objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($i, $k)->setValue( $data_tab );
			$k++;
		}
		
	}
	
	
	//$objPHPExcelReader->getSheet(0)->getCellByColumnAndRow(0, $k)->setValue( $j );
	//$m=1;
	//echo "string #".$j."\n";
	//print_r($arr_td);
	
	$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcelReader, 'Excel5');														
	$objWriter->save('info.xls');
	sleep (1);
}

echo "happy end!";
?>
