SELECT id, loginid, loginpwd, "abc" AS "额外的一列" FROM `user`;

SELECT ismale "性别" FROM `employee`;

SELECT *, "abc" AS "extra" FROM `employee`;

SELECT id, `name`,
CASE ismale
WHEN 1 THEN "男"
ELSE "女"
END sex, 
salary
FROM employee;

SELECT id, `name`,
CASE 
WHEN ismale = 1 THEN "男"
ELSE "女"
END sex, 
CASE
WHEN salary >= 10000 THEN "高"
WHEN salary >= 5000 THEN "中"
ELSE "低"
END `level`,
salary
FROM employee;
