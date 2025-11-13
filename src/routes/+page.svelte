<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Assemblies of God Ottawa</title>
  <meta name="description" content="Welcome to Assemblies of God Ottawa - A vibrant community of faith" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<main class="page-container">
  <Navigation />

  <!-- Hero Section with Title -->
  <header class="hero-section">
    <div class="radiant-glow"></div>
    <div class="hero-content" class:visible={mounted}>
      <h1 class="hero-title">
        <span class="title-line-1">Where the Spirit</span>
        <span class="title-line-2">of the Lord is</span>
        <span class="title-line-3">there is freedom</span>
      </h1>
      <p class="scripture-ref">2 Corinthians 3:17</p>
      <div class="dove-container">
        <img src="{base}/dove.webp" alt="Holy Spirit" class="dove-image" />
      </div>
      <p class="hero-subtitle">A vibrant community of faith in the heart of Ottawa</p>
    </div>
  </header>

  <!-- Welcome Section -->
  <section class="content-section welcome-section">
    <div class="section-glow"></div>
    <div class="container">
      <h2 class="section-title">Welcome Home</h2>
      <p class="section-text">Join us as we grow in faith, fellowship, and service to our community. We are a church that believes in the power of God to transform lives, heal hearts, and ignite the fire of the Holy Spirit within each believer.</p>
      <div class="flame-accent"></div>
    </div>
  </section>

  <!-- About Section -->
  <section class="content-section about-section">
    <div class="container">
      <h2 class="section-title">Our Calling</h2>
      <div class="about-grid">
        <div class="about-card">
          <div class="card-icon">🔥</div>
          <h3>Spirit-Led Worship</h3>
          <p>We believe in the power of authentic worship that welcomes the presence of the Holy Spirit</p>
        </div>
        <div class="about-card">
          <div class="card-icon">📖</div>
          <h3>Biblical Teaching</h3>
          <p>Grounded in Scripture, we seek truth and wisdom through the inspired Word of God</p>
        </div>
        <div class="about-card">
          <div class="card-icon">❤️</div>
          <h3>Loving Community</h3>
          <p>Our doors are open to everyone seeking fellowship, growth, and a family in Christ</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="content-section cta-section">
    <div class="cta-glow"></div>
    <div class="container">
      <h2 class="section-title">Join Us This Sunday</h2>
      <p class="section-text large">Come experience the warmth of our fellowship and the power of Spirit-filled worship</p>
      <div class="cta-buttons">
        <a href="{base}/visit" class="cta-button primary">Plan Your Visit</a>
        <a href="{base}/about" class="cta-button secondary">Learn More</a>
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
    min-height: 90vh;
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
    width: 600px;
    height: 600px;
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
    max-width: 900px;
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
    font-size: clamp(2rem, 6vw, 4.5rem);
    font-weight: 900;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    line-height: 1.2;
    letter-spacing: 0.02em;
    text-transform: lowercase;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .title-line-1,
  .title-line-2,
  .title-line-3 {
    display: block;
    opacity: 0;
    animation: fade-in-up 1s ease-out forwards;
  }

  .title-line-1 {
    animation-delay: 0.2s;
    font-weight: 600;
    color: var(--color-deep-red);
  }

  .title-line-2 {
    animation-delay: 0.5s;
    font-weight: 700;
  }

  .title-line-3 {
    animation-delay: 0.8s;
    font-weight: 900;
    font-size: 1.2em;
    color: var(--color-burnt-sienna);
    text-shadow: 0 2px 20px rgba(184, 87, 61, 0.3);
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

  .scripture-ref {
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-style: italic;
    color: var(--color-golden);
    margin: 0 0 3rem 0;
    opacity: 0;
    animation: fade-in-up 1s ease-out 1.1s forwards;
  }

  .dove-container {
    width: 120px;
    height: 120px;
    margin: 0 auto 2rem;
    opacity: 0;
    animation: fade-in-scale 1.2s ease-out 1.4s forwards;
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

  .hero-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-weight: 600;
    color: var(--color-dark-brown);
    max-width: 600px;
    margin: 0 auto;
    opacity: 0;
    animation: fade-in-up 1s ease-out 1.7s forwards;
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
    margin: 0 auto;
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

  /* About Section */
  .about-section {
    background: var(--color-cream);
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .about-card {
    background: var(--color-parchment);
    padding: 3rem 2rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .about-card::before {
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

  .about-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-deep);
    border-color: var(--color-golden);
  }

  .about-card:hover::before {
    opacity: 1;
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 2px 8px rgba(107, 28, 35, 0.2));
  }

  .about-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
  }

  .about-card p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text);
    margin: 0;
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
  @media (max-width: 768px) {
    .hero-section {
      min-height: 80vh;
      padding: 3rem 1.5rem;
    }

    .content-section {
      padding: 4rem 0;
    }

    .about-grid {
      gap: 2rem;
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
