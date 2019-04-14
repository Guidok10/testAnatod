
$(document).ready(function(){
  
  //$("#tabla").hide();

  $("#todos").click(function(){
    $("#tabla").show();
    $("#bienv").hide();
  });





});


const verClientes = 
		   `<?php include('class.database.php');?>
		    <div class="container">
			    <button type="button" onClick="parent.location='nuevo.html'">Nuevo cliente</button>
	            <button type="button" onclick="parent.location='modificar.html'">Modificar cliente</button>

	            <h1> Listado de los clientes </h1>
	                                                     
	            <table class="table table-bordered  table-hover table-striped"> 
	                <thead>
	                    <tr>
	                        <th>ID</th>
	                        <th>Nombre</th>
	                        <th>DNI</th>
	                        <th>Localidad</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <?php

	                        $db = new class_db();
	                        $con = $db->conn ;
	                        $result = $con->query("SELECT clientes.id,clientes.nombre,clientes.dni,localidades.nombre AS localidad FROM clientes JOIN localidades ON clientes.localidad = localidades.id ORDER BY clientes.nombre") ;
	                        if ($result) {
	                                            
	                            while($row = $result->fetch_assoc()){
	                                    
	                    ?>

	                        <tr>
	                            <td> <?php echo $row['id']; ?> </td>
	                            <td> <?php echo $row['nombre']; ?> </td>
	                            <td> <?php echo $row['dni']; ?> </td>
	                            <td> <?php echo $row['localidad']; ?> </td>

	                        </tr>                                       

	                        <?php
	                                }
	                                    }
	                        ?>
	                    </tbody>
	            </table>
	        </div>`; 