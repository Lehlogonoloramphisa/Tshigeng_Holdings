import { serviceImages } from './serviceImages';

export const serviceLandingPages = {
  '/pest-control': {
    eyebrow: 'Pest Control Service',
    title: 'Pest Control Services',
    highlight: 'Pest Control',
    image: serviceImages.pestControl,
    imageAlt: 'Pest control professional treating an indoor space',
    imageGallery: {
      eyebrow: 'Pest Control',
      title: 'Pest control in different settings',
      images: [
        {
          src: serviceImages.pestControlExterior,
          alt: 'Pest control technician spraying treatment around the outside of a building',
          caption: 'Exterior pest treatment',
        },
        {
          src: serviceImages.pestControlTechnician,
          alt: 'Technician applying pest control treatment inside a commercial property',
          caption: 'Indoor pest treatment',
        },
        {
          src: serviceImages.pestControlWarehouse,
          alt: 'Technician using pest control equipment in an industrial facility',
          caption: 'Industrial facility treatment',
        },
        {
          src: serviceImages.pestControlIndoorFloor,
          alt: 'Pest control technician spraying a treatment along an indoor tiled floor',
          caption: 'Indoor pest treatment',
        },
        {
          src: serviceImages.pestControlSprayingOutside,
          alt: 'Pest control technician treating the exterior grounds beside a building',
          caption: 'Exterior pest treatment',
        },
        {
          src: serviceImages.herbicideTreatmentOutside,
          alt: 'Worker applying herbicide to outdoor vegetation with a backpack sprayer',
          caption: 'Outdoor herbicide application',
        },
      ],
    },
    description:
      'Commercial and industrial pest control for businesses and facilities. Share your site location and pest concern so Tshigeng Holdings can discuss the appropriate service scope.',
    introTitle: 'Commercial and industrial pest control',
    intro:
      'Tshigeng Holdings provides commercial and industrial pest control. The suitable scope depends on the premises and the issue being reported. Contact us with the site location, type of facility, and pest concern so the team can confirm whether it can assist.',
    searchFocus: [
      'Commercial pest control',
      'Industrial pest control',
    ],
    services: [
      'Commercial pest control',
      'Industrial pest control',
      'Service scope discussed for the site and reported concern',
    ],
    faqs: [
      {
        question: 'What pest control services does Tshigeng Holdings offer?',
        answer:
          'The confirmed service scope is commercial and industrial pest control. Contact the team with your location, site type, and pest concern to discuss your enquiry.',
      },
      {
        question: 'What information should I include in an enquiry?',
        answer:
          'Include the site location, premises type, and a description of the pest issue. The team can then confirm availability and the next step.',
      },
    ],
    relatedLinks: [
      { label: 'Pest Control Pretoria', path: '/pest-control-pretoria' },
      { label: 'Pest Control Johannesburg', path: '/pest-control-johannesburg' },
      { label: 'Pest Control Centurion', path: '/pest-control-centurion' },
    ],
    seo: {
      title: 'Pest Control Services in Gauteng | Tshigeng Holdings',
      description:
        'Commercial and industrial pest control from Tshigeng Holdings. Share your location and site requirements to discuss service availability and a quote.',
      keywords:
        'commercial pest control, industrial pest control, pest control Gauteng, pest control South Africa',
    },
  },
  '/cleaning-services': {
    eyebrow: 'Cleaning & Hygiene Solutions',
    title: 'Cleaning & Hygiene Solutions',
    highlight: 'Cleaning and Hygiene',
    image: serviceImages.officeCleaning,
    imageAlt: 'Cleaner vacuuming an office carpet',
    description:
      'Professional cleaning and hygiene solutions for homes, offices, commercial premises, and other facilities in Centurion, Pretoria, and Gauteng.',
    introTitle: 'Cleaning and hygiene for your premises',
    intro:
      'At Tshigeng Holdings, we provide professional cleaning and hygiene solutions tailored to the needs of homes, offices, commercial premises, and other facilities. Our services focus on cleanliness, comfort, and maintaining hygienic environments through reliable service and attention to detail.',
    searchFocus: [
      'Commercial cleaning',
      'Office cleaning',
      'Regular cleaning services',
      'Deep cleaning services',
      'Hygiene equipment installation',
      'Hygiene refill services',
    ],
    services: [
      'Regular cleaning',
      'Deep cleaning',
      'Commercial cleaning services',
      'Hygiene equipment and refills',
    ],
    faqs: [
      {
        question: 'What types of cleaning do you provide?',
        answer:
          'Tshigeng Holdings provides regular and deep cleaning for homes, offices, commercial premises, and other facilities. The work can be tailored to your requirements and schedule.',
      },
      {
        question: 'Do you provide hygiene equipment and refills?',
        answer:
          'Yes. Hygiene equipment supply, installation, maintenance, and refill services can be arranged for restrooms and shared facilities.',
      },
      {
        question: 'How do I request a cleaning or hygiene quote?',
        answer:
          'Contact Tshigeng Holdings with your location, facility type, and service requirements to discuss a suitable scope and schedule.',
      },
    ],
    relatedLinks: [
      { label: 'Commercial Cleaning', path: '/commercial-cleaning' },
      { label: 'Cleaning Services Pretoria', path: '/cleaning-services-pretoria' },
      { label: 'Hygiene Services', path: '/hygiene-services' },
      { label: 'Cleaning Supplies', path: '/cleaning-supplies' },
    ],
    seo: {
      title: 'Cleaning & Hygiene Solutions | Tshigeng Holdings',
      description:
        'Cleaning and hygiene solutions for homes, offices and commercial premises in Centurion, Pretoria and Gauteng. Ask Tshigeng Holdings about regular or deep cleaning.',
    },
  },
  '/hygiene-services': {
    eyebrow: 'Hygiene Service',
    title: 'Hygiene and Sanitation Services',
    highlight: 'Hygiene',
    image: serviceImages.cleaningDesk,
    imageAlt: 'Cleaner wiping a surface in a shared office workspace',
    description:
      'Hygiene equipment sales, installation, maintenance, and refill services for restrooms and shared facilities in Centurion, Pretoria, and Gauteng.',
    introTitle: 'Washroom hygiene and workplace care',
    intro:
      'Tshigeng Holdings supplies and installs hygiene equipment designed to support clean, well-maintained restrooms and shared facilities. Our team also assists with equipment maintenance and replenishes essential consumables.',
    searchFocus: [
      'Hygiene services',
      'Washroom hygiene',
      'Hygiene equipment sales and installation',
      'Soap dispenser refills',
      'Hand sanitiser refills',
      'Sanitary bins',
    ],
    services: [
      'Soap dispensers',
      'Paper towel dispensers',
      'Hand sanitiser stations',
      'Sanitary bins',
      'Air hand dryers',
      'Toilet seat wipes and air fresheners',
      'Hygiene equipment maintenance',
      'Liquid soap and hand sanitiser refills',
      'Dispenser consumables',
    ],
    contentSections: [
      {
        eyebrow: 'Equipment for shared facilities',
        title: 'Hygiene Equipment Sales & Installation',
        description:
          'A hygienic environment requires the right equipment. Tshigeng Holdings supplies and installs hygiene equipment designed to support clean, well-maintained restrooms and shared facilities. Our solutions include:',
        items: [
          'Soap dispensers',
          'Paper towel dispensers',
          'Hand sanitiser stations',
          'Sanitary bins',
          'Air hand dryers, toilet seat wipes, air fresheners, and other essential hygiene equipment',
        ],
        closing:
          'Our team also assists with equipment maintenance to support reliable operation and consistent hygiene standards.',
        image: serviceImages.hygieneWashroom,
        imageAlt: 'Clean public washroom with a row of sinks',
      },
      {
        eyebrow: 'Keep hygiene stations stocked',
        title: 'Hygiene Refill Services',
        description:
          'Keep your hygiene facilities stocked and ready for use with convenient refill services. We replenish essential consumables to help prevent shortages and maintain a clean, professional environment. Our refill services include:',
        items: [
          'Liquid soap refills',
          'Hand sanitiser refills',
          'Dispenser consumables and other essential hygiene supplies',
        ],
        closing:
          'From offices and commercial buildings to high-traffic facilities, we help you maintain well-stocked hygiene stations for employees, visitors, and customers.',
        image: serviceImages.liquidSoapRefills,
        imageAlt: 'A range of liquid cleaning and hygiene products for shared facilities',
      },
    ],
    faqs: [
      {
        question: 'What hygiene products do you supply?',
        answer:
          'Tshigeng Holdings supplies and installs soap dispensers, paper towel dispensers, hand sanitiser stations, sanitary bins, and other essential hygiene equipment. Air hand dryers, toilet seat wipes, and air fresheners are also available.',
      },
      {
        question: 'Do you service hygiene equipment regularly?',
        answer:
          'Yes. Hygiene maintenance schedules can be planned around the number of users, facility type, and service requirement.',
      },
      {
        question: 'How do I enquire about more than one service?',
        answer:
          'List each service you need on the contact form. Tshigeng Holdings can confirm which requirements it can quote for.',
      },
    ],
    relatedLinks: [
      { label: 'Hygiene Services Gauteng', path: '/hygiene-services-gauteng' },
      { label: 'Cleaning Services', path: '/cleaning-services' },
      { label: 'Cleaning Supplies', path: '/cleaning-supplies' },
    ],
    seo: {
      title: 'Hygiene & Sanitation Services in Gauteng | Tshigeng Holdings',
      description:
        'Tshigeng Holdings supplies and installs hygiene equipment and provides maintenance and refill services for offices and commercial facilities in Gauteng.',
      keywords:
        'hygiene services, washroom hygiene, sanitary bin services, air freshener services, hand sanitiser stations, soap dispenser installation, hygiene product supplier',
    },
  },
  '/cleaning-supplies': {
    eyebrow: 'Cleaning Products Supplier',
    title: 'Cleaning Supplies and Hygiene Products',
    highlight: 'Supplies',
    image: serviceImages.cleaningSupplies,
    imageAlt: 'Cleaning tools, gloves, and spray bottles',
    imageGallery: {
      eyebrow: 'Cleaning Materials',
      title: 'Cleaning products and equipment',
      images: [
        {
          src: serviceImages.cleaningChemicals,
          alt: 'Containers of cleaning chemicals arranged for supply',
          caption: 'Cleaning chemicals',
          fit: 'contain',
        },
        {
          src: serviceImages.cleaningMop,
          alt: 'Mop used for floor cleaning',
          caption: 'Floor cleaning tools',
          fit: 'contain',
        },
        {
          src: serviceImages.cleaningGloves,
          alt: 'Pair of yellow rubber gloves used for cleaning',
          caption: 'Cleaning gloves',
          fit: 'contain',
        },
        {
          src: serviceImages.domestozSanitiser,
          alt: 'Five-litre Domestoz chlorinated foaming cleaner and sanitiser container',
          caption: 'Domestoz cleaner and sanitiser',
          fit: 'contain',
        },
        {
          src: serviceImages.papierkorbBin,
          alt: 'Black mesh waste bin',
          caption: 'Waste bins',
          fit: 'contain',
        },
        {
          src: serviceImages.cleaningEquipment,
          alt: 'Commercial cleaning trolley stocked with cleaning tools and supplies',
          caption: 'Commercial cleaning equipment',
          fit: 'contain',
        },
      ],
    },
    description:
      'Cleaning materials and supplies for homes, offices, commercial premises, and other facilities. Ask us to confirm availability for your product requirements.',
    introTitle: 'Cleaning materials for facilities that need dependable supply',
    intro:
      'Tshigeng Holdings supplies cleaning materials for homes, offices, commercial premises, and other facilities. Product range, specifications, and availability can be confirmed when you contact the team with your requirements.',
    services: [
      'Cleaning materials',
      'Cleaning products',
      'Cleaning equipment and tools',
      'Product availability confirmed on enquiry',
    ],
    faqs: [
      {
        question: 'What cleaning materials can I request?',
        answer:
          'Contact Tshigeng Holdings with the product or material you need. The team can confirm the available options, specifications, and quote for your request.',
      },
      {
        question: 'Do you supply a specific brand or pack size?',
        answer:
          'Share the brand, product specification, and quantity you are looking for. The team will confirm availability before you place an order.',
      },
    ],
    relatedLinks: [
      { label: 'Hygiene Services', path: '/hygiene-services' },
      { label: 'Cleaning Services', path: '/cleaning-services' },
      { label: 'Contact Us', path: '/contact' },
    ],
    seo: {
      title: 'Cleaning Materials and Supplies | Tshigeng Holdings',
      description:
        'Ask Tshigeng Holdings about cleaning materials and supplies for your home, office, commercial premises, or facility.',
      keywords:
        'cleaning materials, cleaning supplies, cleaning products, cleaning equipment supplier',
    },
  },
  '/commercial-cleaning': {
    eyebrow: 'Commercial Cleaning Services',
    title: 'Commercial Cleaning Services',
    highlight: 'Commercial Cleaning',
    image: serviceImages.officeCleaning,
    imageAlt: 'Cleaner vacuuming the carpet in an office',
    description:
      'Regular and deep commercial cleaning for offices, homes, commercial premises, and other facilities in Centurion, Pretoria, and Gauteng.',
    introTitle: 'Cleaning & Hygiene Solutions',
    intro:
      'At Tshigeng Holdings, we provide professional cleaning and hygiene solutions tailored to the needs of homes, offices, commercial premises, and other facilities. Our services focus on cleanliness, comfort, and maintaining hygienic environments through reliable service and attention to detail.',
    searchFocus: ['Commercial cleaning services', 'Regular cleaning services', 'Deep cleaning services', 'Office cleaning', 'Kitchen deep cleaning', 'Bathroom deep cleaning', 'Floor care'],
    services: ['Regular cleaning', 'Deep cleaning', 'Commercial cleaning', 'Floor care', 'Kitchen and bathroom cleaning'],
    contentSections: [
      {
        eyebrow: 'Everyday care for your premises',
        title: 'Regular Cleaning Services',
        description:
          'Keep your premises clean, fresh, and presentable with regular cleaning services. Our team handles essential cleaning tasks to maintain a comfortable and hygienic environment. Our regular cleaning services include:',
        items: [
          'Vacuuming carpets and floors.',
          'Mopping hard floors and other suitable surfaces.',
          'Dusting furniture, fixtures, and surfaces.',
          'Cleaning appliances, countertops, and work surfaces.',
          'Emptying waste bins and disposing of rubbish appropriately.',
        ],
        closing:
          'Whether you need routine office cleaning or ongoing domestic cleaning, we tailor our services to your requirements and schedule.',
        image: serviceImages.commercialCleaning,
        imageAlt: 'Cleaner maintaining the floor of a commercial shopping centre',
      },
      {
        eyebrow: 'Extra attention where it is needed',
        title: 'Deep Cleaning Services',
        description:
          'Our deep cleaning services target built-up dirt, stubborn stains, grease, and hard-to-reach areas. We go beyond everyday cleaning to help restore cleanliness in areas requiring extra attention.',
        groups: [
          {
            title: 'Kitchen Deep Cleaning',
            items: [
              'Degreasing splashbacks and kitchen surfaces.',
              'Cleaning ovens, microwaves, and refrigerators.',
              'Scrubbing floors and removing built-up dirt.',
            ],
          },
          {
            title: 'Bathroom Deep Cleaning',
            items: [
              'Cleaning and disinfecting toilets, showers, and bathtubs.',
              'Removing soap scum and hard water stains.',
              'Cleaning behind fixtures and around hard-to-reach areas.',
            ],
          },
          {
            title: 'Floor Care',
            items: [
              'Deep cleaning carpets.',
              'Scrubbing tiles and grout.',
              'Cleaning and polishing suitable hardwood floors.',
            ],
          },
          {
            title: 'Additional Cleaning',
            items: [
              'Cleaning skirting boards, blinds, and light fixtures.',
              'Removing cobwebs.',
              'Cleaning neglected corners and other overlooked areas.',
            ],
          },
        ],
        closing:
          'We recommend scheduling deep cleaning quarterly or twice a year, depending on the condition, usage, and specific requirements of your premises.',
        image: serviceImages.floorCleaning,
        imageAlt: 'Cleaning professional deep-cleaning a floor with a floor machine',
      },
      {
        eyebrow: 'Tshigeng Holdings',
        title: 'Your Trusted Cleaning & Hygiene Partner',
        description:
          'Choose Tshigeng Holdings for cleaning and hygiene solutions tailored to your facility, schedule, and operational needs. We are committed to helping you maintain clean, comfortable, and hygienic spaces.',
        image: serviceImages.hygieneWashroom,
        imageAlt: 'Clean restroom facilities prepared for staff and visitors',
        callToAction: true,
      },
    ],
    faqs: [
      {
        question: 'Can commercial cleaning be scheduled outside business hours?',
        answer:
          'Cleaning times can be discussed around site access and operating needs. Share your preferred schedule when requesting a quote.',
      },
      {
        question: 'Can you clean offices and shared facilities?',
        answer:
          'Yes. A cleaning scope can include work areas and shared spaces such as reception areas, kitchens and washrooms, based on the site requirements.',
      },
      {
        question: 'How often should deep cleaning be scheduled?',
        answer:
          'Deep cleaning can be scheduled quarterly or twice a year, depending on the condition, usage, and specific requirements of your premises.',
      },
    ],
    relatedLinks: [
      { label: 'Cleaning & Hygiene Solutions', path: '/cleaning-services' },
      { label: 'Hygiene Equipment and Refills', path: '/hygiene-services' },
      { label: 'Cleaning Services in Pretoria', path: '/cleaning-services-pretoria' },
      { label: 'Cleaning Supplies', path: '/cleaning-supplies' },
      { label: 'Request a Quote', path: '/contact' },
    ],
    seo: {
      title: 'Commercial Cleaning Services in Gauteng | Tshigeng Holdings',
      description:
        'Arrange regular or deep commercial cleaning in Gauteng with Tshigeng Holdings. Cleaning is tailored to your premises, schedule, and needs.',
    },
  },
};

export const locationLandingPages = {
  '/pest-control-pretoria': {
    eyebrow: 'Pretoria Pest Control',
    title: 'Pest Control in Pretoria',
    highlight: 'Pretoria',
    location: 'Pretoria',
    service: 'commercial and industrial pest control',
    image: serviceImages.pestControl,
    imageAlt: 'Pest control professional treating an indoor space',
    description:
      'Commercial and industrial pest control enquiries in Pretoria. Share your site location and pest concern so Tshigeng Holdings can confirm availability and scope.',
    intro:
      'Tshigeng Holdings provides commercial and industrial pest control. For a Pretoria enquiry, share the facility address or area, premises type, and pest concern. The team can confirm whether it can assist and discuss the next step.',
    services: ['Commercial pest control', 'Industrial pest control'],
    faqs: [
      {
        question: 'Can I enquire about commercial pest control in Pretoria?',
        answer:
          'Yes. Contact Tshigeng Holdings with the Pretoria site location and your requirements. The team can confirm availability and scope.',
      },
      {
        question: 'What details help with a local pest control enquiry?',
        answer:
          'Share the site address or area, premises type, and a description of the pest concern.',
      },
    ],
    relatedLinks: [
      { label: 'Pest Control Centurion', path: '/pest-control-centurion' },
      { label: 'Pest Control Johannesburg', path: '/pest-control-johannesburg' },
      { label: 'Cleaning Services Pretoria', path: '/cleaning-services-pretoria' },
    ],
    seo: {
      title: 'Pest Control Pretoria | Tshigeng Holdings',
      description:
        'Ask Tshigeng Holdings about commercial and industrial pest control in Pretoria. Share your location and site requirements to confirm availability.',
      keywords:
        'commercial pest control Pretoria, industrial pest control Pretoria, pest control Pretoria',
    },
  },
  '/pest-control-johannesburg': {
    eyebrow: 'Johannesburg Pest Control',
    title: 'Pest Control in Johannesburg',
    highlight: 'Johannesburg',
    location: 'Johannesburg',
    service: 'commercial and industrial pest control',
    image: serviceImages.pestControl,
    imageAlt: 'Pest control professional treating an indoor space',
    description:
      'Commercial and industrial pest control enquiries in Johannesburg. Share your site location and pest concern so Tshigeng Holdings can confirm availability and scope.',
    intro:
      'Tshigeng Holdings provides commercial and industrial pest control. For a Johannesburg enquiry, share the facility address or area, premises type, and pest concern. The team can confirm whether it can assist and discuss the next step.',
    services: ['Commercial pest control', 'Industrial pest control'],
    faqs: [
      {
        question: 'Can I enquire about commercial pest control in Johannesburg?',
        answer:
          'Yes. Contact Tshigeng Holdings with the Johannesburg site location and your requirements. The team can confirm availability and scope.',
      },
      {
        question: 'What details help with a local pest control enquiry?',
        answer:
          'Share the site address or area, premises type, and a description of the pest concern.',
      },
    ],
    relatedLinks: [
      { label: 'Pest Control Pretoria', path: '/pest-control-pretoria' },
      { label: 'Pest Control Centurion', path: '/pest-control-centurion' },
      { label: 'Pest Control Services', path: '/pest-control' },
    ],
    seo: {
      title: 'Pest Control Johannesburg | Tshigeng Holdings',
      description:
        'Ask Tshigeng Holdings about commercial and industrial pest control in Johannesburg. Share your location and site requirements to confirm availability.',
      keywords:
        'commercial pest control Johannesburg, industrial pest control Johannesburg, pest control Johannesburg',
    },
  },
  '/pest-control-centurion': {
    eyebrow: 'Centurion Pest Control',
    title: 'Pest Control in Centurion',
    highlight: 'Centurion',
    location: 'Centurion',
    nearbyAreas: ['Irene'],
    service: 'commercial and industrial pest control',
    image: serviceImages.pestControl,
    imageAlt: 'Pest control professional treating an indoor space',
    description:
      'Commercial and industrial pest control enquiries in Centurion and Irene. Share your site location and pest concern so Tshigeng Holdings can confirm availability and scope.',
    intro:
      'Tshigeng Holdings is based at 3 Saltus Street, Galloway Estate, Irene, Centurion. For commercial or industrial pest control enquiries in Centurion, share the site type and pest concern so the team can confirm the next step.',
    services: ['Commercial pest control', 'Industrial pest control'],
    faqs: [
      {
        question: 'Can I enquire about pest control in Centurion or Irene?',
        answer:
          'Yes. Contact Tshigeng Holdings with your site location and requirements. The team can confirm availability and scope for your enquiry.',
      },
      {
        question: 'What pest control does Tshigeng Holdings list?',
        answer:
          'The listed pest control services are for commercial and industrial premises. Contact the team with your site details to discuss whether it can assist.',
      },
    ],
    relatedLinks: [
      { label: 'Pest Control Pretoria', path: '/pest-control-pretoria' },
      { label: 'Hygiene Services Gauteng', path: '/hygiene-services-gauteng' },
      { label: 'Contact Us', path: '/contact' },
    ],
    seo: {
      title: 'Pest Control Centurion | Tshigeng Holdings',
      description:
        'Ask Tshigeng Holdings about commercial and industrial pest control in Centurion and Irene. Share your site requirements to confirm availability.',
      keywords:
        'commercial pest control Centurion, industrial pest control Centurion, pest control Irene',
    },
  },
  '/cleaning-services-pretoria': {
    eyebrow: 'Pretoria Cleaning Services',
    title: 'Cleaning Services in Pretoria',
    highlight: 'Pretoria',
    location: 'Pretoria',
    service: 'commercial cleaning services',
    image: serviceImages.officeCleaning,
    imageAlt: 'Cleaner vacuuming the carpet in an office',
    description:
      'Regular and deep commercial cleaning enquiries for offices and commercial premises in Pretoria. Share your site requirements to discuss availability and scope.',
    intro:
      'Tshigeng Holdings provides regular and deep cleaning services. For Pretoria enquiries, share the address or area, premises type, the cleaning tasks required, and your preferred schedule so the team can discuss a suitable scope.',
    services: ['Commercial cleaning', 'Regular cleaning', 'Deep cleaning'],
    faqs: [
      {
        question: 'Can I enquire about commercial cleaning in Pretoria?',
        answer:
          'Yes. Share the site location and the cleaning tasks you need. Tshigeng Holdings can confirm availability and discuss the scope.',
      },
      {
        question: 'Can I request a cleaning quote?',
        answer:
          'Yes. Use the contact page to share the site type, service frequency, and scope so the team can respond.',
      },
    ],
    relatedLinks: [
      { label: 'Cleaning Services', path: '/cleaning-services' },
      { label: 'Pest Control Pretoria', path: '/pest-control-pretoria' },
      { label: 'Hygiene Services', path: '/hygiene-services' },
    ],
    seo: {
      title: 'Cleaning Services Pretoria | Tshigeng Holdings',
      description:
        'Ask Tshigeng Holdings about regular and deep commercial cleaning in Pretoria for your office or commercial premises.',
      keywords:
        'cleaning services Pretoria, office cleaning Pretoria, commercial cleaning Pretoria, deep cleaning Pretoria',
    },
  },
  '/hygiene-services-gauteng': {
    eyebrow: 'Gauteng Hygiene Services',
    title: 'Hygiene Services in Gauteng',
    highlight: 'Gauteng',
    location: 'Gauteng',
    service: 'hygiene services',
    image: serviceImages.hygieneWashroom,
    imageAlt: 'Washroom sinks with wall-mounted hygiene dispensers',
    description:
      'Supply, installation, maintenance, and servicing of soap dispensers, air hand dryers, ladies sanitary bins, toilet seat wipes, paper towel dispensers, air fresheners, and chemical deep cleaning for Gauteng businesses.',
    intro:
      'Tshigeng Holdings supplies, installs, maintains, and services hygiene equipment for Gauteng businesses. Offerings include soap dispensers, air hand dryers, ladies sanitary bins, toilet seat wipes, paper towel dispensers, air fresheners, and chemical deep cleaning.',
    services: ['Soap dispenser supply, installation, maintenance, and servicing', 'Air hand dryer supply, installation, maintenance, and servicing', 'Ladies sanitary bin supply and servicing', 'Toilet seat wipes', 'Paper towel dispensers', 'Air freshener supply and servicing', 'Chemical deep cleaning'],
    faqs: [
      {
        question: 'Do you provide hygiene services in Gauteng?',
        answer:
          'Yes. Tshigeng Holdings supports hygiene service enquiries across Gauteng, including washroom equipment and consumables.',
      },
      {
        question: 'What should I include in a hygiene services enquiry?',
        answer:
          'Include your location, facility type, and the equipment, maintenance, refill, or cleaning service you need. The team can confirm availability and scope.',
      },
    ],
    relatedLinks: [
      { label: 'Hygiene Services', path: '/hygiene-services' },
      { label: 'Cleaning Supplies', path: '/cleaning-supplies' },
      { label: 'Cleaning Services Pretoria', path: '/cleaning-services-pretoria' },
    ],
    seo: {
      title: 'Hygiene Services Gauteng | Tshigeng Holdings',
      description:
        'Tshigeng Holdings offers hygiene services in Gauteng: soap dispensers, air hand dryers, ladies sanitary bins, toilet seat wipes, paper towel dispensers, air fresheners, and chemical deep cleaning.',
      keywords:
        'hygiene services Gauteng, washroom hygiene Gauteng, sanitary bin services Gauteng, hygiene product supplier Gauteng, restroom hygiene solutions',
    },
  },
};

export const landingPageMeta = Object.fromEntries(
  [...Object.entries(serviceLandingPages), ...Object.entries(locationLandingPages)].map(([path, page]) => [
    path,
    { ...page.seo, image: page.image },
  ])
);

export const landingPagePaths = [...Object.keys(serviceLandingPages), ...Object.keys(locationLandingPages)];
