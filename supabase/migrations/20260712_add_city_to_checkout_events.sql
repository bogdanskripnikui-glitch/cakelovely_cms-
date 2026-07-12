alter table public.checkout_events
  add column if not exists city text not null default 'kharkiv';

alter table public.checkout_events
  drop constraint if exists checkout_events_city_check;

alter table public.checkout_events
  add constraint checkout_events_city_check
  check (city in ('kharkiv', 'lutsk'));

create index if not exists checkout_events_city_sold_at_idx
  on public.checkout_events (city, sold_at desc);
