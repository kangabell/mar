<?php

	// iterate through files in a directory to find most recently updated

	function update($directory) {

		$iterator = new DirectoryIterator($directory);
		$mtime = -1;
		$file;

		foreach ($iterator as $fileinfo) {
		    if ($fileinfo->isFile()) {
		        if ($fileinfo->getMTime() > $mtime) {
		            $file = $fileinfo->getFilename();
		            $mtime = $fileinfo->getMTime();
		        }
		    }
		}
		
		return date ('d F Y', $mtime);

	}
	
?>