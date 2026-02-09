// Portfolio Database - Hardcoded Data Structure
// This file contains all the "database" information in JavaScript objects
// Replace this data with your actual information

const portfolioData = {
    // Experience Table
    experience: [
        {
            id: 1,
            company: "Eucloid Data Solutions Pvt. Ltd",
            position: "Product Analyst",
            // location: "India (Remote)",
            start_date: "2023-11",
            end_date: "2024-07",
            // duration: "9 months",
            // technologies: ["Domo", "SQL", "Python", "A/B Testing", "Product Analytics", "Statsig"],
            responsibilities: [
                "Orchestrated A/B testing across five product lines for eCommerce subscription-based client",
                "Crafted insightful dashboards using Domo, SQL, and Python to monitor KPIs",
                "Enhanced homepage experience by identifying and eliminating friction points",
                "Enabled proactive decision-making through comprehensive analytics"
            ],
            achievements: [
                "Achieved 13% uplift in North Star metric through strategic A/B testing",
                "Reduced data-to-insight time by 40% with automated dashboards",
                "Increased user engagement by 25% through homepage optimization",
                "Improved conversion rates by 15% by eliminating friction points"
            ]
        },
        {
            id: 2,
            company: "Eucloid Data Solutions Pvt. Ltd",
            position: "Data Scientist",
            // location: "India (Remote)",
            start_date: "2023-04",
            end_date: "2023-10",
            // duration: "7 months",
            // technologies: ["Python", "Computer Vision", "Document AI", "SQL", "Data Pipelines", "OCR"],
            responsibilities: [
                "Automated data extraction and validation of financial documents using Computer Vision",
                "Built data pipelines for financial reconciliation",
                "Trained analysts and interns on SQL-based financial data checks",
                "Implemented Document AI for processing PDFs and images"
            ],
            achievements: [
                "Cut reconciliation costs by 80% through automation",
                "Reduced manual reconciliation by 30% with optimized pipelines",
                "Improved team accuracy and reduced calculation errors by 90%",
                "Enabled faster posting validation and ledger accuracy"
            ]
        },
        {
            id: 3,
            company: "Eucloid Data Solutions Pvt. Ltd",
            position: "CX Analyst",
            // location: "India (Remote)",
            start_date: "2022-07",
            end_date: "2023-03",
            // duration: "9 months",
            // technologies: ["Adobe Analytics", "Google Analytics", "SQL", "A/B Testing", "Tableau", "Power BI"],
            responsibilities: [
                "Designed and activated retargeting campaigns for Fortune-100 B2B electronics manufacturer",
                "Optimized customer experiences using web analytics",
                "Conducted A/B tests for conversion optimization",
                "Produced monthly revenue performance dashboards for finance teams",
                "Conducted SQL-based reconciliations and cohort analyses"
            ],
            achievements: [
                "Drove 15% uplift in web traffic through data-driven retargeting strategies",
                "Increased conversion rate by 10% through friction point analysis",
                "Improved add-to-cart rate by 10% via A/B testing",
                "Validated marketing spend accuracy against revenue impact"
            ]
        },
        {
            id: 4,
            company: "Eucloid Data Solutions Pvt. Ltd",
            position: "CX Analyst Intern",
            // location: "India (Remote)",
            start_date: "2022-01",
            end_date: "2022-06",
            // duration: "6 months",
            // technologies: ["A/B Testing", "SQL", "Analytics", "Forecasting Models", "Data Analysis"],
            responsibilities: [
                "Executed A/B tests for email marketing campaigns",
                "Analyzed transaction-level data for campaign performance reconciliation",
                "Developed forecasting models for marketing metrics",
                "Supported client billing accuracy through data analysis"
            ],
            achievements: [
                "Achieved 20% improvement in email open rates through A/B testing",
                "Improved client invoicing accuracy by 15%",
                "Enabled proactive strategy adjustments through forecasting models",
                "Enhanced customer engagement through data-backed optimizations"
            ]
        }
    ],

    // Projects Table
    projects: [
        {
            id: 1,
            name: "AIAI",
            description: "AI-assisted interview platform for data roles that evaluates candidates through real-world SQL tasks while tracking problem-solving approach, AI usage, and analytical thinking",
            // technologies: ["FastAPI", "React", "LLM Integration", "Event Tracking", "Behavioral Analytics", "System Design"],
            url: "https://github.com/PratyakshMathur/AIAI",
            start_date: "2026-01",
            status: "In Progress",
            features: [
                "Real-world SQL task evaluation",
                "Live sandbox environment for coding",
                "AI usage tracking and analysis",
                "Problem-solving approach monitoring",
                "Analytical thinking assessment",
                "Behavioral analytics integration"
            ]
        },
        {
            id: 2,
            name: "Scot Forge",
            description: "Time-series forecasting models to predict gas usage for America's leading forging organization",
            //technologies: ["Python", "Time-series Forecasting", "Machine Learning", "Statistical Analysis", "Data Science"],
            url: null,
            start_date: "2026-01",
            status: "In Progress",
            features: [
                "Gas usage prediction models",
                "Time-series analysis",
                "Forecasting optimization",
                "Industrial application focus",
                "Real-world business impact"
            ]
        },
        {
            id: 3,
            name: "Webverse",
            description: "AI-driven webcomic generator with Writer, Illustrator, and Image Generator agents using Gemini Nano for dynamic storytelling",
            //technologies: ["JavaScript", "Agentuity", "Nano-Banana", "Auth0", "Gemini Nano", "AI Agents"],
            url: "http://github.com/PratyakshMathur/webverse-userinterface",
            start_date: "2025-09",
            end_date: "2025-12",
            status: "Completed",
            features: [
                "Dynamic storytelling with AI agents",
                "Real-time image generation based on user choices",
                "Writer, Illustrator, and Image Generator agents",
                "Gemini Nano integration",
                "Interactive webcomic creation",
                "User authentication with Auth0"
            ]
        },
        {
            id: 4,
            name: "Guess the Elo!",
            description: "Predicting chess player performance using encoder-only transformer architecture combined with dense layers for scalar features",
            //technologies: ["TensorFlow", "Transformers", "Python", "Statistical Analysis", "Data Cleaning", "Parallel Processing"],
            url: "https://github.com/vandyG/chessticles",
            start_date: "2025-01",
            end_date: "2025-04",
            status: "Completed",
            features: [
                "Encoder-only transformer architecture",
                "Chess performance prediction",
                "Scalar feature integration with dense layers",
                "Advanced statistical analysis",
                "Parallel processing for efficiency",
                "Comprehensive data preprocessing"
            ]
        },
        {
            id: 5,
            name: "Meoww",
            description: "A fun audio-mixing algorithm that replaces song vocals with cat meows, creating feline remixes of popular songs",
            //technologies: ["PyTorch", "Signal Processing", "MIDI Processing", "Voice Modulation", "Pitch Modulation", "Python"],
            url: "https://github.com/vandyG/meoww",
            start_date: "2024-10",
            end_date: "2024-11",
            status: "Completed",
            features: [
                "Vocal replacement algorithm",
                "Cat meow sound synthesis",
                "Signal processing techniques",
                "MIDI file processing",
                "Voice and pitch modulation",
                "Creative audio transformation"
            ]
        },
        {
            id: 6,
            name: "Lumen AI",
            description: "End-to-end automated document processing system eliminating manual intervention and enabling seamless insight generation",
            //technologies: ["OCR", "Vision Transformer", "GPT", "Python", "Fuzzy Logic", "VQA", "Data Cleaning"],
            url: "https://lumenai.eucloid.com/",
            start_date: "2023-04",
            end_date: "2023-10",
            status: "Completed",
            features: [
                "Automated document processing",
                "OCR integration for text extraction",
                "Vision transformer for image understanding",
                "GPT-powered insight generation",
                "Visual Question Answering (VQA)",
                "Fuzzy logic for intelligent matching",
                "Zero manual intervention workflow"
            ]
        }
    ],

    // Skills Table
    skills: [
        // Programming Languages
        {
            id: 1,
            name: "Python",
            category: "Programming Language",
            proficiency: "Advanced",
            years_experience: 5,
            used_in: {projects:["AIAI", "Scot Forge", "Lumen AI", "Guess the Elo", "Meoww", "Data"],
                        roles:["Product Analyst", "Data Scientist", "CX Analyst", "CX Analyst Intern"],
                        education:["University of Texas at Arlington", "NIIT University"]
            }
        },
        {
            id: 2,
            name: "R",
            category: "Programming Language",
            proficiency: "Intermediate",
            years_experience: 2,
            used_in: {projects:[],
                        roles:[],
                        education:["University of Texas at Arlington"]   
            }
        },
        {
            id: 3,
            name: "SQL",
            category: "Programming Language",
            proficiency: "Advanced",
            years_experience: 5,
            used_in: {projects:["AIAI", "Guess the Elo", "Lumen AI"],
                        roles:["Product Analyst", "Data Scientist", "CX Analyst", "CX Analyst Intern"],
                        education:["University of Texas at Arlington", "NIIT University"]
            }
        },
        {
            id: 4,
            name: "JavaScript",
            category: "Programming Language",
            proficiency: "Intermediate",
            years_experience: 2,
            // used_in: ["Webverse", "AIAI Frontend", "Web Development"]
            used_in: {projects:["AIAI","Webverse", "Guess the Elo", "Lumen AI"],
                        roles:[],
                        education:["University of Texas at Arlington", "NIIT University"]
            }
        },
        
        // Data & Analytics Tools
        {
            id: 5,
            name: "Databricks",
            category: "Data Platform",
            proficiency: "Intermediate",
            years_experience: 2,
            used_in: {projects:[], roles:["Product Analyst", "Data Scientist"],
                 education:["University of Texas at Arlington"]}
        },
        {
            id: 6,
            name: "Adobe Analytics",
            category: "Analytics Tool",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:[], roles:["CX Analyst", "CX Analyst Intern"],
                 education:[]}
        },
        {
            id: 7,
            name: "Google Analytics",
            category: "Analytics Tool",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:[], roles:["CX Analyst"],
                 education:[]}
        },
        {
            id: 8,
            name: "Tableau",
            category: "Visualization Tool",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Scot Forge"], roles:["Product Analyst","CX Analyst", "CX Analyst Intern"],
                 education:["University of Texas at Arlington"]}
        },
        {
            id: 9,
            name: "Power BI",
            category: "Visualization Tool",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Scot Forge"], roles:["Product Analyst","CX Analyst", "CX Analyst Intern"],
                 education:["University of Texas at Arlington"]}
        },
        {
            id: 10,
            name: "Domo",
            category: "Analytics Platform",
            proficiency: "Advanced",
            years_experience: 2,
            used_in: {projects:[], roles:["Product Analyst"],
                 education:["University of Texas at Arlington"]}
        },
        {
            id: 11,
            name: "Sigma",
            category: "Analytics Tool",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:[], roles:[],
                 education:["University of Texas at Arlington"]}
        },
        {
            id: 12,
            name: "Netspring",
            category: "Analytics Tool",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:[], roles:["Product Analyst"],
                 education:[]}
        },
        {
            id: 13,
            name: "Alteryx",
            category: "Data Preparation",
            proficiency: "Intermediate",
            years_experience: 2,
            used_in: {projects:[], roles:["CX Analyst", "CX Analyst Intern"],
                 education:[]}
        },
        {
            id: 14,
            name: "Statsig",
            category: "Experimentation Platform",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:[], roles:["Product Analyst"],
                 education:[]}
        },

        // Cloud & Infrastructure
        {
            id: 15,
            name: "AWS",
            category: "Cloud Platform",
            proficiency: "Intermediate",
            years_experience: 2,
            used_in: {projects:[], 
                roles:["Product Analyst","Data Scientist", "CX Analyst"],
                 education:[]}
        },

        // Business Tools
        {
            id: 16,
            name: "MS Excel",
            category: "Productivity Tool",
            proficiency: "Advanced",
            years_experience: 5,
            used_in: {projects:["AIAI","Scot Forge"], roles:["Product Analyst","Data Scientist", "CX Analyst"],
                 education:[]}
        },
        {
            id: 17,
            name: "Agentuity",
            category: "Agency Management",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:["Webverse",], roles:[],
                 education:[]}
        },
        {
            id: 18,
            name: "NetSuite",
            category: "ERP System",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:[], roles:[],
                 education:["University of Texas at Arlington"]}
        },

        // AI/ML & Technical Skills
        {
            id: 19,
            name: "Machine Learning",
            category: "Technology",
            proficiency: "Advanced",
            years_experience: 4,
            used_in: {projects:["AIAI","Lumen AI", "Guess the Elo", "Scot Forge"], 
                roles:["Product Analyst","Data Scientist","CX Analyst"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 20,
            name: "Deep Learning",
            category: "Technology",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Guess the Elo", "Lumen AI", "AIAI"], 
                roles:["Product Analyst","Data Scientist","CX Analyst"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 21,
            name: "Computer Vision",
            category: "Technology",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Lumen AI"], 
                roles:["Data Scientist"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 22,
            name: "NLP",
            category: "Technology",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Lumen AI", "AIAI"], 
                roles:["Data Scientist"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 23,
            name: "Image Processing",
            category: "Technology",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Lumen AI"], 
                roles:["Data Scientist"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 24,
            name: "Product Analytics",
            category: "Analytics Specialty",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:[""], 
                roles:["Product Analyst","CX Analyst"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 25,
            name: "Forecasting",
            category: "Analytics Specialty",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Scot Forge"], 
                roles:["CX Analyst","CX Analyst Intern"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 26,
            name: "A/B Testing",
            category: "Experimentation",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:[],
                roles:["Product Analyst","CX Analyst","CX Analyst Intern"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 27,
            name: "Data Validation",
            category: "Data Quality",
            proficiency: "Advanced",
            years_experience: 4,
            used_in: {projects:["Lumen AI","AIAI","Scot Forge"],
                roles:["Data Scientist"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },

        // Frameworks & Libraries
        {
            id: 28,
            name: "FastAPI",
            category: "Backend Framework",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:["AIAI","Webverse"],
                roles:[],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 29,
            name: "React",
            category: "Frontend Framework",
            proficiency: "Intermediate",
            years_experience: 1,
            used_in: {projects:["AIAI", "Webverse"],
                roles:[],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 30,
            name: "TensorFlow",
            category: "ML Framework",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Guess the Elo", "LumenAI"],
                roles:["Data Scientist"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        },
        {
            id: 31,
            name: "PyTorch",
            category: "ML Framework",
            proficiency: "Advanced",
            years_experience: 3,
            used_in: {projects:["Guess the Elo", "LumenAI"],
                roles:["Data Scientist"],
                 education:["University of Texas at Arlington", "NIIT University"]}
        }
    ],

    // Education Table  
    education: [
        {
            id: 1,
            institution: "University of Texas at Arlington",
            degree: "Master of Science",
            major: "Data Science",
            location: "Arlington, Texas, USA",
            start_date: "2024-08",
            end_date: "2026-05",
            gpa: "4.0/4.0",
            status: "In Progress",
            relevant_courses: [
                "Bioinformatics",
                "Computer Vision",
                "Project Management",
                "Deep Learning",
                "Probability"
            ]
        },
        {
            id: 2,
            institution: "NIIT University",
            degree: "Bachelor of Technology",
            major: "Computer Science and Engineering",
            location: "India",
            start_date: "2018-08",
            end_date: "2022-05",
            gpa: "3.3/4.0",
            status: "Completed",
            relevant_courses: [
                "Artificial Intelligence",
                "Machine Learning",
                "Computer Vision",
                "Natural Language Processing"
            ]
        }
    ],

    // Contact Table
    contact: [
        {
            id: 1,
            name: "Pratyaksh Mathur",
            email: "pratyaksh.uta@gmail.com",
            phone: "+1 (945) 248-0393",
            location: "Arlington, Texas, USA",
            linkedin: "https://linkedin.com/in/mathurpratyaksh28",
            github: "https://github.com/PratyakshMathur",
            website: "https://pratyakshmathur.github.io",
            available_for: [
                "Full-time Data Scientist",
                "Full-time Product Analyst",
                "Machine Learning Engineer",
                "Data Science internships",
                "Analytics consulting projects",
                "AI/ML research collaborations"
            ]
        }
    ],
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
        // Extract table name - fixed regex pattern and made it more flexible
        const tableMatch = query.match(/from\s+([a-zA-Z_][a-zA-Z0-9_]*)/i);
        if (!tableMatch) {
            return {
                success: false,
                error: "No table specified. Available tables: experience, projects, skills, education, contact"
            };
        }

        const tableName = tableMatch[1].toLowerCase();
        
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

        // Get table data and enhance it
        let tableData = [...this.data[tableName]].map(row => {
            const enhancedRow = { ...row };
            
            // Calculate duration for experience table
            if (tableName === 'experience' && row.start_date && row.end_date) {
                const startDate = new Date(row.start_date);
                const endDate = new Date(row.end_date);
                const diffTime = Math.abs(endDate - startDate);
                const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
                enhancedRow.duration_months = diffMonths;
            }
            
            return enhancedRow;
        });
        
        // Handle WHERE clause (enhanced implementation)
        const whereMatch = query.match(/where\s+(.+?)(?:\s+order\s+by|\s+limit|$)/i);
        if (whereMatch) {
            const whereClause = whereMatch[1].trim();
            tableData = this.applyWhereFilter(tableData, whereClause);
        }
        
        // Handle SELECT specific columns (enhanced implementation)
        const selectMatch = query.match(/select\s+(.+?)\s+from/i);
        if (selectMatch) {
            const columns = selectMatch[1].trim();
            if (columns !== '*' && columns !== 'SELECT *') {
                const selectedColumns = columns.split(',').map(col => col.trim());
                tableData = tableData.map(row => {
                    const newRow = {};
                    selectedColumns.forEach(col => {
                        if (row.hasOwnProperty(col)) {
                            newRow[col] = row[col];
                        }
                    });
                    return newRow;
                });
            }
        }

        return {
            success: true,
            data: tableData,
            table: tableName,
            count: tableData.length
        };
    }

    // Simple WHERE clause implementation
    applyWhereFilter(data, whereClause) {
        // Handle simple equality conditions like: column = 'value'
        const equalityMatch = whereClause.match(/(\w+)\s*=\s*['"](.*?)['"]|(\w+)\s*=\s*(\w+)/i);
        if (equalityMatch) {
            const column = equalityMatch[1] || equalityMatch[3];
            const value = equalityMatch[2] || equalityMatch[4];
            
            return data.filter(row => {
                return row[column] && row[column].toString().toLowerCase() === value.toLowerCase();
            });
        }
        
        // Handle LIKE conditions
        const likeMatch = whereClause.match(/(\w+)\s+like\s+['"](.*?)['"]|(\w+)\s+like\s+(\w+)/i);
        if (likeMatch) {
            const column = likeMatch[1] || likeMatch[3];
            const pattern = likeMatch[2] || likeMatch[4];
            const searchTerm = pattern.replace(/%/g, '');
            
            return data.filter(row => {
                return row[column] && row[column].toString().toLowerCase().includes(searchTerm.toLowerCase());
            });
        }
        
        return data;
    }

    handleJoin(query) {
        // Enhanced JOIN implementation for skills and experience
        if (query.includes('skills') && (query.includes('experience') || query.includes('roles'))) {
            const skills = this.data.skills;
            const experience = this.data.experience;
            
            // Get all skills used in work roles
            const usedSkills = [];
            skills.forEach(skill => {
                if (skill.used_in && skill.used_in.roles && skill.used_in.roles.length > 0) {
                    // Find matching experience for each role
                    const matchingExperience = experience.filter(exp => 
                        skill.used_in.roles.includes(exp.position)
                    );
                    
                    usedSkills.push({
                        skill_name: skill.name,
                        skill_category: skill.category,
                        proficiency: skill.proficiency,
                        years_experience: skill.years_experience,
                        roles_used: skill.used_in.roles.join(', '),
                        projects_used: skill.used_in.projects.join(', '),
                        total_roles: skill.used_in.roles.length,
                        total_projects: skill.used_in.projects.length
                    });
                }
            });

            return {
                success: true,
                data: usedSkills,
                table: 'skills_work_experience_join',
                count: usedSkills.length
            };
        }
        
        // JOIN for projects and skills
        if (query.includes('skills') && query.includes('projects')) {
            const skills = this.data.skills;
            const projects = this.data.projects;
            
            const skillProjectJoin = [];
            skills.forEach(skill => {
                if (skill.used_in && skill.used_in.projects && skill.used_in.projects.length > 0) {
                    const matchingProjects = projects.filter(proj => 
                        skill.used_in.projects.includes(proj.name)
                    );
                    
                    skillProjectJoin.push({
                        skill_name: skill.name,
                        skill_category: skill.category,
                        proficiency: skill.proficiency,
                        projects_used: skill.used_in.projects.join(', '),
                        project_details: matchingProjects.map(proj => proj.name + ' (' + proj.status + ')').join(', ')
                    });
                }
            });

            return {
                success: true,
                data: skillProjectJoin,
                table: 'skills_projects_join',
                count: skillProjectJoin.length
            };
        }

        return {
            success: false,
            error: "JOIN operation not supported for this combination of tables. Try: skills JOIN experience, skills JOIN projects"
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