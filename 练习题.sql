-- 1.查询渡一每一个部门的员工数量
SELECT d.`name`, COUNT(e.id) AS number
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
WHERE c.`name` LIKE "%渡一%"
GROUP BY d.id, d.`name`;

-- 2.查询每个公司的员工数量
SELECT c.`name`, COUNT(e.id) AS number
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
GROUP BY c.id, c.`name`;

-- 3.查询所有公司5年内入职的居住在万家湾的女员工数量
SELECT c.`name`, CASE WHEN r.number IS NULL THEN 0 ELSE r.number END AS number
FROM company c LEFT JOIN (SELECT c.id, c.`name`, COUNT(e.id) AS number
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
WHERE TIMESTAMPDIFF(YEAR, e.joinDate, CURTIME()) <= 5
AND e.location LIKE "%万家湾%"
GROUP BY c.id, c.`name`) AS r on c.id = r.id;

--4.查询渡一所有员工分布在哪写居住地，每个居住地的数量
SELECT e.location, COUNT(e.id) as empnumber
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
WHERE c.`name` LIKE "%渡一%"
GROUP BY e.location

-- 5.查询员工人数大于200的公司信息
SELECT * FROM company
WHERE id in (SELECT c.id
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
GROUP BY c.id, c.`name`
HAVING COUNT(e.id) >= 200);

-- 6.查询渡一公司里比它平均工资高的员工
SELECT e.*
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
WHERE c.`name` LIKE "%渡一%" AND
e.salary > (
SELECT AVG(e.salary)
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
WHERE c.`name` LIKE "%渡一%" 
);

-- 7.查询渡一所有名字为两个字和三个字的员工对应人数

SELECT CHAR_LENGTH(e.`name`) AS 姓名长度, COUNT(e.id) AS 员工数量
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
WHERE c.`name` LIKE "%渡一%" 
GROUP BY CHAR_LENGTH(e.`name`)
HAVING 姓名长度 in (2, 3);

-- 8.查询每个公司每个月的总支出薪水，并按照从低到高排序
SELECT c.`name`, SUM(e.salary) AS sumofsalary
FROM company AS c INNER JOIN department AS d ON c.id = d.companyId
INNER JOIN employee as e on d.id = e.deptId
GROUP BY c.id, c.`name`
ORDER BY sumofsalary;
