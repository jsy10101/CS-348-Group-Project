\connect cs348_gp47

SELECT date, amount, CASE WHEN senderid = 756617072 then True else False END AS isSender
FROM transaction
WHERE (senderid=756617072 OR receiverid=756617072)
AND date > CURRENT_DATE - 7;
