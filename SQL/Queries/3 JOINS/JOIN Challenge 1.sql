-- Retrieves customer email addresses based on their district

SELECT district, email
FROM address
INNER JOIN customer ON address.address_id = customer.address_id
WHERE district = 'California';