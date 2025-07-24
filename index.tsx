import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: '#f3f4f6' }}>
      <Head>
        <title>Andid HR Yemen</title>
        <meta name="description" content="منصة أنديد للوظائف والمناقصات في اليمن" />
      </Head>

      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937' }}>مرحباً بكم في Andid HR Yemen</h1>
      <p style={{ fontSize: '1.125rem', color: '#4b5563', marginTop: '1rem', maxWidth: '600px' }}>
        منصة إلكترونية لنشر الوظائف الشاغرة والمناقصات في اليمن. يمكن للجهات تسجيل الدخول ونشر طلباتهم، ويتم مراجعتها من قبل الإدارة.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <button style={{ padding: '0.75rem 2rem', fontSize: '1rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '0.5rem', marginRight: '1rem' }}>
          استعراض الوظائف
        </button>
        <button style={{ padding: '0.75rem 2rem', fontSize: '1rem', backgroundColor: 'white', color: '#2563eb', border: '2px solid #2563eb', borderRadius: '0.5rem' }}>
          تسجيل الدخول
        </button>
      </div>
    </div>
  );
}