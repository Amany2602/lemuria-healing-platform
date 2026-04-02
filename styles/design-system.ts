export const designSystem = {
  colors: {
    primary: {
      DEFAULT: '#2D5A47', // Brand Teal
      light: '#447A64',
      lighter: '#6B9C88',
      dark: '#1A362B',
      bg: '#FAF9F6', // Warm White
    },
    secondary: {
      DEFAULT: '#F5E6DA', // Sand Tone
      light: '#F9F1EB',
      lighter: '#FFFFFF',
    },
    accent: {
      gold: '#D4AF37',
    },
    text: {
      DEFAULT: '#2D2926', // Charcoal
      muted: '#666666',
    },
    glass: {
      light: 'rgba(255, 255, 255, 0.15)',
      card: 'rgba(255, 255, 255, 0.8)',
      dark: 'rgba(45, 90, 71, 0.08)',
    }
  },
  typography: {
    fontFamily: {
      heading: ['var(--font-playfair)', 'serif'],
      body: ['var(--font-inter)', 'sans-serif'],
    },
    letterSpacing: {
      heading: '0.025em',
      body: '0px',
    }
  },
  shadows: {
    premium: '0px 8px 40px -4px rgba(45, 90, 71, 0.15)',
    premiumHover: '0px 16px 60px -4px rgba(45, 90, 71, 0.25)',
  },
  borderRadius: {
    small: '50px',
    large: '24px',
    premium: '12px',
  },
};
