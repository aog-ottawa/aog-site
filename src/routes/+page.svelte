<script context="module" lang="ts">
  declare const lucide: any;
</script>

<script lang="ts">
  import Navigation from '$lib/components/Navigation.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';

  let mounted = false;

  onMount(() => {
    mounted = true;
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
</script>

<svelte:head>
  <title>Assemblies of God Ottawa</title>
  <meta name="description" content="Welcome to Assemblies of God Ottawa - A vibrant community of faith" />
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
      <img src="{base}/dove-sil.svg" alt="Dove" class="hero-dove-icon" />
      <h1 class="hero-title">
        WHERE THE SPIRIT OF THE LORD IS,<br />THERE IS FREEDOM
      </h1>
      <p class="scripture-ref">2 Corinthians 3:17</p>
      <p class="hero-subtitle">A vibrant community of faith in the heart of Ottawa</p>
      <a href="{base}/visit" class="cta-button">Join Us This Sunday</a>
    </div>
  </header>

  <!-- Welcome Section -->
  <section class="content-section welcome-section">
    <div class="container">
      <h2 class="section-title">WELCOME HOME</h2>
      <p class="section-text">Join us as we grow in faith, fellowship, and service to our community. We are a church that believes in the power of God to transform lives, heal hearts, and ignite the fire of the Holy Spirit within each believer.</p>
    </div>
  </section>

  <!-- About Section -->
  <section class="content-section about-section">
    <div class="container">
      <h2 class="section-title">OUR CALLING</h2>
      <div class="about-grid">
        <div class="about-card">
          <div class="card-icon">
            <i data-lucide="flame" class="icon"></i>
          </div>
          <h3>Spirit-Led Worship</h3>
          <p>We believe in the power of authentic worship that welcomes the presence of the Holy Spirit</p>
        </div>
        <div class="about-card">
          <div class="card-icon">
            <i data-lucide="book-open" class="icon"></i>
          </div>
          <h3>Biblical Teaching</h3>
          <p>Grounded in Scripture, we seek truth and wisdom through the inspired Word of God</p>
        </div>
        <div class="about-card">
          <div class="card-icon">
            <i data-lucide="heart" class="icon"></i>
          </div>
          <h3>Loving Community</h3>
          <p>Our doors are open to everyone seeking fellowship, growth, and a family in Christ</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="content-section cta-section">
    <div class="container">
      <h2 class="section-title-alt">JOIN US THIS SUNDAY</h2>
      <p class="section-text-alt">Come experience the warmth of our fellowship and the power of Spirit-filled worship</p>
      <div class="cta-buttons">
        <a href="{base}/visit" class="cta-button-secondary">Plan Your Visit</a>
        <a href="{base}/about" class="cta-button-tertiary">Learn More</a>
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
    --color-overlay: rgba(0, 0, 0, 0.6);
    --color-light-gray: #f8f8f8;
    --color-light-cream: #F9F7F2;
    --color-medium-gray: #e0e0e0;
    --color-text-dark: #333333;
    --color-charcoal: #2C2C2C;
    --color-dark-grey: #555555;
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Lato', sans-serif;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: var(--color-white);
    line-height: 1.6;
    color: var(--color-text-dark);
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url('https://source.unsplash.com/random/1920x1080/?church,worship');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
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
    max-width: 900px;
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
    margin: 0 0 1.5rem 0;
    line-height: 1.2;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .scripture-ref {
    font-family: var(--font-body);
    font-size: clamp(1rem, 2vw, 1.3rem);
    font-style: italic;
    font-weight: 300;
    color: var(--color-white);
    margin: 0 0 2rem 0;
    opacity: 0.95;
  }

  .hero-subtitle {
    font-family: var(--font-body);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    font-weight: 400;
    color: var(--color-white);
    max-width: 600px;
    margin: 0 auto 3rem;
    opacity: 0.9;
  }

  .hero-dove-icon {
    width: 120px;
    height: auto;
    margin-bottom: 20px;
    filter: invert(100%) brightness(200%);
    opacity: 0.9;
  }

  .cta-button {
    display: inline-block;
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-weight: 700;
    padding: 15px 40px;
    background-color: var(--color-gold);
    color: var(--color-white);
    text-decoration: none;
    border-radius: 4px;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .cta-button:hover {
    background-color: #c29d2e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
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
    max-width: 800px;
    margin: 0 auto;
    color: var(--color-text-dark);
  }

  /* Welcome Section */
  .welcome-section {
    background-color: var(--color-light-gray);
  }

  /* About Section */
  .about-section {
    background-color: var(--color-light-cream);
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .about-card {
    background: var(--color-white);
    padding: 40px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .about-card:hover {
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

  .about-card h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-charcoal);
    margin: 0 0 1rem 0;
  }

  .about-card p {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--color-dark-grey);
    margin: 0;
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
    letter-spacing: 0.05em;
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
  @media (max-width: 768px) {
    .hero-section {
      height: 100vh;
      background-attachment: scroll;
    }

    .hero-title {
      letter-spacing: 0.1em;
    }

    .content-section {
      padding: 4rem 0;
    }

    .about-grid {
      gap: 2rem;
      grid-template-columns: 1fr;
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

    .section-title,
    .section-title-alt {
      letter-spacing: 0.08em;
    }
  }
</style>
