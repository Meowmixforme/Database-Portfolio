-- Finds records from customer or payment tables that don’t have a matching counterpart

SELECT * FROM customer
FULL OUTER JOIN payment
ON customer.customer_id = payment.customer_id
WHERE customer.customer_id IS NULL
OR payment.payment_id IS NULL;