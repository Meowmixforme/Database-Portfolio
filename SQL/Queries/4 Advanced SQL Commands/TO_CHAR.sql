-- Format the payment_date as: full month name / day / four-digit year

SELECT TO_CHAR(payment_date, 'Month/dd/YYYY')
FROM payment;