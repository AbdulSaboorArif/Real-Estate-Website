# Real Estate Website Routes

This document outlines the routing structure of the real estate website.

## Main Routes

### `/` - Home Page
- Main landing page with hero section, features, properties, about, testimonials, and contact sections
- Includes all main components in a single page layout

### `/about` - About Us Page
- Company story and history
- Company values and principles
- Team member information
- Call-to-action section

### `/contact` - Contact Us Page
- Contact information (phone, email, office address, hours)
- Contact form with various subject options
- Office location and directions
- FAQ section
- Response time information

### `/properties` - All Properties Page
- Shows both rental and sale properties
- Advanced filtering options (property type, price, bedrooms, bathrooms)
- Property cards with key information
- Search functionality

### `/properties/rent` - Properties for Rent Page
- Shows only rental properties
- Rental-specific filters (monthly rent, lease term, utilities, availability)
- Rental benefits section
- Rental-focused property information

### `/properties/sell` - Properties for Sale Page
- Shows only properties for sale
- Sale-specific filters (price range, property type, year built, lot size)
- Buying benefits section
- Market insights and statistics

## Navigation Structure

### Header Component
- Logo and company name
- Main navigation menu:
  - Home
  - About Us
  - Properties (dropdown with rent/sell options)
  - Contact Us
- Mobile-responsive hamburger menu
- Call-to-action button

### Properties Dropdown
- Properties for Rent
- Properties for Sale
- All Properties

## Component Architecture

### Layout Components
- `Header.tsx` - Navigation header with responsive menu
- `Footer.tsx` - Site footer (already exists)

### Page Components
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About Us page
- `app/contact/page.tsx` - Contact Us page
- `app/properties/page.tsx` - All properties page
- `app/properties/rent/page.tsx` - Rental properties page
- `app/properties/sell/page.tsx` - Properties for sale page

### Shared Components
- `Hero.tsx` - Hero section (already exists)
- `Features.tsx` - Features section (already exists)
- `Properties.tsx` - Properties section (already exists)
- `About.tsx` - About section (already exists)
- `Testimonials.tsx` - Testimonials section (already exists)
- `Contact.tsx` - Contact section (already exists)

## Features

### Responsive Design
- Mobile-first approach
- Responsive navigation
- Mobile-friendly property cards

### Search and Filtering
- Location-based search
- Property type filtering
- Price range filtering
- Bedroom/bathroom filtering
- Availability filtering (for rentals)
- Year built and lot size filtering (for sales)

### Property Information
- Property images (placeholder gradients)
- Key details (beds, baths, square footage)
- Location information
- Pricing information
- Property-specific details (rental terms, sale details)

### User Experience
- Smooth transitions and hover effects
- Clear call-to-action buttons
- Consistent design language
- Easy navigation between pages

## Styling

### Color Scheme
- Primary: Blue tones for rentals
- Secondary: Green tones for sales
- Accent: Yellow highlights
- Neutral: Gray scale for text and backgrounds

### Design Elements
- Gradient backgrounds
- Rounded corners
- Shadow effects
- Hover animations
- Icon integration (Lucide React)

## Technical Implementation

### Framework
- Next.js 13+ with App Router
- TypeScript
- Tailwind CSS for styling
- Lucide React for icons

### File Structure
```
app/
├── layout.tsx
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── properties/
    ├── page.tsx
    ├── rent/
    │   └── page.tsx
    └── sell/
        └── page.tsx

components/
├── Header.tsx
├── Footer.tsx
├── Hero.tsx
├── Features.tsx
├── Properties.tsx
├── About.tsx
├── Testimonials.tsx
└── Contact.tsx
```

This routing structure provides a comprehensive real estate website with clear separation of concerns, easy navigation, and a professional user experience.
