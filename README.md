# EduPeak – Online Learning Platform
### CBIT WP Assignment | IV Sem CSE4 | Mar 2026 | Subject: Web Programming

A fully responsive static website for an online course platform built with pure HTML, CSS, and JavaScript — with XML/XSD data files.

---

## 🗂️ Project Structure

```
edupeak/
├── index.html          # Home page
├── courses.html        # Courses listing with filter
├── course-details.html # Course detail page
├── register.html       # Register & Login (with JS validation)
├── contact.html        # Contact page with form
├── styles.css          # External CSS (all styling)
├── courses.xml         # XML data file for courses
├── courses.xsd         # XSD schema to validate XML
└── README.md           # This file
```

---

## 📄 Pages Overview

| Page | File | Features |
|------|------|----------|
| Home | `index.html` | Hero banner, features grid, course preview, testimonials, CTA |
| Courses | `courses.html` | 9 course cards, category filter (JS), badges, ratings |
| Course Details | `course-details.html` | Curriculum accordion, instructor, enroll card, countdown timer |
| Register/Login | `register.html` | Tabbed form, full JS validation, password strength meter |
| Contact | `contact.html` | Contact info cards, inquiry form with JS validation |

---

## ✅ Assignment Coverage

### Part 1 – HTML Structure
- [x] Home with navigation, banner, images
- [x] Courses with cards (title, instructor, price, ratings)
- [x] Course Details (description, instructor, curriculum, duration, enroll button)
- [x] Register/Login with Name, Email, Password, Confirm Password, Submit + **JS Validation**
- [x] Contact with Address, Email, Phone, Contact Form

### Part 2 – CSS Styling
- [x] External `styles.css` file
- [x] Custom fonts (Syne + DM Sans via Google Fonts)
- [x] CSS variables for colors and spacing
- [x] Hover effects on all buttons and links
- [x] CSS Grid system for layout (features, courses, footer)
- [x] Fully responsive (mobile/tablet/desktop)

### Part 3 – XML
- [x] `courses.xml` — stores 6 courses with full metadata
- [x] `courses.xsd` — validates XML with types, enums, patterns, constraints

---

## 🚀 GitHub Pages Deployment

### Step 1 – Create Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New Repository**
3. Name it `edupeak` (or any name)
4. Set to **Public**
5. Click **Create Repository**

### Step 2 – Upload Files
```bash
# Option A: Git CLI
git init
git add .
git commit -m "Initial commit: EduPeak WP Assignment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/edupeak.git
git push -u origin main

# Option B: GitHub Web Upload
# Drag and drop all files on the repository page
```

### Step 3 – Enable GitHub Pages
1. Go to your repo → **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under **Source** select: `Deploy from a branch`
4. Select branch: `main` | folder: `/ (root)`
5. Click **Save**

### Step 4 – Access Your Site
Your site will be live at:
```
https://YOUR_USERNAME.github.io/edupeak/
```
*(Takes 1–5 minutes to deploy)*

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, Grid, Flexbox, Animations |
| JavaScript (Vanilla) | Form validation, tab switching, accordion |
| Google Fonts | Syne + DM Sans typography |
| XML | Course data storage |
| XSD | XML schema validation |

---

## 📚 Key Features

- 🎨 **Polished UI** — CSS variables, glassmorphism navbar, gradient cards
- 📱 **Responsive** — Works on all screen sizes using CSS Grid
- ✅ **Form Validation** — Full JS validation with real-time error messages
- 🔐 **Password Strength** — Visual strength meter on registration
- 🔢 **Course Filter** — Category-based JS filtering on courses page
- ⏱️ **Countdown Timer** — Live discount timer on course details
- 📋 **Accordion** — Collapsible curriculum sections
- 🏗️ **XML + XSD** — Structured data with schema validation

---

*Submitted by: [Your Name] | Roll No: [Your Roll No] | Section: CSE4 – IV Semester*  
*CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY (AUTONOMOUS), Hyderabad – 500075*
