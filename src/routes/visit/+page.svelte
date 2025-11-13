<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  import 'leaflet/dist/leaflet.css';

  let L;
  let mapElement: HTMLElement;
  let map: L.Map;
  let mounted = false;

  onMount(async () => {
    mounted = true;
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
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Hero Section -->
  <header class="hero-section">
    <div class="radiant-glow"></div>
    <div class="hero-content" class:visible={mounted}>
      <h1 class="hero-title">
        <span class="title-line">visit us</span>
      </h1>
      <p class="hero-subtitle">We would love to welcome you to our church family</p>
      <div class="dove-container">
        <img src="{base}/dove.webp" alt="Holy Spirit" class="dove-image" />
      </div>
    </div>
  </header>

  <!-- Service Times Section -->
  <section class="content-section welcome-section">
    <div class="section-glow"></div>
    <div class="container">
      <h2 class="section-title">service times</h2>
      <div class="services-grid">
        <div class="service-card">
          <div class="card-icon">✝️</div>
          <h3>sunday worship service</h3>
          <p class="time">10:00 AM - 12:00 PM</p>
          <p>Join us for inspiring worship, practical teaching, and community fellowship.</p>
        </div>
        <div class="service-card">
          <div class="card-icon">🙏</div>
          <h3>wednesday prayer & bible study</h3>
          <p class="time">7:00 PM - 8:30 PM</p>
          <p>Deepen your faith through prayer, Bible study, and small group discussion.</p>
        </div>
        <div class="service-card">
          <div class="card-icon">🌟</div>
          <h3>youth service</h3>
          <p class="time">Friday 7:00 PM - 9:00 PM</p>
          <p>A dynamic service designed specifically for teenagers and young adults.</p>
        </div>
      </div>
      <div class="flame-accent"></div>
    </div>
  </section>

  <!-- Location Section -->
  <section class="content-section location-section">
    <div class="container">
      <h2 class="section-title">our location</h2>
      <div class="location-content">
        <div class="address-card">
          <h3 class="church-name">assemblies of god ottawa</h3>
          <div class="address">
            <p>1234 Bank Street</p>
            <p>Ottawa, ON K1S 3X3</p>
            <p>Canada</p>
          </div>
          <div class="contact-info">
            <p><strong>phone:</strong> (613) 555-0123</p>
            <p><strong>email:</strong> info@aogottawa.ca</p>
          </div>
          <div class="parking-info">
            <h4>parking</h4>
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
    <div class="section-glow"></div>
    <div class="container">
      <h2 class="section-title">what to expect</h2>
      <div class="expect-grid">
        <div class="expect-card">
          <div class="card-icon">👋</div>
          <h3>friendly welcome</h3>
          <p>Our greeters will warmly welcome you and help you feel at home from the moment you arrive.</p>
        </div>
        <div class="expect-card">
          <div class="card-icon">🎵</div>
          <h3>contemporary worship</h3>
          <p>Experience uplifting contemporary music and heartfelt worship that draws you closer to God.</p>
        </div>
        <div class="expect-card">
          <div class="card-icon">📖</div>
          <h3>practical teaching</h3>
          <p>Biblical messages that are relevant to your daily life and help you grow in your faith journey.</p>
        </div>
        <div class="expect-card">
          <div class="card-icon">☕</div>
          <h3>community fellowship</h3>
          <p>Connect with others over coffee and refreshments during our fellowship time after service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What to Bring Section -->
  <section class="content-section bring-section">
    <div class="container">
      <h2 class="section-title">what to bring</h2>
      <div class="bring-grid">
        <div class="bring-card">
          <div class="bring-number">1</div>
          <h3>just yourself!</h3>
          <p>Come as you are. We believe God's love is for everyone, regardless of what you wear or where you're coming from.</p>
        </div>
        <div class="bring-card">
          <div class="bring-number">2</div>
          <h3>your family</h3>
          <p>Children are welcome! We have a dedicated children's ministry program during the service.</p>
        </div>
        <div class="bring-card">
          <div class="bring-number">3</div>
          <h3>an open heart</h3>
          <p>Come with an open mind and heart ready to experience God's love and the warmth of our community.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="content-section contact-section">
    <div class="section-glow"></div>
    <div class="container">
      <h2 class="section-title">get in touch</h2>
      <p class="section-text">Have questions or want to learn more? We'd love to hear from you!</p>
      <div class="contact-form">
        <form>
          <div class="form-row">
            <div class="form-group">
              <label for="name">name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">email</label>
              <input type="email" id="email" name="email" required>
            </div>
          </div>
          <div class="form-group">
            <label for="phone">phone (optional)</label>
            <input type="tel" id="phone" name="phone">
          </div>
          <div class="form-group">
            <label for="message">message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us about yourself or ask any questions..."></textarea>
          </div>
          <button type="submit" class="submit-btn">send message</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="content-section cta-section">
    <div class="cta-glow"></div>
    <div class="container">
      <h2 class="section-title">ready to visit?</h2>
      <p class="section-text large">Join us this Sunday and experience the transforming power of worship and community</p>
      <div class="cta-buttons">
        <a href="{base}/about" class="cta-button primary">learn more about us</a>
        <a href="{base}/news" class="cta-button secondary">latest news</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p class="footer-verse">"For where two or three gather in my name, there am I with them." — Matthew 18:20</p>
      <p class="footer-copyright">&copy; {new Date().getFullYear()} Assemblies of God Ottawa. All rights reserved.</p>
    </div>
  </footer>
</main>

<style>
  :root {
    --color-burgundy: #6B1C23;
    --color-deep-red: #8B2635;
    --color-burnt-sienna: #B8573D;
    --color-golden: #D4A574;
    --color-pale-gold: #E8D4B8;
    --color-cream: #FDF8F3;
    --color-parchment: #F5EFE7;
    --color-dark-brown: #3A2520;
    --color-text: #2A1810;
    
    --font-display: 'Cinzel', serif;
    --font-body: 'Crimson Text', serif;
    
    --shadow-warm: 0 4px 20px rgba(184, 87, 61, 0.15);
    --shadow-deep: 0 8px 40px rgba(107, 28, 35, 0.2);
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: var(--color-cream);
    line-height: 1.8;
    color: var(--color-text);
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
    min-height: 75vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
    background: 
      radial-gradient(ellipse at center top, var(--color-pale-gold) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 70%, rgba(184, 87, 61, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 20% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
      var(--color-cream);
    overflow: hidden;
  }

  .radiant-glow {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse-glow 8s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.5;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.8;
      transform: translateX(-50%) scale(1.1);
    }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 900;
    color: var(--color-burgundy);
    margin: 0 0 1.5rem 0;
    line-height: 1.2;
    letter-spacing: 0.03em;
    text-transform: lowercase;
  }

  .title-line {
    display: block;
    opacity: 0;
    animation: fade-in-up 1s ease-out 0.2s forwards;
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 600;
    color: var(--color-dark-brown);
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0;
    animation: fade-in-up 1s ease-out 0.5s forwards;
  }

  .dove-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    opacity: 0;
    animation: fade-in-scale 1.2s ease-out 0.8s forwards;
  }

  .dove-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 4px 12px rgba(107, 28, 35, 0.2));
  }

  @keyframes fade-in-scale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Content Sections */
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-section {
    position: relative;
    padding: 6rem 0;
    text-align: center;
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 2rem 0;
    letter-spacing: 0.03em;
    text-transform: lowercase;
  }

  .section-text {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    line-height: 1.9;
    max-width: 750px;
    margin: 0 auto 1.5rem;
    color: var(--color-text);
  }

  .section-text.large {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 600;
    color: var(--color-deep-red);
  }

  /* Welcome Section */
  .welcome-section {
    position: relative;
    background: linear-gradient(135deg, var(--color-parchment) 0%, var(--color-cream) 100%);
  }

  .section-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    animation: gentle-pulse 6s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes gentle-pulse {
    0%, 100% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.05);
    }
  }

  .flame-accent {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--color-burnt-sienna), transparent);
    margin: 3rem auto 0;
    box-shadow: 0 0 20px rgba(184, 87, 61, 0.4);
  }

  /* Service Cards */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .service-card {
    background: var(--color-parchment);
    padding: 3rem 2rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top, rgba(212, 165, 116, 0.1) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-deep);
    border-color: var(--color-golden);
  }

  .service-card:hover::before {
    opacity: 1;
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 2px 8px rgba(107, 28, 35, 0.2));
  }

  .service-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
    text-transform: lowercase;
  }

  .service-card .time {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-golden);
    margin: 0 0 1rem 0;
  }

  .service-card p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text);
    margin: 0;
  }

  /* Location Section */
  .location-section {
    background: var(--color-cream);
  }

  .location-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
    text-align: left;
  }

  .address-card {
    background: var(--color-parchment);
    padding: 3rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
  }

  .church-name {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 2rem 0;
    letter-spacing: 0.02em;
    text-transform: lowercase;
  }

  .address {
    margin-bottom: 2rem;
  }

  .address p {
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }

  .contact-info {
    margin-bottom: 2rem;
  }

  .contact-info p {
    margin: 0 0 0.5rem 0;
    font-size: 1.05rem;
    color: var(--color-text);
  }

  .contact-info strong {
    color: var(--color-burgundy);
    font-weight: 700;
    text-transform: lowercase;
  }

  .parking-info h4 {
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: var(--color-burgundy);
    margin: 0 0 0.75rem 0;
    text-transform: lowercase;
    letter-spacing: 0.02em;
  }

  .parking-info p {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .map-wrapper {
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid var(--color-pale-gold);
    box-shadow: var(--shadow-warm);
  }

  .map-container {
    height: 450px;
    width: 100%;
  }

  /* Expect Section */
  .expect-section {
    position: relative;
    background: linear-gradient(135deg, var(--color-parchment) 0%, var(--color-cream) 100%);
  }

  .expect-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .expect-card {
    background: var(--color-parchment);
    padding: 3rem 2rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .expect-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top, rgba(212, 165, 116, 0.1) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .expect-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-deep);
    border-color: var(--color-golden);
  }

  .expect-card:hover::before {
    opacity: 1;
  }

  .expect-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
    text-transform: lowercase;
  }

  .expect-card p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text);
    margin: 0;
  }

  /* Bring Section */
  .bring-section {
    background: var(--color-cream);
  }

  .bring-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
  }

  .bring-card {
    background: var(--color-parchment);
    padding: 3rem 2.5rem;
    border-radius: 8px;
    border-left: 6px solid var(--color-burnt-sienna);
    box-shadow: var(--shadow-warm);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    text-align: left;
  }

  .bring-card:hover {
    transform: translateX(8px);
    box-shadow: var(--shadow-deep);
  }

  .bring-number {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-golden);
    line-height: 1;
    margin-bottom: 1rem;
    opacity: 0.3;
  }

  .bring-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
    text-transform: lowercase;
  }

  .bring-card p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text);
    margin: 0;
  }

  /* Contact Section */
  .contact-section {
    position: relative;
    background: linear-gradient(135deg, var(--color-parchment) 0%, var(--color-cream) 100%);
  }

  .contact-form {
    max-width: 700px;
    margin: 3rem auto 0;
    background: var(--color-parchment);
    padding: 3rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
    box-shadow: var(--shadow-warm);
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
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-burgundy);
    letter-spacing: 0.05em;
    text-transform: lowercase;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid var(--color-pale-gold);
    border-radius: 4px;
    font-family: var(--font-body);
    font-size: 1.05rem;
    background: var(--color-cream);
    color: var(--color-text);
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--color-golden);
    box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1.2rem 3rem;
    border: none;
    border-radius: 4px;
    background: var(--color-burgundy);
    color: var(--color-cream);
    cursor: pointer;
    letter-spacing: 0.05em;
    text-transform: lowercase;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    width: 100%;
    margin-top: 1rem;
  }

  .submit-btn:hover {
    background: var(--color-deep-red);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(107, 28, 35, 0.3);
  }

  /* CTA Section */
  .cta-section {
    position: relative;
    background: linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-deep-red) 100%);
    color: var(--color-cream);
  }

  .cta-section .section-title {
    color: var(--color-pale-gold);
  }

  .cta-section .section-text {
    color: var(--color-cream);
  }

  .cta-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulse-glow 10s ease-in-out infinite;
    pointer-events: none;
  }

  .cta-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .cta-button {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1.2rem 3rem;
    border-radius: 4px;
    text-decoration: none;
    letter-spacing: 0.05em;
    text-transform: lowercase;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-block;
  }

  .cta-button.primary {
    background: var(--color-golden);
    color: var(--color-burgundy);
    box-shadow: 0 4px 20px rgba(212, 165, 116, 0.3);
  }

  .cta-button.primary:hover {
    background: var(--color-pale-gold);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(212, 165, 116, 0.5);
  }

  .cta-button.secondary {
    background: transparent;
    color: var(--color-pale-gold);
    border: 2px solid var(--color-pale-gold);
  }

  .cta-button.secondary:hover {
    background: rgba(232, 212, 184, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(232, 212, 184, 0.2);
  }

  /* Footer */
  .footer {
    background: linear-gradient(135deg, var(--color-dark-brown) 0%, var(--color-burgundy) 100%);
    color: var(--color-pale-gold);
    text-align: center;
    padding: 4rem 2rem;
    margin-top: auto;
  }

  .footer-verse {
    font-family: var(--font-body);
    font-size: 1.2rem;
    font-style: italic;
    margin: 0 0 2rem 0;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.8;
  }

  .footer-copyright {
    font-size: 0.95rem;
    margin: 0;
    opacity: 0.8;
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .form-row {
      grid-template-columns: 1fr 1fr;
    }

    .location-content {
      grid-template-columns: 1fr 1.2fr;
      align-items: start;
    }

    .submit-btn {
      width: auto;
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      min-height: 70vh;
      padding: 3rem 1.5rem;
    }

    .content-section {
      padding: 4rem 0;
    }

    .services-grid,
    .expect-grid,
    .bring-grid {
      gap: 2rem;
    }

    .contact-form {
      padding: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }

    .cta-button {
      width: 100%;
    }
  }
</style>
