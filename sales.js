const categories = [
  {
    id: "cold",
    name: "Холодні напої",
    icon: "snowflake",
    type: "drink",
    items: [
      {
        id: "bubble-tea",
        name: "Bubble Tea",
        price: 100,
        group: "bubble-tea",
        image: "IMG/BubbleTea.png",
      },
      {
        id: "bubble-tea-double",
        name: "Bubble Tea x2",
        price: 200,
        group: "bubble-tea",
        isDouble: true,
        image: "IMG/BubbleTea.png",
      },
      {
        id: "lemonade",
        name: "Лимонад",
        price: 80,
        group: "lemonade",
        image: "IMG/Лимонад.png",
      },
      {
        id: "lemonade-double",
        name: "Лимонад x2",
        price: 180,
        group: "lemonade",
        isDouble: true,
        image: "IMG/Лимонад.png",
      },
      {
        id: "iced-latte",
        name: "Iced Latte",
        price: 90,
        image: "IMG/IceCoffee.png",
      },
      {
        id: "orange-coffee",
        name: "Orange Coffee",
        price: 90,
        image: "IMG/OrangeCoffee.png",
      },
      {
        id: "espresso-tonic",
        name: "Espresso Tonic",
        price: 90,
        image: "IMG/EspressoTonic.png",
      },
      {
        id: "double-coffee",
        name: "Кава x2",
        price: 190,
        isDouble: true,
        image: "IMG/IceCoffee.png",
      },
    ],
  },
  {
    id: "hot",
    name: "Гарячі напої",
    icon: "flame",
    type: "drink",
    items: [
      {
        id: "espresso",
        name: "Espresso",
        price: 45,
        image: "IMG/Еспрессо.png",
      },
      {
        id: "americano",
        name: "Americano",
        price: 50,
        image: "IMG/Амерікано.png",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 65,
        image: "IMG/Cappuccino.png",
      },
      {
        id: "latte",
        name: "Latte",
        price: 75,
        image: "IMG/Latte.png",
      },
      {
        id: "flat-white",
        name: "Flat White",
        price: 70,
        image: "IMG/Flat White.png",
      },
      {
        id: "cocoa-small",
        name: "Какао",
        price: 60,
        group: "cocoa",
        badge: "Маленький",
        image: "IMG/Какао.png",
      },
      {
        id: "cocoa-large",
        name: "Какао",
        price: 70,
        group: "cocoa",
        badge: "Великий",
        image: "IMG/Какао.png",
      },
      {
        id: "hot-chocolate-small",
        name: "Гарячий шоколад",
        price: 60,
        group: "hot-chocolate",
        badge: "Маленький",
        image: "IMG/HotChocolate.png",
      },
      {
        id: "hot-chocolate-large",
        name: "Гарячий шоколад",
        price: 70,
        group: "hot-chocolate",
        badge: "Великий",
        image: "IMG/HotChocolate.png",
      },
      {
        id: "tea-bag",
        name: "Чай пакетований",
        price: 40,
        image: "IMG/TeaBag.png",
      },
      {
        id: "fruit-tea",
        name: "Чай фруктовий",
        price: 65,
        image: "IMG/FruitTea.png",
      },
      {
        id: "honey",
        name: "Мед",
        price: 10,
        image: "IMG/Honey.png",
      },
      {
        id: "marshmallow",
        name: "Маршмелоу",
        price: 10,
        image: "IMG/Marshmallow.png",
      },
    ],
  },
  {
    id: "desserts",
    name: "Десерти",
    icon: "cupcake",
    type: "dessert",
    items: [
      {
        id: "strawberry-pot",
        name: "Горщик з полуницею",
        price: 110,
        image: "IMG/StrawberryPot.png",
      },
      {
        id: "eskimo",
        name: "Ескімо",
        price: 70,
        image: "IMG/Eskimo.png",
      },
      {
        id: "trifle",
        name: "Трайфли",
        price: 110,
        image: "IMG/Trifle.png",
      },
      {
        id: "tiramisu-classic",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Класичний",
        image: "IMG/TiramisuClassic.png",
      },
      {
        id: "tiramisu-chocolate",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Шоколадний",
        image: "IMG/TiramisuChocolate.png",
      },
      {
        id: "tiramisu-raspberry",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Малиновий",
        image: "IMG/TiramisuRaspberry.png",
      },
      {
        id: "tiramisu-strawberry",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Полуничний",
        image: "IMG/TiramisuStrawberry.png",
      },
      {
        id: "napoleon-classic",
        name: "Наполеон",
        price: 110,
        group: "napoleon",
        badge: "Класичний",
        image: "IMG/NapoleonClassic.png",
      },
      {
        id: "napoleon-pistachio",
        name: "Наполеон",
        price: 110,
        group: "napoleon",
        badge: "Фісташковий",
        image: "IMG/NapoleonPistachio.png",
      },
      {
        id: "napoleon-chocolate",
        name: "Наполеон",
        price: 110,
        group: "napoleon",
        badge: "Шоколадний",
        image: "IMG/NapoleonChocolate.png",
      },
      {
        id: "panna-cotta-raspberry",
        name: "Панакота",
        price: 110,
        group: "panna-cotta",
        badge: "Малина",
        image: "IMG/PannaCottaRaspberry.png",
      },
      {
        id: "panna-cotta-mango",
        name: "Панакота",
        price: 110,
        group: "panna-cotta",
        badge: "Манго-маракуя",
        image: "IMG/PannaCottaMangoPassion.png",
      },
      {
        id: "honey-cake",
        name: "Медовик",
        price: 110,
        image: "IMG/HoneyCake.png",
      },
      {
        id: "banana-pudding",
        name: "Банановий пудинг",
        price: 110,
        image: "IMG/BananaPudding.png",
      },
      {
        id: "potato-cake",
        name: "Тістечко «Картопля»",
        price: 70,
        image: "IMG/PotatoCake.png",
      },
      {
        id: "mochi-single",
        name: "Моті",
        price: 60,
        group: "mochi",
        badge: "1 шт.",
        image: "IMG/MochiOne.png",
      },
      {
        id: "mochi-four",
        name: "Моті",
        price: 300,
        group: "mochi",
        badge: "4 шт.",
        image: "IMG/MochiFour.png",
      },
      {
        id: "mochi-six",
        name: "Моті",
        price: 400,
        group: "mochi",
        badge: "6 шт.",
        image: "IMG/MochiSix.png",
      },
      {
        id: "mousse-cake",
        name: "Мусове тістечко",
        price: 120,
        image: "IMG/MousseCake.png",
      },
      {
        id: "mousse-torte",
        name: "Мусовий торт",
        price: 650,
        image: "IMG/MousseTorte.png",
      },
      {
        id: "festive-cupcake",
        name: "Святковий капкейк",
        price: 110,
        image: "IMG/FestiveCupcake.png",
      },
    ],
  },
  {
    id: "top-up",
    name: "Доплата",
    icon: "plus",
    type: "adjustment",
    items: [
      {
        id: "top-up-item",
        name: "Доплата",
        price: 1,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const CITY_STORAGE_KEY = "cake-lovely-city";

const cities = {
  kharkiv: {
    id: "kharkiv",
    name: "Харків",
    employees: ["Анна", "Марія", "Олег"],
  },
  lutsk: {
    id: "lutsk",
    name: "Луцьк",
    employees: ["Ірина", "Наталія", "Богдан"],
  },
};

const savedCityId = localStorage.getItem(CITY_STORAGE_KEY);
const initialCityId = cities[savedCityId] ? savedCityId : null;

const salesByCity = {
  kharkiv: [
    saleSeed("kharkiv", "Bubble Tea", "drink", 2, 200, "card", 0, "Анна"),
    saleSeed("kharkiv", "Лимонад", "drink", 1, 80, "cash", 1, "Марія"),
    saleSeed("kharkiv", "Чізкейк", "dessert", 1, 130, "card", 2, "Олег"),
    saleSeed("kharkiv", "Cappuccino", "drink", 3, 195, "cash", 3, "Анна"),
  ],
  lutsk: [
    saleSeed("lutsk", "Latte", "drink", 2, 150, "card", 0, "Ірина"),
    saleSeed("lutsk", "Брауні", "dessert", 1, 100, "cash", 0, "Наталія"),
    saleSeed("lutsk", "Iced Latte", "drink", 1, 90, "card", 1, "Богдан"),
    saleSeed("lutsk", "Круасан", "dessert", 2, 180, "cash", 2, "Ірина"),
  ],
};

const state = {
  cityId: initialCityId,
  categoryId: "cold",
  draftOrder: [],
  payment: "cash",
  employee: "",
  period: "days",
  sales: initialCityId ? salesByCity[initialCityId] : [],
};

const money = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  maximumFractionDigits: 0,
});

const checkoutApiUrl = window.location.protocol === "file:"
  ? "https://cakelovely-cms.vercel.app/api/checkout"
  : "/api/checkout";

async function requestCheckout(payload) {
  const response = await fetch(checkoutApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || "Не вдалося оформити операцію");
  }

  return result.sale;
}

function saleSeed(city, name, type, quantity, total, payment, daysAgo, employee) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return {
    id: crypto.randomUUID(),
    name,
    type,
    quantity,
    total,
    payment,
    employee,
    city,
    date: date.toISOString(),
  };
}

function normalizeSale(sale) {
  return {
    id: sale.id || crypto.randomUUID(),
    name: sale.name,
    type: sale.type,
    quantity: Number(sale.quantity),
    total: Number(sale.total),
    payment: sale.payment,
    employee: sale.employee || "",
    orderNumber: sale.orderNumber || "",
    city: sale.city || state.cityId,
    date: sale.date,
  };
}

function renderEmployeeOptions() {
  const employees = cities[state.cityId]?.employees || [];
  els.employeeOptions.innerHTML = employees
    .map((employee) => `<button type="button" role="option" data-employee="${employee}">${employee}</button>`)
    .join("");
}

function renderWorkspace() {
  renderEmployeeOptions();
  renderCategories();
  renderProducts();
  renderStats();
  updateSalesStickyState();
  els.logoutButtons.forEach((button) => {
    button.title = `${cities[state.cityId]?.name || "Місто"}: обрати інше місто`;
  });
}

async function loadCitySales(cityId) {
  const response = await fetch(`${checkoutApiUrl}?city=${encodeURIComponent(cityId)}`);
  if (!response.ok) throw new Error("Не вдалося завантажити продажі філії");
  const result = await response.json();
  state.sales = (result.sales || []).map(normalizeSale);
  salesByCity[cityId] = state.sales;
}

function enterWorkspace() {
  els.platformLoader.classList.add("is-hidden");
  els.appShell.classList.add("is-ready");
  els.appShell.setAttribute("aria-hidden", "false");
  window.scrollTo({ top: 0, behavior: "instant" });
}

async function selectCity(cityId, { persist = true, minimumLoaderTime = 0 } = {}) {
  if (!cities[cityId]) return;
  const startedAt = Date.now();
  state.cityId = cityId;
  state.sales = salesByCity[cityId];
  state.categoryId = "cold";
  state.period = "days";
  resetDraftOrder();
  if (persist) localStorage.setItem(CITY_STORAGE_KEY, cityId);
  renderWorkspace();

  try {
    await loadCitySales(cityId);
    renderWorkspace();
  } catch (error) {
    console.warn(error.message);
  }

  const remainingDelay = Math.max(0, minimumLoaderTime - (Date.now() - startedAt));
  window.setTimeout(enterWorkspace, remainingDelay);
}

function showCitySelection() {
  localStorage.removeItem(CITY_STORAGE_KEY);
  state.cityId = null;
  state.sales = [];
  resetDraftOrder();
  [els.orderDialog, els.topUpDialog].forEach((dialog) => {
    if (dialog.open) dialog.close();
  });
  switchView("sales");
  els.appShell.classList.remove("is-ready");
  els.appShell.setAttribute("aria-hidden", "true");
  els.platformLoader.classList.remove("is-hidden");
  els.platformLoader.classList.add("is-city-ready");
  window.scrollTo({ top: 0, behavior: "instant" });
}

function draftOrderTotal() {
  return state.draftOrder.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function draftPositionCount() {
  return state.draftOrder.reduce((sum, item) => sum + item.quantity, 0);
}

function draftLineCount() {
  return state.draftOrder.length;
}

function draftMetaLabel() {
  const count = draftPositionCount();
  if (count % 10 === 1 && count % 100 !== 11) return `${count} позиція`;
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return `${count} позиції`;
  return `${count} позицій`;
}

function resetDraftOrder() {
  state.draftOrder = [];
  state.payment = "cash";
  state.employee = "";
  els.cashInput.value = "";
  els.employeeValue.textContent = "Ім’я співробітника";
  els.employeePicker.classList.remove("is-open");
  els.employeeTrigger.setAttribute("aria-expanded", "false");
}

function addProductToDraft(product) {
  const existingItem = state.draftOrder.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
    return;
  }

  state.draftOrder.push({
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price,
    badge: product.badge || (product.isDouble ? "Подвійний" : ""),
    type: currentCategory().type,
    quantity: 1,
  });
}

const els = {
  platformLoader: document.querySelector("#platformLoader"),
  cityPicker: document.querySelector("#cityPicker"),
  appShell: document.querySelector(".app-shell"),
  categoryTabs: document.querySelector("#categoryTabs"),
  productGrid: document.querySelector("#productGrid"),
  orderDialog: document.querySelector("#orderDialog"),
  topUpDialog: document.querySelector("#topUpDialog"),
  orderForm: document.querySelector("#orderForm"),
  topUpForm: document.querySelector("#topUpForm"),
  draftItems: document.querySelector("#draftItems"),
  addMoreItems: document.querySelector("#addMoreItems"),
  cancelOrder: document.querySelector("#cancelOrder"),
  orderTitle: document.querySelector("#orderTitle"),
  orderMeta: document.querySelector("#orderMeta"),
  orderTotal: document.querySelector("#orderTotal"),
  cashInput: document.querySelector("#cashInput"),
  employeePicker: document.querySelector("#employeePicker"),
  employeeTrigger: document.querySelector("#employeeTrigger"),
  employeeValue: document.querySelector("#employeeValue"),
  employeeOptions: document.querySelector("#employeeOptions"),
  logoutButtons: document.querySelectorAll("[data-logout]"),
  topUpAmount: document.querySelector("#topUpAmount"),
  topUpOrderNumber: document.querySelector("#topUpOrderNumber"),
  changeValue: document.querySelector("#changeValue"),
  changeRow: document.querySelector("#changeRow"),
  cashField: document.querySelector("#cashField"),
  salesScreen: document.querySelector("#salesScreen"),
  statsScreen: document.querySelector("#statsScreen"),
  drinksSold: document.querySelector("#drinksSold"),
  drinksSoldLabel: document.querySelector("#drinksSoldLabel"),
  dessertsSold: document.querySelector("#dessertsSold"),
  dessertsSoldLabel: document.querySelector("#dessertsSoldLabel"),
  totalRevenue: document.querySelector("#totalRevenue"),
  totalRevenueLabel: document.querySelector("#totalRevenueLabel"),
  bestSeller: document.querySelector("#bestSeller"),
  todayRevenue: document.querySelector("#todayRevenue"),
  todayDrinks: document.querySelector("#todayDrinks"),
  todayDesserts: document.querySelector("#todayDesserts"),
  salesChart: document.querySelector("#salesChart"),
  recentSales: document.querySelector("#recentSales"),
};

function currentCategory() {
  return categories.find((category) => category.id === state.categoryId);
}

function categoryIcon(kind) {
  if (kind === "plus") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    `;
  }

  if (kind === "flame") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 3c1.9 2.1 3.4 3.9 4.4 5.6C17.5 10.4 18 12 18 13.5a6 6 0 1 1-12 0c0-1.8.7-3.4 2-4.9.3 1.5 1.4 2.8 2.9 3.8.9.6 2 .9 3.1.9-.3-2.2.1-4.3.9-6.3.5-1.2.8-2.2 1.1-3z" />
      </svg>
    `;
  }

  if (kind === "cupcake") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M8 10a4 4 0 0 1 8 0" />
        <path d="M7 13h10" />
        <path d="M8 13l1.2 5h5.6L16 13" />
        <path d="M9 18h6" />
        <path d="M10.5 7.5c0-1 .8-1.8 1.5-2.5.7.7 1.5 1.5 1.5 2.5" />
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3v18" />
      <path d="M5.5 6.5l13 11" />
      <path d="M18.5 6.5l-13 11" />
      <path d="M6.5 12H17.5" />
      <path d="M7.5 8.5l9 7" />
      <path d="M16.5 8.5l-9 7" />
    </svg>
  `;
}

function renderCategories() {
  els.categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button class="category-card category-button ${category.id === state.categoryId ? "is-active" : ""}" type="button" data-category="${category.id}">
          <span class="category-card-icon" aria-hidden="true">${categoryIcon(category.icon)}</span>
          <span class="category-card-title">${category.name}</span>
        </button>
      `,
    )
    .join("");
}

function renderProducts() {
  const items = currentCategory().items;
  const renderedGroups = new Set();
  const productCard = (product) => `
        <button class="product-card" type="button" data-product="${product.id}">
          <span class="product-media">
            <img class="product-image" src="${product.image}" alt="${product.name}" />
            ${product.isDouble || product.badge ? `<span class="product-badge">${product.badge || "Подвійний"}</span>` : ""}
          </span>
          <div>
            <h2 class="card-title">${product.name}</h2>
            <p class="product-price">${money.format(product.price)}</p>
          </div>
        </button>
  `;

  els.productGrid.innerHTML = items
    .map((product) => {
      if (!product.group) return productCard(product);
      if (renderedGroups.has(product.group)) return "";

      renderedGroups.add(product.group);
      const groupedItems = items.filter((item) => item.group === product.group);
      return `<div class="product-pair product-pair--${groupedItems.length}">${groupedItems.map(productCard).join("")}</div>`;
    })
    .join("");
}

function openOrder(product) {
  if (!state.draftOrder.length) {
    resetDraftOrder();
  }

  addProductToDraft(product);
  renderOrder();
  els.orderDialog.showModal();
}

function openTopUp() {
  els.topUpOrderNumber.value = "";
  els.topUpAmount.value = "";
  els.topUpDialog.showModal();
}

function renderOrder() {
  const total = draftOrderTotal();
  const canCancelOrder = draftPositionCount() > 1;
  els.orderTitle.textContent = "Новий чек";
  els.orderMeta.textContent = draftMetaLabel();
  els.draftItems.innerHTML = state.draftOrder
    .map(
      (item) => `
        <article class="draft-item" data-draft-item="${item.id}">
          <button class="draft-remove" type="button" data-remove-item="${item.id}" aria-label="Видалити ${item.name}">×</button>
          <img class="draft-image" src="${item.image}" alt="${item.name}" />
          <div class="draft-info">
            <div class="draft-copy">
              <p class="card-title">${item.name}</p>
              ${item.badge ? `<span class="draft-badge">${item.badge}</span>` : ""}
            </div>
            <div class="draft-quantity">
              <button class="draft-step-button draft-step-button-minus" type="button" data-step-item="${item.id}" data-step-action="minus" aria-label="Зменшити ${item.name}">−</button>
              <span class="draft-count">${item.quantity}</span>
              <button class="draft-step-button draft-step-button-plus" type="button" data-step-item="${item.id}" data-step-action="plus" aria-label="Збільшити ${item.name}">+</button>
            </div>
          </div>
          <p class="draft-price">${money.format(item.price * item.quantity)}</p>
        </article>
      `,
    )
    .join("");
  els.orderTotal.textContent = money.format(total);
  els.cancelOrder.classList.toggle("is-hidden", !canCancelOrder);
  els.orderForm.querySelector(".order-footer").classList.toggle("has-cancel", canCancelOrder);
  document.querySelectorAll(".payment-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.payment === state.payment);
  });
  const isCash = state.payment === "cash";
  els.orderForm.classList.toggle("is-card-payment", !isCash);
  els.cashField.classList.toggle("is-hidden", !isCash);
  els.changeRow.classList.toggle("is-hidden", !isCash);
  const cash = Number(els.cashInput.value || 0);
  els.changeValue.textContent = money.format(Math.max(0, cash - total));
}

async function confirmOrder() {
  if (!draftLineCount()) return;

  const checkoutDate = new Date().toISOString();
  const createdSales = await Promise.all(
    state.draftOrder.map((item) =>
      requestCheckout({
        city: state.cityId,
        name: item.name,
        type: item.type,
        quantity: item.quantity,
        total: item.price * item.quantity,
        payment: state.payment,
        employee: state.employee,
        date: checkoutDate,
      }),
    ),
  );

  createdSales.reverse().forEach((sale) => {
    state.sales.unshift(normalizeSale(sale));
  });

  resetDraftOrder();
  els.orderDialog.close();
  renderStats();
}

async function confirmTopUp() {
  const amount = Number(els.topUpAmount.value || 0);
  if (!amount) return;
  const orderNumber = els.topUpOrderNumber.value.trim();

  const sale = await requestCheckout({
    city: state.cityId,
    name: "Доплата",
    type: "adjustment",
    quantity: 1,
    total: amount,
    payment: "adjustment",
    employee: "",
    orderNumber,
    date: new Date().toISOString(),
  });
  state.sales.unshift(normalizeSale(sale));
  els.topUpDialog.close();
  renderStats();
}

function switchView(view) {
  els.salesScreen.classList.toggle("is-active", view === "sales");
  els.statsScreen.classList.toggle("is-active", view === "stats");
  document.querySelectorAll(".app-view").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  if (view === "stats") renderStats();
}

function updateSalesStickyState() {
  const isScrolled = window.scrollY > 4;
  document.querySelector(".sales-sticky").classList.toggle("is-scrolled", isScrolled);
  document.querySelector(".stats-sticky").classList.toggle("is-scrolled", isScrolled);
}

function renderStats() {
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  const isDailyPeriod = state.period === "days";
  const periodSales = state.sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    if (isDailyPeriod) return `${saleDate.getFullYear()}-${saleDate.getMonth()}-${saleDate.getDate()}` === todayKey;
    return saleDate.getMonth() === today.getMonth() && saleDate.getFullYear() === today.getFullYear();
  });
  const drinks = periodSales.filter((sale) => sale.type === "drink").reduce((sum, sale) => sum + sale.quantity, 0);
  const desserts = periodSales.filter((sale) => sale.type === "dessert").reduce((sum, sale) => sum + sale.quantity, 0);
  const todaySales = state.sales.filter((sale) => {
    const saleDate = new Date(sale.date);
    return `${saleDate.getFullYear()}-${saleDate.getMonth()}-${saleDate.getDate()}` === todayKey;
  });
  const todayRevenue = todaySales.reduce((sum, sale) => sum + sale.total, 0);
  const monthRevenue = state.sales
    .filter((sale) => {
      const saleDate = new Date(sale.date);
      return saleDate.getMonth() === today.getMonth() && saleDate.getFullYear() === today.getFullYear();
    })
    .reduce((sum, sale) => sum + sale.total, 0);
  const monthNames = ["січні", "лютому", "березні", "квітні", "травні", "червні", "липні", "серпні", "вересні", "жовтні", "листопаді", "грудні"];
  const periodLabel = isDailyPeriod ? "сьогодні" : `у ${monthNames[today.getMonth()]}`;
  const sellerTotals = state.sales.reduce((totals, sale) => {
    if (sale.employee) totals[sale.employee] = (totals[sale.employee] || 0) + sale.total;
    return totals;
  }, {});
  const bestSeller = Object.entries(sellerTotals).sort(([, firstTotal], [, secondTotal]) => secondTotal - firstTotal)[0]?.[0] || "—";
  els.drinksSold.textContent = drinks;
  els.dessertsSold.textContent = desserts;
  els.drinksSoldLabel.textContent = `Напої ${periodLabel}`;
  els.dessertsSoldLabel.textContent = `Десерти ${periodLabel}`;
  els.totalRevenueLabel.textContent = `Виручка ${periodLabel}`;
  els.totalRevenue.textContent = money.format(isDailyPeriod ? todayRevenue : monthRevenue);
  els.bestSeller.textContent = bestSeller;
  els.todayRevenue.textContent = money.format(todayRevenue);
  els.todayDrinks.textContent = todaySales.filter((sale) => sale.type === "drink").reduce((sum, sale) => sum + sale.quantity, 0);
  els.todayDesserts.textContent = todaySales.filter((sale) => sale.type === "dessert").reduce((sum, sale) => sum + sale.quantity, 0);
  renderChart();
  renderRecentSales();
}

function renderChart() {
  const points = state.period === "days" ? buildDayPoints() : buildMonthPoints();
  const max = Math.max(...points.map((point) => point.total), 1);
  els.salesChart.style.gridTemplateColumns = `repeat(${points.length}, minmax(0, 1fr))`;
  els.salesChart.innerHTML = points
    .map(
      (point) => `
        <div class="chart-bar">
          <p class="chart-value">${money.format(point.total)}</p>
          <div class="chart-fill" style="height: ${Math.max(12.5, (point.total / max) * 220)}px"></div>
          <p class="chart-label">${point.label}</p>
        </div>
      `,
    )
    .join("");
}

function buildDayPoints() {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toDateString();
    return {
      label: date.toLocaleDateString("uk-UA", { weekday: "short" }),
      total: state.sales.filter((sale) => new Date(sale.date).toDateString() === key).reduce((sum, sale) => sum + sale.total, 0),
    };
  });
}

function buildMonthPoints() {
  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (5 - index));
    return {
      label: date.toLocaleDateString("uk-UA", { month: "short" }),
      total: state.sales
        .filter((sale) => {
          const saleDate = new Date(sale.date);
          return saleDate.getMonth() === date.getMonth() && saleDate.getFullYear() === date.getFullYear();
        })
        .reduce((sum, sale) => sum + sale.total, 0),
    };
  });
}

function renderRecentSales() {
  if (!state.sales.length) {
    els.recentSales.innerHTML = `<p class="card-text">Продажів поки немає.</p>`;
    return;
  }

  els.recentSales.innerHTML = state.sales
    .slice(0, 10)
    .map(
      (sale) => `
        <div class="sale-row">
          <div>
            <p class="card-title">${sale.name}</p>
            <p class="card-text">${new Date(sale.date).toLocaleString("uk-UA", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</p>
          </div>
          <p class="price-label sale-type">${sale.type === "adjustment" ? "Доплата" : "Продаж"}</p>
          <p class="sale-payment">${sale.type === "adjustment" ? "—" : sale.payment === "cash" ? "Готівка" : "Картка"}</p>
          <p class="price-label sale-employee">${sale.employee || "—"}</p>
          <p class="price-label sale-order">${sale.type === "adjustment" ? sale.orderNumber || "—" : "—"}</p>
          <p class="price-label">${sale.quantity} шт.</p>
          <p class="product-price">${money.format(sale.total)}</p>
          <button class="button button-link" type="button" data-delete="${sale.id}">Видалити</button>
        </div>
      `,
    )
    .join("");
}

els.cityPicker.addEventListener("click", (event) => {
  const cityButton = event.target.closest("[data-city]");
  if (!cityButton) return;
  selectCity(cityButton.dataset.city);
});

els.logoutButtons.forEach((button) => {
  button.addEventListener("click", showCitySelection);
});

els.categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  if (button.dataset.category === "top-up") {
    openTopUp();
    return;
  }
  state.categoryId = button.dataset.category;
  renderCategories();
  renderProducts();
});

els.productGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-product]");
  if (!card) return;
  const product = currentCategory().items.find((item) => item.id === card.dataset.product);
  openOrder(product);
});

document.querySelector("#closeDialog").addEventListener("click", () => els.orderDialog.close());
document.querySelector("#closeTopUpDialog").addEventListener("click", () => els.topUpDialog.close());
els.addMoreItems.addEventListener("click", () => els.orderDialog.close());
els.cancelOrder.addEventListener("click", () => {
  resetDraftOrder();
  els.orderDialog.close();
});

[els.orderDialog, els.topUpDialog].forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelectorAll(".payment-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.payment = button.dataset.payment;
    renderOrder();
  });
});

els.cashInput.addEventListener("input", renderOrder);

els.draftItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-item]");
  if (removeButton) {
    state.draftOrder = state.draftOrder.filter((item) => item.id !== removeButton.dataset.removeItem);
    if (!draftLineCount()) {
      resetDraftOrder();
      els.orderDialog.close();
      return;
    }
    renderOrder();
    return;
  }

  const stepButton = event.target.closest("[data-step-item]");
  if (!stepButton) return;

  const item = state.draftOrder.find((entry) => entry.id === stepButton.dataset.stepItem);
  if (!item) return;

  if (stepButton.dataset.stepAction === "plus") {
    item.quantity += 1;
  } else {
    item.quantity -= 1;
    if (item.quantity <= 0) {
      state.draftOrder = state.draftOrder.filter((entry) => entry.id !== item.id);
    }
  }

  if (!draftLineCount()) {
    resetDraftOrder();
    els.orderDialog.close();
    return;
  }

  renderOrder();
});

els.employeeTrigger.addEventListener("click", () => {
  const isOpen = els.employeePicker.classList.toggle("is-open");
  els.employeeTrigger.setAttribute("aria-expanded", String(isOpen));
});

els.employeePicker.addEventListener("click", (event) => {
  const option = event.target.closest("[data-employee]");
  if (!option) return;
  state.employee = option.dataset.employee;
  els.employeeValue.textContent = state.employee;
  els.employeePicker.classList.remove("is-open");
  els.employeeTrigger.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (els.employeePicker.contains(event.target)) return;
  els.employeePicker.classList.remove("is-open");
  els.employeeTrigger.setAttribute("aria-expanded", "false");
});

els.orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmOrder().catch((error) => {
    window.alert(`Помилка оформлення: ${error.message}`);
  });
});

els.topUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmTopUp().catch((error) => {
    window.alert(`Помилка доплати: ${error.message}`);
  });
});

document.querySelectorAll(".app-view").forEach((button) => {
  button.addEventListener("click", () => {
    switchView(button.dataset.view);
    document.querySelectorAll(".app-menu").forEach((menu) => menu.classList.remove("is-open"));
    document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
  });
});

document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const menu = toggle.closest(".app-menu");
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll(".period-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.period = button.dataset.period;
      document.querySelectorAll(".period-button").forEach((item) => item.classList.toggle("is-active", item === button));
      renderStats();
    });
});

window.addEventListener("scroll", updateSalesStickyState, { passive: true });

els.recentSales.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;
  state.sales = state.sales.filter((sale) => sale.id !== button.dataset.delete);
  salesByCity[state.cityId] = state.sales;
  renderStats();
});

if (initialCityId) {
  selectCity(initialCityId, { persist: false, minimumLoaderTime: 2500 });
} else {
  window.setTimeout(() => {
    els.platformLoader.classList.add("is-city-ready");
  }, 1100);
}
