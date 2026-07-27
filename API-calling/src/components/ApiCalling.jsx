<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Personal Portfolio</title>
    <!-- CSS Stylesheet Link -->
    <link rel="stylesheet" href="style.css">
    <!-- Google Fonts for typography -->
    <link href="https://googleapis.com" rel="stylesheet">
    <!-- ScrollReveal Framework Link -->
    <script src="https://unpkg.com"></script>
</head>
<body>

    <!-- 1. Navigation Bar Section -->
    <header class="header">
        <a href="#" class="logo">Portfolio<span>.</span></a>
        
        <!-- Hamburger Menu Icon for Mobile Devices -->
        <div id="menu-icon">&#9776;</div>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <!-- 2. Home / Hero Section -->
    <section class="home" id="home">
        <div class="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Your Name</h1>
            <h3>And I'm a <span class="text-animate">Frontend Developer</span></h3>
            <p>I build interactive, user-friendly digital experiences that look stunning on any screen resolution.</p>
            <a href="#" class="btn">Download CV</a>
        </div>
        <div class="home-img">
            <div class="glowing-circle">
                <div class="image-box">
                    <!-- Replace with your actual image path or URL -->
                    <img src="https://placeholder.com" alt="Profile Image">
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Projects Section (CSS Grid) -->
    <section class="projects" id="projects">
        <h2 class="heading">Latest <span>Projects</span></h2>
        
        <div class="projects-container">
            <!-- Project Card 1 -->
            <div class="project-box">
                <img src="https://placeholder.com" alt="Project 1">
                <div class="project-layer">
                    <h4>Web Design</h4>
                    <p>A completely responsive glassmorphic corporate web template layout design.</p>
                    <a href="#">View Details</a>
                </div>
            </div>
            <!-- Project Card 2 -->
            <div class="project-box">
                <img src="https://placeholder.com" alt="Project 2">
                <div class="project-layer">
                    <h4>E-Commerce App</h4>
                    <p>Modern online shopping interface equipped with optimized payment gateways.</p>
                    <a href="#">View Details</a>
                </div>
            </div>
            <!-- Project Card 3 -->
            <div class="project-box">
                <img src="https://placeholder.com" alt="Project 3">
                <div class="project-layer">
                    <h4>Dashboard UI</h4>
                    <p>Interactive analytics control hub with data visualization charts.</p>
                    <a href="#">View Details</a>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. Contact Section (Floating Labels) -->
    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>

        <!-- Replace YOUR_UNIQUE_FORM_ID with your Formspree code -->
        <form action="https://formspree.io" method="POST">
            <div class="input-group">
                <div class="input-box">
                    <input type="text" name="name" required>
                    <label>Full Name</label>
                </div>
                <div class="input-box">
                    <input type="email" name="email" required>
                    <label>Email Address</label>
                </div>
            </div>

            <div class="input-group">
                <div class="input-box">
                    <input type="number" name="phone" required>
                    <label>Mobile Number</label>
                </div>
                <div class="input-box">
                    <input type="text" name="subject" required>
                    <label>Email Subject</label>
                </div>
            </div>

            <div class="input-box textarea-box">
                <textarea name="message" required cols="30" rows="8"></textarea>
                <label>Your Message</label>
            </div>

            <button type="submit" class="btn">Send Message</button>
        </form>
    </section>

    <!-- JavaScript Link at the very bottom -->
    <script src="app.js"></script>
</body>
</html>