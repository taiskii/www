<?php
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
header("Content-Type: text/html; charset=utf8");
header("Content-Type: application/json"); 
require_once 'PHPExcel/Classes/PHPExcel.php';
require_once 'PHPExcel/Classes/PHPExcel/IOFactory.php';
	
	$php_excel = transformer('list_of_alcohol/alkomax.xls');
	
	
	function transformer($path_to_file){
		$objReader = PHPExcel_IOFactory::createReader('Excel5');
		$objPHPExcelReader = $objReader->load($path_to_file);
		$objPHPExcelReader->setActiveSheetIndex(0);
		$data = $objPHPExcelReader->getSheet(0)->getCell('I18')->getValue();
		if ($data == "6167073575"){
			$bad_flag_goriz = false;
			$bad_flag_vert = false;
			$num_gor = 0;
			$num_ver = 0;
			$objWorksheet = $objPHPExcelReader->getActiveSheet();
			$highestRow = $objWorksheet->getHighestRow(); // e.g. 10
			$highestColumn = $objWorksheet->getHighestColumn(); // e.g 'F'
			$highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn); // e.g. 5
			//test gorizontal sequence 
			$i = 1;
			for ($row = 13; $row <= 13; ++$row) {
				for ($col = 2; $col <= $highestColumnIndex; ++$col) {
					if ($i ==  $objWorksheet->getCellByColumnAndRow($col, $row)->getValue() && ($i <= 16)){
						if ($i<>16) $i++;
						//echo $objWorksheet->getCellByColumnAndRow($col, $row)->getValue(). " i =".$i." col=".$col. "\n";
					}else{
						if (!is_numeric( $objWorksheet->getCellByColumnAndRow($col, $row)->getValue() ) ){
								//print_r("norm_jopa ");
						}else{		
							$num_gor = $col;
							$bad_flag_goriz = true;
							break;
						}
					}
				}
			}
				//test vertical sequence 
			if ($i == 16) {
				//print_r("gorizontal sequence test is done!");
				$i = 1;
				for ($col = 1; $col <= 1; ++$col) {
					for ($row = 1; $row <= $highestRow; ++$row) {
						if ($i ==  $objWorksheet->getCellByColumnAndRow($col, $row)->getValue()){
							$i++;
							//echo $objWorksheet->getCellByColumnAndRow($col, $row)->getValue() ;
						}else{
							if (!is_numeric( $objWorksheet->getCellByColumnAndRow($col, $row)->getValue() ) ){
									//print_r("norm_jopa ");
							}else{ //test for kpp > 1
								if ($objWorksheet->getCellByColumnAndRow($col, $row)->getValue() == 1){
									$i = 2;
								}else{		
									$num_ver = $row;
									$bad_flag_vert = true;
									break;
								}
							}
						}
					}
				}
			}else{
				print_r($i);
				$bad_flag_goriz = true;
			} 
			if ($bad_flag_goriz) {print_r("Wrong gorizontal sequence in ". ($num_gor + 1) ." column!".PHP_EOL);exit;}
			if ($bad_flag_vert) {print_r("Wrong vertical sequence in ". ($num_ver) ." row!".PHP_EOL);exit;}
			//if (!$bad_flag_goriz && !$bad_flag_vert) print_r("Tests DONE! ");
		}else{
			print_r("not alkomax!");
		}
		return $objPHPExcelReader;
	}
	
	
?>