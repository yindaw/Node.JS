SELECT * FROM `employee` WHERE ismale = 1;

SELECT * FROM department WHERE companyId in (1, 2);

SELECT * FROM `employee`
WHERE location is null;

SELECT * FROM `employee`
WHERE location is NOT null;

SELECT * FROM `employee`
WHERE salary >= 10000;

SELECT * FROM `employee`
WHERE salary BETWEEN 10000 AND 12000;

SELECT * FROM `employee`
WHERE `name` LIKE "%袁%";

SELECT * FROM `employee`
WHERE `name` LIKE "袁_";

SELECT * FROM `employee`
WHERE `name` LIKE "张%" AND (ismale = 0 AND salary >= 12000
OR
birthday >= "1996-1-1"); 
 