<?php

	// echo anchor link

	function hyperlink($name,$slug) {

		// if no slug given, default to name
		if ( !isset($slug) ) {
			$slug = $name;
		}

		// beginning of anchor link
		echo '<a href="' . $slug . '.php"';

		// if url is the same as slug + '.php', mark it
		if ( (basename($_SERVER['PHP_SELF'],'.php')) == $slug ) {
			echo ' class="current" ';
		}

		// end of anchor link
		echo '>' . $name . '</a>';
		
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