<script>
  import Navigation from '$lib/components/Navigation.svelte';
  import { base } from '$app/paths';
  import { onMount } from 'svelte';
  
  /** @type {{ posts?: any[] }} */
  export let data;
  const posts = data?.posts || [];
  
  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>News & Updates - Assemblies of God Ottawa</title>
  <meta name="description" content="Stay updated with the latest news and announcements from Assemblies of God Ottawa" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
</svelte:head>

<main class="news-page">
  <Navigation />
  
  <!-- Hero Header -->
  <header class="news-hero">
    <div class="hero-glow"></div>
    <div class="hero-content" class:visible={mounted}>
      <div class="ornament top"></div>
      <h1 class="page-title">
        <span class="title-accent">news</span>
        <span class="title-main">& updates</span>
      </h1>
      <p class="page-subtitle">Staying Connected in Faith and Fellowship</p>
      <div class="ornament bottom"></div>
    </div>
  </header>

  <!-- News Content -->
  <section class="news-content">
    <div class="atmospheric-layer"></div>
    
    {#if posts.length === 0}
      <div class="empty-state">
        <div class="empty-icon">✦</div>
        <p>No news posts available at the moment.</p>
        <p class="empty-subtitle">Check back soon for updates from our community.</p>
      </div>
    {:else}
      <div class="posts-container">
        {#each posts as post, index}
          <article 
            class="post-article" 
            class:visible={mounted}
            style="animation-delay: {0.15 * index}s"
          >
            <div class="post-inner">
              <!-- Date Callout -->
              {#if post.Date}
                <div class="date-callout">
                  <span class="date-text">{post.Date}</span>
                </div>
              {/if}

              <!-- Post Header -->
              <header class="post-header">
                <h2 class="post-title">{post.Title}</h2>
                <div class="title-flourish"></div>
              </header>

              <!-- Image -->
              {#if post.ImageURL}
                <figure class="post-figure">
                  <div class="image-frame">
                    <img src={post.ImageURL} alt={post.Title} class="post-image" />
                  </div>
                </figure>
              {/if}

              <!-- Content -->
              <div class="post-body">
                <p class="post-text">{post.Content}</p>
              </div>

              <!-- Separator -->
              {#if index < posts.length - 1}
                <div class="post-separator">
                  <span class="separator-ornament">✦</span>
                </div>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </section>

  <!-- Footer -->
  <footer class="news-footer">
    <div class="footer-glow"></div>
    <div class="footer-content">
      <p class="footer-verse">"For where two or three gather in my name, there am I with them." — Matthew 18:20</p>
      <p class="footer-copyright">&copy; {new Date().getFullYear()} Assemblies of God Ottawa. All rights reserved.</p>
    </div>
  </footer>
</main>

<style>
  /* ===== CSS Variables (Extending Landing Page Palette) ===== */
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
    --color-muted-text: #5A4A40;
    
    /* Editorial additions */
    --color-deep-burgundy: #4A1319;
    --color-warm-stone: #E5DDD3;
    --color-terracotta: #9B4536;
    
    --font-display: 'Cinzel', serif;
    --font-editorial: 'Cormorant Garamond', serif;
    --font-body: 'Crimson Text', serif;
    
    --shadow-warm: 0 4px 20px rgba(184, 87, 61, 0.15);
    --shadow-deep: 0 8px 40px rgba(107, 28, 35, 0.2);
    --shadow-editorial: 0 12px 48px rgba(107, 28, 35, 0.12);
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

  /* ===== Page Structure ===== */
  .news-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ===== Hero Section ===== */
  .news-hero {
    position: relative;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem 4rem;
    background: 
      radial-gradient(ellipse at center top, var(--color-pale-gold) 0%, transparent 60%),
      radial-gradient(ellipse at 70% 40%, rgba(184, 87, 61, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 30% 80%, rgba(212, 165, 116, 0.08) 0%, transparent 50%),
      linear-gradient(180deg, var(--color-cream) 0%, var(--color-parchment) 100%);
    overflow: hidden;
    border-bottom: 1px solid var(--color-pale-gold);
  }

  .hero-glow {
    position: absolute;
    top: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.25) 0%, transparent 70%);
    border-radius: 50%;
    animation: gentle-pulse 10s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes gentle-pulse {
    0%, 100% {
      opacity: 0.6;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.9;
      transform: translateX(-50%) scale(1.08);
    }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .ornament {
    width: 80px;
    height: 2px;
    margin: 0 auto;
    background: linear-gradient(90deg, 
      transparent, 
      var(--color-golden), 
      var(--color-burnt-sienna),
      var(--color-golden), 
      transparent
    );
    position: relative;
  }

  .ornament.top {
    margin-bottom: 2rem;
  }

  .ornament.bottom {
    margin-top: 2rem;
  }

  .ornament::before,
  .ornament::after {
    content: '✦';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-golden);
    font-size: 0.7rem;
  }

  .ornament::before {
    left: -1.2rem;
  }

  .ornament::after {
    right: -1.2rem;
  }

  .page-title {
    font-family: var(--font-display);
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .title-accent {
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 600;
    color: var(--color-deep-red);
    text-transform: lowercase;
    letter-spacing: 0.1em;
    opacity: 0;
    animation: fade-in-up 1s ease-out 0.3s forwards;
  }

  .title-main {
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 900;
    color: var(--color-burgundy);
    text-transform: lowercase;
    letter-spacing: 0.02em;
    line-height: 1;
    opacity: 0;
    animation: fade-in-up 1s ease-out 0.6s forwards;
    text-shadow: 0 2px 30px rgba(107, 28, 35, 0.15);
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .page-subtitle {
    font-family: var(--font-editorial);
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-style: italic;
    font-weight: 500;
    color: var(--color-muted-text);
    margin: 1.5rem 0 0;
    opacity: 0;
    animation: fade-in-up 1s ease-out 0.9s forwards;
  }

  /* ===== News Content Section ===== */
  .news-content {
    position: relative;
    flex: 1;
    padding: 4rem 0;
    background: 
      radial-gradient(ellipse at 20% 30%, rgba(212, 165, 116, 0.04) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(184, 87, 61, 0.03) 0%, transparent 50%),
      linear-gradient(180deg, var(--color-parchment) 0%, var(--color-warm-stone) 50%, var(--color-cream) 100%);
  }

  .atmospheric-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent 0px,
        transparent 2px,
        rgba(107, 28, 35, 0.008) 2px,
        rgba(107, 28, 35, 0.008) 4px
      );
    pointer-events: none;
    opacity: 0.7;
  }

  .empty-state {
    text-align: center;
    padding: 6rem 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .empty-icon {
    font-size: 3rem;
    color: var(--color-golden);
    margin-bottom: 1.5rem;
  }

  .empty-state p {
    font-family: var(--font-editorial);
    font-size: 1.3rem;
    color: var(--color-burgundy);
    margin: 0.5rem 0;
  }

  .empty-subtitle {
    font-size: 1.1rem !important;
    color: var(--color-muted-text) !important;
    font-style: italic;
  }

  /* ===== Posts Container ===== */
  .posts-container {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  /* ===== Individual Post Article ===== */
  .post-article {
    margin-bottom: 5rem;
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .post-article.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .post-inner {
    background: 
      radial-gradient(ellipse at top left, rgba(232, 212, 184, 0.3) 0%, transparent 60%),
      var(--color-cream);
    border: 1px solid var(--color-pale-gold);
    border-radius: 4px;
    padding: 3.5rem 3rem;
    box-shadow: var(--shadow-editorial);
    position: relative;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .post-article:hover .post-inner {
    box-shadow: 0 16px 60px rgba(107, 28, 35, 0.18);
    transform: translateY(-4px);
    border-color: var(--color-golden);
  }

  /* ===== Date Callout ===== */
  .date-callout {
    position: absolute;
    top: -1rem;
    left: 3rem;
    background: linear-gradient(135deg, var(--color-burgundy) 0%, var(--color-deep-red) 100%);
    padding: 0.5rem 1.5rem;
    border-radius: 2px;
    box-shadow: 0 4px 16px rgba(107, 28, 35, 0.3);
  }

  .date-text {
    font-family: var(--font-display);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--color-pale-gold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ===== Post Header ===== */
  .post-header {
    margin-bottom: 2rem;
  }

  .post-title {
    font-family: var(--font-editorial);
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 700;
    line-height: 1.2;
    color: var(--color-burgundy);
    margin: 0 0 1rem 0;
    letter-spacing: -0.01em;
  }

  .title-flourish {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--color-burnt-sienna), var(--color-golden));
    border-radius: 2px;
    box-shadow: 0 2px 12px rgba(184, 87, 61, 0.3);
  }

  /* ===== Post Image ===== */
  .post-figure {
    margin: 2.5rem 0;
  }

  .image-frame {
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 
      inset 0 0 0 1px var(--color-pale-gold),
      var(--shadow-warm);
  }

  .image-frame::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }

  .post-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .post-article:hover .post-image {
    transform: scale(1.03);
  }

  /* ===== Post Body ===== */
  .post-body {
    margin: 2rem 0;
  }

  .post-text {
    font-family: var(--font-body);
    font-size: clamp(1.15rem, 2vw, 1.3rem);
    line-height: 1.9;
    color: var(--color-text);
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .post-text::first-letter {
    font-family: var(--font-editorial);
    font-size: 3.5em;
    font-weight: 700;
    line-height: 0.85;
    float: left;
    margin: 0.1em 0.15em 0 0;
    color: var(--color-burgundy);
  }

  /* ===== Post Separator ===== */
  .post-separator {
    margin-top: 4rem;
    text-align: center;
  }

  .separator-ornament {
    display: inline-block;
    font-size: 1.5rem;
    color: var(--color-golden);
    position: relative;
  }

  .separator-ornament::before,
  .separator-ornament::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-golden), transparent);
  }

  .separator-ornament::before {
    right: calc(100% + 1rem);
  }

  .separator-ornament::after {
    left: calc(100% + 1rem);
  }

  /* ===== Footer ===== */
  .news-footer {
    position: relative;
    background: linear-gradient(135deg, var(--color-dark-brown) 0%, var(--color-burgundy) 100%);
    color: var(--color-pale-gold);
    text-align: center;
    padding: 4rem 2rem;
    margin-top: 4rem;
    overflow: hidden;
  }

  .footer-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .footer-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
  }

  .footer-verse {
    font-family: var(--font-editorial);
    font-size: 1.25rem;
    font-style: italic;
    margin: 0 0 2rem 0;
    line-height: 1.8;
  }

  .footer-copyright {
    font-size: 0.95rem;
    margin: 0;
    opacity: 0.8;
  }

  /* ===== Responsive Design ===== */
  @media (max-width: 768px) {
    .news-hero {
      min-height: 40vh;
      padding: 5rem 1.5rem 3rem;
    }

    .ornament {
      width: 60px;
    }

    .title-accent {
      font-size: 1.5rem;
    }

    .title-main {
      font-size: 2.5rem;
    }

    .page-subtitle {
      font-size: 1.05rem;
    }

    .news-content {
      padding: 3rem 0;
    }

    .posts-container {
      padding: 0 1.5rem;
    }

    .post-article {
      margin-bottom: 3.5rem;
    }

    .post-inner {
      padding: 2.5rem 1.8rem;
    }

    .date-callout {
      position: static;
      display: inline-block;
      margin-bottom: 1.5rem;
      padding: 0.4rem 1.2rem;
    }

    .date-text {
      font-size: 0.75rem;
    }

    .post-title {
      font-size: 1.8rem;
    }

    .title-flourish {
      width: 50px;
      height: 2px;
    }

    .post-figure {
      margin: 2rem -1.8rem;
    }

    .image-frame {
      border-radius: 0;
    }

    .post-text {
      font-size: 1.08rem;
      line-height: 1.8;
    }

    .post-text::first-letter {
      font-size: 2.8em;
    }

    .post-separator {
      margin-top: 3rem;
    }

    .separator-ornament::before,
    .separator-ornament::after {
      width: 30px;
    }

    .news-footer {
      padding: 3rem 1.5rem;
    }

    .footer-verse {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    .post-inner {
      padding: 2rem 1.5rem;
    }

    .post-figure {
      margin: 1.5rem -1.5rem;
    }
  }
</style>