<?php

	// take an array (with sub-arrays of strings) and make links out of it
	// first item in sub-array is the name that will be displayed, second is the slug

	function menu($name) {
		foreach ($name as $i) {

			// beginning of anchor link
			echo '<a href="' . $i[1] . '.php"';

			// if url is the same as slug + '.php', mark it
			if ( (basename($_SERVER['PHP_SELF'],'.php')) == $i[1] ) {
				echo ' class="current" ';
			}

			// end of anchor link
			echo '>' . $i[0] . '</a>';
		}
	}


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