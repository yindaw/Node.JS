SELECT *, CASE ismale
WHEN 1 THEN "男"
ELSE "女"
END sex FROM `employee`
ORDER BY sex ASC, salary DESC;
