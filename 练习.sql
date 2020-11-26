-- 1.创建一张team表，记录足球队
-- 查询出对阵表
SELECT t1.`name` AS 主场, t2.`name` 客场
FROM team AS t1, team AS t2
WHERE t1.id != t2.id;

-- 2.显示出所有员工的姓名、性别（使用男或女显示）、入职时间、薪水、所属部门（显示部门名称）、所属公司（显示公司名称）
SELECT e.`name` 员工姓名,
CASE ismale WHEN 1 THEN "男" ELSE "女" END 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
FROM employee e 
INNER JOIN department d ON e.deptId = d.id
INNER JOIN company c on d.companyId = c.id

-- 3.查询腾讯和蚂蚁金服的所有员工姓名、性别、入职时间、部门名、公司名
SELECT e.`name` 员工姓名,
CASE ismale WHEN 1 THEN "男" ELSE "女" END 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
FROM employee e 
INNER JOIN department d ON e.deptId = d.id
INNER JOIN company c on d.companyId = c.id
WHERE c.`name` in ("腾讯科技", "蚂蚁金服")

-- 4.查询渡一教学部的所有员工姓名、性别、入职时间、部门名、公司名
SELECT e.`name` 员工姓名,
CASE ismale WHEN 1 THEN "男" ELSE "女" END 性别,
e.joinDate 入职时间,
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
FROM employee e 
INNER JOIN department d ON e.deptId = d.id
INNER JOIN company c on d.companyId = c.id
WHERE c.`name` LIKE "%渡一%" AND d.`name` = "教学部";

-- 5.列出所有公司员工居住的地址（要去掉重复）
SELECT DISTINCT location FROM employee;



