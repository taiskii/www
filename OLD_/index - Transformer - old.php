<?php
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
//header("Content-Type: text/html; charset=utf8");
header("Content-Type: application/json"); 
require_once 'PHPExcel/Classes/PHPExcel.php';
require_once 'PHPExcel/Classes/PHPExcel/Worksheet.php';
require_once 'PHPExcel/Classes/PHPExcel/IOFactory.php';	
	
	
	
Class Transformer {
	
	public $path_to_file;
	public $objPHPExcelReader;
	
	public function __construct($path) {
		$this->path_to_file = $path;
		$objReader = PHPExcel_IOFactory::createReader('Excel5');//('Excel2007')
		$this->objPHPExcelReader = $objReader->load($this->path_to_file);
		$this->objPHPExcelReader->setActiveSheetIndex(0);		
	}
	
	public function defindFile() {				
		/*********************************if alkomax*****************************/
		try{
			$data = $this->objPHPExcelReader->getSheet(0)->getCell('I18')->getValue();
		}catch (Exception $e) {
			echo 'Выброшено исключение: ',  $e->getMessage(), "\n";
		}
		if ($data == "6167073575"){ 			
			if (!is_numeric($this->testGorizontalSequence(13,2))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(13,2)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(16,1) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(16,1) ." row".PHP_EOL ); return false; }
			return true;
		}			
		
		/*******************************if ardenal*******************************/
		
		$data = $this->objPHPExcelReader->getSheet(0)->getCell('A3')->getValue();
		
		$data = iconv("UTF-8", "cp1251",  $data);
	
		$pattern = '/(.*),.*\s(\d+)\/(\d+).*:\s(.*)\((.*)\-(.*)\)/';// inn and kpp	
		/*
		$matches[1] - name of provider
		$matches[2] - inn provider
		$matches[3] - kpp provider
		$matches[4] - license provider
		$matches[5] - actional date since for license provider
		$matches[6] - actional date to for license provider
		//fsrar
		*/
		preg_match($pattern, $data, $matches);		
		//print_r($matches);
		
		//$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel2007');	//translate to writer	
		$worksheet = $this->objPHPExcelReader->getActiveSheet();		
		if (isset ($matches[2]) && $matches[2] == '6168019838'){ // arsenal
			$worksheet->removeColumnByIndex(7);
			$worksheet->removeColumnByIndex(6);
			
			$worksheet->insertNewColumnBeforeByIndex(6,7);
			$this->objPHPExcelReader->getSheet(0)->getCell('G11')->setValue(iconv("cp1251", "UTF-8",  $matches[1]));			
			$this->objPHPExcelReader->getSheet(0)->getCell('H11')->setValue($matches[2]);
			$this->objPHPExcelReader->getSheet(0)->getCell('I11')->setValue($matches[3]);
			$this->objPHPExcelReader->getSheet(0)->getCell('J11')->setValue(iconv("cp1251", "UTF-8",  $matches[4]));
			$this->objPHPExcelReader->getSheet(0)->getCell('K11')->setValue($matches[5]);
			$this->objPHPExcelReader->getSheet(0)->getCell('L11')->setValue($matches[6]);
			$this->objPHPExcelReader->getSheet(0)->getCell('M11')->setValue(iconv("cp1251", "UTF-8", 'ФСРАР'));
			
			$this->copyRange(6,11,12,0);
			$this->repearGorizontLine(8);
			
			$declaration_type = 2;		
			
			$this->deleteLinesMore500($declaration_type, 11, 2);
			$this->repearVerticalLine(11,0,0);
													
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		
		
		/*******************************if atlant*******************************/
		$data = $this->objPHPExcelReader->getSheet(0)->getCell('C2')->getValue();
		$pattern = '/(.*)\/(.*)/';
		preg_match($pattern, $data, $matches);
		//print_r($matches);
		if (isset ($matches[1]) && $matches[1] == '6154101507'){ // atlant
			$nameOrg_prev = $this->objPHPExcelReader->getSheet(0)->getCell('C1')->getValue();
			$pattern = '/^(.*?),.*$/';
			preg_match($pattern, $nameOrg_prev, $matches_name_org);
			$nameOrg = iconv("UTF-8", "cp1251", $matches_name_org[1]);
			$worksheet->insertNewColumnBeforeByIndex(6,3);
			
			$this->objPHPExcelReader->getSheet(0)->getCell('G16')->setValue(iconv("cp1251", "UTF-8",$nameOrg));
			$this->objPHPExcelReader->getSheet(0)->getCell('H16')->setValue($matches[1]);
			$this->objPHPExcelReader->getSheet(0)->getCell('I16')->setValue($matches[2]);			
			
			$this->copyRange(6,16,8,0);			
			
			$this->objPHPExcelReader->getSheet(0)->removeColumnByIndex(17);
			
			$this->repearGorizontLine(15);
			
			$declaration_type = 1;
			$this->deleteLinesMore500($declaration_type,16,2);
			$this->repearVerticalLine(16,0,0);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		
		/*******************************if diskon*******************************/
		$data = $this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow(8,18)->getValue();
		if (isset ($data) && $data == '6167043796'){ // diskon
			if (!is_numeric($this->testGorizontalSequence(13,2))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(13,2)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(17,1) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(17,1) ." row".PHP_EOL ); return false; }
			return true;
		}
		/*******************************if dkm*******************************/
		try{
			$data = $this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow(7,12)->getValue();
		}catch(Exception $e){
			echo $e->getMessage();
		}
		if (isset ($data) && $data == '6162063260'){ // dkm		
			if (!is_numeric($this->testGorizontalSequence(11,1))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(11,1)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(12,0) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(12,0) ." row".PHP_EOL ); return false; }
			return true;
		}
		/*******************************if donalko*******************************/		
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
		$highestRow = $objWorksheet->getHighestRow();								
		//print_r("\n".$highestRow."\n");
		$row=1;
		//echo "\n\n".$objWorksheet->getCellByColumnAndRow(16, 78)->getValue()."\n\n\n";
		while ( ($objWorksheet->getCellByColumnAndRow(16, $row)->getValue() != '6166076647') && ($row<=$highestRow) ){
			$row++;			
		}
		if ($objWorksheet->getCellByColumnAndRow(16, $row)->getValue() == '6166076647' ){ // donalko
			//echo $row;
			$index_for_del = $row - 3;
			
			$objWorksheet->insertNewColumnBeforeByIndex();
			$objWorksheet->removeRow(1,$index_for_del);
			$highestRow = $objWorksheet->getHighestRow();
			
			//echo "\n".$objWorksheet->getCellByColumnAndRow(6, 7)->getValue()."\n";
			//exit;
			if (!is_numeric($this->testGorizontalSequence(1,5))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(1,5)+1) ." colunm".PHP_EOL); return false;  }
			$tmp_row = 2;
			while  ($tmp_row<=$highestRow) {
				$data = iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(5, $tmp_row)->getValue() );
				//print_r(iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(5, 2)->getValue()) ); exit;
				$pattern = '/^(.*?):.*$/';
				preg_match($pattern, $data, $matches);
				//print_r($matches); exit;
				if ( !isset($matches[1]) || $matches[1] != "По обособленному подразделению"){
					$tmp_row++;			
				}else{
					break;
				}
			}
			if (isset($matches[1]) && $matches[1] == "По обособленному подразделению"){
				//echo "\n\n\n".$tmp_row."\n\n";exit;
				$tmp = $tmp_row - 2;
				$objWorksheet->removeRow(2,$tmp);
				$highestRow = $objWorksheet->getHighestRow();
			}else{
				//ERROR
			}			
			$tmp_row = 3;
			$i=1;
			while  ($tmp_row<=$highestRow) {
				$tmp = $tmp_row -1;
				$data = iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(5, $tmp)->getValue());
				$pattern = '/^(.*?):.*$/';
				preg_match($pattern, $data, $matches);	
				
				
					if ( (is_numeric($objWorksheet->getCellByColumnAndRow(2, $tmp_row)->getValue())&& !isset($matches[1]) )  ||  (is_numeric($objWorksheet->getCellByColumnAndRow(2, $tmp_row)->getValue())&& $matches[1] != 'По обособленному подразделению' ) ){						
						$this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow(2,$tmp_row)->setValue($i); 
						$tmp_row++;
						$i++;			
					}elseif ( is_numeric($objWorksheet->getCellByColumnAndRow(2, $tmp_row)->getValue()) ) {					
						$i = 1;
						$this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow(2,$tmp_row)->setValue($i); 
						$tmp_row++;
						$i++;
					}else{
						$tmp_row++;
					}
			
			}
				
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		
		/*******************************if lotos*******************************/		
		if ($objWorksheet->getCellByColumnAndRow(7, 13)->getValue() == '2312106824' ){//lotos
			if (!is_numeric($this->testGorizontalSequence(10,1))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(10,1)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(12,0) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(12,0) ." row".PHP_EOL ); return false; }
			return true;
		}
		/*******************************if luding*******************************/ ///trabla whith coding!!!!!!!!!!!!!!
		if ($objWorksheet->getCellByColumnAndRow(7, 9)->getValue() == '6166065518' ){//luding
			
			//$objWorksheet->removeColumnByIndex(17,3);   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			
			if (!is_numeric($this->testGorizontalSequence(7,1))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(7,1)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(9,0) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(9,0) ." row".PHP_EOL ); return false; }			
			
			//$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');											
			//$finalFilename = 'list_of_alcohol/luding.xls'; //$this->path_to_file
			//$objWriter->save($finalFilename);
			return true;
		}
		/*******************************if megadon*******************************/
		
		$data = iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(0, 2)->getValue() );
		$pattern = '/.*?\((.*?)\)/';
		preg_match($pattern, $data, $matches);			
		if (isset($matches[1]) && $matches[1] == '6165129448'){//megadon
			$name_pro = 'ООО "ТД Мега-Дон"';
			$data1 = iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(5, 6)->getValue() );
			$pattern1 = '/^(.*?)\s.*?(\d+\.\d+\.\d+).*?(\d+\.\d+\.\d+).*?:\s(.*$)/';
			/*
			$matches1
			[0] => 61ЗАП0003407 c 20.03.2014 по 01.01.2016 выдана: Федеральная служба по регулированию алкогольного рынка
			[1] => 61ЗАП0003407
			[2] => 20.03.2014
			[3] => 01.01.2016
			[4] => Федеральная служба по регулированию алкогольного рынка
			*/
			preg_match($pattern1, $data1, $matches1);			
			$objWorksheet->removeColumnByIndex(5,1);
			$objWorksheet->insertNewColumnBeforeByIndex(5,4);
			
			$this->objPHPExcelReader->getSheet(0)->getCell('F6')->setValue(iconv("cp1251", "UTF-8",$matches1[1]));
			$this->objPHPExcelReader->getSheet(0)->getCell('G6')->setValue($matches1[2]);
			$this->objPHPExcelReader->getSheet(0)->getCell('H6')->setValue($matches1[3]);
			$this->objPHPExcelReader->getSheet(0)->getCell('I6')->setValue(iconv("cp1251", "UTF-8",$matches1[4]));
			
			$this->copyRange(5,6,8,0);
			
			$objWorksheet->insertNewColumnBeforeByIndex(4,2);
			
			$this->objPHPExcelReader->getSheet(0)->getCell('E6')->setValue(iconv("cp1251", "UTF-8",$name_pro));
			$this->objPHPExcelReader->getSheet(0)->getCell('F6')->setValue($matches[1]);
			
			$this->copyRange(4,6,5,0);
			
			
			$objWorksheet->insertNewColumnBeforeByIndex(0,2);
						
			$this->repearVerticalLine(6,0,4); //campere whith inn importer!!!!!!!!!!!
			
			$objWorksheet->insertNewRowBefore(6,1);			
			$this->repearGorizontlLine(1,6);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if megapolis*******************************/
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
		$highestRow = $objWorksheet->getHighestRow();										
		$row=1;
		//echo "\n\n".$objWorksheet->getCellByColumnAndRow(28, 42)->getValue()."\n\n\n";exit;
		while ( ($objWorksheet->getCellByColumnAndRow(28, $row)->getValue() != '7718502458') && ($row<=$highestRow) ){
			$row++;			
		}
		if ($objWorksheet->getCellByColumnAndRow(28, $row)->getValue() == '7718502458'){ // megapolis
			$tmp_row = $row - 4;
			$objWorksheet->insertNewColumnBeforeByIndex();
			$objWorksheet->removeRow(1,$tmp_row);
			//echo $objWorksheet->getCellByColumnAndRow(1, 4)->getValue(); exit;
			if (!is_numeric($this->testGorizontalSequence(2,3))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(2,3)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(4,1) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(3,1) ." row".PHP_EOL ); return false; }
			//exit;
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if metro*******************************/
		if ($objWorksheet->getCellByColumnAndRow(11, 5)->getValue() == '7704218694'){// metro
			$objWorksheet->removeColumnByIndex(0,5);
			$objWorksheet->insertNewColumnBeforeByIndex(0,1);
			
			$this->repearVerticalLine(5,0,2);
			$this->repearGorizontlLine(1,4);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if mishelalko*******************************/
		if ($objWorksheet->getCellByColumnAndRow(7, 12)->getValue() == '6125019230'){// mishelalko
			$objWorksheet->removeColumnByIndex(17,1);
			
			if (!is_numeric($this->testGorizontalSequence(11,1))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(11,1)+1) ." colunm".PHP_EOL); return false;  }
			if (!is_numeric($this->testVerticalSequence(11,0) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(11,0) ." row".PHP_EOL ); return false; }
			
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if mozel*******************************/
		if ($objWorksheet->getCellByColumnAndRow(8, 10)->getValue() == '7736186117'){// mozel
			
			$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
			$highestRow = $objWorksheet->getHighestRow();	
			$tmp_row = 10;
			while ($tmp_row <= $highestRow){
				$this->objPHPExcelReader->getSheet(0)->getCell('A'.$tmp_row)->setValue( $objWorksheet->getCellByColumnAndRow(2, $tmp_row)->getValue() );
				$tmp_row++;
			}
			
			$objWorksheet->removeColumnByIndex(2,2);
			$objWorksheet->insertNewColumnBeforeByIndex();
			$this->repearVerticalLine(10,0,2);
			
			$objWorksheet->insertNewColumnBeforeByIndex(16,1);
			
			$highestRow = $objWorksheet->getHighestRow();	
			$tmp_row = 10;
			while ($tmp_row <= $highestRow){
				$this->objPHPExcelReader->getSheet(0)->getCell('Q'.$tmp_row)->setValue( $objWorksheet->getCellByColumnAndRow(9, $tmp_row)->getValue() );
				$tmp_row++;
			}
			$objWorksheet->removeColumnByIndex(9,1);
			$objWorksheet->removeColumnByIndex(17,4);
			
			$objWorksheet->insertNewRowBefore(10,1);
			
			$this->repearGorizontlLine(1,10);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if phanagoria*******************************/		
		if ($objWorksheet->getCellByColumnAndRow(7, 11)->getValue() == '6164085043'){// phanagoria			
			if (!is_numeric($this->testGorizontalSequence(10,1))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(10,1)+1) ." colunm".PHP_EOL); return false;  }
			
			$this->repearVerticalLine(11,0,2);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if phlagman*******************************/				
		$data = $objWorksheet->getCellByColumnAndRow(2, 2)->getValue();
		$pattern = '/(\d+)\/(\d+)/';
		
		preg_match($pattern, $data, $matches);	
		//print_r($matches);		
		if (isset($matches[1]) && $matches[1] == '6167078492'){// phlagman		
			$name_pro = iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(2, 1)->getValue());
			$objWorksheet->removeColumnByIndex(14,1);
			$objWorksheet->insertNewColumnBeforeByIndex(6,3);
			
			$this->objPHPExcelReader->getSheet(0)->getCell('G16')->setValue(iconv("cp1251","UTF-8" , $name_pro) );
			$this->objPHPExcelReader->getSheet(0)->getCell('H16')->setValue($matches[1]);
			$this->objPHPExcelReader->getSheet(0)->getCell('I16')->setValue($matches[2]);
			
			$this->copyRange(6, 16, 8, 2);
			$this->repearGorizontlLine(1,15);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
		}
		/*******************************if rossi*******************************/ ///trabla whith coding!!!!!!!!!!!!!!
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
		$highestRow = $objWorksheet->getHighestRow();	
		$tmp_row = 1;
		while ($tmp_row <= $highestRow){
			if ($objWorksheet->getCellByColumnAndRow(7, $tmp_row)->getValue() =='6150006362' ){
				break;
			}
			$tmp_row++;
		}
		if  ($objWorksheet->getCellByColumnAndRow(7, $tmp_row)->getValue() =='6150006362' ){ //rossi
			$data = $objWorksheet->getCellByColumnAndRow(0, 5)->getValue() ;
			$objWorksheet->removeRow(9,1);
			$highestRow = $objWorksheet->getHighestRow();	
			$tmp_row = 9;
			while ($tmp_row <= $highestRow){
				if ( $objWorksheet->getCellByColumnAndRow(0, $tmp_row)->getValue() == $data){
					break;
				}
				
				$tmp_row++;
			}
			if ( $objWorksheet->getCellByColumnAndRow(0, $tmp_row)->getValue() == $data){
				$num_rows_for_del = $highestRow - $tmp_row;
				$objWorksheet->removeRow($tmp_row,$num_rows_for_del);
			}
			if (!is_numeric($this->testGorizontalSequence(8,1))){ /*print_r ("good test gorizont".PHP_EOL);*/ }else{ print_r("Wrong in gorizont sequence in ". ($this->testGorizontalSequence(8,1)+1) ." colunm".PHP_EOL); return false;  }
			
			$declaration_type = 1;
			$this->deleteLinesMore500($declaration_type,12,2);
			$this->repearVerticalLine(12,0,0);
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;	
			
		}
		/*******************************if sovet*******************************/
		$data = iconv("UTF-8", "cp1251", $objWorksheet->getCellByColumnAndRow(1, 7)->getValue());	//   pidori net v faile dannih po licensii!!!!!!!!!
		$pattern = '/.*?\"(.*)\".*?:\s(\d+).*?:\s(\d+)/';
		/*
		[0] => по организации "Общество с ограниченной ответственностью "Совет"", ИНН: 6167037658, КПП: 610201001
		[1] => Общество с ограниченной ответственностью "Совет"
		[2] => 6167037658
		[3] => 610201001
		*/
		preg_match($pattern, $data, $matches);	
		if  ($matches[2] =='6167037658' ){ //sovet
			$objWorksheet->removeColumnByIndex(6,11);
			
			$objWorksheet->insertNewColumnBeforeByIndex(6,7);
			$this->objPHPExcelReader->getSheet(0)->getCell('G8')->setValue(iconv("cp1251","UTF-8" , $matches[1]) );
			$this->objPHPExcelReader->getSheet(0)->getCell('H8')->setValue(iconv("cp1251","UTF-8" , $matches[2]) );
			$this->objPHPExcelReader->getSheet(0)->getCell('I8')->setValue(iconv("cp1251","UTF-8" , $matches[3]) );
			$this->objPHPExcelReader->getSheet(0)->getCell('J8')->setValue(iconv("cp1251","UTF-8" , '61ЗАП0001418'));
			$this->objPHPExcelReader->getSheet(0)->getCell('K8')->setValue('11.12.2012');
			$this->objPHPExcelReader->getSheet(0)->getCell('L8')->setValue('11.12.2016');  // before 2016  - change!!!!!!
			$this->objPHPExcelReader->getSheet(0)->getCell('M8')->setValue(iconv("cp1251","UTF-8" ,'ФСРАР'));
		
			$this->copyRange(6, 8, 12, 0);
			
			$this->repearGorizontlLine(1,6);
			if (!is_numeric($this->testVerticalSequence(8,0) )){ /*print_r ("good test vertical");*/ }else{ print_r("Wrong in vertical sequence in ". $this->testVerticalSequence(8,0) ." row".PHP_EOL ); return false; }
			
			
			$objWriter = PHPExcel_IOFactory::createWriter($this->objPHPExcelReader, 'Excel5');														
			$objWriter->save($this->path_to_file);
			return true;		
		}
	}
	
	public function repearGorizontlLine ($column_start, $row){ 
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
		$highestColumn = $objWorksheet->getHighestColumn(); // e.g 'F'
		$highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);
		$i=1;
		for ($column = $column_start; $column <= $highestColumnIndex; ++$column) {	
			$this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($column,$row)->setValue($i); 
			if($i==16){break;}
			$i++;			
		}
	}
	
	public function repearVerticalLine ($row_star_with, $column, $column_for_compare){ // add for many kpp!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
		$highestRow = $objWorksheet->getHighestRow();								
		//echo "HighestRow - ".$objWorksheet->getHighestRow();
		$i=1;
		for ($row = $row_star_with; $row <= $highestRow; ++$row) {	
			if ( is_numeric($objWorksheet->getCellByColumnAndRow($column_for_compare, $row)->getValue() ) ){
				$this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($column,$row)->setValue($i); 
				$i++;			
			}
		}
	}
	
	
	public function deleteLinesMore500($declaration_type, $row_start_whith, $column){
		if ($declaration_type == 1) {		
			$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
			$highestRow = $objWorksheet->getHighestRow();								
			//echo "HighestRow - ".$objWorksheet->getHighestRow();
			for ($row = $row_start_whith; $row <= $highestRow; ++$row) {
				if ( is_numeric($objWorksheet->getCellByColumnAndRow($column, $row)->getValue() ) && ($objWorksheet->getCellByColumnAndRow($column, $row)->getValue() >= 500)  ) {   
					//echo "\n\n\n".$objWorksheet->getCellByColumnAndRow($column, $row)->getValue()."\n".$row."\n";					
					$j=1;
					$tmp_row = $row+1;
					while ( ($objWorksheet->getCellByColumnAndRow($column, $tmp_row)->getValue() >= '500') && ($tmp_row<=$highestRow) ){
						$tmp_row++;
						$j++;
					}
					//echo $j;					
					$objWorksheet->removeRow($row,$j);					
					$highestRow = $objWorksheet->getHighestRow();												
				}else{				
					//echo "jopa";
				}
					//echo "value - ".$objWorksheet->getCellByColumnAndRow($column, $row)->getValue()."; row - ".$row." HighestRow - ".$objWorksheet->getHighestRow()."\n";
					//echo "jopa ";
			}						
		}else{
			$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
			$highestRow = $objWorksheet->getHighestRow();								
			//echo "HighestRow - ".$objWorksheet->getHighestRow();
			for ($row = $row_start_whith; $row <= $highestRow; ++$row) {
				if ( is_numeric($objWorksheet->getCellByColumnAndRow($column, $row)->getValue() ) && ($objWorksheet->getCellByColumnAndRow($column, $row)->getValue() < 500)  ) {     
					$j=1;
					$tmp_row = $row+1;
					while ( ($objWorksheet->getCellByColumnAndRow($column, $tmp_row)->getValue() < '500') && ($tmp_row<=$highestRow) ){
						$tmp_row++;
						$j++;
					}
					$objWorksheet->removeRow($row,$j);					
					$highestRow = $objWorksheet->getHighestRow();														
				}else{

				}
				
			}
		}
	}
	public function repearGorizontLine($line_of_repear){
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();
		$highestColumn = $objWorksheet->getHighestColumn(); // e.g 'F'
		$highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn); // e.g. 5
		$i=1;
		for ($col = 1; $col <= $highestColumnIndex; ++$col) {
			if ($i<=16){
				$this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($col,$line_of_repear)->setValue($i);
				$i++;
			}else{
				break;
			}
		}
	
		
	}
	
	/*
	copy from $col_left to $col_right down for $row_ lines and control 
	$number_row_for_copy_data for paste data in data line
	
	*/
	public function copyRange($col_left, $row_, $col_right, $number_row_for_copy_data) {		
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();		
		$highestRow = $objWorksheet->getHighestRow();		
		for ($row = $col_left; $row <= $col_right; ++$row) {
			for ($col = $row_; $col <= $highestRow; ++$col) {					
				if ( is_numeric( $objWorksheet->getCellByColumnAndRow($number_row_for_copy_data, $col)->getValue() ) ) {
					$this->objPHPExcelReader->getSheet(0)->getCellByColumnAndRow($row,$col)->setValue($objWorksheet->getCellByColumnAndRow($row, $row_)->getValue());									
				}
			}
		}		
	}
	
	
	public function testGorizontalSequence($row_, $col_since) {
		$num_gor = 0;
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();
		$highestColumn = $objWorksheet->getHighestColumn(); // e.g 'F'
		$highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn); // e.g. 5
		$i = 1;
		
		for ($col = $col_since; $col <= $highestColumnIndex; ++$col) {
			if ($i ==  $objWorksheet->getCellByColumnAndRow($col, $row_)->getValue() && ($i <= 16)){
				if ($i<>16) $i++;						
			}else{
				if (!is_numeric( $objWorksheet->getCellByColumnAndRow($col, $row_)->getValue() ) ){
						
				}else{	
					if ($i>16 && $objWorksheet->getCellByColumnAndRow(7, 9)->getValue() == '6166065518' ){//delete and for luding change   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
						$num_gor = $col;
						return $num_gor;							
					}elseif($objWorksheet->getCellByColumnAndRow(7, 9)->getValue() != '6166065518' ){
						$num_gor = $col;
						return $num_gor;
					}
				}
			}
		}

		return true;
	}
	
	public function testVerticalSequence($row_since, $col_) {
		$num_ver = 0;
		$objWorksheet = $this->objPHPExcelReader->getActiveSheet();
		$highestRow = $objWorksheet->getHighestRow(); // e.g. 10			
		$i = 1;
		for ($row = $row_since; $row <= $highestRow; ++$row) {
			if ($i ==  $objWorksheet->getCellByColumnAndRow($col_, $row)->getValue()){						
				$i++;						
			}else{
				if (!is_numeric( $objWorksheet->getCellByColumnAndRow($col_, $row)->getValue() ) ){
						
				}else{ //test for kpp > 1
					if ($objWorksheet->getCellByColumnAndRow($col_, $row)->getValue() == 1){
						$i = 2;								
					}else{		
						$num_ver = $row;
						return $num_ver;								
					}
				}
			}
		}
		return true;
	}
}

if (file_exists('list_of_alcohol/sovet.xls')) {
	$tr = new Transformer('list_of_alcohol/sovet.xls');
}else{
	print_r('Wrong path or file not exist.');
}
if ( $tr->defindFile() ) { print_r('File is good'); }

	
?>