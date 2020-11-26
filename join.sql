SELECT * department as d AS e LEFT JOIN employee AS e
ON d.id = e.deptId;

SELECT * FROM employee AS e RIGHT JOIN department as d
ON d.id = e.deptId;


SELECT e.`name` AS empname, d.`name` AS dptname, c.`name` AS companyname
FROM employee AS e
INNER JOIN department AS d ON d.id = e.deptId
INNER JOIN company c ON d.companyId = c.id; 