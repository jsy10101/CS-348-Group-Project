\connect cs348_gp47

SELECT SUM(balance) AS totalBalance
FROM accounts
WHERE userid = 677600186 
AND (type = 'Chequing' or type = 'Saving');
