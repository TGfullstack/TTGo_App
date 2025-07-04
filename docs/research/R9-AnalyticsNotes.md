# Project & Portfolio - Analytics Plan

* **Research Notes - Milestone 3**
* **Zachary Taylor**
* **Assignment Due Date**

---

## **Analytics & Improvements**

_Digital Analytics_ is the process of gathering and analyzing your website or app data. The main goal of digital analytics is to help a developer understand how users may use your app or website so improvements can be made to meet business and marketing goals.

---

## **Google**

* **Google Analytics**
  * Analytics collects data and stores user interactions from your website or app as **_events_**
    * Page views
    * Button clicks
    * System events
  * Website: add tag on website
  * App: use Firebase SDK
  * Combines app and web data in a common language in your reports
  * [Google Skillshop: Get Started using Google Analytics](https://skillshop.docebosaas.com/learn/courses/8108/get-started-using-google-analytics?hash=8dfe0899afeb31b78963986577ea99e2e5dcf49c&generated_by=11239746)

* **Google Search Influence**
  * **Good titles**: unique to the page, clear and concise, describes contents of page
  * **Title Link**: headline part of the search result
    * Generated from words inside `<title>` element and other headings
  * **Snippet**: search result with description of target page to help users decide to click the search result
* **Bread Crumbs**: Descriptive URLs, Google learns breadcrumbs
* **Images**:
  * Images can be a way users find your website
  * High quality images near relevant text
  * Descriptive alt text
* **Link to relative resources**:
  * Connect search engine and users to other parts of site or relevant pages on other sites
  * Links can add value by connecting to another resource that collaborates what you're writing about
  * **Write good link text**: text tells users and Google details about the page being linked to

---

## Next.js Analytics

Next.js has built in support for measuring and reporting performance metrics

* `useReportWebVitals` hook
  * Build your own web-vitals component
  * Send results to ANY endpoint (Google Analytics: use `id` value to construct metric distribution manually (to calculate percentiles))
* **Client Instrumentation**: `instrumentation-client.js|ts` runs before frontend code is executed
  * Global analytics
  * Error tracking
  * performance monitoring tools

---

All of the components of your brand–your brand voice, brand color scheme, logo design, and brand fonts–should align with and communicate your brand personality.

* **Content and quality questions**
  * Does the content provide original information, reporting, research, or analysis?
  * Does the main heading or page title provide a descriptive, helpful summary of the content?
  * Does the main heading or page title avoid exaggerating or being shocking in nature?

---

* **People-first Content**
Content that's created for people and not to gain search engine rankings
  * Does your site have a primary purpose or focus?
  * Will someone reading your content leave feeling like they've had a satisfying experience?
* **Ask "Who, How, and Why" about content**
  * WHO (created the content)
  * HOW (the content was created)
  * WHY (was the content)

---

## Reference Links

Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

**Google**
[Google Analytics Guides](https://developers.google.com/analytics/devguides/collection/ga4)

[URL Inspection Tool](https://support.google.com/webmasters/answer/9012289): URL Inspection report and test

[Get Started using Google Analytics](https://skillshop.docebosaas.com/learn/courses/8108/get-started-using-google-analytics?hash=8dfe0899afeb31b78963986577ea99e2e5dcf49c&generated_by=11239746): Get to know Google Analytics

**Next.Js Docs**
[Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics): Next.js offers built-in support for measuring and reporting performance metrics

---

**Note:**  

* It is acceptable to provide multiple links for a single sub-topic.  
* Be sure to explain what resource(s) you found most helpful for the current milestone
