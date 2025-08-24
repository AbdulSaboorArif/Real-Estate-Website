export type PropertyType = 'luxury' | 'condo' | 'apartment' | 'townhouse' | 'villa' | 'commercial' | 'estate' | 'studio' | 'single_family'
export type ListingType = 'rent' | 'sale'

export interface PropertyItem {
  id: number
  slug: string
  title: string
  subtitle?: string
  description: string
  type: ListingType
  typeofproperty: PropertyType
  price: number
  priceFormatted: string
  location: string
  address?: string
  city?: string
  state?: string
  country?: string
  beds: number
  baths: number
  sqft: number
  lotSizeSqft?: number
  yearBuilt?: number
  dimensions?: { widthFt?: number; depthFt?: number; heightFt?: number }
  features: string[]
  amenities: string[]
  images: string[]
  featured?: boolean
}

export const properties: PropertyItem[] = [
  {
    id: 1,
    slug: 'modern-luxury-villa-beverly-hills',
    title: 'Modern Luxury Villa',
    subtitle: 'Panoramic pool and city views',
    description:
      'An architectural masterpiece featuring floor-to-ceiling glass, open concept living, and an infinity-edge pool overlooking Beverly Hills.',
    type: 'sale',
    typeofproperty: 'villa',
    price: 2500000,
    priceFormatted: '$2,500,000',
    location: 'Beverly Hills, CA',
    address: '27 Sunset Crest, Beverly Hills, CA',
    city: 'Beverly Hills',
    state: 'CA',
    country: 'USA',
    beds: 5,
    baths: 4,
    sqft: 4200,
    lotSizeSqft: 15200,
    yearBuilt: 2019,
    dimensions: { widthFt: 80, depthFt: 120, heightFt: 35 },
    features: ['Open kitchen', 'Smart home', 'Home theater', '3-car garage'],
    amenities: ['Pool', 'Gym', 'Security system', 'Outdoor kitchen'],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c1e5?q=80&w=1600&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'downtown-waterfront-condo',
    title: 'Waterfront Condo',
    subtitle: 'Harbor views and luxury amenities',
    description:
      'Stylish condo with a private balcony facing the harbor, concierge service, and residents-only fitness center.',
    type: 'rent',
    typeofproperty: 'condo',
    price: 3200,
    priceFormatted: '$3,200/month',
    location: 'Harbor View, CA',
    city: 'Harbor View',
    state: 'CA',
    country: 'USA',
    beds: 2,
    baths: 2,
    sqft: 1400,
    yearBuilt: 2018,
    features: ['Balcony', 'Chef kitchen', 'In-unit laundry'],
    amenities: ['Pool', 'Concierge', 'EV charging'],
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 3,
    slug: 'luxury-family-home-suburban-heights',
    title: 'Luxury Family Home',
    description:
      'Spacious family residence with bright interiors, landscaped backyard, and a quiet cul-de-sac address.',
    type: 'sale',
    typeofproperty: 'single_family',
    price: 750000,
    priceFormatted: '$750,000',
    location: 'Suburban Heights, CA',
    beds: 4,
    baths: 3,
    sqft: 2800,
    lotSizeSqft: 9800,
    yearBuilt: 2018,
    features: ['Family room', 'Breakfast nook', 'Primary suite balcony'],
    amenities: ['Solar panels', 'Two-car garage'],
    images: [
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 4,
    slug: 'investment-property-university-area',
    title: 'Investment Property',
    description:
      'Turn-key investment near the university, strong rental history and low vacancy.',
    type: 'sale',
    typeofproperty: 'townhouse',
    price: 450000,
    priceFormatted: '$450,000',
    location: 'University Area, CA',
    beds: 3,
    baths: 2,
    sqft: 1600,
    yearBuilt: 2015,
    features: ['Updated kitchen', 'Hardwood floors'],
    amenities: ['Parking', 'Proximity to transit'],
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 5,
    slug: 'cozy-studio-loft-arts-district',
    title: 'Cozy Studio Loft',
    description:
      'Charming loft with exposed brick and high ceilings in the vibrant Arts District.',
    type: 'rent',
    typeofproperty: 'studio',
    price: 1800,
    priceFormatted: '$1,800/month',
    location: 'Arts District, CA',
    beds: 1,
    baths: 1,
    sqft: 800,
    features: ['High ceilings', 'Exposed brick'],
    amenities: ['Shared rooftop', 'Bike storage'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 6,
    slug: 'historic-townhouse-district',
    title: 'Historic Townhouse',
    description:
      'Classic 1925 townhouse meticulously updated while preserving original character.',
    type: 'sale',
    typeofproperty: 'townhouse',
    price: 1200000,
    priceFormatted: '$1,200,000',
    location: 'Historic District, CA',
    beds: 5,
    baths: 4,
    sqft: 3200,
    yearBuilt: 1925,
    features: ['Crown molding', 'Chef kitchen', 'Library'],
    amenities: ['Courtyard', 'Wine cellar'],
    images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 7,
    slug: 'modern-downtown-apartment',
    title: 'Modern Downtown Apartment',
    description:
      'Bright corner unit apartment with city skyline views and quick access to transit.',
    type: 'rent',
    typeofproperty: 'apartment',
    price: 2500,
    priceFormatted: '$2,500/month',
    location: 'Downtown, City Center',
    beds: 2,
    baths: 2,
    sqft: 1200,
    features: ['Floor-to-ceiling windows', 'Quartz counters'],
    amenities: ['Gym', 'Doorman'],
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 8,
    slug: 'family-townhouse-suburban-heights',
    title: 'Family Townhouse',
    description:
      'Three-bedroom townhouse with private patio and community park access.',
    type: 'rent',
    typeofproperty: 'townhouse',
    price: 4500,
    priceFormatted: '$4,500/month',
    location: 'Suburban Heights, CA',
    beds: 3,
    baths: 3,
    sqft: 1800,
    features: ['Private patio', 'Attached garage'],
    amenities: ['Community park', 'Playground'],
    images: [
      'https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 9,
    slug: 'luxury-penthouse-financial-district',
    title: 'Luxury Penthouse',
    description:
      'Opulent penthouse with private elevator access and skyline terrace.',
    type: 'rent',
    typeofproperty: 'apartment',
    price: 8000,
    priceFormatted: '$8,000/month',
    location: 'Financial District, CA',
    beds: 3,
    baths: 3,
    sqft: 2200,
    features: ['Private elevator', 'Terrace', 'Wine fridge'],
    amenities: ['24/7 concierge', 'Valet'],
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 10,
    slug: 'garden-apartment-park-view',
    title: 'Garden Apartment',
    description:
      'Serene garden-level apartment with direct courtyard access.',
    type: 'rent',
    typeofproperty: 'apartment',
    price: 2200,
    priceFormatted: '$2,200/month',
    location: 'Park View, CA',
    beds: 2,
    baths: 1,
    sqft: 1100,
    features: ['Courtyard access', 'Breakfast bar'],
    amenities: ['Pet friendly', 'Storage'],
    images: [
      'https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 11,
    slug: 'modern-condo-downtown',
    title: 'Modern Condo',
    description:
      'Contemporary condo in the heart of downtown with amenities and parking.',
    type: 'sale',
    typeofproperty: 'condo',
    price: 380000,
    priceFormatted: '$380,000',
    location: 'Downtown, CA',
    beds: 2,
    baths: 2,
    sqft: 1100,
    yearBuilt: 2020,
    features: ['Balcony', 'Walk-in closet'],
    amenities: ['Gym', 'Pool'],
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    ],
    featured: true,
  },
  {
    id: 12,
    slug: 'waterfront-estate-harbor-view',
    title: 'Waterfront Estate',
    description:
      'Stunning waterfront estate with private dock and guest house.',
    type: 'sale',
    typeofproperty: 'estate',
    price: 2500000,
    priceFormatted: '$2,500,000',
    location: 'Harbor View, CA',
    beds: 6,
    baths: 5,
    sqft: 4500,
    yearBuilt: 2019,
    features: ['Guest house', 'Private dock', 'Gourmet kitchen'],
    amenities: ['Pool', 'Security'],
    images: [
      'https://assets.site-static.com/userFiles/2959/image/Blog/Professional_Advice/Pros_and_Cons_of_Waterfront_Property.jpg',
    ],
    featured: true,
  },
  {
    id: 13,
    slug: 'commercial-office-suite-midtown',
    title: 'Commercial Office Suite',
    description:
      'Flexible Class-A office suite with 12 private offices, reception, and kitchen.',
    type: 'rent',
    typeofproperty: 'commercial',
    price: 12000,
    priceFormatted: '$12,000/month',
    location: 'Midtown, CA',
    beds: 0,
    baths: 2,
    sqft: 5000,
    features: ['Conference room', 'Server room', 'Reception'],
    amenities: ['Parking', '24/7 access'],
    images: [
      'https://cdn-images.wework.com/images/1F5F9842-DB52-11EA-ABEF-0AF92A8CFF71/1f5f9842-db52-11ea-abef-0af92a8cff71_0.jpg?width=800',
    ],
  },
  {
    id: 14,
    slug: 'mountain-view-cabin',
    title: 'Mountain View Cabin',
    description:
      'Cozy cabin retreat with panoramic mountain views and modern finishes.',
    type: 'sale',
    typeofproperty: 'single_family',
    price: 590000,
    priceFormatted: '$590,000',
    location: 'Highland Ridge, CO',
    beds: 3,
    baths: 2,
    sqft: 1700,
    yearBuilt: 2016,
    features: ['Fireplace', 'Wraparound deck'],
    amenities: ['Garage', 'Hot tub'],
    images: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    ],
  },
]

export function getPropertyBySlug(slug: string): PropertyItem | undefined {
  return properties.find((p) => p.slug === slug)
}


