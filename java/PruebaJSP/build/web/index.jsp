

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Formulario de prueba</title>
    </head>
    <body>
        <h1>Datos de la persona</h1>
        
        <form action="" method="">
            <p> <label>Dni:</label> <input type="text" name="dni"> </p>
            <p> <label>Nombre:</label> <input type="text" name="nombre"> </p>
            <p> <label>Telefono:</label> <input type="text" name="apellido"> </p>
            <p> <label>Telefono:</label> <input type="text" name="telefono"> </p>
            <button type="submit">Enviar</button>
            
            
        </form>
        
        <h1>Ver lista de personas</h1>
        <p>Si desea ver la lista de personas hacer click en el boton.</p>
        <form action="action" method="" >
            <button type="submit">Mostrar personas</button>
        </form>
        
        
        <h1>Eliminar persona</h1>
        <p>Ingrese dni de persona que desea eliminar</p>
        <form action="action" method="">
            <p> <label>Dni:</label> <input type="text" name="dni_elim"> </p>
            <button type="submit">Borrar persona</button>
            
        </form>
        
        
        
        
    </body>
</html>
