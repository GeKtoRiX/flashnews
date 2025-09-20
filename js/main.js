// Функция инициализации бургер-меню.
function initBurgerMenu() {
  // Находим элемент меню по классу .menu.
  const menu = document.querySelector(".menu");

  // Если элемента нет на странице — прерываем выполнение.
  if (!menu) {
    return;
  }

  // Вешаем обработчик клика на меню.
  menu.addEventListener("click", () => {
    try {
      // Переключаем класс menu-open (открытие меню).
      menu.classList.toggle("menu-open");

      // Переключаем класс menu-close (закрытие меню).
      menu.classList.toggle("menu-close");
    } catch (error) {
      // Логируем ошибку, если что-то пойдёт не так.
      console.error(error);
    }
  });
}

// Функция для переключения видов списка новостей.
function initNewsListView() {
  // Находим кнопки "список" и "плитка", а также контейнер списка.
  const rowViewButton = document.querySelector(".row-view");
  const tileViewButton = document.querySelector(".tile-view");
  const newsList = document.querySelector(".news-list");

  // Если хотя бы одного элемента нет — прекращаем выполнение.
  if (!rowViewButton || !tileViewButton || !newsList) {
    return;
  }

  // Обработчик клика по кнопке "список".
  rowViewButton.addEventListener("click", () => {
    try {
      // Подсвечиваем кнопку "список".
      rowViewButton.classList.add("view-checked");

      // Убираем подсветку у кнопки "плитка".
      tileViewButton.classList.remove("view-checked");

      // Убираем класс плиточного отображения у списка.
      newsList.classList.remove("list-tiles-view");
    } catch (error) {
      console.error(error);
    }
  });

  // Обработчик клика по кнопке "плитка".
  tileViewButton.addEventListener("click", () => {
    try {
      // Убираем подсветку у кнопки "список".
      rowViewButton.classList.remove("view-checked");

      // Подсвечиваем кнопку "плитка".
      tileViewButton.classList.add("view-checked");

      // Добавляем класс плиточного отображения списку.
      newsList.classList.add("list-tiles-view");
    } catch (error) {
      console.error(error);
    }
  });
}

// Функция для работы с баннером согласия на cookies.
function initCookiesAgreement() {
  // Находим баннер и кнопку закрытия
  const cookies = document.querySelector(".cookies-agreement");
  const cookiesButton = document.querySelector(".button");

  // Если элементов нет — прекращаем выполнение.
  if (!cookies || !cookiesButton) {
    return;
  }

  // При клике на кнопку закрываем баннер.
  cookiesButton.addEventListener("click", () => {
    try {
      // Добавляем класс скрытия баннера
      cookies.classList.add("cookies-agreement-closed");
    } catch (error) {
      console.error(error);
    }
  });
}

// Функция переключения темы (по кнопке .page-theme).
function changeTheme() {
  // Находим корневой элемент страницы и кнопку переключения.
  const pageElement = document.querySelector(".page");
  const themeToggleButton = document.querySelector(".page-theme");

  // Если элементов нет — прекращаем выполнение.
  if (!pageElement || !themeToggleButton) {
    return;
  }

  // По клику переключаем классы тем.
  themeToggleButton.addEventListener("click", () => {
    pageElement.classList.toggle("light-theme");
    pageElement.classList.toggle("dark-theme");
  });
}

// Функция переключения темы (по кнопке .theme-button)
function changeThemeSub() {
  const pageElement = document.querySelector(".page");
  const themeToggleButton = document.querySelector(".theme-button");

  if (!pageElement || !themeToggleButton) {
    return;
  }

  themeToggleButton.addEventListener("click", () => {
    pageElement.classList.toggle("light-theme");
    pageElement.classList.toggle("dark-theme");
  });
}

// === Subscription Page ===

// Функция для обработки формы подписки
function sendForm() {
  // Находим элемент для вывода сообщения.
  let textMessage = document.querySelector(".subscription-message");

  // Находим форму подписки.
  let form = document.querySelector('.subscription');

  // Находим input с email.
  let email = document.querySelector('.subscription-email');

  // Вешаем обработчик на отправку формы.
  form.onsubmit = function (event) {
    // Отключаем стандартное действие (перезагрузка страницы).
    event.preventDefault();

    // Вставляем сообщение с введённым email.
    textMessage.textContent =
      "Адрес " + email.value + " добавлен в список получателей рассылки!";
  }
}

// Когда DOM полностью загружен(DOMContentLoaded).
document.addEventListener("DOMContentLoaded", () => {
  // Инициализируем все функции
  initBurgerMenu(); // Открытия "Бургер-Меню".
  initNewsListView(); // Изменение типа отображения списка.
  initCookiesAgreement(); // Обработка взаимодействия с cookie элементом.
  changeTheme(); // Изменение темы основной страницы.
  changeThemeSub(); // Изменение темы страницы подписки.
  sendForm(); // Запускаем обработку формы.
});
