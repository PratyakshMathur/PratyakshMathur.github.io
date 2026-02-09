# SQL Portfolio Console 🚀

A unique, SQL-themed interactive portfolio website that presents your professional information through a database query interface. Built with VS Code dark theme aesthetics and modern web technologies.

## 🌟 Features

- **SQL Query Interface** - Query your portfolio data using SQL-like commands
- **Interactive Navigation** - Click tabs to auto-execute queries for different sections
- **Contact Form** - INSERT INTO contact syntax shows a working contact form
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **VS Code Theme** - Dark theme with syntax highlighting colors
- **GitHub Pages Ready** - Designed for easy deployment on GitHub Pages

## 🎯 Live Demo

Visit: [https://pratyakshmathur.github.io](https://pratyakshmathur.github.io)

## 📊 Available Tables

- `experience` - Work history and professional experience
- `projects` - Personal and professional projects
- `skills` - Technical skills and proficiency levels
- `education` - Educational background
- `contact` - Contact information and availability

## 💻 Sample Queries

```sql
-- View all work experience
SELECT * FROM experience;

-- Get all projects with specific technologies
SELECT name, technologies FROM projects;

-- Show skills with advanced proficiency
SELECT name, proficiency FROM skills WHERE proficiency = 'Advanced';

-- View educational background
SELECT * FROM education;

-- Get contact information
SELECT * FROM contact;

-- Send a message (shows contact form)
INSERT INTO contact (name, email, message) VALUES ('', '', '');

-- Advanced: Join skills with experience
SELECT skills.name FROM skills JOIN experience ON skills.id = experience.skill_ids;
```

## 🛠️ Customization Guide

### 1. Update Portfolio Data

Edit `/data/portfolio.js` to replace the placeholder data with your information:

**Experience Section:**
```javascript
experience: [
    {
        id: 1,
        company: "Your Company",
        position: "Your Position",
        location: "City, State/Country",
        start_date: "YYYY-MM",
        end_date: "Present", // or "YYYY-MM"
        duration: "X months/years",
        technologies: ["Tech1", "Tech2", "Tech3"],
        responsibilities: [
            "What you did",
            "Key responsibilities"
        ],
        achievements: [
            "Key achievements",
            "Quantifiable results"
        ]
    }
]
```

**Projects Section:**
```javascript
projects: [
    {
        id: 1,
        name: "Project Name",
        description: "Brief description",
        technologies: ["Tech1", "Tech2"],
        github_url: "https://github.com/username/repo",
        live_url: "https://your-project.com", // or null
        start_date: "YYYY-MM",
        status: "Completed", // or "In Progress"
        features: [
            "Key feature 1",
            "Key feature 2"
        ]
    }
]
```

**Skills Section:**
```javascript
skills: [
    {
        id: 1,
        name: "Skill Name",
        category: "Programming Language", // or "Framework", "Tool", etc.
        proficiency: "Advanced", // "Beginner", "Intermediate", "Advanced"
        years_experience: 3,
        projects_used: ["Project1", "Project2"]
    }
]
```

**Education Section:**
```javascript
education: [
    {
        id: 1,
        institution: "University Name",
        degree: "Degree Type", // "Bachelor of Science", "Master of Science", etc.
        major: "Your Major",
        location: "City, State/Country",
        start_date: "YYYY-MM",
        end_date: "YYYY-MM", // or "Present"
        gpa: "X.X/4.0", // optional
        status: "Completed", // or "In Progress"
        relevant_courses: [
            "Course 1",
            "Course 2"
        ]
    }
]
```

**Contact Section:**
```javascript
contact: [
    {
        id: 1,
        name: "Your Full Name",
        email: "your.email@domain.com",
        phone: "+1 (XXX) XXX-XXXX",
        location: "City, State, Country",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
        website: "https://yourwebsite.com",
        available_for: [
            "Full-time positions",
            "Freelance work",
            "Collaboration opportunities"
        ]
    }
]
```

### 2. Update Page Title and Meta

Edit `/index.html`:
- Change the `<title>` tag to your name
- Update any references to "Pratyaksh Mathur" with your name

### 3. Customize Styling (Optional)

Edit `/styles/main.css` if you want to:
- Change color scheme
- Modify fonts
- Adjust layout
- Add custom animations

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push all files to your repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)"
6. Your site will be live at `https://yourusername.github.io`

### Alternative Hosting

The site works with any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 🧱 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles/
│   └── main.css            # VS Code theme CSS
├── scripts/
│   └── app.js              # Main application logic
├── data/
│   └── portfolio.js        # Your portfolio data
├── README.md               # This file
└── Pratyaksh_Mathur_Resume.pdf  # Your resume (optional)
```

## 🎨 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid/Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Fira Code Font** - Monospace font for code aesthetics
- **Responsive Design** - Mobile-first approach

## 💡 Features Explained

### SQL Query Engine
- Parses SQL-like queries using JavaScript
- Supports SELECT, FROM, WHERE, JOIN operations
- Handles INSERT for contact form functionality

### Tab Navigation
- Auto-executes queries when tabs are clicked
- Smooth transitions between sections
- Active tab highlighting

### Contact Form Integration
- `INSERT INTO contact` query triggers form display
- Form submission simulates database insert
- Success feedback with SQL result format

### Responsive Design
- Optimized for desktop, tablet, and mobile
- Touch-friendly interface
- Collapsible navigation on small screens

## 🐛 Troubleshooting

**Query not working?**
- Check table names: `experience`, `projects`, `skills`, `education`, `contact`
- Ensure proper SQL syntax
- Use the template dropdown for examples

**Styling issues?**
- Clear browser cache
- Check CSS file paths
- Ensure fonts are loading properly

**Contact form not submitting?**
- This is a demo form that shows success message
- To add real functionality, integrate with form services like Formspree or Netlify Forms

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to add features? Feel free to open an issue or submit a pull request!

---

Built with ❤️ by [Your Name] | Inspired by database console interfaces