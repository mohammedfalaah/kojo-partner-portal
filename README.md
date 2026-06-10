# KOJO Partner Portal

React.js technical test implementation for Kaizen Payments.

## Overview
Built the UI screens based on the provided mockups:
- Account creation form with validation
- Partner portal dashboard with sidebar nav
- Business loan leads management interface  
- Lead details modal with eligibility scoring
- Purchase flow with success confirmation

## Tech Stack
- React.js (Create React App)
- React Router for navigation
- Lucide React for icons
- Custom CSS (no UI framework - built from scratch)

 Features Implemented
 Account creation form with password validation  
 Responsive partner portal layout  
 Lead cards with status indicators  
 Interactive modals for lead details  
 Purchase flow with transaction receipt  
 Pagination and filtering UI  

 Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Notes
- Form validation includes uppercase, number, and min 8 chars for password
- Mock data used for lead listings (12 sample leads with different statuses)
- Eligibility scores shown as circular progress indicators
- Responsive design works on desktop and mobile

## TODO (if this were a real project)
- [ ] Connect to actual API endpoints
- [ ] Add error handling and loading states  
- [ ] Implement actual authentication
- [ ] Add unit tests with Jest/Testing Library
- [ ] Set up ESLint and Prettier configs
- [ ] Add accessibility improvements (ARIA labels, keyboard nav)

Built for Kaizen Payments technical assessment.
