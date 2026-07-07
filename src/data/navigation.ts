export const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Consumables', 
    href: '/consumables/',
    children: [
      { name: 'Furnace Atmosphere Control', href: '/consumables/furnace-atmosphere-control/' },
      { name: 'Temperature Measurement', href: '/consumables/temperature-measurement/' },
      { name: 'Furnace Insulation & Lining', href: '/consumables/furnace-insulation-lining/' },
      { name: 'Testing & Recording', href: '/consumables/testing-recording/' },
      { name: 'Small Furnace Accessories', href: '/consumables/small-furnace-accessories/' }
    ]
  },
  { name: 'Applications', href: '/applications/' },
  { name: 'Technical Guides', href: '/technical-guides/' },
  { 
    name: 'About WEIGU', 
    href: '/about-us/',
    children: [
      { name: 'Company Profile', href: '/about-us/' },
      { name: 'Why WEIGU', href: '/why-weigu/' },
      { name: 'Contact', href: '/contact/' }
    ]
  }
];

export const siteConfig = {
  name: 'WEIGU Furnace Accessories',
  positioning: 'Heat Treatment Furnace Accessories & Consumables',
  expertPersona: 'Heat Treatment Furnace Process Stability Specialist',
  contactEmail: 'sales@weigufurnace.com',
};
