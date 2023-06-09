// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-1', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-1', {
    layout: 'template-1',
    page: {
      title: 'Template-1 Page',
    },
    header: [
      {
        text: 'Features',
        url: 'https://example.com/home',
      },
      {
        text: 'Enterprise',
        url: 'https://example.com/about',
      },
      {
        text: 'Support',
        url: 'https://example.com/services',
      },
    ],
    hero: {
      title: 'Pricing',
      text: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.",
    },
    plans: [
      {
        name: 'Free',
        price: 0,
        features: [
          '10 users included',
          '2 GB of storage',
          'Email support',
          'Help center access',
        ],
        button: 'Sign up for free',
      },
      {
        name: 'Pro',
        price: 15,
        features: [
          '20 users included',
          '4 GB of storage',
          'Priority email support',
          'Help center access',
        ],
        button: 'Get started',
      },
      {
        name: 'Enterprise',
        price: 30,
        features: [
          '30 users included',
          '15 GB of storage',
          'Phone and email support',
          'Help center access',
        ],
        button: 'Contact us',
      },
    ],
    footer: [
      {
        title: 'Features',
        links: [
          {
            text: 'Cool stuff',
            url: 'https://example.com/cool-stuff',
          },
          {
            text: 'Random feature',
            url: 'https://example.com/random-feature',
          },
          {
            text: 'Team feature',
            url: 'https://example.com/team-feature',
          },
          {
            text: 'Stuff for developers',
            url: 'https://example.com/stuff-for-developers',
          },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            text: 'Resource name',
            url: 'https://example.com/resource-name',
          },
          {
            text: 'Another resource',
            url: 'https://example.com/another-resource',
          },
          {
            text: 'Final resource',
            url: 'https://example.com/final-resource',
          },
        ],
      },
      {
        title: 'About',
        links: [
          {
            text: 'Team',
            url: 'https://example.com/team',
          },
          {
            text: 'Locations',
            url: 'https://example.com/locations',
          },
          {
            text: 'Privacy',
            url: 'https://example.com/privacy',
          },
          {
            text: 'Terms',
            url: 'https://example.com/terms',
          },
        ],
      },
    ],
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
