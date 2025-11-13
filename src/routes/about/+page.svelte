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
  <title>About Us - Assemblies of God Ottawa</title>
  <meta name="description" content="Learn about Assemblies of God Ottawa - Our mission, vision, and what we believe" />
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
        <span class="title-line">about us</span>
      </h1>
      <p class="hero-subtitle">Discover our mission, vision, and the heart of our community</p>
      <div class="dove-container">
        <img src="{base}/dove.webp" alt="Holy Spirit" class="dove-image" />
      </div>
    </div>
  </header>

  <!-- Mission Section -->
  <section class="content-section welcome-section">
    <div class="section-glow"></div>
    <div class="container">
      <h2 class="section-title">our mission</h2>
      <p class="section-text">To make disciples of Jesus Christ who live out their faith through worship, fellowship, service, and the sharing of the Gospel with our community and the world.</p>
      <div class="flame-accent"></div>
    </div>
  </section>

  <!-- Vision Section -->
  <section class="content-section vision-section">
    <div class="container">
      <h2 class="section-title">our vision</h2>
      <p class="section-text">To be a vibrant, Spirit-filled community that transforms lives through the power of the Gospel, equips believers for ministry, and makes a lasting impact in Ottawa and beyond.</p>
    </div>
  </section>

  <!-- What We Believe Section -->
  <section class="content-section beliefs-section">
    <div class="container">
      <h2 class="section-title">what we believe</h2>
      <div class="beliefs-grid">
        <div class="belief-card">
          <div class="card-icon">📖</div>
          <h3>the bible</h3>
          <p>We believe the Bible is the inspired, infallible Word of God and our ultimate authority for faith and practice.</p>
        </div>
        <div class="belief-card">
          <div class="card-icon">✝️</div>
          <h3>the trinity</h3>
          <p>We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.</p>
        </div>
        <div class="belief-card">
          <div class="card-icon">💝</div>
          <h3>salvation</h3>
          <p>We believe salvation is by grace through faith in Jesus Christ, who died for our sins and rose again.</p>
        </div>
        <div class="belief-card">
          <div class="card-icon">🔥</div>
          <h3>holy spirit</h3>
          <p>We believe in the present ministry of the Holy Spirit, who empowers believers for spiritual life and service.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story Section -->
  <section class="content-section story-section">
    <div class="section-glow"></div>
    <div class="container">
      <h2 class="section-title">our story</h2>
      <p class="section-text">Assemblies of God Ottawa has been serving the Ottawa community for over 60 years. Founded in the heart of the city, our church has grown into a diverse family of believers united by our love for God and our desire to serve others.</p>
      <p class="section-text">Through the decades, we have remained committed to our foundational principles while adapting to meet the changing needs of our community. Today, we continue to be a place where people from all walks of life can find hope, healing, and purpose through Jesus Christ.</p>
    </div>
  </section>

  <!-- Values Section -->
  <section class="content-section values-section">
    <div class="container">
      <h2 class="section-title">our values</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">🙏</div>
          <h3>worship</h3>
          <p>We believe worship is not just what we do, but who we are - living lives that honor God in everything we think, say, and do.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🤝</div>
          <h3>community</h3>
          <p>We are committed to building authentic relationships and caring for one another as we grow together in our spiritual journey.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">❤️</div>
          <h3>service</h3>
          <p>We believe every believer is called to serve, and we actively seek opportunities to serve both our church family and the broader community.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🌱</div>
          <h3>growth</h3>
          <p>We are committed to personal and spiritual growth, encouraging each person to discover and develop their God-given gifts and calling.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="content-section cta-section">
    <div class="cta-glow"></div>
    <div class="container">
      <h2 class="section-title">join our family</h2>
      <p class="section-text large">Experience the warmth of genuine fellowship and the transforming power of God's love</p>
      <div class="cta-buttons">
        <a href="{base}/visit" class="cta-button primary">plan your visit</a>
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
    max-width: 800px;
    margin: 0 auto 1.5rem;
    color: var(--color-text);
  }

  .section-text.large {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: 600;
    color: var(--color-deep-red);
    max-width: 750px;
  }

  /* Welcome/Mission Section */
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

  /* Vision Section */
  .vision-section {
    background: var(--color-cream);
  }

  /* Story Section */
  .story-section {
    position: relative;
    background: linear-gradient(135deg, var(--color-parchment) 0%, var(--color-cream) 100%);
  }

  /* Beliefs Grid */
  .beliefs-section {
    background: var(--color-cream);
  }

  .beliefs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .belief-card {
    background: var(--color-parchment);
    padding: 3rem 2rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .belief-card::before {
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

  .belief-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-deep);
    border-color: var(--color-golden);
  }

  .belief-card:hover::before {
    opacity: 1;
  }

  .card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 2px 8px rgba(107, 28, 35, 0.2));
  }

  .belief-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
    text-transform: lowercase;
  }

  .belief-card p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--color-text);
    margin: 0;
  }

  /* Values Grid */
  .values-section {
    background: var(--color-cream);
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    margin-top: 4rem;
  }

  .value-card {
    background: var(--color-parchment);
    padding: 3rem 2rem;
    border-radius: 8px;
    border: 2px solid var(--color-pale-gold);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }

  .value-card::before {
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

  .value-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-deep);
    border-color: var(--color-golden);
  }

  .value-card:hover::before {
    opacity: 1;
  }

  .value-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 2px 8px rgba(107, 28, 35, 0.2));
  }

  .value-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
    text-transform: lowercase;
  }

  .value-card p {
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
      min-height: 70vh;
      padding: 3rem 1.5rem;
    }

    .content-section {
      padding: 4rem 0;
    }

    .beliefs-grid,
    .values-grid {
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