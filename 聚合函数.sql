SELECT AVG(salary) AS `avg` FROM employee;
-- 查询员工数量
SELECT COUNT(id) FROM employee; 

SELECT COUNT(id) AS 员工数量,
AVG(salary) AS 平均薪资,
SUM(salary) AS 总薪资,
MIN(salary) AS 最小薪资
FROM employee;
