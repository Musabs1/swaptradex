import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>SwapTradeX - The Marketplace Revolution</title>
        <meta name="description" content="Buy and sell with ease on SwapTradeX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, #1e1e2f, #3e1e6f)', minHeight: '100vh', color: '#eee' }}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            textShadow: '0 0 10px #9b59b6',
            marginBottom: '1rem',
            color: 'white',
            WebkitFontSmoothing: 'antialiased',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)'
          }}
        >
          SwapTradeX
        </motion.h1>

        <p style={{ fontSize: '1.5rem', maxWidth: '600px', margin: 'auto', color: '#ccc' }}>
          Welcome to the revolutionary marketplace with seamless buying, selling, and secure payments.
        </p>
      </main>
    </>
  );
}
