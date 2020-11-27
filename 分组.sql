-- 查询员工的分布的居住地，以及每个居住地有多少名员工
SELECT location, COUNT(id) as empnumber
FROM employee
GROUP BY location
HAVING empnumber >= 40;

-- 查询所有薪水在10000以上的员工的分布的居住地, 然后仅得到聚集地大于30的结果
SELECT location, COUNT(id) AS empnumber
FROM employee
WHERE salary >= 10000
GROUP BY location
HAVING COUNT(id) >= 30;