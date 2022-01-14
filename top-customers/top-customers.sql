-- test using postgresql
SELECT 
	EXTRACT(YEAR FROM o.ordered_at) as year, 
	EXTRACT(MONTH FROM o.ordered_at) as month,
	o.customer_id,
	SUM(order_line_items.quantity * order_line_items.unit_price) as total_monthly_order_value  
FROM
(
	SELECT 
		DISTINCT ON(to_char(date(x.ordered_at),'Mon-YY'))
		x.customer_id,
		x.order_id,
		x.ordered_at
    FROM (
        SELECT * FROM orders ORDER BY orders.customer_id ASC
    ) as x 
) o
LEFT JOIN order_line_items ON o.order_id = order_line_items.order_id
GROUP BY o.customer_id, o.ordered_at, year, month
ORDER BY o.ordered_at ASC