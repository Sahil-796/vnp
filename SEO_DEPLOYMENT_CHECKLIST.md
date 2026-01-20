# 🚀 SEO Deployment Checklist

## Pre-Deployment Verification

### ✅ Files Check
- [ ] All favicon files exist in `/public`
  - [ ] `favicon.ico`
  - [ ] `favicon.svg`
  - [ ] `favicon-96x96.png`
  - [ ] `apple-touch-icon.png`
  - [ ] `web-app-manifest-192x192.png`
  - [ ] `web-app-manifest-512x512.png`
- [ ] `og-image.png` exists in `/public` (1200x630px)
- [ ] `site.webmanifest` updated with branding
- [ ] `robots.txt` configured correctly

### ✅ Code Review
- [ ] `app/layout.tsx` has comprehensive metadata
- [ ] All page files have unique metadata
- [ ] Structured data (JSON-LD) on all pages
- [ ] Canonical URLs set for each page
- [ ] No TypeScript errors (`npm run build`)

---

## Post-Deployment Testing

### 🔍 Favicon Testing
**Test on each platform:**
- [ ] Chrome Desktop - shows correct favicon
- [ ] Safari Desktop - shows correct favicon
- [ ] Firefox Desktop - shows correct favicon
- [ ] Chrome Mobile (Android) - shows correct icon
- [ ] Safari Mobile (iOS) - shows correct icon
- [ ] Browser tab tooltip shows "Vision and Path"

**Test bookmarks:**
- [ ] Bookmark page and verify icon appears
- [ ] Add to home screen (mobile) - icon correct

---

### 🌐 Open Graph Testing

**Facebook Debugger**
URL: https://developers.facebook.com/tools/debug/

- [ ] Enter: `https://visionandpath.com`
- [ ] Verify OG image displays (1200x630)
- [ ] Verify title: "Vision and Path - Expert Job Placement & Career Services"
- [ ] Verify description appears correctly
- [ ] Click "Scrape Again" to refresh cache

**Test all pages:**
- [ ] Home page (`/`)
- [ ] Services listing (`/services`)
- [ ] Career Assessment (`/services/career-assessment`)
- [ ] Goal Setting (`/services/goal-setting`)
- [ ] Skill Development (`/services/skill-development`)
- [ ] Interview Prep (`/services/interview-preparation`)
- [ ] Job Search (`/services/job-search-strategies`)
- [ ] Resume Building (`/services/resume-building`)
- [ ] About page (`/about`)
- [ ] Contact page (`/contact`)

---

### 🐦 Twitter Card Testing

**Twitter Card Validator**
URL: https://cards-dev.twitter.com/validator

- [ ] Enter: `https://visionandpath.com`
- [ ] Verify card type: "summary_large_image"
- [ ] Verify image displays correctly
- [ ] Verify title and description

---

### 📱 Mobile & PWA Testing

**Mobile-Friendly Test**
URL: https://search.google.com/test/mobile-friendly

- [ ] Enter: `https://visionandpath.com`
- [ ] Verify "Page is mobile-friendly"
- [ ] Check for mobile usability issues

**PWA Installation**
- [ ] Chrome Desktop: Click install icon in address bar
- [ ] Chrome Mobile: "Add to Home Screen" option available
- [ ] Installed PWA opens in standalone mode
- [ ] PWA icon displays correctly
- [ ] PWA name: "VP Career"

**Manifest Verification**
- [ ] Visit: `https://visionandpath.com/site.webmanifest`
- [ ] JSON loads correctly
- [ ] Name: "Vision and Path - Career Services"
- [ ] Icons array populated

---

### 🎯 Rich Results Testing

**Google Rich Results Test**
URL: https://search.google.com/test/rich-results

Test each page:
- [ ] Home page (`/`) - FAQ schema detected
- [ ] Services page (`/services`) - ItemList schema detected
- [ ] Service detail pages - Service schema detected
- [ ] About page (`/about`) - AboutPage schema detected
- [ ] Contact page (`/contact`) - ContactPage schema detected

**Schema.org Validator**
URL: https://validator.schema.org/

- [ ] Paste page source HTML
- [ ] Verify no errors in structured data
- [ ] Check all schemas are valid

---

### ⚡ Performance Testing

**PageSpeed Insights**
URL: https://pagespeed.web.dev/

- [ ] Test: `https://visionandpath.com`
- [ ] Mobile score: Target 90+
- [ ] Desktop score: Target 95+
- [ ] Core Web Vitals: All green
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1

---

### 🔍 Google Search Console Setup

**Initial Setup**
- [ ] Add property: `https://visionandpath.com`
- [ ] Verify ownership via HTML tag method
- [ ] Copy verification code
- [ ] Update `app/layout.tsx` line 115 with code
- [ ] Redeploy and verify

**Submit Sitemap**
- [ ] Go to Sitemaps section
- [ ] Submit: `https://visionandpath.com/sitemap.xml`
- [ ] Verify sitemap loads without errors

**Request Indexing**
- [ ] URL Inspection tool
- [ ] Test each key page
- [ ] Click "Request Indexing" for:
  - [ ] Home page
  - [ ] Services page
  - [ ] All 6 service detail pages
  - [ ] About page
  - [ ] Contact page

---

### 🌐 Browser Compatibility

**Desktop Browsers**
- [ ] Chrome (latest) - all features work
- [ ] Firefox (latest) - all features work
- [ ] Safari (latest) - all features work
- [ ] Edge (latest) - all features work

**Mobile Browsers**
- [ ] Chrome Android - all features work
- [ ] Safari iOS - all features work
- [ ] Samsung Internet - all features work

**Test on each:**
- [ ] Favicons display correctly
- [ ] Metadata loads properly
- [ ] No console errors
- [ ] Images load correctly

---

### 📊 Analytics Verification

**Vercel Analytics**
- [ ] Analytics component in layout.tsx
- [ ] Dashboard shows page views
- [ ] No tracking errors

**Future: Google Analytics 4**
- [ ] Create GA4 property
- [ ] Add tracking ID to layout
- [ ] Verify events tracking

---

### 🔐 Security & Privacy

**Headers Check**
- [ ] HTTPS enabled (not HTTP)
- [ ] SSL certificate valid
- [ ] No mixed content warnings
- [ ] Security headers configured

**Privacy Compliance**
- [ ] Contact info accurate
- [ ] Phone/email correct
- [ ] Address information correct

---

### 📱 Social Media Profiles

**Update Social Media Handles**
If handles differ from @visionandpath, update in:
- [ ] `app/layout.tsx` (Organization schema)
- [ ] `app/layout.tsx` (Twitter creator)
- [ ] `app/page.tsx` (Twitter card)

**Verify Links**
- [ ] LinkedIn company page exists
- [ ] Twitter profile exists
- [ ] Facebook page exists (if using)

---

### 🎨 Visual Verification

**OG Image Quality**
- [ ] `og-image.png` is high quality
- [ ] Text readable when small (500px wide)
- [ ] Brand colors consistent
- [ ] Logo clearly visible
- [ ] File size < 300KB

**Favicon Quality**
- [ ] Sharp at 16x16 (browser tab)
- [ ] Sharp at 32x32 (bookmark bar)
- [ ] Sharp at 96x96 (shortcuts)
- [ ] Apple touch icon clear at 180x180

---

### 🔄 Post-Deployment Tasks (Week 1)

**Day 1**
- [ ] Deploy to production
- [ ] Verify all links work
- [ ] Test all pages load correctly
- [ ] Check all favicons display

**Day 2-3**
- [ ] Submit to Google Search Console
- [ ] Request indexing for key pages
- [ ] Test social media sharing
- [ ] Monitor for crawl errors

**Day 4-5**
- [ ] Check Google Search Console for issues
- [ ] Verify structured data detected
- [ ] Fix any reported errors
- [ ] Test on multiple devices

**Day 6-7**
- [ ] Monitor initial search rankings
- [ ] Check for any broken links
- [ ] Verify analytics tracking
- [ ] Document any issues

---

### 📈 Monitoring Schedule

**Daily (First Week)**
- [ ] Check for crawl errors
- [ ] Monitor site uptime
- [ ] Check core web vitals
- [ ] Review any issues

**Weekly (First Month)**
- [ ] Review Search Console reports
- [ ] Check keyword rankings
- [ ] Monitor page impressions
- [ ] Update content if needed

**Monthly (Ongoing)**
- [ ] Full SEO audit
- [ ] Update metadata for campaigns
- [ ] Refresh OG images seasonally
- [ ] Add new FAQ questions

---

### ✅ Sign-Off Checklist

**Before Going Live:**
- [ ] All tests above passed
- [ ] No console errors
- [ ] All pages load < 3 seconds
- [ ] Mobile fully functional
- [ ] Favicons work everywhere
- [ ] OG images share correctly
- [ ] Structured data validates
- [ ] Google verification complete

**Team Sign-Off:**
- [ ] Developer approval: _______________
- [ ] QA approval: _______________
- [ ] Marketing approval: _______________
- [ ] Final deployment: _______________

---

## 🚨 Common Issues & Fixes

### Issue: Favicon not showing
**Fix:**
1. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
2. Clear browser cache
3. Check file exists at `/public/favicon.ico`
4. Verify file permissions

### Issue: OG image not updating
**Fix:**
1. Use Facebook Debugger "Scrape Again"
2. Change image filename and update metadata
3. Wait 24-48 hours for cache expiry
4. Add version query: `og-image.png?v=2`

### Issue: Rich results not showing
**Fix:**
1. Verify structured data with validator
2. Wait 2-4 weeks for Google to process
3. Request indexing again
4. Check for JSON syntax errors

### Issue: PWA not installable
**Fix:**
1. Check HTTPS enabled
2. Verify manifest at `/site.webmanifest`
3. Ensure service worker registered
4. Check icon sizes correct

### Issue: Google Search Console verification fails
**Fix:**
1. Ensure code in `<head>` section
2. Deploy changes to production
3. Wait 5 minutes, try again
4. Check for typos in verification code

---

## 📞 Support Resources

- **Next.js Metadata**: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Schema.org**: https://schema.org/docs/schemas.html
- **Google Search Central**: https://developers.google.com/search
- **Open Graph Protocol**: https://ogp.me/
- **Twitter Cards**: https://developer.twitter.com/en/docs/twitter-for-websites/cards

---

**Deployment Date**: _______________  
**Verified By**: _______________  
**Next Review**: _______________  
**Status**: 🟢 Live / 🟡 Testing / 🔴 Issues