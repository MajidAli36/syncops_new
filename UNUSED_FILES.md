# Unused Files in Web Project

This document lists all unused files found in the project that are not imported or referenced anywhere.

## ✅ Deleted Files

The following unused files have been successfully removed:

### 1. Test/Demo Pages
- `app/test-page.jsx` - Test page component, not referenced anywhere
- `app/mobile-sidebar-demo/page.js` - Demo page for mobile sidebar, not linked in navigation

### 2. Unused Hooks
- `hooks/use3DHover.ts` - 3D hover effect hook, never imported
- `hooks/useScrollReveal.ts` - Scroll reveal hook, never imported

### 3. Unused Components
- `app/components/NotFound.jsx` - Not used (app/not-found.js has its own implementation)
- `app/components/AboutUs.jsx` - Not imported anywhere
- `app/components/Technologies.jsx` - Not imported (TechnologiesHero is used instead)
- `app/components/Stats.jsx` - Not imported anywhere
- `app/components/InHouseProducts.jsx` - Not imported anywhere
- `app/components/FeaturedInsights.jsx` - Not imported anywhere
- `app/components/LeadershipCarousel.jsx` - Not imported anywhere
- `app/components/Underline.jsx` - Not imported anywhere
- `app/components/CTA.jsx` - Not imported (other CTA components like FinalCTA are used)

### 4. Unused UI Components
- `app/components/ui/scondaryButton.jsx` - Typo in filename (should be "secondary"), not imported

## Summary

**Total Files Deleted: 11**

- Test/Demo Pages: 1 (test-page.jsx was already removed, mobile-sidebar-demo directory deleted)
- Hooks: 2 (use3DHover.ts, useScrollReveal.ts)
- Components: 7 (NotFound.jsx, AboutUs.jsx, Technologies.jsx, Stats.jsx, LeadershipCarousel.jsx, Underline.jsx, CTA.jsx)
- UI Components: 1 (scondaryButton.jsx)

**Note:** Some files (InHouseProducts.jsx, FeaturedInsights.jsx) were not found and may have already been deleted or moved.

