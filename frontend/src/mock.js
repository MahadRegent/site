// Mock data for VORTEXHOST

export const mockPlans = [
  {
    id: 1,
    name: "Starter",
    price: 299,
    ram: "2GB",
    disk: "10GB SSD",
    cpu: "1 Core",
    region: "Moscow",
    features: [
      "Автоматическое создание бэкапов",
      "Защита от DDoS",
      "24/7 техподдержка",
      "Панель управления",
      "Установка плагинов"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 599,
    ram: "4GB",
    disk: "25GB SSD",
    cpu: "2 Core",
    region: "Moscow",
    features: [
      "Автоматическое создание бэкапов",
      "Защита от DDoS",
      "24/7 техподдержка",
      "Панель управления",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Professional",
    price: 999,
    ram: "8GB",
    disk: "50GB SSD",
    cpu: "4 Core",
    region: "Moscow",
    features: [
      "Автоматическое создание бэкапов",
      "Защита от DDoS",
      "24/7 техподдержка",
      "Панель управления",
      "Установка плагинов",
      "Приоритетная поддержка",
      "Мониторинг производительности",
      "Выделенные ресурсы",
      "Кастомные конфигурации"
    ],
    popular: false
  }
];

export const mockRegions = [
  { id: 1, name: "Moscow", flag: "🇷🇺" },
  { id: 2, name: "Saint Petersburg", flag: "🇷🇺" },
  { id: 3, name: "Frankfurt", flag: "🇩🇪" },
  { id: 4, name: "Amsterdam", flag: "🇳🇱" },
  { id: 5, name: "London", flag: "🇬🇧" }
];

export const mockFeatures = [
  {
    id: 1,
    title: "Мгновенная настройка",
    description: "Ваш сервер будет готов к игре через 30 секунд после оплаты",
    icon: "⚡"
  },
  {
    id: 2,
    title: "Защита от DDoS",
    description: "Надежная защита от атак до 100 Гбит/с",
    icon: "🛡️"
  },
  {
    id: 3,
    title: "Панель управления",
    description: "Интуитивная панель для управления сервером",
    icon: "⚙️"
  },
  {
    id: 4,
    title: "Автобэкапы",
    description: "Ежедневные автоматические резервные копии",
    icon: "💾"
  },
  {
    id: 5,
    title: "24/7 Поддержка",
    description: "Круглосуточная техническая поддержка",
    icon: "🎧"
  },
  {
    id: 6,
    title: "Моды и плагины",
    description: "Поддержка Forge, Fabric, Bukkit, Spigot",
    icon: "🔧"
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Алексей М.",
    avatar: "👨‍💻",
    text: "Отличный хостинг! Сервер работает стабильно, поддержка отвечает быстро. Рекомендую!",
    rating: 5
  },
  {
    id: 2,
    name: "Мария К.",
    avatar: "👩‍🎮",
    text: "Использую уже полгода для своего сервера выживания. Все работает отлично!",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий В.",
    avatar: "🎮",
    text: "Панель управления очень удобная, все настройки понятны даже новичку.",
    rating: 4
  }
];

export const mockFAQ = [
  {
    id: 1,
    question: "Как быстро активируется сервер?",
    answer: "Сервер активируется автоматически в течение 30 секунд после подтверждения оплаты."
  },
  {
    id: 2,
    question: "Какие версии Minecraft поддерживаются?",
    answer: "Мы поддерживаем все версии Minecraft начиная с 1.7.10 и до последней версии."
  },
  {
    id: 3,
    question: "Можно ли установить моды и плагины?",
    answer: "Да, мы поддерживаем Forge, Fabric, Bukkit, Spigot и другие модификации."
  },
  {
    id: 4,
    question: "Есть ли защита от DDoS?",
    answer: "Да, все серверы защищены от DDoS-атак до 100 Гбит/с."
  },
  {
    id: 5,
    question: "Как часто создаются бэкапы?",
    answer: "Автоматические бэкапы создаются ежедневно, также вы можете создать резервную копию вручную."
  }
];

// Mock functions for admin panel
export const savePlan = (planData) => {
  console.log('Saving plan:', planData);
  // Simulate API call
  return new Promise(resolve => setTimeout(resolve, 1000));
};

export const deletePlan = (planId) => {
  console.log('Deleting plan:', planId);
  // Simulate API call
  return new Promise(resolve => setTimeout(resolve, 500));
};

export const saveSettings = (settings) => {
  console.log('Saving settings:', settings);
  // Simulate API call
  return new Promise(resolve => setTimeout(resolve, 1000));
};