// Portfolio Database - Hardcoded Data Structure
// This file contains all the "database" information in JavaScript objects
// Replace this data with your actual information

const portfolioData = {
    // Experience Table
    experience: [
        {
            id: 1,
            company: "LumenAI (Eucloid)",
            position: "Software Engineer",
            location: "Remote",
            start_date: "2024-01",
            end_date: "Present",
            duration: "8+ months",
            technologies: ["Python", "React", "Node.js", "AI/ML", "MongoDB"],
            responsibilities: [
                "Developed AI-powered web applications",
                "Collaborated on machine learning models",
                "Built responsive user interfaces",
                "Optimized database performance"
            ],
            achievements: [
                "Improved application performance by 40%",
                "Led team of 3 developers",
                "Delivered 5+ major features on time"
            ]
        },
        {
            id: 2,
            company: "Tech Startup",
            position: "Full Stack Developer Intern",
            location: "Arlington, TX",
            start_date: "2023-06",
            end_date: "2023-12",
            duration: "6 months",
            technologies: ["JavaScript", "React", "Express.js", "PostgreSQL"],
            responsibilities: [
                "Built REST APIs using Express.js",
                "Developed frontend components in React",
                "Managed database migrations",
                "Participated in code reviews"
            ],
            achievements: [
                "Built user authentication system",
                "Reduced API response time by 25%",
                "Implemented automated testing"
            ]
        }
    ],

    // Projects Table
    projects: [
        {
            id: 1,
            name: "AI Interview Assistant",
            description: "An intelligent interview preparation tool using natural language processing",
            technologies: ["Python", "Machine Learning", "Flask", "NLP", "TensorFlow"],
            github_url: "https://github.com/PratyakshMathur/AI_Interview",
            live_url: null,
            start_date: "2024-03",
            status: "Completed",
            features: [
                "Real-time interview question generation",
                "Speech-to-text answer analysis",
                "Performance scoring algorithm",
                "Personalized feedback system"
            ]
        },
        {
            id: 2,
            name: "Meoww Chat Application",
            description: "Real-time messaging platform with modern UI/UX",
            technologies: ["React", "Socket.io", "Node.js", "MongoDB", "CSS3"],
            github_url: "https://github.com/vandyG/meoww",
            live_url: "https://meoww-chat.herokuapp.com",
            start_date: "2023-09",
            status: "Completed",
            features: [
                "Real-time messaging with WebSockets",
                "User authentication and authorization",
                "File sharing capabilities",
                "Responsive mobile design"
            ]
        },
        {
            id: 3,
            name: "Portfolio Database Console",
            description: "SQL-themed interactive portfolio website",
            technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
            github_url: "https://github.com/PratyakshMathur/PratyakshMathur.github.io",
            live_url: "https://pratyakshmathur.github.io",
            start_date: "2024-02",
            status: "In Progress",
            features: [
                "SQL-like query interface",
                "VS Code theme styling",
                "Interactive portfolio navigation",
                "Responsive design"
            ]
        }
    ],

    // Skills Table
    skills: [
        {
            id: 1,
            name: "Python",
            category: "Programming Language",
            proficiency: "Advanced",
            years_experience: 3,
            projects_used: ["AI Interview Assistant", "LumenAI Projects", "Data Analysis Scripts"]
        },
        {
            id: 2,
            name: "JavaScript",
            category: "Programming Language", 
            proficiency: "Advanced",
            years_experience: 3,
            projects_used: ["Meoww Chat", "Portfolio Console", "Web Applications"]
        },
        {
            id: 3,
            name: "React",
            category: "Frontend Framework",
            proficiency: "Intermediate",
            years_experience: 2,
            projects_used: ["Meoww Chat", "LumenAI Dashboard", "Personal Projects"]
        },
        {
            id: 4,
            name: "Node.js",
            category: "Backend Framework",
            proficiency: "Intermediate", 
            years_experience: 2,
            projects_used: ["Meoww Chat", "REST APIs", "Backend Services"]
        },
        {
            id: 5,
            name: "Machine Learning",
            category: "Technology",
            proficiency: "Intermediate",
            years_experience: 2,
            projects_used: ["AI Interview Assistant", "LumenAI ML Models", "Academic Projects"]
        },
        {
            id: 6,
            name: "SQL",
            category: "Database",
            proficiency: "Intermediate",
            years_experience: 2,
            projects_used: ["Database Design", "Data Analysis", "Backend Development"]
        },
        {
            id: 7,
            name: "MongoDB",
            category: "Database",
            proficiency: "Beginner",
            years_experience: 1,
            projects_used: ["Meoww Chat", "LumenAI Projects"]
        },
        {
            id: 8,
            name: "Git/GitHub",
            category: "Tools",
            proficiency: "Advanced",
            years_experience: 3,
            projects_used: ["All Projects", "Collaboration", "Version Control"]
        }
    ],

    // Education Table  
    education: [
        {
            id: 1,
            institution: "University of Texas at Arlington",
            degree: "Master of Science",
            major: "Computer Science",
            location: "Arlington, TX",
            start_date: "2023-08",
            end_date: "2025-05", 
            gpa: "3.8/4.0",
            status: "In Progress",
            relevant_courses: [
                "Advanced Algorithms",
                "Machine Learning",
                "Database Systems", 
                "Software Engineering",
                "Artificial Intelligence",
                "Data Structures"
            ]
        },
        {
            id: 2,
            institution: "Previous University",
            degree: "Bachelor of Technology",
            major: "Computer Science",
            location: "India",
            start_date: "2019-08",
            end_date: "2023-05",
            gpa: "3.6/4.0",
            status: "Completed",
            relevant_courses: [
                "Programming Fundamentals",
                "Data Structures & Algorithms",
                "Web Development",
                "Database Management",
                "Operating Systems",
                "Computer Networks"
            ]
        }
    ],

    // Contact Table
    contact: [
        {
            id: 1,
            name: "Pratyaksh Mathur",
            email: "pratyaksh.uta@gmail.com",
            phone: "+1 (XXX) XXX-XXXX",
            location: "Arlington, TX, USA",
            linkedin: "https://linkedin.com/in/mathurpratyaksh28",
            github: "https://github.com/PratyakshMathur",
            website: "https://pratyakshmathur.github.io",
            available_for: [
                "Full-time Software Engineer positions",
                "Internship opportunities",
                "Freelance web development",
                "Open source collaborations"
            ]
        }
    ]
};

// SQL Query Parser and Executor
class SQLPortfolioEngine {
    constructor(data) {
        this.data = data;
    }

    // Parse and execute SQL-like queries
    executeQuery(query) {
        try {
            // Clean and normalize query
            const cleanQuery = query.trim().toLowerCase().replace(/;$/, '');
            
            // Handle SELECT queries
            if (cleanQuery.startsWith('select')) {
                return this.handleSelect(cleanQuery);
            }
            
            // Handle INSERT queries (for contact form)
            if (cleanQuery.startsWith('insert into contact')) {
                return this.handleInsert(cleanQuery);
            }
            
            // Invalid query
            return {
                success: false,
                error: "Invalid query. Supported operations: SELECT FROM tables, INSERT INTO contact"
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }

    handleSelect(query) {
        // Extract table name
        const tableMatch = query.match(/from\\s+(\\w+)/);
        if (!tableMatch) {
            return {
                success: false,
                error: "No table specified. Available tables: experience, projects, skills, education, contact"
            };
        }

        const tableName = tableMatch[1];
        
        // Check if table exists
        if (!this.data[tableName]) {
            return {
                success: false,
                error: `Table '${tableName}' not found. Available tables: ${Object.keys(this.data).join(', ')}`
            };
        }

        // Handle JOIN queries
        if (query.includes('join')) {
            return this.handleJoin(query);
        }

        // Simple SELECT from single table
        const tableData = this.data[tableName];
        
        return {
            success: true,
            data: tableData,
            table: tableName,
            count: tableData.length
        };
    }

    handleJoin(query) {
        // Simple implementation for skills JOIN experience
        if (query.includes('skills') && query.includes('experience')) {
            const skills = this.data.skills;
            const experience = this.data.experience;
            
            // Get all skills used in experience
            const usedSkills = [];
            experience.forEach(exp => {
                exp.technologies.forEach(tech => {
                    const skill = skills.find(s => s.name.toLowerCase() === tech.toLowerCase());
                    if (skill && !usedSkills.find(us => us.id === skill.id)) {
                        usedSkills.push({
                            ...skill,
                            experience_context: exp.company
                        });
                    }
                });
            });

            return {
                success: true,
                data: usedSkills,
                table: 'skills_experience_join',
                count: usedSkills.length
            };
        }

        return {
            success: false,
            error: "JOIN operation not supported for this combination of tables"
        };
    }

    handleInsert(query) {
        // This would show the contact form instead of actually inserting
        return {
            success: true,
            showContactForm: true,
            message: "Contact form ready for input"
        };
    }

    // Get schema information
    getSchema(tableName) {
        const table = this.data[tableName];
        if (!table || table.length === 0) return [];
        
        return Object.keys(table[0]);
    }

    // Get all available tables
    getTables() {
        return Object.keys(this.data);
    }
}

// Initialize the SQL engine with portfolio data
window.portfolioEngine = new SQLPortfolioEngine(portfolioData);
window.portfolioData = portfolioData;