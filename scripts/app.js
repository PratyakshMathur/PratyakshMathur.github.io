// Main Application JavaScript
// Handles UI interactions, query execution, and result display

class SQLPortfolioApp {
    constructor() {
        this.currentTable = 'experience';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateLineNumbers();
        this.executeQuery('SELECT * FROM experience;', false);
    }

    setupEventListeners() {
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const table = e.target.dataset.table;
                if (table === 'resume') {
                    this.showResume();
                } else {
                    this.switchTab(table);
                }
            });
        });

        // Execute button
        document.getElementById('execute-btn').addEventListener('click', () => {
            const query = document.getElementById('sql-editor').value;
            this.executeQuery(query);
        });

        // Clear button  
        document.getElementById('clear-btn').addEventListener('click', () => {
            this.clearEditor();
        });

        // Query template dropdown
        document.getElementById('query-template').addEventListener('change', (e) => {
            if (e.target.value) {
                document.getElementById('sql-editor').value = e.target.value;
                this.updateLineNumbers();
            }
        });

        // SQL Editor changes
        document.getElementById('sql-editor').addEventListener('input', () => {
            this.updateLineNumbers();
        });

        // Enter key to execute (Ctrl/Cmd + Enter)
        document.getElementById('sql-editor').addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                const query = document.getElementById('sql-editor').value;
                this.executeQuery(query);
            }
        });

        // Resume modal close
        const closeResumeBtn = document.getElementById('close-resume');
        if (closeResumeBtn) {
            closeResumeBtn.addEventListener('click', () => {
                this.hideResume();
            });
        }

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    switchTab(tableName) {
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-table="${tableName}"]`).classList.add('active');

        // Auto-execute query for the table
        const query = `SELECT * FROM ${tableName};`;
        document.getElementById('sql-editor').value = query;
        this.updateLineNumbers();
        this.executeQuery(query, true);
        this.currentTable = tableName;
    }

    executeQuery(query, autoExecuted = false) {
        if (!query.trim()) {
            this.showError('Please enter a SQL query');
            return;
        }

        // Show loading state
        this.setStatus('Executing...', 'loading');
        
        // Simulate query execution delay
        setTimeout(() => {
            const result = window.portfolioEngine.executeQuery(query);
            
            if (result.success) {
                if (result.showContactForm) {
                    this.showContactForm();
                } else {
                    this.displayResults(result);
                }
                this.setStatus(`Query executed successfully (${result.count || 0} rows)`, 'success');
            } else {
                this.showError(result.error);
                this.setStatus('Query failed', 'error');
            }
        }, autoExecuted ? 100 : 500);
    }

    displayResults(result) {
        const container = document.getElementById('results-container');
        const resultCount = document.getElementById('result-count');
        
        if (!result.data || result.data.length === 0) {
            container.innerHTML = `
                <div class="error-message">
                    <h3>No Results Found</h3>
                    <p>Your query executed successfully but returned no data.</p>
                </div>
            `;
            resultCount.textContent = '0 rows';
            return;
        }

        // Update result count
        resultCount.textContent = `${result.data.length} rows returned`;

        // Generate table HTML
        const tableHtml = this.generateTable(result.data, result.table);
        container.innerHTML = tableHtml;
    }

    generateTable(data, tableName) {
        if (!data || data.length === 0) return '<p>No data available</p>';

        // Get all unique keys from the data
        const columns = [...new Set(data.flatMap(Object.keys))];
        
        let html = '<table class="sql-table">';
        
        // Table header
        html += '<thead><tr>';
        columns.forEach(col => {
            html += `<th>${this.formatColumnName(col)}</th>`;
        });
        html += '</tr></thead>';
        
        // Table body
        html += '<tbody>';
        data.forEach(row => {
            html += '<tr>';
            columns.forEach(col => {
                const value = row[col];
                html += `<td>${this.formatCellValue(value, col)}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody>';
        
        html += '</table>';
        return html;
    }

    formatColumnName(colName) {
        return colName.replace(/_/g, ' ').toUpperCase();
    }

    formatCellValue(value, columnName) {
        if (value === null || value === undefined) {
            return '<span style="color: #666;">NULL</span>';
        }
        
        if (Array.isArray(value)) {
            return value.map(item => `<span class="array-item">${item}</span>`).join(', ');
        }
        
        if (typeof value === 'string' && value.startsWith('http')) {
            return `<a href="${value}" target="_blank" style="color: #569cd6;">${value}</a>`;
        }
        
        return String(value);
    }

    showContactForm() {
        const container = document.getElementById('results-container');
        container.innerHTML = `
            <div class="contact-form">
                <h3>📧 Get in Touch</h3>
                <form id="contact-form">
                    <div class="form-group">
                        <label for="contact-name">Name</label>
                        <input type="text" id="contact-name" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-email">Email</label>
                        <input type="email" id="contact-email" required>
                    </div>
                    <div class="form-group">
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" required placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        `;

        // Handle form submission
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit();
        });
    }

    handleContactSubmit() {
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        // Simulate form submission
        this.setStatus('Sending message...', 'loading');
        
        setTimeout(() => {
            const container = document.getElementById('results-container');
            container.innerHTML = `
                <div class="success-message">
                    <h3>✅ Message Sent Successfully!</h3>
                    <p>Thank you ${name} for reaching out! I'll get back to you soon.</p>
                    <div style="margin-top: 20px; font-size: 14px; color: #969696;">
                        <strong>Simulated INSERT Result:</strong><br>
                        INSERT INTO contact (name, email, message, timestamp) VALUES<br>
                        ('${name}', '${email}', '${message.substring(0, 30)}...', NOW());<br>
                        <em style="color: #4ec9b0;">1 row affected</em>
                    </div>
                </div>
            `;
            this.setStatus('Message sent successfully', 'success');
        }, 1000);
    }

    showError(message) {
        const container = document.getElementById('results-container');
        container.innerHTML = `
            <div class="error-message">
                <h3>❌ Query Error</h3>
                <p>${message}</p>
                <div style="margin-top: 15px; font-size: 13px; color: #969696;">
                    <strong>Available tables:</strong> experience, projects, skills, education, contact<br>
                    <strong>Example queries:</strong><br>
                    • SELECT * FROM experience;<br>
                    • SELECT name, proficiency FROM skills;<br>
                    • SELECT * FROM skills WHERE proficiency = 'Advanced';<br>
                    • INSERT INTO contact (name, email, message) VALUES ('', '', '');
                </div>
            </div>
        `;
        document.getElementById('result-count').textContent = '';
    }

    setStatus(message, type = 'info') {
        const statusText = document.getElementById('status-text');
        statusText.textContent = message;
        
        // Remove existing classes
        statusText.className = '';
        
        // Add appropriate class based on type
        switch(type) {
            case 'loading':
                statusText.innerHTML = `<span class="loading"></span> ${message}`;
                break;
            case 'success':
                statusText.style.color = 'var(--success)';
                break;
            case 'error':
                statusText.style.color = 'var(--error)';
                break;
            default:
                statusText.style.color = 'var(--text-secondary)';
        }

        // Reset status after delay
        if (type !== 'loading') {
            setTimeout(() => {
                statusText.textContent = 'Ready';
                statusText.style.color = 'var(--text-secondary)';
            }, 3000);
        }
    }

    clearEditor() {
        document.getElementById('sql-editor').value = '';
        document.getElementById('results-container').innerHTML = `
            <div class="welcome-message">
                <h2>🚀 Welcome to My SQL Portfolio Console!</h2>
                <p>Execute queries above or click navigation tabs to explore my background.</p>
                <div class="quick-start">
                    <h3>Quick Start:</h3>
                    <ul>
                        <li><code>SELECT * FROM experience;</code> - View my work history</li>
                        <li><code>SELECT * FROM projects;</code> - See my projects</li>
                        <li><code>SELECT name, proficiency FROM skills;</code> - Skills summary</li>
                        <li><code>SELECT * FROM skills WHERE proficiency = 'Advanced';</code> - Advanced skills only</li>
                        <li><code>INSERT INTO contact ...</code> - Get in touch</li>
                    </ul>
                </div>
            </div>
        `;
        document.getElementById('result-count').textContent = '';
        this.setStatus('Editor cleared', 'info');
        this.updateLineNumbers();
    }

    showResume() {
        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.style.display = 'flex';
        }
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('[data-table="resume"]').classList.add('active');
    }

    hideResume() {
        const modal = document.getElementById('resume-modal');
        if (modal) {
            modal.style.display = 'none';
        }
        
        // Reset to experience tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('[data-table="experience"]').classList.add('active');
    }

    updateLineNumbers() {
        const editor = document.getElementById('sql-editor');
        const lineNumbers = document.querySelector('.line-numbers');
        
        const lines = editor.value.split('\\n').length;
        let lineNumberHtml = '';
        
        for (let i = 1; i <= Math.max(lines, 1); i++) {
            lineNumberHtml += `<div class="line-number">${i}</div>`;
        }
        
        lineNumbers.innerHTML = lineNumberHtml;
    }

    toggleTheme() {
        this.setStatus('Theme toggle feature coming soon!', 'info');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new SQLPortfolioApp();
});

// Add some SQL syntax highlighting for the editor
document.addEventListener('DOMContentLoaded', () => {
    // Simple syntax highlighting could be added here in the future
    // For now, the focus is on functionality
});