<script>
  import Navigation from '$lib/components/Navigation.svelte';
</script>

<svelte:head>
  <title>Visit Us - Assemblies of God Ottawa</title>
  <meta name="description" content="Visit Assemblies of God Ottawa - Service times, location, and contact information" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lora:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Hero Section -->
  <header class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Visit Us</h1>
      <p class="hero-subtitle">We would love to welcome you to our church family</p>
    </div>
  </header>

  <!-- Service Times Section -->
  <section class="content-section">
    <div class="container">
      <h2>Service Times</h2>
      <div class="service-times">
        <div class="service-card">
          <h3>Sunday Worship Service</h3>
          <div class="service-details">
            <p class="time">10:00 AM - 12:00 PM</p>
            <p>Join us for inspiring worship, practical teaching, and community fellowship.</p>
          </div>
        </div>
        <div class="service-card">
          <h3>Wednesday Prayer & Bible Study</h3>
          <div class="service-details">
            <p class="time">7:00 PM - 8:30 PM</p>
            <p>Deepen your faith through prayer, Bible study, and small group discussion.</p>
          </div>
        </div>
        <div class="service-card">
          <h3>Youth Service</h3>
          <div class="service-details">
            <p class="time">Friday 7:00 PM - 9:00 PM</p>
            <p>A dynamic service designed specifically for teenagers and young adults.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Location Section -->
  <section class="content-section bg-light">
    <div class="container">
      <h2>Our Location</h2>
      <div class="location-content">
        <div class="address-info">
          <h3>Assemblies of God Ottawa</h3>
          <div class="address">
            <p>1234 Bank Street</p>
            <p>Ottawa, ON K1S 3X3</p>
            <p>Canada</p>
          </div>
          <div class="contact-info">
            <p><strong>Phone:</strong> (613) 555-0123</p>
            <p><strong>Email:</strong> info@aogottawa.ca</p>
          </div>
          <div class="parking-info">
            <h4>Parking</h4>
            <p>Free parking available on-site. Additional street parking available on Bank Street and surrounding areas.</p>
          </div>
        </div>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-content">
              <p>📍 Interactive Map</p>
              <p>1234 Bank Street, Ottawa, ON</p>
              <button class="directions-btn">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- What to Expect Section -->
  <section class="content-section">
    <div class="container">
      <h2>What to Expect</h2>
      <div class="expect-grid">
        <div class="expect-item">
          <div class="expect-icon">👋</div>
          <h3>Friendly Welcome</h3>
          <p>Our greeters will warmly welcome you and help you feel at home from the moment you arrive.</p>
        </div>
        <div class="expect-item">
          <div class="expect-icon">🎵</div>
          <h3>Contemporary Worship</h3>
          <p>Experience uplifting contemporary music and heartfelt worship that draws you closer to God.</p>
        </div>
        <div class="expect-item">
          <div class="expect-icon">📖</div>
          <h3>Practical Teaching</h3>
          <p>Biblical messages that are relevant to your daily life and help you grow in your faith journey.</p>
        </div>
        <div class="expect-item">
          <div class="expect-icon">☕</div>
          <h3>Community Fellowship</h3>
          <p>Connect with others over coffee and refreshments during our fellowship time after service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What to Bring Section -->
  <section class="content-section bg-light">
    <div class="container">
      <h2>What to Bring</h2>
      <div class="bring-content">
        <div class="bring-items">
          <div class="bring-item">
            <h4>Just Yourself!</h4>
            <p>Come as you are. We believe God's love is for everyone, regardless of what you wear or where you're coming from.</p>
          </div>
          <div class="bring-item">
            <h4>Your Family</h4>
            <p>Children are welcome! We have a dedicated children's ministry program during the service.</p>
          </div>
          <div class="bring-item">
            <h4>An Open Heart</h4>
            <p>Come with an open mind and heart ready to experience God's love and the warmth of our community.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="content-section">
    <div class="container">
      <h2>Get in Touch</h2>
      <p>Have questions or want to learn more? We'd love to hear from you!</p>
      <div class="contact-form">
        <form>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone">
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us about yourself or ask any questions..."></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; {new Date().getFullYear()} Assemblies of God Ottawa. All rights reserved.</p>
    </div>
  </footer>
</main>

<style>
  :root {
    --primary-color: #3B82F6;
    --secondary-color: #1F2937;
    --accent-color: #FBBF24;
    --bg-light: #F9FAFB;
    --bg-white: #FFFFFF;
    --font-heading: 'Lora', serif;
    --font-body: 'Inter', sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: var(--bg-white);
    line-height: 1.7;
    color: var(--secondary-color);
  }

  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Hero Section */
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 60vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/dove.webp') no-repeat center center/cover;
    color: white;
    padding: 2rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    letter-spacing: 2px;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
  }

  .hero-subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
  }

  /* Content Sections */
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-section {
    padding: 5rem 0;
    text-align: center;
  }

  .bg-light {
    background-color: var(--bg-light);
  }

  .content-section h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
  }

  .content-section p {
    font-size: 1.1rem;
    max-width: 650px;
    margin: 0 auto 1.5rem auto;
  }

  /* Service Times */
  .service-times {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .service-card {
    background-color: var(--bg-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .service-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .service-details .time {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--accent-color);
    margin-bottom: 0.5rem;
  }

  .service-details p {
    margin: 0;
  }

  /* Location Content */
  .location-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }

  .address-info {
    text-align: left;
  }

  .address-info h3 {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
  }

  .address {
    margin-bottom: 2rem;
  }

  .address p {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-info p {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
  }

  .parking-info h4 {
    font-family: var(--font-heading);
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .parking-info p {
    margin: 0;
  }

  .map-container {
    display: flex;
    justify-content: center;
  }

  .map-placeholder {
    background-color: var(--bg-light);
    border: 2px dashed var(--primary-color);
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-content {
    text-align: center;
  }

  .map-content p {
    margin: 0.5rem 0;
  }

  .directions-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .directions-btn:hover {
    background-color: #2563EB;
  }

  /* What to Expect Grid */
  .expect-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .expect-item {
    background-color: var(--bg-white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .expect-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .expect-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .expect-item h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .expect-item p {
    margin: 0;
  }

  /* What to Bring */
  .bring-items {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 3rem;
  }

  .bring-item {
    background-color: var(--bg-white);
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid var(--accent-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .bring-item h4 {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .bring-item p {
    margin: 0;
  }

  /* Contact Form */
  .contact-form {
    max-width: 600px;
    margin: 3rem auto 0 auto;
    text-align: left;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--secondary-color);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #E5E7EB;
    border-radius: 4px;
    font-family: var(--font-body);
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .submit-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background-color: #2563EB;
  }

  /* Footer */
  .footer {
    background-color: var(--secondary-color);
    color: var(--bg-light);
    text-align: center;
    padding: 2.5rem 0;
    margin-top: auto;
  }

  .footer p {
    margin: 0;
    font-size: 0.9rem;
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .hero-title {
      font-size: 4.5rem;
    }

    .hero-subtitle {
      font-size: 1.5rem;
    }

    .service-times {
      grid-template-columns: repeat(2, 1fr);
    }

    .location-content {
      grid-template-columns: 1fr 1fr;
    }

    .expect-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .bring-items {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .service-times {
      grid-template-columns: repeat(3, 1fr);
    }

    .expect-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>