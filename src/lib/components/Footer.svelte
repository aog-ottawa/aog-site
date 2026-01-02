<footer class="footer">
  <div class="container">
    <p class="footer-verse">
      "For where two or three gather in my name, there am I with them."
    </p>
    <p class="footer-verse">
      <cite>— Matthew 18:20</cite>
    </p>
    <p class="footer-copyright">&copy; {new Date().getFullYear()} Assemblies of God Ottawa. All rights reserved.</p>
    <p class="footer-designer"><small>Web design by <a href="https://github.com/905timur" target="_blank" rel="noopener noreferrer">Timur Gabaidulin</a>.</small></p>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(135deg, var(--color-dark-brown) 0%, var(--color-burgundy) 100%);
    color: var(--color-pale-gold);
    text-align: center;
    padding: 4rem 2rem;
    margin-top: auto;
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
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

  .footer-verse cite {
    display: block;
    margin-top: 10px;
    font-style: normal;
    font-size: 0.9em;
    opacity: 0.9;
  }

  .footer-copyright {
    font-size: 0.95rem;
    margin: 0;
    opacity: 0.8;
  }

  .footer-designer {
    font-size: 0.85rem;
    margin: 0.5rem 0 0 0;
    opacity: 0.7;
  }

  .footer-designer a {
    color: var(--color-pale-gold);
    text-decoration: none;
    transition: opacity 0.3s ease;
  }

  .footer-designer a:hover {
    opacity: 0.8;
  }
</style>