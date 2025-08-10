/*Obtener todos los datos de todos los clientes
Obtener solo los nombres y apellidos de todos los clientes
Obtener los nombres de los diferentes productos
Obtener los diferentes códigos de área de los teléfonos
*/

use olavarria;

SELECT * FROM E01_cliente;

SELECT nombre,apellido from e01_cliente;

SELECT nombre from e01_producto;
SELECT distinct nombre from e01_producto;

SELECT distinct codigo_area from e01_telefono;

SELECT codigo_area from e01_telefono;

-- 5-Obtener el listado de todos los productos que tengan un stock mayor a 50 y menor a 200
SELECT * FROM e01_producto where stock >50 and stock<200;
select * from e01_producto where stock between 51 and 199;

-- 6-Obtener los datos correspondientes al producto cuyo código es 50
select * from e01_producto where codigo_producto=50;

-- 7-Obtener los datos de las facturas cuyo total (con iva incluido) sea mayor a 40.000$ y 
-- lo haya realizado el cliente número 8
SELECT * FROM e01_factura WHERE total_con_iva >40000 and nro_cliente=8;

-- 8-Obtener los datos del cliente cuyo nombre es “Ivor” y el apellido “Saunders”
SELECT * FROM e01_cliente where nombre = "Ivor" and apellido="Saunders";
SELECT * FROM e01_cliente where nombre LIKE "Ivor" and apellido LIKE "Saunders";
-- SELECT * FROM e01_cliente where nombre LIKE "%Ivor%" and apellido LIKE "%Saunders%";??                    
-- si quiero que tenga un caracter cualquiera en el segundo lugar??
# SELECT * FROM e01_cliente where nombre LIKE "I_vor" and apellido LIKE "Saunders";
-- 9-Todas las Facturas pertenecientes al cliente número 10
-- ya la hicimos dicen los alumnos XD

-- 10-Todas las Facturas que superen los 50.000$ (iva incluido)
   SELECT * FROM e01_factura where total_con_iva >50000;

