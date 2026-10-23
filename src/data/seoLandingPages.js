import { serviceImages } from './serviceImages';

export const serviceLandingPages = {
  '/pest-control': {
    eyebrow: 'Pest Control Service',
    title: 'Pest Control Services',
    highlight: 'Pest Control',
    description:
      'Commercial and industrial pest control for businesses, offices, restaurants, warehouses, schools, factories, and managed facilities across Gauteng and South Africa.',
    introTitle: 'Professional pest management for safer spaces',
    intro:
      'Tshigeng Holdings provides commercial and industrial pest control, with practical pest inspections, management plans, and ongoing contracts shaped around site risks, hygiene needs, and the type of activity taking place in each facility.',
    searchFocus: [
      'Residential pest control',
      'Commercial pest control',
      'Industrial pest control',
      'Pest inspection services',
      'Monthly pest control services',
      'Annual pest control contracts',
    ],
    services: [
      'Cockroach control',
      'Rat and rodent control',
      'Ant control',
      'Termite inspection and treatment',
      'Bed bug treatment',
      'Fly and mosquito control',
      'Flea and tick control',
      'Fumigation services',
    ],
    industries: ['Homes', 'Offices', 'Restaurants', 'Schools', 'Warehouses', 'Factories', 'Healthcare facilities'],
    faqs: [
      {
        question: 'How often should pest control be done?',
        answer:
          'Many commercial sites benefit from monthly or quarterly pest control, while homes may need scheduled service depending on pest activity and property conditions.',
      },
      {
        question: 'Do you provide pest control for businesses?',
        answer:
          'Yes. Tshigeng Holdings provides pest control support for offices, restaurants, schools, warehouses, factories, and other business environments.',
      },
      {
        question: 'Can I request a pest inspection?',
        answer:
          'Yes. Contact Tshigeng Holdings to discuss the site, pest concern, and whether an inspection or treatment plan is the best next step.',
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
        'Tshigeng Holdings provides commercial and industrial pest control for businesses across Gauteng and South Africa. Request a pest control quote today.',
      keywords:
        'pest control, pest control near me, commercial pest control, residential pest control, industrial pest control, pest inspection, cockroach control, rodent control, termite treatment',
    },
  },
  '/cleaning-services': {
    eyebrow: 'Cleaning & Hygiene Solutions',
    title: 'Cleaning & Hygiene Solutions',
    highlight: 'Cleaning and Hygiene',
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
      'Commercial cleaning',
      'Hygiene equipment installation',
      'Hygiene refill services',
    ],
    industries: ['Homes', 'Offices', 'Commercial premises', 'Schools', 'Healthcare facilities', 'Retail spaces'],
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
        image: serviceImages.hygieneRefills,
        imageAlt: 'Five-litre bathroom hygiene cleaner supplied for facility care',
      },
    ],
    industries: ['Offices', 'Schools', 'Healthcare facilities', 'Retail spaces', 'Hospitality venues', 'Commercial buildings'],
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
        question: 'Can businesses request hygiene and cleaning together?',
        answer:
          'Yes. Hygiene, cleaning, and pest management can be combined into one facility support plan.',
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
    description:
      'Cleaning chemicals, janitorial supplies, hygiene supplies, consumables, equipment, PPE, and facility supplies for operational teams.',
    introTitle: 'Cleaning materials for facilities that need dependable supply',
    intro:
      'Tshigeng Holdings supplies cleaning materials and facility consumables for homes, offices, commercial premises, and institutional cleaning teams.',
    searchFocus: [
      'Cleaning supplies',
      'Hygiene supplies',
      'Janitorial supplies',
      'Cleaning chemicals',
      'Cleaning equipment supplier',
      'Facility supplies',
    ],
    services: [
      'Cleaning chemicals',
      'Cleaning equipment',
      'Paper towel supply',
      'Toilet paper supply',
      'Hand soap supply',
      'Washroom consumables',
      'PPE and safety equipment',
      'Commercial cleaning products',
    ],
    industries: ['Facilities teams', 'Offices', 'Schools', 'Retail sites', 'Commercial premises', 'Hospitality venues'],
    faqs: [
      {
        question: 'Do you supply cleaning chemicals?',
        answer:
          'Yes. Tshigeng Holdings supplies cleaning chemicals and consumables for facilities that need dependable cleaning material support.',
      },
      {
        question: 'Can supplies be combined with cleaning services?',
        answer:
          'Yes. Cleaning supplies can be included as part of a broader cleaning, hygiene, or facility support plan.',
      },
      {
        question: 'Do you supply hygiene consumables?',
        answer:
          'Yes. Hygiene supplies such as paper towels, hand soap, and washroom consumables can be discussed based on the facility requirement.',
      },
    ],
    relatedLinks: [
      { label: 'Hygiene Services', path: '/hygiene-services' },
      { label: 'Cleaning Services', path: '/cleaning-services' },
      { label: 'Contact Us', path: '/contact' },
    ],
    seo: {
      title: 'Cleaning Supplies and PPE | Tshigeng Holdings',
      description:
        'Tshigeng Holdings supplies cleaning chemicals, cleaning equipment, hygiene supplies, janitorial supplies, consumables, and facility supplies.',
      keywords:
        'cleaning supplies, hygiene supplies, janitorial supplies, cleaning chemicals, cleaning equipment supplier, PPE supplier, facility supplies',
    },
  },
  '/commercial-cleaning': {
    eyebrow: 'Commercial Cleaning Services',
    title: 'Commercial Cleaning Services',
    highlight: 'Commercial Cleaning',
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
    industries: ['Homes', 'Offices', 'Commercial premises', 'Schools', 'Healthcare facilities', 'Retail spaces'],
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
    service: 'pest control',
    description:
      'Pest control services for Pretoria homes, offices, restaurants, schools, warehouses, and commercial facilities.',
    intro:
      'Tshigeng Holdings supports Pretoria properties with responsive pest inspection, treatment planning, and ongoing pest management for residential and business environments.',
    services: ['Cockroach control', 'Rodent control', 'Ant control', 'Termite inspection', 'Bed bug treatment', 'Commercial pest control'],
    industries: ['Homes', 'Offices', 'Restaurants', 'Schools', 'Warehouses', 'Healthcare facilities'],
    faqs: [
      {
        question: 'Do you provide pest control near Pretoria?',
        answer:
          'Yes. Tshigeng Holdings supports pest control enquiries in Pretoria and surrounding Gauteng areas.',
      },
      {
        question: 'Can Pretoria businesses request monthly pest control?',
        answer:
          'Yes. Monthly or scheduled pest control can be discussed for businesses that need ongoing pest management.',
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
        'Need pest control in Pretoria? Tshigeng Holdings provides residential and commercial pest control for homes, offices, restaurants, schools, and facilities.',
      keywords:
        'pest control Pretoria, pest control near me Pretoria, cockroach control Pretoria, rodent control Pretoria, commercial pest control Pretoria',
    },
  },
  '/pest-control-johannesburg': {
    eyebrow: 'Johannesburg Pest Control',
    title: 'Pest Control in Johannesburg',
    highlight: 'Johannesburg',
    location: 'Johannesburg',
    service: 'pest control',
    description:
      'Commercial and residential pest control support for Johannesburg offices, homes, warehouses, restaurants, and managed facilities.',
    intro:
      'Tshigeng Holdings helps Johannesburg clients manage pest risks with practical pest control services, inspection support, and scheduled maintenance options.',
    services: ['Commercial pest control', 'Residential pest control', 'Rodent control', 'Cockroach control', 'Fly control', 'Warehouse pest management'],
    industries: ['Offices', 'Warehouses', 'Factories', 'Restaurants', 'Retail sites', 'Homes'],
    faqs: [
      {
        question: 'Do you offer pest control for Johannesburg businesses?',
        answer:
          'Yes. Tshigeng Holdings supports Johannesburg businesses with pest management for offices, warehouses, restaurants, retail spaces, and industrial sites.',
      },
      {
        question: 'Can you help with rodents and cockroaches?',
        answer:
          'Yes. Rodent control and cockroach control are common pest control requirements that can be assessed and planned for your site.',
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
        'Tshigeng Holdings provides pest control in Johannesburg for homes, offices, restaurants, warehouses, and commercial facilities.',
      keywords:
        'pest control Johannesburg, commercial pest control Johannesburg, residential pest control Johannesburg, rodent control Johannesburg, cockroach control Johannesburg',
    },
  },
  '/pest-control-centurion': {
    eyebrow: 'Centurion Pest Control',
    title: 'Pest Control in Centurion',
    highlight: 'Centurion',
    location: 'Centurion',
    nearbyAreas: ['Irene'],
    service: 'pest control',
    description:
      'Pest control services for Centurion homes, estates, offices, schools, hospitality sites, and commercial facilities.',
    intro:
      'Based close to Irene and Centurion, Tshigeng Holdings is well positioned to support local pest control enquiries for homes, offices, and managed facilities.',
    services: ['Pest inspection', 'Cockroach control', 'Rodent control', 'Ant control', 'Commercial pest control', 'Residential pest control'],
    industries: ['Homes', 'Estates', 'Offices', 'Schools', 'Hospitality sites', 'Healthcare facilities'],
    faqs: [
      {
        question: 'Do you provide pest control in Centurion?',
        answer:
          'Yes. Tshigeng Holdings supports Centurion and nearby areas including Irene with pest control and facility service enquiries.',
      },
      {
        question: 'Can homes request pest control?',
        answer:
          'Yes. Residential pest control can be arranged according to the type of pest activity and the property requirements.',
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
        'Tshigeng Holdings provides pest control in Centurion and Irene for homes, offices, estates, schools, and commercial facilities.',
      keywords:
        'pest control Centurion, pest control Irene, residential pest control Centurion, commercial pest control Centurion, cockroach control Centurion',
    },
  },
  '/cleaning-services-pretoria': {
    eyebrow: 'Pretoria Cleaning Services',
    title: 'Cleaning Services in Pretoria',
    highlight: 'Pretoria',
    location: 'Pretoria',
    service: 'cleaning services',
    description:
      'Regular and deep cleaning for Pretoria offices, homes, commercial premises, schools, healthcare environments, and retail spaces.',
    intro:
      'Tshigeng Holdings provides cleaning services in Pretoria for offices, homes, commercial premises, schools, healthcare environments, and retail spaces. Cleaning can be tailored to the site, schedule, and areas that need attention.',
    services: ['Regular cleaning', 'Commercial cleaning', 'Deep cleaning', 'Office cleaning', 'School cleaning', 'Retail cleaning'],
    industries: ['Offices', 'Homes', 'Schools', 'Healthcare facilities', 'Retail spaces', 'Commercial buildings'],
    faqs: [
      {
        question: 'Do you provide office cleaning in Pretoria?',
        answer:
          'Yes. Tshigeng Holdings supports office cleaning and commercial cleaning enquiries in Pretoria and surrounding areas.',
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
        'Tshigeng Holdings provides regular and deep cleaning in Pretoria for offices, homes, commercial premises, schools, and retail spaces.',
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
    description:
      'Supply, installation, maintenance, and servicing of soap dispensers, air hand dryers, ladies sanitary bins, toilet seat wipes, paper towel dispensers, air fresheners, and chemical deep cleaning for Gauteng businesses.',
    intro:
      'Tshigeng Holdings supplies, installs, maintains, and services hygiene equipment for Gauteng businesses. Offerings include soap dispensers, air hand dryers, ladies sanitary bins, toilet seat wipes, paper towel dispensers, air fresheners, and chemical deep cleaning.',
    services: ['Soap dispenser supply, installation, maintenance, and servicing', 'Air hand dryer supply, installation, maintenance, and servicing', 'Ladies sanitary bin supply and servicing', 'Toilet seat wipes', 'Paper towel dispensers', 'Air freshener supply and servicing', 'Chemical deep cleaning'],
    industries: ['Offices', 'Schools', 'Healthcare facilities', 'Retail sites', 'Hospitality venues', 'Commercial buildings'],
    faqs: [
      {
        question: 'Do you provide hygiene services in Gauteng?',
        answer:
          'Yes. Tshigeng Holdings supports hygiene service enquiries across Gauteng, including washroom equipment and consumables.',
      },
      {
        question: 'Can hygiene services be combined with cleaning?',
        answer:
          'Yes. Hygiene services, cleaning, and pest control can be discussed together for a practical facility support plan.',
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
    page.seo,
  ])
);

export const landingPagePaths = [...Object.keys(serviceLandingPages), ...Object.keys(locationLandingPages)];
