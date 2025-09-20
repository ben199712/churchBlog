# Grace Seventh-day Adventist Church Website

A comprehensive, modern website for a Seventh-day Adventist church featuring a blog-style platform with interactive elements and spiritual design aesthetics.

## 🌟 Features

### Core Functionality
- **Blog/News System**: Content management for church articles, news, and announcements
- **Donation Platform**: Secure online donations and offerings with multiple payment options
- **Interactive Bible Quiz**: Multiple quiz categories testing Bible knowledge and SDA doctrine
- **Responsive Design**: Optimized for both mobile and desktop devices

### Design Highlights
- **Heavenly Aesthetic**: Clean, elegant design with spiritual visual elements
- **SDA Brand Colors**: Official Seventh-day Adventist Church color palette
- **Professional Appearance**: Custom styling that avoids generic Bootstrap templates
- **Fast Loading**: Optimized for quick page load times

## 🎨 Design System

### Color Palette
- **Primary Blue**: #003366 (SDA Official Blue)
- **Light Blue**: #4A90E2 (Accent Blue)
- **Gold**: #D4AF37 (SDA Gold)
- **Cream**: #F5F5DC (Warm Background)
- **White**: #FFFFFF (Clean Backgrounds)

### Typography
- **Headings**: Playfair Display (Elegant Serif)
- **Body Text**: Source Sans Pro (Clean Sans-serif)

## 📁 File Structure

```
church_blog/
├── index.html          # Homepage with hero section and latest posts
├── blog.html           # Blog listing with filtering and newsletter signup
├── donations.html      # Donation form with payment integration
├── quiz.html           # Interactive Bible quiz system
├── about.html          # Church information and leadership
├── styles.css          # Comprehensive CSS with SDA design system
├── script.js           # JavaScript functionality for all pages
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open `index.html`** in a web browser
3. **Navigate** through the different pages using the top navigation
4. **Test Features**:
   - Browse blog posts and filter by category
   - Try the donation form (simulated payment)
   - Take a Bible quiz in different categories
   - Explore church information on the About page

## 📱 Pages Overview

### Homepage (`index.html`)
- Hero section with church welcome message
- Service times and information
- Latest blog posts preview
- Call-to-action sections

### Blog (`blog.html`)
- Featured article highlight
- Filterable blog post grid
- Newsletter subscription
- Category-based filtering (All, Church News, Spiritual Insights, Announcements)

### Donations (`donations.html`)
- Multiple donation types (Tithe, Offering, Special)
- Flexible amount selection
- Donor information form
- Payment method selection (Card/Bank Transfer)
- Security features and impact information

### Bible Quiz (`quiz.html`)
- Six quiz categories:
  - Bible Basics (Beginner)
  - SDA Doctrine (Intermediate)
  - Bible Prophecy (Advanced)
  - Sabbath & Worship (Beginner)
  - Health & Wellness (Intermediate)
  - Mission & Service (Intermediate)
- Interactive question interface
- Timer and progress tracking
- Detailed results with explanations
- Leaderboard system

### About Us (`about.html`)
- Church history and story
- Mission, values, and beliefs
- Leadership team profiles
- Ministry information
- Contact details and service times

## 🛠 Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with CSS variables and modern features
- **JavaScript**: Interactive functionality and dynamic content
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Typography enhancement

### Performance Optimizations
- **CDN Resources**: External libraries loaded from CDNs
- **Optimized Images**: Placeholder images with proper sizing
- **Minimal Dependencies**: Lightweight external resources
- **Efficient CSS**: CSS variables and optimized selectors
- **Lazy Loading**: Content loaded as needed

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement approach

## 🎯 Key Features Explained

### Blog System
- Dynamic content loading
- Category-based filtering
- Featured post highlighting
- Newsletter subscription
- Responsive card layout

### Donation Platform
- Multiple donation types
- Flexible amount selection
- Form validation
- Payment method options
- Security indicators
- Recent donations display

### Quiz System
- Multiple difficulty levels
- Timer functionality
- Progress tracking
- Detailed results
- Question explanations
- Retake functionality

### Design Elements
- Gradient backgrounds
- Card-based layouts
- Smooth animations
- Hover effects
- Loading states
- Alert notifications

## 🔧 Customization

### Adding New Blog Posts
Edit the `blogPosts` array in `script.js`:
```javascript
{
    id: 7,
    title: "Your Article Title",
    excerpt: "Brief description...",
    content: "Full content...",
    author: "Author Name",
    date: "2024-12-20",
    category: "church-news",
    image: "image-url",
    featured: false
}
```

### Adding New Quiz Questions
Edit the `quizData` object in `script.js`:
```javascript
{
    question: "Your question?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0,
    explanation: "Explanation of the correct answer."
}
```

### Customizing Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --sda-blue: #003366;
    --sda-light-blue: #4A90E2;
    --sda-gold: #D4AF37;
    /* Add your custom colors */
}
```

## 📞 Support

For questions or support regarding this website template, please contact:
- **Email**: info@gracesdachurch.org
- **Phone**: (555) 123-4567
- **Address**: 123 Faith Street, Hope City, HC 12345

## 📄 License

This project is created for Grace Seventh-day Adventist Church. All rights reserved.

---

**Built with ❤️ for the Seventh-day Adventist community**

