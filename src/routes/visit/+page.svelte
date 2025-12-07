<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';

  let L;
  let mapElement: HTMLElement;
  let map: L.Map;
  let mounted = false;

  // Form state management
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    date: ''
  };

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLk5vUcVIe2oYEL-7tIcAeuXzrqFZS1PmXTAkUcOawDqeNm6ljguck85PRq95UbXVMeA/exec';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    // Reset status
    submitStatus = 'idle';
    isSubmitting = true;

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        submitStatus = 'success';
        // Clear form
        formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          date: ''
        };
      } else {
        submitStatus = 'error';
      }
    } catch (error) {
      console.error('Form submission error:', error);
      submitStatus = 'error';
    } finally {
      isSubmitting = false;
    }
  }

  onMount(async () => {
    mounted = true;
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
    
    if (typeof window !== 'undefined') {
      L = await import('leaflet');
      map = L.map(mapElement).setView([45.4215, -75.6972], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([45.4215, -75.6972]).addTo(map)
        .bindPopup('Assemblies of God Ottawa')
        .openPopup();
    }
  });
</script>

<svelte:head>
  <title>Visit Us - Assemblies of God Ottawa</title>
  <meta name="description" content="Visit Assemblies of God Ottawa - Service times, location, and contact information" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Hero Section -->
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content" class:visible={mounted}>
      <h1 class="hero-title">VISIT US</h1>
      <p class="hero-subtitle">We would love to welcome you to our church family</p>
    </div>
  </header>

  <!-- Service Times Section -->
  <section class="content-section services-section">
    <div class="container">
      <h2 class="section-title">SERVICE TIMES</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="card-icon">
            <i data-lucide="church" class="icon"></i>
          </div>
          <h3>Sunday Worship Service</h3>
          <p class="time">10:00 AM - 12:00 PM</p>
          <p>Join us for inspiring worship, practical teaching, and community fellowship.</p>
        </div>
        <div class="service-card">
          <div class="card-icon">
            <i data-lucide="book-open-text" class="icon"></i>
          </div>
          <h3>Wednesday Prayer & Bible Study</h3>
          <p class="time">7:00 PM - 8:30 PM</p>
          <p>Deepen your faith through prayer, Bible study, and small group discussion.</p>
        </div>
        <div class="service-card">
          <div class="card-icon">
            <i data-lucide="sparkles" class="icon"></i>
          </div>
          <h3>Youth Service</h3>
          <p class="time">Friday 7:00 PM - 9:00 PM</p>
          <p>A dynamic service designed specifically for teenagers and young adults.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Location Section -->
  <section class="content-section location-section">
    <div class="container">
      <h2 class="section-title">OUR LOCATION</h2>
      <div class="location-content">
        <div class="address-card">
          <h3 class="church-name">Assemblies of God Ottawa</h3>
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
        <div class="map-wrapper">
          <div class="map-container" bind:this={mapElement}></div>
        </div>
      </div>
    </div>
  </section>

  <!-- What to Expect Section -->
  <section class="content-section expect-section">
    <div class="container">
      <h2 class="section-title">WHAT TO EXPECT</h2>
      <div class="expect-grid">
        <div class="expect-card">
          <div class="card-icon">
            <i data-lucide="hand-heart" class="icon"></i>
          </div>
          <h3>Friendly Welcome</h3>
          <p>Our greeters will warmly welcome you and help you feel at home from the moment you arrive.</p>
        </div>
        <div class="expect-card">
          <div class="card-icon">
            <i data-lucide="music" class="icon"></i>
          </div>
          <h3>Contemporary Worship</h3>
          <p>Experience uplifting contemporary music and heartfelt worship that draws you closer to God.</p>
        </div>
        <div class="expect-card">
          <div class="card-icon">
            <i data-lucide="book-open" class="icon"></i>
          </div>
          <h3>Practical Teaching</h3>
          <p>Biblical messages that are relevant to your daily life and help you grow in your faith journey.</p>
        </div>
        <div class="expect-card">
          <div class="card-icon">
            <i data-lucide="coffee" class="icon"></i>
          </div>
          <h3>Community Fellowship</h3>
          <p>Connect with others over coffee and refreshments during our fellowship time after service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What to Bring Section -->
  <section class="content-section bring-section">
    <div class="container">
      <h2 class="section-title">WHAT TO BRING</h2>
      <div class="bring-grid">
        <div class="bring-card">
          <div class="bring-number">1</div>
          <h3>Just Yourself!</h3>
          <p>Come as you are. We believe God's love is for everyone, regardless of what you wear or where you're coming from.</p>
        </div>
        <div class="bring-card">
          <div class="bring-number">2</div>
          <h3>Your Family</h3>
          <p>Children are welcome! We have a dedicated children's ministry program during the service.</p>
        </div>
        <div class="bring-card">
          <div class="bring-number">3</div>
          <h3>An Open Heart</h3>
          <p>Come with an open mind and heart ready to experience God's love and the warmth of our community.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="content-section contact-section">
    <div class="container">
      <h2 class="section-title">GET IN TOUCH</h2>
      <p class="section-text">Have questions or want to learn more? We'd love to hear from you!</p>
      <div class="contact-form">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                bind:value={formData.name}
                required
                disabled={isSubmitting}
              >
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                bind:value={formData.email}
                required
                disabled={isSubmitting}
              >
            </div>
          </div>
          <div class="form-group">
            <label for="phone">Phone (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              bind:value={formData.phone}
              disabled={isSubmitting}
            >
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about yourself or ask any questions..."
              bind:value={formData.message}
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button type="submit" class="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {#if submitStatus === 'success'}
            <div class="status-message success-message">
              <i data-lucide="check-circle" class="status-icon"></i>
              <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          {/if}
          
          {#if submitStatus === 'error'}
            <div class="status-message error-message">
              <i data-lucide="alert-circle" class="status-icon"></i>
              <p>Sorry, there was an error sending your message. Please try again or contact us directly.</p>
            </div>
          {/if}
        </form>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="content-section cta-section">
    <div class="container">
      <h2 class="section-title-alt">READY TO VISIT?</h2>
      <p class="section-text-alt">Join us this Sunday and experience the transforming power of worship and community</p>
      <div class="cta-buttons">
        <a href="{base}/about" class="cta-button-secondary">Learn More About Us</a>
        <a href="{base}/news" class="cta-button-tertiary">Latest News</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />
</main>

<style>
  :root {
    --color-white: #FFFFFF;
    --color-gold: #D4AF37;
    --color-dark: #1a1a1a;
    --color-charcoal: #2C2C2C;
    --color-dark-grey: #555555;
    --color-light-cream: #F9F7F2;
    --color-medium-gray: #e0e0e0;
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Lato', sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: var(--color-white);
    line-height: 1.6;
    color: var(--color-charcoal);
    overflow-x: hidden;
  }

  .page-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('https://source.unsplash.com/random/1920x1080/?church,welcome');
    background-size: cover;
    background-position: center;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(0, 0, 0, 0.5) 0%, 
      rgba(0, 0, 0, 0.6) 100%
    );
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--color-white);
    margin: 0 0 1rem 0;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .hero-subtitle {
    font-family: var(--font-body);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 400;
    color: var(--color-white);
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.95;
  }

  /* Content Sections */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-section {
    padding: 6rem 0;
    text-align: center;
  }

  .section-title {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--color-dark);
    margin: 0 0 2rem 0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .section-text {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.8;
    max-width: 750px;
    margin: 0 auto 2rem;
    color: var(--color-charcoal);
  }

  /* Services Section */
  .services-section {
    background-color: var(--color-light-cream);
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .service-card {
    background: var(--color-white);
    padding: 40px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .card-icon {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-icon :global(.icon) {
    width: 48px;
    height: 48px;
    color: var(--color-gold);
    stroke-width: 1.5;
  }

  .service-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-charcoal);
    margin: 0 0 1rem 0;
  }

  .service-card .time {
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-gold);
    margin: 0 0 1rem 0;
  }

  .service-card p {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
    margin: 0;
  }

  /* Location Section */
  .location-section {
    background: var(--color-white);
  }

  .location-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
    text-align: left;
  }

  .address-card {
    background: var(--color-light-cream);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .church-name {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-charcoal);
    margin: 0 0 2rem 0;
  }

  .address {
    margin-bottom: 2rem;
  }

  .address p {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: var(--color-charcoal);
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-info p {
    margin: 0 0 0.5rem 0;
    font-size: 1.05rem;
    color: var(--color-charcoal);
  }

  .contact-info strong {
    color: var(--color-dark);
    font-weight: 700;
  }

  .parking-info h4 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: var(--color-charcoal);
    margin: 0 0 0.75rem 0;
    font-weight: 600;
  }

  .parking-info p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
  }

  .map-wrapper {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .map-container {
    height: 100%;
    width: 100%;
    min-height: 450px;
  }

  /* Expect Section */
  .expect-section {
    background: var(--color-light-cream);
  }

  .expect-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: 4rem;
  }
  
  @media (max-width: 768px) {
    .expect-grid {
      grid-template-columns: 1fr;
    }
  }

  .expect-card {
    background: var(--color-white);
    padding: 40px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .expect-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }

  .expect-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-charcoal);
    margin: 0 0 1rem 0;
  }

  .expect-card p {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
    margin: 0;
  }

  /* Bring Section */
  .bring-section {
    background: var(--color-white);
  }

  .bring-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
  }

  .bring-card {
    background: var(--color-light-cream);
    padding: 40px;
    border-radius: 8px;
    border-left: 4px solid var(--color-gold);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    text-align: left;
  }

  .bring-card:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .bring-number {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-gold);
    line-height: 1;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  .bring-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-charcoal);
    margin: 0 0 1rem 0;
  }

  .bring-card p {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
    margin: 0;
  }

  /* Contact Section */
  .contact-section {
    background: var(--color-light-cream);
  }

  .contact-form {
    max-width: 700px;
    margin: 3rem auto 0;
    background: var(--color-white);
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .form-group:last-of-type {
    margin-bottom: 0;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.75rem;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-charcoal);
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid var(--color-medium-gray);
    border-radius: 4px;
    font-family: var(--font-body);
    font-size: 1rem;
    background: var(--color-white);
    color: var(--color-charcoal);
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--color-gold);
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-weight: 700;
    padding: 15px 40px;
    border: none;
    border-radius: 4px;
    background: var(--color-gold);
    color: var(--color-white);
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 1rem;
  }

  .submit-btn:hover:not(:disabled) {
    background: #c29d2e;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(212, 175, 55, 0.3);
  }

  .submit-btn:disabled {
    background: #cccccc;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Status Messages */
  .status-message {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem;
    border-radius: 4px;
    margin-top: 1.5rem;
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.5;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .success-message {
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
  }

  .error-message {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
  }

  .status-message p {
    margin: 0;
    flex: 1;
  }

  .status-icon {
    flex-shrink: 0;
  }

  .success-message :global(.status-icon) {
    color: #28a745;
    width: 24px;
    height: 24px;
  }

  .error-message :global(.status-icon) {
    color: #dc3545;
    width: 24px;
    height: 24px;
  }

  .form-group input:disabled,
  .form-group textarea:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 0.6;
  }

  }

  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
    color: var(--color-white);
  }

  .section-title-alt {
    font-family: var(--font-heading);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--color-gold);
    margin: 0 0 2rem 0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .section-text-alt {
    font-family: var(--font-body);
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
    color: var(--color-white);
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .cta-button-secondary,
  .cta-button-tertiary {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 35px;
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .cta-button-secondary {
    background: var(--color-gold);
    color: var(--color-white);
  }

  .cta-button-secondary:hover {
    background: #c29d2e;
    transform: translateY(-2px);
  }

  .cta-button-tertiary {
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
  }

  .cta-button-tertiary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }

    .location-content {
      grid-template-columns: 1fr 1.2fr;
      align-items: stretch;
    }

    .submit-btn {
      width: auto;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      height: 50vh;
    }

    .content-section {
      padding: 4rem 0;
    }

    .services-grid,
    .expect-grid,
    .bring-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-form {
      padding: 30px;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-button-secondary,
    .cta-button-tertiary {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .hero-content {
      padding: 1rem;
    }

    .hero-title {
      letter-spacing: 0.1em;
    }

    .section-title,
    .section-title-alt {
      letter-spacing: 0.08em;
    }
  }
</style>
