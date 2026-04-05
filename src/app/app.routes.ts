import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Things to Do in Diani Beach | Diani Dance Experience',
    data: {
      seo: {
        breadcrumb: 'Things to Do in Diani',
        description:
          'Looking for things to do in Diani? Enjoy a unique beach dance experience for tourists, couples, friends and groups in Diani Beach.',
        keywords:
          'things to do in diani, diani beach activities, activities in diani for tourists, unique experiences diani, couples activities diani',
        itemList: {
          name: 'Top Things to Do in Diani Beach',
          items: [
            {
              name: 'Beach Dance Experience in Diani',
              url: 'https://dianidance.com/',
              description:
                'Beginner-friendly salsa, bachata and kizomba sessions by the ocean for tourists.',
            },
            {
              name: 'Dance Classes & Events in Diani',
              url: 'https://dianidance.com/classes',
              description:
                'Learn social dance styles and join events in a relaxed tropical setting.',
            },
            {
              name: 'Tourist Activity Packages in Diani',
              url: 'https://dianidance.com/packages',
              description: 'Choose from single, starter, immersion or private group experiences.',
            },
          ],
        },
        speakable: {
          name: 'Things to do in Diani Beach with Diani Dance',
          cssSelectors: ['.hero h1', '.hero h2', '.hero p'],
        },
        qaPage: {
          question: 'What is a unique activity for tourists in Diani Beach?',
          answer:
            'A beginner-friendly beach dance experience is one of the most unique activities in Diani, ideal for couples, friends and groups.',
        },
        faqs: [
          {
            question: 'What are the best things to do in Diani Beach?',
            answer:
              'Besides relaxing on the beach, many tourists choose social and interactive activities like dance experiences, sunset plans and local events.',
          },
          {
            question: 'Is this activity good for tourists with no dance experience?',
            answer:
              'Yes. Sessions are beginner-friendly and designed for travelers who want a fun local experience in Diani.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'things-to-do-in-diani',
    title: 'Things to Do in Diani Beach: Tourist Activity Guide | Diani Dance',
    data: {
      seo: {
        breadcrumb: 'Things to Do in Diani Beach',
        description:
          'Discover top things to do in Diani Beach for tourists, couples and groups. Explore unique activities and book a beach dance experience in Diani.',
        keywords:
          'things to do in diani beach, diani beach activities for tourists, what to do in diani, diani experiences, tourist plans diani',
        itemList: {
          name: 'Best Activities for Tourists in Diani Beach',
          items: [
            {
              name: 'Beach Dance Experience in Diani',
              url: 'https://dianidance.com/booking',
              description:
                'Beginner-friendly dance sessions by the ocean, ideal for couples and groups.',
            },
            {
              name: 'Dance Classes and Social Events',
              url: 'https://dianidance.com/classes',
              description: 'Join guided classes and social dance nights during your stay in Diani.',
            },
            {
              name: 'Tourist Activity Packages',
              url: 'https://dianidance.com/packages',
              description: 'Flexible options for one-time visitors and longer stays.',
            },
          ],
        },
        speakable: {
          name: 'Things to do in Diani Beach tourist guide',
          cssSelectors: ['.things-hero h1', '.things-hero p'],
        },
        qaPage: {
          question: 'What is one of the best things to do in Diani Beach for tourists?',
          answer:
            'A beach dance experience is a top-rated activity in Diani for tourists because it combines culture, fun, and a social atmosphere in a tropical setting.',
        },
        service: {
          name: 'Tourist Dance Activities in Diani Beach',
          description:
            'Curated dance experiences and packages for tourists visiting Diani Beach, including beginner-friendly classes and social events.',
          areaServed: 'Diani Beach',
          offers: [
            {
              name: 'Single Experience',
              price: 25,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/packages',
            },
            {
              name: 'Group Experience',
              price: 15,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/packages',
            },
          ],
        },
        faqs: [
          {
            question: 'What are the best activities in Diani for tourists?',
            answer:
              'Popular options include beach relaxation, sunset plans, social experiences, and beginner-friendly dance activities with local atmosphere.',
          },
          {
            question: 'Is this activity suitable for couples in Diani?',
            answer:
              'Yes. It is one of the most memorable couple-friendly activities in Diani Beach, especially at sunset and evening sessions.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/things-to-do/things-to-do').then((m) => m.ThingsToDo),
  },
  // {
  //   path: 'about-us',
  //   title: 'About Us | Diani Dance',
  //   loadComponent: () => import('./pages/about/about').then((m) => m.About),
  // },
  {
    path: 'classes', // Classes and Pricing
    title: 'Dance Classes & Events in Diani | Tourist Activity',
    data: {
      seo: {
        breadcrumb: 'Classes & Events',
        description:
          'Discover salsa, bachata and kizomba classes in Diani Beach. A fun and social activity for tourists looking for memorable experiences.',
        keywords:
          'diani activities, dance classes diani beach, salsa diani, bachata diani, what to do in diani',
        faqs: [
          {
            question: 'Which dance styles can I learn in Diani?',
            answer:
              'You can learn salsa, bachata and kizomba with step-by-step guidance suitable for beginners and intermediate students.',
          },
          {
            question: 'Are classes private or group based?',
            answer:
              'Both options are available depending on your package and travel plan in Diani.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/classes/classes').then((m) => m.Classes),
  },
  {
    path: 'packages',
    title: 'Diani Activity Packages | Dance Experiences for Tourists',
    data: {
      seo: {
        breadcrumb: 'Packages',
        description:
          'Choose your Diani Dance package: single class, starter plan, full immersion or private group experience with pickup in Diani area.',
        keywords:
          'diani beach activities prices, diani experience packages, group activities diani, couple activities diani',
        service: {
          name: 'Diani Dance Packages',
          description:
            'Flexible dance experience packages for tourists in Diani Beach, including transport options and social dance support.',
          areaServed: 'Diani Beach',
          offers: [
            {
              name: 'Single Dance Experience',
              description: '1 class experience with pickup and drop-off in Diani area.',
              price: 25,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/packages',
            },
            {
              name: 'Dance Starter',
              description: '4 classes + 1 social event with guidance.',
              price: 90,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/packages',
            },
            {
              name: 'Full Immersion',
              description: '8 classes + 2 social events for deeper progress.',
              price: 160,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/packages',
            },
            {
              name: 'Private Group Experience',
              description: 'Group class option from 4 participants.',
              price: 15,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/packages',
            },
          ],
        },
        faqs: [
          {
            question: 'Do packages include transport in Diani?',
            answer:
              'Yes, pickup and drop-off are included within Diani area for eligible packages.',
          },
          {
            question: 'Which package is best for couples or friends?',
            answer:
              'Single experiences are ideal for trying it once, while starter and immersion packages are better for deeper progress and social events.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/passes/passes').then((m) => m.Passes),
  },
  {
    path: 'business-solutions',
    title: 'Diani Business Solutions | Dance Events & Partnerships for Hotels and Agencies',
    data: {
      seo: {
        breadcrumb: 'Business Solutions',
        description:
          'Custom dance events, shows, and partnership opportunities for hotels, resorts, and travel agencies in Diani Beach. Enhance your guest experience and generate additional revenue.',
        keywords:
          'diani business solutions, hotel entertainment diani, resort activities kenya, travel agency partnerships diani, dance events for hotels, guest experiences diani',
        service: {
          name: 'Diani Dance Business Solutions',
          description:
            'Customized dance experiences and partnership models for businesses in Diani Beach, including hotels, resorts, travel agencies, and event planners.',
          areaServed: 'Diani Beach',
          offers: [
            {
              name: 'Custom Dance Events',
              description:
                'Tailored dance classes, social events, or themed experiences designed for hotel and resort guests.',
              url: 'https://dianidance.com/business-solutions',
            },
            {
              name: 'Professional Dance Shows',
              description:
                'Live performances by professional dancers for entertainment programs, special events, or private functions.',
              url: 'https://dianidance.com/business-solutions',
            },
            {
              name: 'Guest Activity Programs',
              description:
                'Ongoing collaboration to include dance activities as part of your regular guest experience offering.',
              url: 'https://dianidance.com/business-solutions',
            },
            {
              name: 'Referral Partnership Program',
              description:
                'Earn commission by referring your clients to Diani Dance experiences while we handle the full service delivery.',
              url: 'https://dianidance.com/business-solutions',
            },
          ],
        },
        faqs: [
          {
            question: 'Which businesses can partner with Diani Dance?',
            answer:
              'We work with hotels, resorts, travel agencies, tour operators, villa hosts, beach clubs, and event planners looking to enhance their client experience.',
          },
          {
            question: 'How does the commission model work?',
            answer:
              'Partners receive a commission for each client referred to our services. We manage the full experience while you generate additional revenue.',
          },
          {
            question: 'Can events be customized for our brand or guests?',
            answer:
              'Yes, all events are fully customizable in terms of dance style, format, group size, and setting to match your brand and audience.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/b2b/b2b').then((m) => m.B2B),
  },
  {
    path: 'booking',
    title: 'Book a Diani Beach Activity | Diani Dance',
    data: {
      seo: {
        breadcrumb: 'Booking',
        description:
          'Book your dance experience in Diani Beach. Select style, package, date and time for a unique tourist activity by the ocean.',
        keywords:
          'book activity diani, book diani dance class, diani tourist experiences, diani beach plans',
        howTo: {
          name: 'How to Book a Diani Dance Experience',
          description:
            'Simple booking process to reserve your dance activity in Diani Beach as a tourist, couple or group.',
          totalTime: 'PT5M',
          tool: ['Booking form', 'Email or WhatsApp confirmation'],
          steps: [
            {
              name: 'Choose your class style',
              text: 'Select Salsa, Bachata, Kizomba or choose the option if you are not sure yet.',
              url: 'https://dianidance.com/booking',
            },
            {
              name: 'Pick your package',
              text: 'Choose single class, starter, immersion or group package based on your travel plan.',
              url: 'https://dianidance.com/packages',
            },
            {
              name: 'Set date and time',
              text: 'Select your preferred date and available time slot in the booking form.',
              url: 'https://dianidance.com/booking',
            },
            {
              name: 'Submit your booking details',
              text: 'Complete your name and contact details, then confirm the booking request.',
              url: 'https://dianidance.com/booking',
            },
            {
              name: 'Receive confirmation',
              text: 'You will receive confirmation and final coordination details by email or WhatsApp.',
              url: 'https://dianidance.com/contact',
            },
          ],
        },
        speakable: {
          name: 'How to book your Diani dance activity',
          cssSelectors: ['header h1', 'header p'],
        },
        qaPage: {
          question: 'How can I book a dance activity in Diani Beach?',
          answer:
            'Go to the booking page, choose class type and package, select date and time, then submit your contact details to receive confirmation.',
        },
        service: {
          name: 'Book a Diani Dance Experience',
          description:
            'Online booking for dance activities in Diani Beach with beginner-friendly options for tourists, couples and groups.',
          areaServed: 'Diani Beach',
          offers: [
            {
              name: 'Book Single Experience',
              price: 25,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/booking',
            },
            {
              name: 'Book Group Experience',
              description: 'Group booking starts at 4 participants.',
              price: 15,
              priceCurrency: 'USD',
              url: 'https://dianidance.com/booking',
            },
          ],
        },
        faqs: [
          {
            question: 'How do I book an activity in Diani with Diani Dance?',
            answer:
              'Use the booking form to choose your dance style, package, date and preferred time slot.',
          },
          {
            question: 'Can I book for a group?',
            answer:
              'Yes. Group experiences are available and ideal for friends, celebrations and small tourist groups.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/booking/booking').then((m) => m.Booking),
  },
  {
    path: 'contact',
    title: 'Contact Diani Dance | Activities in Diani Beach',
    data: {
      seo: {
        breadcrumb: 'Contact',
        description:
          'Contact Diani Dance for bookings, schedules and activity details in Diani Beach. Perfect for tourists, couples and groups.',
        keywords: 'contact diani activities, diani dance whatsapp, tourist activities diani beach',
        faqs: [
          {
            question: 'How fast do you reply to booking questions?',
            answer:
              'Most inquiries are answered within 24 to 48 hours, and WhatsApp is the fastest contact option.',
          },
        ],
      },
    },
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'privacy',
    title: 'Privacy Policy | Diani Dance',
    data: {
      seo: {
        breadcrumb: 'Privacy Policy',
        description:
          'Read the privacy policy for Diani Dance website visitors and booking inquiries.',
      },
    },
    loadComponent: () => import('./pages/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    title: 'Terms & Conditions | Diani Dance',
    data: {
      seo: {
        breadcrumb: 'Terms & Conditions',
        description:
          'Review the terms and conditions for using the Diani Dance website and services.',
      },
    },
    loadComponent: () => import('./pages/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'cookies',
    title: 'Cookie Policy | Diani Dance',
    data: {
      seo: {
        breadcrumb: 'Cookie Policy',
        description:
          'Learn how cookies are used on Diani Dance to improve website functionality and analytics.',
      },
    },
    loadComponent: () => import('./pages/cookies/cookies').then((m) => m.Cookies),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
