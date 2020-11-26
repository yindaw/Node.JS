-- 查询user表，得到账号为admin，密码为123456的用户
SELECT * FROM `user`
WHERE loginId = "admin" AND loginpwd = "123123";

-- 查询员工表，按照员工的入职时间降序排序，并且只用分页查询
-- 查询第2页，每页10条数据
-- limit(page - 1) * pagesize, pagesize

SELECT * FROM employee
ORDER BY employee.joinDate DESC
LIMIT 10, 5;

-- 查询工资最高的女员工
SELECT * FROM employee
WHERE ismale = 0
ORDER BY salary DESC
LIMIT 0, 1;