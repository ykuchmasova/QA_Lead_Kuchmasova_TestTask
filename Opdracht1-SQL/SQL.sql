--Opdracht 1: Alle klanten met een Basic Plan
SELECT c.*
FROM customers c
JOIN customer_subscriptions cs ON c.customer_id = cs.customer_id
JOIN subscriptions s ON cs.subscription_id = s.subscription_id
WHERE s.name = 'Basic Plan';

--Opdracht 2: Het totaal aantal minuten en de totale data per abonnementstype voor alle actieve abonnementen
SELECT s.name AS subscription_name,
       SUM(s.minutes) AS total_minutes,
       SUM(s.data_limit) AS total_data
FROM subscriptions s
JOIN customer_subscriptions cs ON s.subscription_id = cs.subscription_id
WHERE cs.end_date IS NULL
OR cs.end_date > CURRENT_DATE
GROUP BY s.name;

--Opdracht 3: Voor elke klant de totale kosten van hun abonnementen en het aantal verschillende abonnementen
SELECT c.customer_id,
       c.first_name,
       c.last_name,
       SUM(s.price) AS total_cost,
       COUNT(DISTINCT s.subscription_id) AS number_of_subscriptions
FROM customers c
JOIN customer_subscriptions cs ON c.customer_id = cs.customer_id
JOIN subscriptions s ON cs.subscription_id = s.subscription_id
GROUP BY c.customer_id, c.first_name, c.last_name;


