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

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/template-2', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('template-2', {
    layout: 'template-2',
    page: {
      title: 'Example Page',
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
      button: {
        text: 'Get started',
        url: 'https://example.com/get-started',
      },
    },
    preview: [
      {
        date: 'Oct 24',
        title: 'Latest post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 1,
            text: 'World',
          },
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 26',
        title: 'Featured story',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 2,
            text: 'Sport',
          },
        ],
      },
      {
        date: 'Oct 28',
        title: 'Popular post',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 3,
            text: 'Hot',
          },
        ],
      },
      {
        date: 'Oct 30',
        title: 'Trending topic',
        text: 'This is a wider card with supporting text below as a natural lead-in to additional content',
        category: [
          {
            id: 4,
            text: 'Fashion',
          },
        ],
      },
    ],
    categories: [
      {
        id: 1,
        text: 'World',
      },
      {
        id: 2,
        text: 'Sport',
      },
      {
        id: 3,
        text: 'Hot',
      },
      {
        id: 4,
        text: 'Fashion',
      },
    ],
    news: [
      {
        title: 'New blog post',
        date: 'February 14',
        author: 'John',
        description:
          'This blog post discusses various topics related to web development and design, including best practices and emerging trends.',
      },
      {
        title: 'Latest blog post',
        date: 'March 1',
        author: 'Emily',
        description:
          'This blog post covers a range of topics, from productivity tips to personal development strategies, with the aim of helping readers lead more fulfilling lives.',
      },
      {
        title: 'Popular blog post',
        date: 'April 7',
        author: 'David',
        description:
          'This blog post focuses on the importance of networking and building relationships in business, providing tips and insights for professionals of all levels.',
      },
      {
        title: 'Top blog post',
        date: 'May 12',
        author: 'Sophie',
        description:
          'This blog post examines the latest trends and innovations in the field of marketing, with a particular focus on social media and content marketing strategies.',
      },
    ],
    about:
      'We are a dynamic team of experienced journalists, dedicated to delivering the latest news and up-to-date analysis on a range of topics. With our finger on the pulse of global affairs, we strive to provide an objective and insightful perspective on the events shaping our world. Our team comprises individuals with diverse backgrounds and expertise, allowing us to provide comprehensive coverage across all sectors.',
    archive: [
      {
        text: 'March 2014',
        url: 'https://example.com/march-2014',
      },
      {
        text: 'February 2014',
        url: 'https://example.com/february-2014',
      },
      {
        text: 'January 2014',
        url: 'https://example.com/january-2014',
      },
      {
        text: 'December 2013',
        url: 'https://example.com/december-2013',
      },
      {
        text: 'November 2013',
        url: 'https://example.com/november-2013',
      },
      {
        text: 'October 2013',
        url: 'https://example.com/october-2013',
      },
      {
        text: 'September 2013',
        url: 'https://example.com/september-2013',
      },
    ],
    social: [
      {
        text: 'Instagram',
        url: 'https://www.instagram.com/',
      },
      {
        text: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        text: 'Google',
        url: 'https://www.instagram.com/',
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
