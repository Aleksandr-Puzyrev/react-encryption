export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Информационная безопасность",
    description: "Информационная безопасность. Шифры.",
    navItems: [
      {
        label: "Главная",
        href: "/",
      },
      {
        label: "Шифр Цезаря",
        href: "/caesar",
      },
      {
        label: "Шифр Виженера",
        href: "/vigenere",
      },
    ],
}