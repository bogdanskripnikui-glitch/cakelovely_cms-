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
        image: "IMG/BubbleTea.webp",
      },
      {
        id: "bubble-tea-double",
        name: "Bubble Tea x2",
        price: 200,
        group: "bubble-tea",
        isDouble: true,
        image: "IMG/BubbleTea.webp",
      },
      {
        id: "lemonade",
        name: "Лимонад",
        price: 80,
        group: "lemonade",
        image: "IMG/Лимонад.webp",
      },
      {
        id: "lemonade-double",
        name: "Лимонад x2",
        price: 180,
        group: "lemonade",
        isDouble: true,
        image: "IMG/Лимонад.webp",
      },
      {
        id: "iced-latte",
        name: "Iced Latte",
        price: 90,
        image: "IMG/IceCoffee.webp",
      },
      {
        id: "orange-coffee",
        name: "Orange Coffee",
        price: 90,
        image: "IMG/OrangeCoffee.webp",
      },
      {
        id: "espresso-tonic",
        name: "Espresso Tonic",
        price: 90,
        image: "IMG/EspressoTonic.webp",
      },
      {
        id: "double-coffee",
        name: "Кава x2",
        price: 190,
        isDouble: true,
        image: "IMG/IceCoffee.webp",
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
        image: "IMG/Еспрессо.webp",
      },
      {
        id: "americano",
        name: "Americano",
        price: 50,
        group: "americano",
        badge: "Класичний",
        image: "IMG/Амерікано.webp",
      },
      {
        id: "americano-milk",
        name: "Americano",
        price: 55,
        group: "americano",
        badge: "З молоком",
        image: "IMG/AmericanoMilk.webp",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 65,
        image: "IMG/Cappuccino.webp",
      },
      {
        id: "latte",
        name: "Latte",
        price: 75,
        image: "IMG/Latte.webp",
      },
      {
        id: "flat-white",
        name: "Flat White",
        price: 70,
        image: "IMG/Flat White.webp",
      },
      {
        id: "cocoa-small",
        name: "Какао",
        price: 60,
        group: "cocoa",
        badge: "Маленький",
        image: "IMG/Какао.webp",
      },
      {
        id: "cocoa-large",
        name: "Какао",
        price: 70,
        group: "cocoa",
        badge: "Великий",
        image: "IMG/Какао.webp",
      },
      {
        id: "hot-chocolate-small",
        name: "Гарячий шоколад",
        price: 60,
        group: "hot-chocolate",
        badge: "Маленький",
        image: "IMG/HotChocolate.webp",
      },
      {
        id: "hot-chocolate-large",
        name: "Гарячий шоколад",
        price: 70,
        group: "hot-chocolate",
        badge: "Великий",
        image: "IMG/HotChocolate.webp",
      },
      {
        id: "tea-bag",
        name: "Чай пакетований",
        price: 40,
        image: "IMG/TeaBag.webp",
      },
      {
        id: "fruit-tea",
        name: "Чай фруктовий",
        price: 65,
        image: "IMG/FruitTea.webp",
      },
      {
        id: "honey",
        name: "Мед",
        price: 10,
        image: "IMG/Honey.webp",
      },
      {
        id: "marshmallow",
        name: "Маршмелоу",
        price: 10,
        image: "IMG/Marshmallow.webp",
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
        image: "IMG/StrawberryPot.webp",
      },
      {
        id: "eskimo",
        name: "Ескімо",
        price: 70,
        image: "IMG/Eskimo.webp",
      },
      {
        id: "trifle",
        name: "Трайфли",
        price: 110,
        image: "IMG/Trifle.webp",
      },
      {
        id: "tiramisu-classic",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Класичний",
        image: "IMG/TiramisuClassic.webp",
      },
      {
        id: "tiramisu-chocolate",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Шоколадний",
        image: "IMG/TiramisuChocolate.webp",
      },
      {
        id: "tiramisu-raspberry",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Малиновий",
        image: "IMG/TiramisuRaspberry.webp",
      },
      {
        id: "tiramisu-strawberry",
        name: "Тірамісу",
        price: 110,
        group: "tiramisu",
        badge: "Полуничний",
        image: "IMG/TiramisuStrawberry.webp",
      },
      {
        id: "napoleon-classic",
        name: "Наполеон",
        price: 110,
        group: "napoleon",
        badge: "Класичний",
        image: "IMG/NapoleonClassic.webp",
      },
      {
        id: "napoleon-pistachio",
        name: "Наполеон",
        price: 110,
        group: "napoleon",
        badge: "Фісташковий",
        image: "IMG/NapoleonPistachio.webp",
      },
      {
        id: "napoleon-chocolate",
        name: "Наполеон",
        price: 110,
        group: "napoleon",
        badge: "Шоколадний",
        image: "IMG/NapoleonChocolate.webp",
      },
      {
        id: "panna-cotta-raspberry",
        name: "Панакота",
        price: 110,
        group: "panna-cotta",
        badge: "Малина",
        image: "IMG/PannaCottaRaspberry.webp",
      },
      {
        id: "panna-cotta-mango",
        name: "Панакота",
        price: 110,
        group: "panna-cotta",
        badge: "Манго-маракуя",
        image: "IMG/PannaCottaMangoPassion.webp",
      },
      {
        id: "honey-cake",
        name: "Медовик",
        price: 110,
        image: "IMG/HoneyCake.webp",
      },
      {
        id: "banana-pudding",
        name: "Банановий пудинг",
        price: 110,
        image: "IMG/BananaPudding.webp",
      },
      {
        id: "potato-cake",
        name: "Тістечко «Картопля»",
        price: 70,
        image: "IMG/PotatoCake.webp",
      },
      {
        id: "mochi-single",
        name: "Моті",
        price: 60,
        group: "mochi",
        badge: "1 шт.",
        image: "IMG/MochiOne.webp",
      },
      {
        id: "mochi-four",
        name: "Моті",
        price: 300,
        group: "mochi",
        badge: "4 шт.",
        image: "IMG/MochiFour.webp",
      },
      {
        id: "mochi-six",
        name: "Моті",
        price: 400,
        group: "mochi",
        badge: "6 шт.",
        image: "IMG/MochiSix.webp",
      },
      {
        id: "bento-cake-standard",
        name: "Бенто торт",
        price: 650,
        group: "bento-cake",
        badge: "Стандарт",
        image: "IMG/BentoCakeStandard.webp",
      },
      {
        id: "bento-cake-xl",
        name: "Бенто торт",
        price: 980,
        group: "bento-cake",
        badge: "XL",
        image: "IMG/BentoCakeXL.webp",
      },
      {
        id: "mousse-cake",
        name: "Мусове тістечко",
        price: 120,
        image: "IMG/MousseCake.webp",
      },
      {
        id: "mousse-torte",
        name: "Мусовий торт",
        price: 650,
        image: "IMG/MousseTorte.webp",
      },
      {
        id: "festive-cupcake",
        name: "Святковий капкейк",
        price: 110,
        image: "IMG/FestiveCupcake.webp",
      },
    ],
  },
  {
    id: "other",
    name: "Інше",
    icon: "spoon",
    type: "other",
    items: [
      {
        id: "wooden-spoon",
        name: "Ложка деревʼяна",
        price: 5,
        image: "IMG/WoodenSpoon.webp",
      },
      {
        id: "postcard",
        name: "Листівка",
        price: 20,
        image: "IMG/Postcard.webp",
      },
      {
        id: "candles-small",
        name: "Свічки",
        price: 40,
        group: "candles",
        badge: "Малі",
        image: "IMG/CandlesSmall.webp",
      },
      {
        id: "candles-large",
        name: "Свічки",
        price: 50,
        group: "candles",
        badge: "Великі",
        image: "IMG/CandlesLarge.webp",
      },
      {
        id: "small-photo",
        name: "Маленьке фото",
        price: 40,
        image: "IMG/SmallPhoto.webp",
      },
      {
        id: "bag-small",
        name: "Пакет",
        price: 10,
        group: "bags",
        badge: "Маленький",
        image: "IMG/BagSmall.webp",
      },
      {
        id: "bag-large",
        name: "Пакет",
        price: 20,
        group: "bags",
        badge: "Великий",
        image: "IMG/BagLarge.webp",
      },
      {
        id: "eskimo-box-small",
        name: "Коробка ескімо",
        price: 20,
        group: "eskimo-boxes",
        badge: "Мала",
        image: "IMG/EskimoBoxSmall.webp",
      },
      {
        id: "eskimo-box-large",
        name: "Коробка ескімо",
        price: 50,
        group: "eskimo-boxes",
        badge: "Більша",
        image: "IMG/EskimoBoxLarge.webp",
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

const IS_LOCAL_MODE =
  window.location.protocol === "file:" ||
  ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
const TEST_MODE_PASSWORD = "555555";
const STORAGE_SUFFIX = IS_LOCAL_MODE ? "-local" : "";
const CITY_STORAGE_KEY = `cake-lovely-city${STORAGE_SUFFIX}`;
const SESSION_STORAGE_KEY = `cake-lovely-session${STORAGE_SUFFIX}`;
const TEST_CITY_STORAGE_KEY = "cake-lovely-city-test";
const TEST_SESSION_STORAGE_KEY = "cake-lovely-session-test";
const LOCAL_SALES_STORAGE_KEY = "cake-lovely-local-sales";
const TEST_SALES_STORAGE_KEY = "cake-lovely-test-sales";

const cities = {
  kharkiv: {
    id: "kharkiv",
    name: "Харків",
    employees: ["Даша", "Настя", "Соня", "Катя", "Тетяна"],
  },
  lutsk: {
    id: "lutsk",
    name: "Луцьк",
    employees: ["Таня", "Соня", "Аня"],
  },
};

let authToken = localStorage.getItem(TEST_SESSION_STORAGE_KEY) || localStorage.getItem(SESSION_STORAGE_KEY) || "";
let pendingCityId = null;

function isTestMode() {
  return authToken.startsWith("test:");
}

function isOfflineMode() {
  return IS_LOCAL_MODE || isTestMode();
}

function activeCityStorageKey() {
  return isTestMode() ? TEST_CITY_STORAGE_KEY : CITY_STORAGE_KEY;
}

function activeSalesStorageKey() {
  return isTestMode() ? TEST_SALES_STORAGE_KEY : LOCAL_SALES_STORAGE_KEY;
}

const savedCityId = localStorage.getItem(activeCityStorageKey());
const initialCityId = cities[savedCityId] && authToken ? savedCityId : null;

function readLocalSales() {
  if (!isOfflineMode()) return { kharkiv: [], lutsk: [] };

  try {
    const storedSales = JSON.parse(localStorage.getItem(activeSalesStorageKey()) || "{}");
    return {
      kharkiv: Array.isArray(storedSales.kharkiv) ? storedSales.kharkiv : [],
      lutsk: Array.isArray(storedSales.lutsk) ? storedSales.lutsk : [],
    };
  } catch {
    return { kharkiv: [], lutsk: [] };
  }
}

const salesByCity = readLocalSales();

const ASSET_VERSION = "20260720-9";

function versionedAssetUrl(path) {
  if (/^https?:\/\//.test(path)) return path;
  return `${path}?v=${ASSET_VERSION}`;
}

const state = {
  cityId: initialCityId,
  categoryId: "cold",
  draftOrder: [],
  payment: "cash",
  employee: "",
  employeeDiscount: false,
  period: "days",
  salesDate: dateInputValue(new Date()),
  salesCalendarMonth: monthStart(new Date()),
  sales: initialCityId ? salesByCity[initialCityId] : [],
};

const money = new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function formatResponsiveMoney(value) {
  if (!window.matchMedia("(max-width: 640px)").matches) return money.format(value);

  const compactValue = new Intl.NumberFormat("uk-UA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: false,
  }).format(value);

  return compactValue.length >= 4 ? `${compactValue.slice(0, 4)}...` : `${compactValue} г.`;
}

function dateInputValue(date) {
  const localDate = new Date(date);
  localDate.setMinutes(localDate.getMinutes() - localDate.getTimezoneOffset());
  return localDate.toISOString().slice(0, 10);
}

function parseDateInput(value) {
  return new Date(`${value}T00:00:00`);
}

function monthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function formatSalesDate(value) {
  return parseDateInput(value).toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" });
}

const EMPLOYEE_DISCOUNTS = {
  cold: 0.5,
  dessert: 0.4,
  "bento-cake": 0.35,
};

const checkoutApiUrl = "/api/checkout";
const authApiUrl = "/api/auth";

function authorizedHeaders(includeContentType = false) {
  return {
    ...(includeContentType ? { "Content-Type": "application/json" } : {}),
    ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
  };
}

async function authenticateCity(city, password) {
  if (IS_LOCAL_MODE) {
    authToken = `local:${city}`;
    localStorage.setItem(SESSION_STORAGE_KEY, authToken);
    return city;
  }

  if (password === TEST_MODE_PASSWORD) {
    authToken = `test:${city}`;
    localStorage.setItem(TEST_SESSION_STORAGE_KEY, authToken);
    localStorage.setItem(TEST_CITY_STORAGE_KEY, city);
    localStorage.removeItem(SESSION_STORAGE_KEY);
    localStorage.removeItem(CITY_STORAGE_KEY);
    const storedSales = readLocalSales();
    salesByCity.kharkiv = storedSales.kharkiv;
    salesByCity.lutsk = storedSales.lutsk;
    return city;
  }

  const response = await fetch(authApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city, password }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "Не вдалося увійти");
  authToken = result.token;
  localStorage.setItem(SESSION_STORAGE_KEY, authToken);
  localStorage.removeItem(TEST_SESSION_STORAGE_KEY);
  localStorage.removeItem(TEST_CITY_STORAGE_KEY);
  return result.city;
}

async function verifySession(city) {
  if (IS_LOCAL_MODE) return authToken === `local:${city}`;
  if (isTestMode()) return authToken === `test:${city}`;

  const response = await fetch(authApiUrl, { headers: authorizedHeaders() });
  const result = await response.json().catch(() => ({}));
  return response.ok && result.city === city;
}

async function requestCheckout(payload) {
  if (isOfflineMode()) {
    return {
      ...payload,
      id: crypto.randomUUID(),
      date: payload.date || new Date().toISOString(),
    };
  }

  const response = await fetch(checkoutApiUrl, {
    method: "POST",
    headers: authorizedHeaders(true),
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || "Не вдалося оформити операцію");
  }

  return result.sale;
}

async function deleteCheckout(id) {
  if (isOfflineMode()) return;

  const url = `${checkoutApiUrl}?id=${encodeURIComponent(id)}&city=${encodeURIComponent(state.cityId)}`;
  const response = await fetch(url, { method: "DELETE", headers: authorizedHeaders() });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || "Не вдалося видалити операцію");
  }
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

function persistLocalSales() {
  if (!isOfflineMode()) return;
  salesByCity[state.cityId] = state.sales;
  localStorage.setItem(activeSalesStorageKey(), JSON.stringify(salesByCity));
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
  if (isOfflineMode()) {
    state.sales = (salesByCity[cityId] || []).map(normalizeSale);
    salesByCity[cityId] = state.sales;
    return;
  }

  const response = await fetch(`${checkoutApiUrl}?city=${encodeURIComponent(cityId)}`, { headers: authorizedHeaders() });
  if (!response.ok) {
    const error = new Error(response.status === 401 ? "Сесія завершена" : "Не вдалося завантажити продажі філії");
    error.status = response.status;
    throw error;
  }
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
  if (persist) localStorage.setItem(activeCityStorageKey(), cityId);
  renderWorkspace();

  try {
    await loadCitySales(cityId);
    renderWorkspace();
  } catch (error) {
    if (error.status === 401 || error.status === 403) {
      showCitySelection();
      return;
    }
    console.warn(error.message);
  }

  const remainingDelay = Math.max(0, minimumLoaderTime - (Date.now() - startedAt));
  window.setTimeout(enterWorkspace, remainingDelay);
}

function showCitySelection() {
  localStorage.removeItem(CITY_STORAGE_KEY);
  localStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem(TEST_CITY_STORAGE_KEY);
  localStorage.removeItem(TEST_SESSION_STORAGE_KEY);
  authToken = "";
  pendingCityId = null;
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
  els.cityGrid.hidden = false;
  els.cityLogin.hidden = true;
  els.cityPassword.value = "";
  els.cityLoginError.textContent = "";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function draftOrderTotal() {
  return state.draftOrder.reduce((sum, item) => sum + draftItemTotal(item), 0);
}

function draftItemDiscount(item) {
  if (!state.employeeDiscount) return 0;
  if (item.group && EMPLOYEE_DISCOUNTS[item.group]) return EMPLOYEE_DISCOUNTS[item.group];
  if (item.type === "dessert") return EMPLOYEE_DISCOUNTS.dessert;
  return EMPLOYEE_DISCOUNTS[item.categoryId] || 0;
}

function draftItemTotal(item) {
  return Math.round(item.price * item.quantity * (1 - draftItemDiscount(item)) * 100) / 100;
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
  state.employeeDiscount = false;
  els.employeeDiscount.checked = false;
  els.cashInput.value = "";
  els.employeeValue.innerHTML = 'Ім’я співробітника <span class="required-mark" aria-hidden="true">*</span>';
  els.employeePicker.classList.remove("is-open");
  els.employeePicker.classList.remove("is-invalid");
  els.employeeTrigger.removeAttribute("aria-invalid");
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
    group: product.group || "",
    categoryId: state.categoryId,
    type: currentCategory().type,
    quantity: 1,
  });
}

const els = {
  platformLoader: document.querySelector("#platformLoader"),
  cityPicker: document.querySelector("#cityPicker"),
  cityGrid: document.querySelector(".city-grid"),
  cityLogin: document.querySelector("#cityLogin"),
  cityLoginTitle: document.querySelector("#cityLoginTitle"),
  cityLoginBack: document.querySelector("#cityLoginBack"),
  cityPassword: document.querySelector("#cityPassword"),
  cityLoginError: document.querySelector("#cityLoginError"),
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
  employeeDiscount: document.querySelector("#employeeDiscount"),
  logoutButtons: document.querySelectorAll("[data-logout]"),
  topUpAmount: document.querySelector("#topUpAmount"),
  topUpAmountError: document.querySelector("#topUpAmountError"),
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
  salesDatePicker: document.querySelector("#salesDatePicker"),
  salesDateTrigger: document.querySelector("#salesDateTrigger"),
  salesDateValue: document.querySelector("#salesDateValue"),
  salesCalendar: document.querySelector("#salesCalendar"),
  salesCalendarTitle: document.querySelector("#salesCalendarTitle"),
  salesCalendarGrid: document.querySelector("#salesCalendarGrid"),
  salesCalendarPrev: document.querySelector("#salesCalendarPrev"),
  salesCalendarNext: document.querySelector("#salesCalendarNext"),
  salesCalendarToday: document.querySelector("#salesCalendarToday"),
};

function currentCategory() {
  return categories.find((category) => category.id === state.categoryId);
}

function categoryIcon(kind) {
  if (kind === "spoon") {
    return `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <ellipse cx="8.2" cy="6.4" rx="3.2" ry="4.2" transform="rotate(-38 8.2 6.4)" />
        <path d="m10.6 9.5 8.2 9.3" />
        <path d="M18.8 18.8c.6.7.5 1.5-.1 2-.6.5-1.4.4-2-.2l-8-9.1" />
      </svg>
    `;
  }

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
  const category = currentCategory();
  const items = category.items;
  const renderedGroups = new Set();
  const productCard = (product) => {
    return `
        <button class="product-card" type="button" data-product="${product.id}">
          <span class="product-media">
            <img class="product-image" src="${versionedAssetUrl(product.image)}" alt="${product.name}" loading="lazy" decoding="async" />
            ${product.isDouble || product.badge ? `<span class="product-badge">${product.badge || "Подвійний"}</span>` : ""}
          </span>
          <div>
            <h2 class="card-title${product.name.length > 16 ? " is-adaptive-title" : ""}">${product.name}</h2>
            <p class="product-price">${money.format(product.price)}</p>
          </div>
        </button>
    `;
  };

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
  els.topUpAmount.removeAttribute("aria-invalid");
  els.topUpAmountError.classList.remove("is-visible");
  els.topUpDialog.showModal();
}

function renderOrder() {
  const total = draftOrderTotal();
  const canCancelOrder = draftPositionCount() > 1;
  els.orderTitle.textContent = "Новий чек";
  els.orderMeta.textContent = draftMetaLabel();
  els.employeeDiscount.checked = state.employeeDiscount;
  els.draftItems.innerHTML = state.draftOrder
    .map(
      (item) => `
        <article class="draft-item" data-draft-item="${item.id}">
          <button class="draft-remove" type="button" data-remove-item="${item.id}" aria-label="Видалити ${item.name}">×</button>
          <img class="draft-image" src="${versionedAssetUrl(item.image)}" alt="${item.name}" decoding="async" />
          <div class="draft-info">
            <div class="draft-copy">
              <p class="card-title">${item.name}</p>
              ${item.badge ? `<span class="draft-badge">${item.badge}</span>` : ""}
              ${draftItemDiscount(item) ? `<span class="draft-badge draft-discount-badge">−${Math.round(draftItemDiscount(item) * 100)}%</span>` : ""}
            </div>
            <div class="draft-quantity">
              <button class="draft-step-button draft-step-button-minus" type="button" data-step-item="${item.id}" data-step-action="minus" aria-label="Зменшити ${item.name}">−</button>
              <span class="draft-count">${item.quantity}</span>
              <button class="draft-step-button draft-step-button-plus" type="button" data-step-item="${item.id}" data-step-action="plus" aria-label="Збільшити ${item.name}">+</button>
            </div>
          </div>
          <p class="draft-price">${money.format(draftItemTotal(item))}</p>
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
  if (!state.employee) {
    els.employeePicker.classList.add("is-invalid", "is-open");
    els.employeeTrigger.setAttribute("aria-invalid", "true");
    els.employeeTrigger.setAttribute("aria-expanded", "true");
    els.employeeTrigger.focus();
    return;
  }

  const checkoutDate = new Date().toISOString();
  const createdSales = await Promise.all(
    state.draftOrder.map((item) =>
      requestCheckout({
        city: state.cityId,
        name: item.name,
        type: item.type,
        quantity: item.quantity,
        total: draftItemTotal(item),
        payment: state.payment,
        employee: state.employee,
        date: checkoutDate,
      }),
    ),
  );

  createdSales.reverse().forEach((sale) => {
    state.sales.unshift(normalizeSale(sale));
  });
  persistLocalSales();

  resetDraftOrder();
  els.orderDialog.close();
  renderStats();
}

async function confirmTopUp() {
  const amount = Number(els.topUpAmount.value || 0);
  if (amount <= 0) {
    els.topUpAmount.setAttribute("aria-invalid", "true");
    els.topUpAmountError.classList.add("is-visible");
    els.topUpAmount.focus();
    return;
  }
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
  persistLocalSales();
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
  const displayedRevenue = isDailyPeriod ? todayRevenue : monthRevenue;
  els.totalRevenue.textContent = formatResponsiveMoney(displayedRevenue);
  els.totalRevenue.title = money.format(displayedRevenue);
  els.bestSeller.textContent = bestSeller;
  els.todayRevenue.textContent = money.format(todayRevenue);
  els.todayRevenue.title = money.format(todayRevenue);
  els.todayDrinks.textContent = todaySales.filter((sale) => sale.type === "drink").reduce((sum, sale) => sum + sale.quantity, 0);
  els.todayDesserts.textContent = todaySales.filter((sale) => sale.type === "dessert").reduce((sum, sale) => sum + sale.quantity, 0);
  renderChart();
  renderRecentSales();
}

function renderChart() {
  const allPoints = state.period === "days" ? buildDayPoints() : buildMonthPoints();
  const isMobileChart = window.matchMedia("(max-width: 640px)").matches;
  const mobileDayLabels = ["Позавчора", "Вчора", "Сьогодні"];
  const points = isMobileChart
    ? allPoints.slice(-3).map((point, index) => ({
        ...point,
        label: state.period === "days" ? mobileDayLabels[index] : point.label,
      }))
    : allPoints;
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

function setSalesDate(value) {
  state.salesDate = value;
  state.salesCalendarMonth = monthStart(parseDateInput(value));
  closeSalesCalendar();
  renderRecentSales();
}

function toggleSalesCalendar(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : els.salesCalendar.hidden;
  els.salesCalendar.hidden = !shouldOpen;
  els.salesDateTrigger.setAttribute("aria-expanded", String(shouldOpen));
  if (shouldOpen) renderSalesCalendar();
}

function closeSalesCalendar() {
  els.salesCalendar.hidden = true;
  els.salesDateTrigger.setAttribute("aria-expanded", "false");
}

function renderSalesCalendar() {
  els.salesDateValue.textContent = formatSalesDate(state.salesDate);
  els.salesCalendarTitle.textContent = state.salesCalendarMonth.toLocaleDateString("uk-UA", {
    month: "long",
    year: "numeric",
  });

  const firstDay = monthStart(state.salesCalendarMonth);
  const gridStart = new Date(firstDay);
  gridStart.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7));
  const selected = state.salesDate;
  const today = dateInputValue(new Date());

  els.salesCalendarGrid.innerHTML = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    const value = dateInputValue(date);
    const isMuted = date.getMonth() !== state.salesCalendarMonth.getMonth();
    return `
      <button
        class="sales-calendar-day${isMuted ? " is-muted" : ""}${value === selected ? " is-selected" : ""}${value === today ? " is-today" : ""}"
        type="button"
        data-sales-date="${value}"
      >
        ${date.getDate()}
      </button>
    `;
  }).join("");
}

function renderRecentSales() {
  renderSalesCalendar();

  if (!state.sales.length) {
    els.recentSales.innerHTML = `<p class="card-text">Продажів поки немає.</p>`;
    return;
  }

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const visibleSales = state.sales.filter((sale) => dateInputValue(sale.date) === state.salesDate);

  if (!visibleSales.length) {
    const selectedDate = new Date(`${state.salesDate}T00:00:00`);
    els.recentSales.innerHTML = `<p class="card-text">За ${selectedDate.toLocaleDateString("uk-UA", { day: "2-digit", month: "2-digit", year: "numeric" })} продажів немає.</p>`;
    return;
  }

  els.recentSales.innerHTML = visibleSales
    .map(
      (sale) => `
        <div
          class="sale-row"
          ${isMobile ? `data-sale-toggle role="button" tabindex="0" aria-expanded="false" aria-controls="sale-details-${sale.id}"` : ""}
        >
          <div class="sale-product">
            <p class="card-title">${sale.name}</p>
            <p class="card-text">
              ${new Date(sale.date).toLocaleString("uk-UA", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}
              <span class="sale-product-employee">· ${sale.employee || "—"}</span>
            </p>
          </div>
          <p class="price-label sale-type">${sale.type === "adjustment" ? "Доплата" : "Продаж"}</p>
          <p class="sale-payment">${sale.type === "adjustment" ? "—" : sale.payment === "cash" ? "Готівка" : "Картка"}</p>
          <p class="price-label sale-employee">${sale.employee || "—"}</p>
          <p class="price-label sale-order">${sale.type === "adjustment" ? sale.orderNumber || "—" : "—"}</p>
          <p class="price-label sale-quantity">${sale.quantity} шт.</p>
          <p class="product-price sale-total">${money.format(sale.total)}</p>
          <button class="sale-delete" type="button" data-delete="${sale.id}" aria-label="Видалити продаж" title="Видалити"></button>
          <div class="sale-details" id="sale-details-${sale.id}">
            <div class="sale-detail">
              <span class="sale-detail-label">Операція</span>
              <strong>${sale.type === "adjustment" ? "Доплата" : "Продаж"}</strong>
            </div>
            <div class="sale-detail">
              <span class="sale-detail-label">Оплата</span>
              <strong>${sale.type === "adjustment" ? "—" : sale.payment === "cash" ? "Готівка" : "Картка"}</strong>
            </div>
            <div class="sale-detail">
              <span class="sale-detail-label">Співробітник</span>
              <strong>${sale.employee || "—"}</strong>
            </div>
            <div class="sale-detail">
              <span class="sale-detail-label">Кількість</span>
              <strong>${sale.quantity} шт.</strong>
            </div>
            <div class="sale-detail sale-detail-order">
              <span class="sale-detail-label">Номер замовлення</span>
              <strong>${sale.orderNumber || "—"}</strong>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
}

function toggleMobileSaleRow(row) {
  if (!row || !window.matchMedia("(max-width: 640px)").matches) return;
  const expanded = row.classList.toggle("is-expanded");
  row.setAttribute("aria-expanded", String(expanded));
}

els.cityPicker.addEventListener("click", (event) => {
  const cityButton = event.target.closest("[data-city]");
  if (!cityButton) return;
  pendingCityId = cityButton.dataset.city;
  els.cityGrid.hidden = true;
  els.cityLogin.hidden = false;
  els.cityLoginTitle.textContent = `Вхід: ${cities[pendingCityId].name}`;
  els.cityLoginError.textContent = "";
  els.cityPassword.value = "";
  els.cityPassword.focus();
});

els.cityLoginBack.addEventListener("click", () => {
  pendingCityId = null;
  els.cityGrid.hidden = false;
  els.cityLogin.hidden = true;
  els.cityLoginError.textContent = "";
});

els.cityLogin.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!pendingCityId) return;
  const submitButton = els.cityLogin.querySelector("[type='submit']");
  submitButton.disabled = true;
  els.cityLoginError.textContent = "";

  try {
    const cityId = await authenticateCity(pendingCityId, els.cityPassword.value);
    await selectCity(cityId);
  } catch (error) {
    els.cityLoginError.textContent = error.message;
    els.cityPassword.select();
  } finally {
    submitButton.disabled = false;
  }
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

els.employeeDiscount.addEventListener("change", () => {
  state.employeeDiscount = els.employeeDiscount.checked;
  renderOrder();
});

els.salesDateTrigger.addEventListener("click", () => {
  toggleSalesCalendar();
});

els.salesCalendarPrev.addEventListener("click", () => {
  state.salesCalendarMonth.setMonth(state.salesCalendarMonth.getMonth() - 1);
  renderSalesCalendar();
});

els.salesCalendarNext.addEventListener("click", () => {
  state.salesCalendarMonth.setMonth(state.salesCalendarMonth.getMonth() + 1);
  renderSalesCalendar();
});

els.salesCalendarToday.addEventListener("click", () => {
  setSalesDate(dateInputValue(new Date()));
});

els.salesCalendarGrid.addEventListener("click", (event) => {
  const dayButton = event.target.closest("[data-sales-date]");
  if (!dayButton) return;
  setSalesDate(dayButton.dataset.salesDate);
});

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
  els.employeePicker.classList.remove("is-open", "is-invalid");
  els.employeeTrigger.removeAttribute("aria-invalid");
  els.employeeTrigger.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (els.employeePicker.contains(event.target)) return;
  els.employeePicker.classList.remove("is-open");
  els.employeeTrigger.setAttribute("aria-expanded", "false");
});

document.addEventListener("click", (event) => {
  if (els.salesDatePicker.contains(event.target)) return;
  closeSalesCalendar();
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

els.topUpAmount.addEventListener("input", () => {
  if (Number(els.topUpAmount.value || 0) <= 0) return;
  els.topUpAmount.removeAttribute("aria-invalid");
  els.topUpAmountError.classList.remove("is-visible");
});

document.querySelectorAll(".app-view").forEach((button) => {
  button.addEventListener("click", () => {
    switchView(button.dataset.view);
    document.querySelectorAll(".app-menu").forEach((menu) => {
      menu.classList.remove("is-open");
      menu.closest(".sales-sticky, .stats-sticky")?.classList.remove("is-menu-open");
    });
    document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Відкрити меню");
    });
  });
});

document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const menu = toggle.closest(".app-menu");
    const isOpen = menu.classList.toggle("is-open");
    menu.closest(".sales-sticky, .stats-sticky")?.classList.toggle("is-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
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
window.matchMedia("(max-width: 640px)").addEventListener("change", renderStats);

els.recentSales.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) {
    toggleMobileSaleRow(event.target.closest("[data-sale-toggle]"));
    return;
  }

  event.stopPropagation();
  button.disabled = true;

  try {
    await deleteCheckout(button.dataset.delete);
    state.sales = state.sales.filter((sale) => sale.id !== button.dataset.delete);
    salesByCity[state.cityId] = state.sales;
    persistLocalSales();
    renderStats();
  } catch (error) {
    button.disabled = false;
    window.alert(`Помилка видалення: ${error.message}`);
  }
});

els.recentSales.addEventListener("keydown", (event) => {
  if (event.target.closest("[data-delete]")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  const row = event.target.closest("[data-sale-toggle]");
  if (!row) return;
  event.preventDefault();
  toggleMobileSaleRow(row);
});

if (initialCityId) {
  verifySession(initialCityId)
    .then((isValid) => {
      if (isValid) return selectCity(initialCityId, { persist: false, minimumLoaderTime: 2500 });
      showCitySelection();
    })
    .catch(showCitySelection);
} else {
  window.setTimeout(() => {
    els.platformLoader.classList.add("is-city-ready");
  }, 1100);
}
