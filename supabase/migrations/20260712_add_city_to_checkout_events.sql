create table if not exists public.checkout_events (
  id uuid primary key default gen_random_uuid(),
  city text not null default 'kharkiv',
  name text not null,
  type text not null,
  quantity integer not null check (quantity > 0),
  total numeric not null check (total > 0),
  payment text not null,
  employee text not null default '',
  order_number text,
  sold_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.checkout_events
  add column if not exists city text not null default 'kharkiv';

alter table public.checkout_events
  drop constraint if exists checkout_events_city_check;

alter table public.checkout_events
  add constraint checkout_events_city_check
  check (city in ('kharkiv', 'lutsk'));

create index if not exists checkout_events_city_sold_at_idx
  on public.checkout_events (city, sold_at desc);
