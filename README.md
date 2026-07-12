# Cake Lovely CMS

## Branch architecture

- Products are shared by every city.
- Employees and sales are scoped by `city` (`kharkiv` or `lutsk`).
- The selected city is stored in `localStorage` under `cake-lovely-city` and remains active after refresh.
- Logging out clears the saved city and returns to the city selection screen.
- `GET /api/checkout?city=<city>` loads branch sales.
- `POST /api/checkout` requires `city` and stores the sale in that branch.

Apply `supabase/migrations/20260712_add_city_to_checkout_events.sql` before deploying the updated API.
