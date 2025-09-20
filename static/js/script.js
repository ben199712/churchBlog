// Grace SDA Church Website JavaScript
// Comprehensive functionality for all pages

// Global variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizAnswers = [];
let quizStartTime = null;
let quizTimer = null;

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Power of Sabbath Rest in Our Modern World",
        excerpt: "Discover how observing the Sabbath can bring peace, renewal, and deeper connection with God in our fast-paced society.",
        content: "Full article content here...",
        author: "Pastor Robert Johnson",
        date: "2024-12-15",
        category: "spiritual-insights",
        image: "https://via.placeholder.com/400x250/003366/FFFFFF?text=Sabbath+Rest",
        featured: true
    },
    {
        id: 2,
        title: "Community Food Drive Success",
        excerpt: "Our recent food drive collected over 500 pounds of food for local families in need. Thank you to all who participated!",
        content: "Full article content here...",
        author: "Sarah Mitchell",
        date: "2024-12-10",
        category: "church-news",
        image: "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Food+Drive"
    },
    {
        id: 3,
        title: "Understanding Bible Prophecy",
        excerpt: "A comprehensive look at biblical prophecy and what it means for our lives today.",
        content: "Full article content here...",
        author: "David Martinez",
        date: "2024-12-08",
        category: "spiritual-insights",
        image: "https://via.placeholder.com/400x250/D4AF37/FFFFFF?text=Prophecy"
    },
    {
        id: 4,
        title: "Youth Mission Trip to Mexico",
        excerpt: "Our youth group recently returned from an inspiring mission trip where they helped build homes and share God's love.",
        content: "Full article content here...",
        author: "Sarah Mitchell",
        date: "2024-12-05",
        category: "church-news",
        image: "https://via.placeholder.com/400x250/003366/FFFFFF?text=Mission+Trip"
    },
    {
        id: 5,
        title: "Health and Wellness Workshop",
        excerpt: "Join us for our monthly health workshop focusing on biblical principles of healthy living.",
        content: "Full article content here...",
        author: "Dr. Lisa Chen",
        date: "2024-12-03",
        category: "announcements",
        image: "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Health+Workshop"
    },
    {
        id: 6,
        title: "The Importance of Prayer in Daily Life",
        excerpt: "Learn how to develop a consistent prayer life that strengthens your relationship with God.",
        content: "Full article content here...",
        author: "Pastor Robert Johnson",
        date: "2024-11-28",
        category: "spiritual-insights",
        image: "https://via.placeholder.com/400x250/D4AF37/FFFFFF?text=Prayer"
    }
];

// Quiz data
const quizData = {
    'bible-basics': {
        title: 'Bible Basics',
        questions: [
            {
                question: "Who was the first man created by God?",
                options: ["Adam", "Eve", "Noah", "Moses"],
                correct: 0,
                explanation: "Adam was the first man created by God according to Genesis 2:7."
            },
            {
                question: "How many days did God take to create the world?",
                options: ["5 days", "6 days", "7 days", "8 days"],
                correct: 1,
                explanation: "God created the world in 6 days and rested on the 7th day (Genesis 1-2)."
            },
            {
                question: "What was the name of the garden where Adam and Eve lived?",
                options: ["Garden of Eden", "Garden of Paradise", "Garden of Heaven", "Garden of Life"],
                correct: 0,
                explanation: "Adam and Eve lived in the Garden of Eden (Genesis 2:8)."
            },
            {
                question: "Who built the ark?",
                options: ["Abraham", "Moses", "Noah", "David"],
                correct: 2,
                explanation: "Noah built the ark according to God's instructions (Genesis 6:14-16)."
            },
            {
                question: "What happened at the Tower of Babel?",
                options: ["People were blessed", "Languages were confused", "A great feast was held", "A temple was built"],
                correct: 1,
                explanation: "God confused the languages of the people at Babel (Genesis 11:7-9)."
            }
        ]
    },
    'sda-doctrine': {
        title: 'SDA Doctrine',
        questions: [
            {
                question: "What day do Seventh-day Adventists observe as the Sabbath?",
                options: ["Sunday", "Monday", "Saturday", "Friday"],
                correct: 2,
                explanation: "Seventh-day Adventists observe Saturday as the Sabbath, following the fourth commandment."
            },
            {
                question: "What is the state of the dead according to SDA belief?",
                options: ["They go to heaven immediately", "They sleep until resurrection", "They go to purgatory", "They are reincarnated"],
                correct: 1,
                explanation: "SDA doctrine teaches that the dead sleep until the resurrection (Ecclesiastes 9:5-6)."
            },
            {
                question: "What is the investigative judgment?",
                options: ["A court case on earth", "A heavenly process", "A church meeting", "A biblical study"],
                correct: 1,
                explanation: "The investigative judgment is a heavenly process where God examines the lives of believers."
            },
            {
                question: "What are the three angels' messages?",
                options: ["Three parables", "Three commandments", "Three prophecies", "Three miracles"],
                correct: 2,
                explanation: "The three angels' messages are prophetic messages found in Revelation 14:6-12."
            },
            {
                question: "What is the sanctuary doctrine?",
                options: ["Church building rules", "Heavenly sanctuary ministry", "Temple worship", "Prayer guidelines"],
                correct: 1,
                explanation: "The sanctuary doctrine teaches about Christ's ministry in the heavenly sanctuary."
            }
        ]
    },
    'prophecy': {
        title: 'Bible Prophecy',
        questions: [
            {
                question: "What does the book of Daniel primarily contain?",
                options: ["Love stories", "Historical accounts", "Prophecies and visions", "Poetry"],
                correct: 2,
                explanation: "The book of Daniel contains prophecies and visions about future events."
            },
            {
                question: "What does the 2300 days prophecy refer to?",
                options: ["Days of creation", "Years of prophetic time", "Hours of prayer", "Weeks of fasting"],
                correct: 1,
                explanation: "The 2300 days prophecy refers to 2300 years of prophetic time (Daniel 8:14)."
            },
            {
                question: "What are the four kingdoms in Daniel's vision?",
                options: ["Babylon, Media, Persia, Greece", "Egypt, Assyria, Babylon, Rome", "Israel, Judah, Samaria, Galilee", "North, South, East, West"],
                correct: 0,
                explanation: "The four kingdoms are Babylon, Media-Persia, Greece, and Rome (Daniel 2)."
            },
            {
                question: "What is the mark of the beast?",
                options: ["A physical mark", "A spiritual symbol", "A tattoo", "A brand"],
                correct: 1,
                explanation: "The mark of the beast is a spiritual symbol of allegiance to the beast power."
            },
            {
                question: "What happens at the end of the 1000 years?",
                options: ["New heaven and earth", "Final judgment", "Satan's release", "All of the above"],
                correct: 3,
                explanation: "At the end of the 1000 years, Satan is released, final judgment occurs, and new heaven and earth are created."
            }
        ]
    }
};

// Recent donations data
const recentDonations = [
    { amount: 150, time: "2 hours ago" },
    { amount: 75, time: "5 hours ago" },
    { amount: 200, time: "1 day ago" },
    { amount: 50, time: "2 days ago" },
    { amount: 300, time: "3 days ago" },
    { amount: 100, time: "4 days ago" }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize based on current page
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeHomePage();
            break;
        case 'blog':
            initializeBlogPage();
            break;
        case 'donations':
            initializeDonationsPage();
            break;
        case 'quiz':
            initializeQuizPage();
            break;
        case 'about':
            initializeAboutPage();
            break;
        case 'livestream':
            initializeLivestreamPage();
            break;
    }
    
    // Initialize common functionality
    initializeCommonFeatures();
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page || 'index';
}

function initializeHomePage() {
    loadLatestBlogPosts();
}

function initializeBlogPage() {
    loadBlogPosts();
    initializeBlogFilters();
    initializeNewsletterSignup();
}

function initializeDonationsPage() {
    initializeDonationForm();
    loadRecentDonations();
}

function initializeQuizPage() {
    initializeQuizSelection();
}

function initializeAboutPage() {
    // About page doesn't need special initialization
}

function initializeLivestreamPage() {
    initializeLivestreamFeatures();
    initializePrayerForm();
    initializeChat();
}

function initializeCommonFeatures() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading states to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.id === 'donate-btn' || this.id === 'subscribe-btn') {
                showLoadingState(this);
            }
        });
    });
}

// Blog functionality
function loadLatestBlogPosts() {
    const container = document.getElementById('latest-posts');
    if (!container) return;
    
    const latestPosts = blogPosts.slice(0, 3);
    container.innerHTML = latestPosts.map(post => createBlogCard(post)).join('');
}

function loadBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;
    
    container.innerHTML = blogPosts.map(post => createBlogCard(post)).join('');
}

function createBlogCard(post) {
    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="blog-card">
                <img src="${post.image}" alt="${post.title}" class="img-fluid">
                <div class="blog-card-body">
                    <span class="badge bg-primary mb-2">${post.category.replace('-', ' ').toUpperCase()}</span>
                    <h5>${post.title}</h5>
                    <p class="text-muted mb-2">
                        <i class="fas fa-user me-1"></i>${post.author} • 
                        <i class="fas fa-calendar me-1"></i>${formatDate(post.date)}
                    </p>
                    <p>${post.excerpt}</p>
                    <a href="#" class="btn btn-outline-primary btn-sm">Read More</a>
                </div>
            </div>
        </div>
    `;
}

function initializeBlogFilters() {
    const filterButtons = document.querySelectorAll('#blog-tabs .nav-link');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-bs-target').replace('#', '');
            filterBlogPosts(category);
        });
    });
}

function filterBlogPosts(category) {
    const container = document.getElementById('blog-posts');
    if (!container) return;
    
    let filteredPosts = blogPosts;
    
    if (category !== 'all-posts') {
        filteredPosts = blogPosts.filter(post => post.category === category);
    }
    
    container.innerHTML = filteredPosts.map(post => createBlogCard(post)).join('');
}

function initializeNewsletterSignup() {
    const subscribeBtn = document.getElementById('subscribe-btn');
    const emailInput = document.getElementById('newsletter-email');
    
    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value.trim();
            if (validateEmail(email)) {
                subscribeToNewsletter(email);
            } else {
                showAlert('Please enter a valid email address.', 'error');
            }
        });
    }
}

function subscribeToNewsletter(email) {
    // Simulate API call
    setTimeout(() => {
        showAlert('Thank you for subscribing to our newsletter!', 'success');
        document.getElementById('newsletter-email').value = '';
    }, 1000);
}

// Donation functionality
function initializeDonationForm() {
    // Donation type selection
    document.querySelectorAll('.donation-type-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.donation-type-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Amount selection
    document.querySelectorAll('.donation-amount').forEach(amount => {
        amount.addEventListener('click', function() {
            document.querySelectorAll('.donation-amount').forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');
            
            if (this.dataset.amount === 'custom') {
                document.getElementById('custom-amount').style.display = 'block';
            } else {
                document.getElementById('custom-amount').style.display = 'none';
            }
        });
    });
    
    // Payment method selection
    document.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', function() {
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            
            const methodType = this.dataset.method;
            if (methodType === 'card') {
                document.getElementById('card-details').style.display = 'block';
                document.getElementById('bank-details').style.display = 'none';
            } else {
                document.getElementById('card-details').style.display = 'none';
                document.getElementById('bank-details').style.display = 'block';
            }
        });
    });
    
    // Donation submission
    const donateBtn = document.getElementById('donate-btn');
    if (donateBtn) {
        donateBtn.addEventListener('click', processDonation);
    }
}

function processDonation() {
    // Validate form
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = getSelectedAmount();
    
    if (!firstName || !lastName || !email || !amount) {
        showAlert('Please fill in all required fields.', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate payment processing
    showLoadingState(document.getElementById('donate-btn'));
    
    setTimeout(() => {
        showAlert('Thank you for your generous donation! You will receive a confirmation email shortly.', 'success');
        resetDonationForm();
        addRecentDonation(amount);
    }, 2000);
}

function getSelectedAmount() {
    const selectedAmount = document.querySelector('.donation-amount.selected');
    if (!selectedAmount) return null;
    
    if (selectedAmount.dataset.amount === 'custom') {
        return document.getElementById('custom-amount-input').value;
    }
    
    return selectedAmount.dataset.amount;
}

function resetDonationForm() {
    document.querySelectorAll('.donation-type-card').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.donation-amount').forEach(a => a.classList.remove('selected'));
    document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
    document.querySelector('.payment-method[data-method="card"]').classList.add('active');
    
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('comments').value = '';
    document.getElementById('custom-amount').style.display = 'none';
    document.getElementById('card-details').style.display = 'block';
    document.getElementById('bank-details').style.display = 'none';
}

function loadRecentDonations() {
    const container = document.getElementById('recent-donations');
    if (!container) return;
    
    container.innerHTML = recentDonations.map(donation => `
        <div class="col-md-4 col-sm-6 mb-3">
            <div class="donation-item text-center">
                <div class="donation-amount">$${donation.amount}</div>
                <div class="donation-time text-muted">${donation.time}</div>
            </div>
        </div>
    `).join('');
}

function addRecentDonation(amount) {
    recentDonations.unshift({
        amount: amount,
        time: "Just now"
    });
    
    // Keep only the 6 most recent donations
    if (recentDonations.length > 6) {
        recentDonations.pop();
    }
    
    loadRecentDonations();
}

// Quiz functionality
function initializeQuizSelection() {
    document.querySelectorAll('.quiz-category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            startQuiz(category);
        });
    });
}

function startQuiz(category) {
    currentQuiz = quizData[category];
    if (!currentQuiz) return;
    
    currentQuestionIndex = 0;
    quizAnswers = [];
    quizStartTime = Date.now();
    
    // Hide selection and show quiz
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    // Update quiz title
    document.getElementById('quiz-title').textContent = currentQuiz.title;
    
    // Start timer
    startQuizTimer();
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    
    // Update progress
    document.getElementById('quiz-progress-bar').style.width = progress + '%';
    document.getElementById('quiz-progress-text').textContent = 
        `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    
    // Update question
    document.getElementById('question-text').textContent = question.question;
    
    // Update options
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = question.options.map((option, index) => `
        <li class="quiz-option-item" data-index="${index}">
            <button class="quiz-option">${option}</button>
        </li>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.quiz-option-item').forEach(item => {
        item.addEventListener('click', function() {
            selectAnswer(parseInt(this.dataset.index));
        });
    });
    
    // Update navigation buttons
    updateQuizNavigation();
}

function selectAnswer(answerIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Add selection to clicked item
    document.querySelector(`[data-index="${answerIndex}"]`).classList.add('selected');
    
    // Store answer
    quizAnswers[currentQuestionIndex] = answerIndex;
    
    // Enable next button
    document.getElementById('next-question').disabled = false;
}

function updateQuizNavigation() {
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    const finishBtn = document.getElementById('finish-quiz');
    
    // Previous button
    if (currentQuestionIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }
    
    // Next/Finish button
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
    
    // Disable next button initially
    nextBtn.disabled = true;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function finishQuiz() {
    stopQuizTimer();
    showQuizResults();
}

function startQuizTimer() {
    quizTimer = setInterval(updateQuizTimer, 1000);
}

function stopQuizTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        quizTimer = null;
    }
}

function updateQuizTimer() {
    const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    document.getElementById('quiz-timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showQuizResults() {
    // Hide quiz container and show results
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    // Calculate score
    let correctAnswers = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (quizAnswers[index] === question.correct) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / currentQuiz.questions.length) * 100);
    
    // Update results display
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('score-fraction').textContent = `${correctAnswers}/${currentQuiz.questions.length}`;
    
    // Update trophy icon based on score
    const trophyIcon = document.getElementById('results-trophy');
    if (percentage >= 90) {
        trophyIcon.className = 'fas fa-trophy text-warning';
        document.getElementById('results-title').textContent = 'Excellent!';
        document.getElementById('results-message').textContent = 'Outstanding knowledge! You truly know your Bible well.';
    } else if (percentage >= 70) {
        trophyIcon.className = 'fas fa-medal text-secondary';
        document.getElementById('results-title').textContent = 'Well Done!';
        document.getElementById('results-message').textContent = 'Good job! You have solid biblical knowledge.';
    } else {
        trophyIcon.className = 'fas fa-certificate text-info';
        document.getElementById('results-title').textContent = 'Keep Learning!';
        document.getElementById('results-message').textContent = 'Keep studying the Bible to improve your knowledge.';
    }
    
    // Show detailed results
    showDetailedResults(correctAnswers);
    
    // Add event listeners for result actions
    document.getElementById('retake-quiz').addEventListener('click', retakeQuiz);
    document.getElementById('new-quiz').addEventListener('click', selectNewQuiz);
}

function showDetailedResults(correctAnswers) {
    const container = document.getElementById('question-review');
    container.innerHTML = currentQuiz.questions.map((question, index) => {
        const userAnswer = quizAnswers[index];
        const isCorrect = userAnswer === question.correct;
        const userAnswerText = userAnswer !== undefined ? question.options[userAnswer] : 'No answer';
        const correctAnswerText = question.options[question.correct];
        
        return `
            <div class="question-review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <h6>Question ${index + 1}</h6>
                <p class="mb-2">${question.question}</p>
                <div class="answers">
                    <div class="user-answer">
                        <strong>Your answer:</strong> ${userAnswerText}
                        ${isCorrect ? '<i class="fas fa-check text-success ms-2"></i>' : '<i class="fas fa-times text-danger ms-2"></i>'}
                    </div>
                    ${!isCorrect ? `<div class="correct-answer"><strong>Correct answer:</strong> ${correctAnswerText}</div>` : ''}
                </div>
                <div class="explanation">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            </div>
        `;
    }).join('');
}

function retakeQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    quizAnswers = [];
    quizStartTime = Date.now();
    
    // Hide results and show quiz
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    // Start timer and load first question
    startQuizTimer();
    loadQuestion();
}

function selectNewQuiz() {
    // Hide results and show selection
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-selection').style.display = 'block';
    
    // Stop timer if running
    stopQuizTimer();
}

// Event listeners for quiz navigation
document.addEventListener('click', function(e) {
    if (e.target.id === 'next-question') {
        nextQuestion();
    } else if (e.target.id === 'prev-question') {
        previousQuestion();
    } else if (e.target.id === 'finish-quiz') {
        finishQuiz();
    }
});

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    // Create new alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at top of page content
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

function showLoadingState(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Processing...';
    button.disabled = true;
    
    // Reset after 3 seconds
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 3000);
}

// Add CSS for additional styles
const additionalStyles = `
<style>
.donation-type-card {
    background: var(--sda-light-gray);
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    height: 100%;
}

.donation-type-card:hover,
.donation-type-card.selected {
    border-color: var(--sda-blue);
    background: var(--sda-blue);
    color: var(--sda-white);
}

.payment-method {
    background: var(--sda-light-gray);
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    margin: 0.5rem;
}

.payment-method:hover,
.payment-method.active {
    border-color: var(--sda-blue);
    background: var(--sda-blue);
    color: var(--sda-white);
}

.quiz-category-card {
    background: var(--sda-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
    cursor: pointer;
    height: 100%;
    border: 1px solid rgba(0, 51, 102, 0.1);
}

.quiz-category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 51, 102, 0.2);
}

.quiz-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, var(--sda-blue), var(--sda-light-blue));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--sda-white);
    font-size: 2rem;
}

.quiz-timer {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: inline-block;
    margin-top: 1rem;
}

.quiz-results-card {
    background: var(--sda-white);
    border-radius: 15px;
    padding: 3rem;
    box-shadow: var(--card-shadow);
}

.score-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--sda-blue), var(--sda-light-blue));
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: var(--sda-white);
    font-size: 2rem;
    font-weight: bold;
}

.question-review-item {
    background: var(--sda-light-gray);
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-left: 5px solid var(--sda-gray);
}

.question-review-item.correct {
    border-left-color: #28a745;
}

.question-review-item.incorrect {
    border-left-color: #dc3545;
}

.leaderboard {
    background: var(--sda-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: var(--card-shadow);
}

.leaderboard-item {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid var(--sda-light-gray);
}

.leaderboard-item:last-child {
    border-bottom: none;
}

.leaderboard-item .rank {
    width: 40px;
    height: 40px;
    background: var(--sda-blue);
    color: var(--sda-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 1rem;
}

.leaderboard-item .name {
    flex: 1;
    font-weight: 600;
}

.leaderboard-item .score {
    font-weight: bold;
    color: var(--sda-blue);
}

.donation-item {
    background: var(--sda-white);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: var(--card-shadow);
}

.donation-amount {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--sda-blue);
}

.value-card {
    background: var(--sda-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: var(--card-shadow);
    height: 100%;
}

.value-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, var(--sda-blue), var(--sda-light-blue));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: var(--sda-white);
    font-size: 2rem;
}

.leader-card {
    background: var(--sda-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: var(--card-shadow);
    height: 100%;
}

.leader-photo {
    width: 120px;
    height: 120px;
    object-fit: cover;
}

.beliefs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.belief-item {
    text-align: center;
    padding: 1.5rem;
}

.belief-item i {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.ministry-card {
    background: var(--sda-white);
    border-radius: 15px;
    padding: 2rem;
    box-shadow: var(--card-shadow);
    height: 100%;
    transition: var(--transition);
}

.ministry-card:hover {
    transform: translateY(-5px);
}

.ministry-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, var(--sda-blue), var(--sda-light-blue));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: var(--sda-white);
    font-size: 1.5rem;
}

.featured-post {
    background: linear-gradient(135deg, var(--sda-cream), var(--sda-white));
    border-left: 5px solid var(--sda-gold);
}

.impact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.impact-item i {
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-top: 0.25rem;
}

.security-features {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.security-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

@media (max-width: 768px) {
    .beliefs-grid {
        grid-template-columns: 1fr;
    }
    
    .impact-item {
        flex-direction: column;
        text-align: center;
    }
    
    .impact-item i {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
}
</style>
`;

// Livestream functionality
function initializeLivestreamFeatures() {
    // Share button functionality
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Grace SDA Church Livestream',
                    text: 'Join us for live worship and fellowship',
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showAlert('Link copied to clipboard!', 'success');
                });
            }
        });
    }
    
    // Chat button functionality
    const chatBtn = document.getElementById('chat-btn');
    const chatSection = document.getElementById('chat-section');
    if (chatBtn && chatSection) {
        chatBtn.addEventListener('click', function() {
            chatSection.style.display = 'block';
            chatSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Close chat functionality
    const closeChatBtn = document.getElementById('close-chat');
    if (closeChatBtn && chatSection) {
        closeChatBtn.addEventListener('click', function() {
            chatSection.style.display = 'none';
        });
    }
    
    // Simulate viewer count updates
    updateViewerCount();
    setInterval(updateViewerCount, 30000); // Update every 30 seconds
}

function updateViewerCount() {
    const viewerCountElement = document.getElementById('viewer-count');
    if (viewerCountElement) {
        const currentCount = parseInt(viewerCountElement.textContent);
        const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and +5
        const newCount = Math.max(1, currentCount + change);
        viewerCountElement.textContent = newCount;
    }
}

function initializePrayerForm() {
    const prayerForm = document.getElementById('prayer-form');
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const prayerRequest = document.getElementById('prayer-request').value.trim();
            
            if (prayerRequest) {
                // Simulate prayer request submission
                showAlert('Thank you for your prayer request. We will pray for you during the service.', 'success');
                document.getElementById('prayer-request').value = '';
            } else {
                showAlert('Please enter your prayer request.', 'error');
            }
        });
    }
}

function initializeChat() {
    const chatInput = document.getElementById('chat-input');
    const sendMessageBtn = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');
    
    if (chatInput && sendMessageBtn && chatMessages) {
        // Send message functionality
        function sendMessage() {
            const message = chatInput.value.trim();
            if (message) {
                addChatMessage('You', message, 'just now');
                chatInput.value = '';
                
                // Simulate response after a delay
                setTimeout(() => {
                    const responses = [
                        'Amen!',
                        'Praise God!',
                        'Thank you for sharing!',
                        'God bless you!',
                        'That\'s beautiful!'
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    addChatMessage('Church Member', randomResponse, 'just now');
                }, 2000);
            }
        }
        
        sendMessageBtn.addEventListener('click', sendMessage);
        
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function addChatMessage(author, message, time) {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.innerHTML = `
            <div class="message-author">${author}</div>
            <div class="message-text">${message}</div>
            <div class="message-time">${time}</div>
        `;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Add the additional styles to the document
document.head.insertAdjacentHTML('beforeend', additionalStyles);
