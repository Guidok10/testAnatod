<?php
/*
 * anatod ® - ©
 */
?>

<?php
class class_db {
    PUBLIC  $conn=NULL;
    
    CONST user      =   'test',
          pass      =   'test5678',
          db        =   'test_anatod',
          serverip  =   'consumos1.c75o4mima6rb.us-east-1.rds.amazonaws.com';
    
    public function __construct(){
        if(!$this->conn){
            try {
                $this->conn = new mysqli(SELF::serverip,SELF::user,SELF::pass,SELF::db); 
                $this->conn->set_charset("utf8");
                if (!$this->conn) {die('No se pudo conectar.');}
            } catch (Exception $exc) {
                echo $exc->getTraceAsString();
            }
        }
    }


}


/* 
	tabla clientes
	[id] => 1
    [nombre] => Cliente Prueba
    [dni] => 99999999
    [localidad] => 2

    
	tabla localidades
    [id] => 1
    [nombre] => Localidad A

*/


/*
$db = new class_db();

if ($result = $db->conn->query("select * from localidades")) {
    //printf("Select returned %d rows.\n", $result->num_rows);

	while($row = $result->fetch_assoc()){

		echo '<pre>'; print_r($row); echo '</pre>';
		//printf($row);
		//echo '<pre>'; print($row['nombre']); echo '</pre>';
    }


    //printf($result);

    // free result set 
    $result->close();
}

*/

?>