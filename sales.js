const categories = [
  {
    id: "cold",
    name: "Холодные напитки",
    icon: "snowflake",
    type: "drink",
    items: [
      {
        id: "bubble-tea",
        name: "Бабл ти",
        price: 140,
        image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "lemonade",
        name: "Лимонад",
        price: 95,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "iced-coffee",
        name: "Холодный кофе",
        price: 120,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "iced-matcha",
        name: "Айс матча",
        price: 135,
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "orange-fresh",
        name: "Апельсиновый фреш",
        price: 125,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "milkshake",
        name: "Милкшейк",
        price: 145,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "cold-cocoa",
        name: "Холодное какао",
        price: 115,
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "berry-ice-tea",
        name: "Ягодный айс ти",
        price: 105,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "mojito",
        name: "Мохито",
        price: 110,
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "smoothie",
        name: "Смузи",
        price: 150,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "tonic-espresso",
        name: "Эспрессо тоник",
        price: 140,
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "hot",
    name: "Горячие напитки",
    icon: "flame",
    type: "drink",
    items: [
      {
        id: "cappuccino",
        name: "Капучино",
        price: 110,
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "latte",
        name: "Латте",
        price: 115,
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "tea",
        name: "Чай",
        price: 80,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "desserts",
    name: "Десерты",
    icon: "cupcake",
    type: "dessert",
    items: [
      {
        id: "cheesecake",
        name: "Чизкейк",
        price: 130,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "croissant",
        name: "Круассан",
        price: 90,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "brownie",
        name: "Брауни",
        price: 100,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
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

const state = {
  categoryId: "cold",
  product: null,
  quantity: 1,
  payment: "cash",
  period: "days",
  topUpOrderNumber: 1,
  sales: [
    saleSeed("Бабл ти", "drink", 2, 280, "card", 0),
    saleSeed("Лимонад", "drink", 1, 95, "cash", 1),
    saleSeed("Чизкейк", "dessert", 1, 130, "card", 2),
    saleSeed("Капучино", "drink", 3, 330, "cash", 3),
  ],
};

const money = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "UAH",
  maximumFractionDigits: 0,
});

function saleSeed(name, type, quantity, total, payment, daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return {
    id: crypto.randomUUID(),
    name,
    type,
    quantity,
    total,
    payment,
    date: date.toISOString(),
  };
}

const els = {
  categoryTabs: document.querySelector("#categoryTabs"),
  productGrid: document.querySelector("#productGrid"),
  orderDialog: document.querySelector("#orderDialog"),
  topUpDialog: document.querySelector("#topUpDialog"),
  orderForm: document.querySelector("#orderForm"),
  topUpForm: document.querySelector("#topUpForm"),
  orderImage: document.querySelector("#orderImage"),
  orderTitle: document.querySelector("#orderTitle"),
  orderPrice: document.querySelector("#orderPrice"),
  quantityValue: document.querySelector("#quantityValue"),
  orderTotal: document.querySelector("#orderTotal"),
  cashInput: document.querySelector("#cashInput"),
  topUpAmount: document.querySelector("#topUpAmount"),
  topUpOrderNumber: document.querySelector("#topUpOrderNumber"),
  changeValue: document.querySelector("#changeValue"),
  changeRow: document.querySelector("#changeRow"),
  cashField: document.querySelector("#cashField"),
  salesScreen: document.querySelector("#salesScreen"),
  statsScreen: document.querySelector("#statsScreen"),
  drinksSold: document.querySelector("#drinksSold"),
  dessertsSold: document.querySelector("#dessertsSold"),
  totalRevenue: document.querySelector("#totalRevenue"),
  todayRevenue: document.querySelector("#todayRevenue"),
  statsHeaderRevenue: document.querySelector("#statsHeaderRevenue"),
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
  if (currentCategory().id === "top-up") {
    els.productGrid.innerHTML = "";
    return;
  }

  els.productGrid.innerHTML = currentCategory().items
    .map(
      (product) => `
        <button class="product-card" type="button" data-product="${product.id}">
          <img class="product-image" src="${product.image}" alt="${product.name}" />
          <div>
            <h2 class="card-title">${product.name}</h2>
            <p class="product-price">${money.format(product.price)}</p>
          </div>
        </button>
      `,
    )
    .join("");
}

function openOrder(product) {
  state.product = product;
  state.quantity = 1;
  state.payment = "cash";
  els.orderImage.src = product.image;
  els.orderImage.alt = product.name;
  els.orderTitle.textContent = product.name;
  els.orderPrice.textContent = `${money.format(product.price)} за единицу`;
  els.cashInput.value = "";
  renderOrder();
  els.orderDialog.showModal();
}

function openTopUp() {
  state.topUpOrderNumber = state.sales.length + 1;
  els.topUpOrderNumber.textContent = String(state.topUpOrderNumber);
  els.topUpAmount.value = "";
  els.topUpDialog.showModal();
}

function renderOrder() {
  const total = state.product.price * state.quantity;
  els.quantityValue.textContent = state.quantity;
  els.orderTotal.textContent = money.format(total);
  document.querySelectorAll(".payment-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.payment === state.payment);
  });
  const isCash = state.payment === "cash";
  els.cashField.classList.toggle("is-hidden", !isCash);
  els.changeRow.classList.toggle("is-hidden", !isCash);
  const cash = Number(els.cashInput.value || 0);
  els.changeValue.textContent = money.format(Math.max(0, cash - total));
}

function confirmOrder() {
  const total = state.product.price * state.quantity;
  state.sales.unshift({
    id: crypto.randomUUID(),
    name: state.product.name,
    type: currentCategory().type,
    quantity: state.quantity,
    total,
    payment: state.payment,
    date: new Date().toISOString(),
  });
  els.orderDialog.close();
  renderStats();
}

function confirmTopUp() {
  const amount = Number(els.topUpAmount.value || 0);
  if (!amount) return;

  state.sales.unshift({
    id: crypto.randomUUID(),
    name: `Доплата №${state.topUpOrderNumber}`,
    type: "adjustment",
    quantity: 1,
    total: amount,
    payment: "adjustment",
    date: new Date().toISOString(),
  });
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

function renderStats() {
  const drinks = state.sales.filter((sale) => sale.type === "drink").reduce((sum, sale) => sum + sale.quantity, 0);
  const desserts = state.sales.filter((sale) => sale.type === "dessert").reduce((sum, sale) => sum + sale.quantity, 0);
  const revenue = state.sales.reduce((sum, sale) => sum + sale.total, 0);
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  const todayRevenue = state.sales
    .filter((sale) => {
      const saleDate = new Date(sale.date);
      return `${saleDate.getFullYear()}-${saleDate.getMonth()}-${saleDate.getDate()}` === todayKey;
    })
    .reduce((sum, sale) => sum + sale.total, 0);
  els.drinksSold.textContent = drinks;
  els.dessertsSold.textContent = desserts;
  els.totalRevenue.textContent = money.format(revenue);
  els.todayRevenue.textContent = money.format(todayRevenue);
  els.statsHeaderRevenue.textContent = money.format(todayRevenue);
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
      label: date.toLocaleDateString("ru-RU", { weekday: "short" }),
      total: state.sales.filter((sale) => new Date(sale.date).toDateString() === key).reduce((sum, sale) => sum + sale.total, 0),
    };
  });
}

function buildMonthPoints() {
  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (5 - index));
    return {
      label: date.toLocaleDateString("ru-RU", { month: "short" }),
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
    els.recentSales.innerHTML = `<p class="card-text">Продаж пока нет.</p>`;
    return;
  }

  els.recentSales.innerHTML = state.sales
    .slice(0, 10)
    .map(
      (sale) => `
        <div class="sale-row">
          <div>
            <p class="card-title">${sale.name}</p>
            <p class="card-text">${new Date(sale.date).toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })}</p>
          </div>
          <p class="sale-payment">${sale.payment === "cash" ? "Наличка" : sale.payment === "card" ? "Карта" : "Доплата"}</p>
          <p class="price-label">${sale.quantity} шт.</p>
          <p class="product-price">${money.format(sale.total)}</p>
          <button class="button button-link" type="button" data-delete="${sale.id}">Удалить</button>
        </div>
      `,
    )
    .join("");
}

els.categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.categoryId = button.dataset.category;
  renderCategories();
  renderProducts();
  if (state.categoryId === "top-up") openTopUp();
});

els.productGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-product]");
  if (!card) return;
  const product = currentCategory().items.find((item) => item.id === card.dataset.product);
  if (currentCategory().id === "top-up") {
    openTopUp();
    return;
  }
  openOrder(product);
});

document.querySelector("#minusQty").addEventListener("click", () => {
  state.quantity = Math.max(1, state.quantity - 1);
  renderOrder();
});

document.querySelector("#plusQty").addEventListener("click", () => {
  state.quantity += 1;
  renderOrder();
});

document.querySelector("#closeDialog").addEventListener("click", () => els.orderDialog.close());
document.querySelector("#closeTopUpDialog").addEventListener("click", () => els.topUpDialog.close());

document.querySelectorAll(".payment-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.payment = button.dataset.payment;
    renderOrder();
  });
});

els.cashInput.addEventListener("input", renderOrder);

els.orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmOrder();
});

els.topUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmTopUp();
});

document.querySelectorAll(".app-view").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

document.querySelectorAll(".period-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.period = button.dataset.period;
    document.querySelectorAll(".period-button").forEach((item) => item.classList.toggle("is-active", item === button));
    renderChart();
  });
});

els.recentSales.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete]");
  if (!button) return;
  state.sales = state.sales.filter((sale) => sale.id !== button.dataset.delete);
  renderStats();
});

renderCategories();
renderProducts();
renderStats();
