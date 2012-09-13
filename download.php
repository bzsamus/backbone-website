<?php
header("Content-Type:application/octet-stream");
header("Content-Disposition:attachment;filename='".basename($_GET['file'])."'");
$fName = 'img/'.basename($_GET['file']);
readfile($fName);
?>
