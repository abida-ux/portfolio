const fs = require('fs');
const path = require('path');
const https = require('https');

function parseEnv(envText) {
  const lines = envText.split(/\r?\n/);
  const vars = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim();
    vars[key] = val.replace(/^"|"$/g, '');
  }
  return vars;
}

(function main(){
  try {
    const envPath = path.resolve(__dirname, '../.env');
    if (!fs.existsSync(envPath)) {
      console.error('No .env file found at', envPath);
      process.exit(2);
    }

    const envText = fs.readFileSync(envPath, 'utf8');
    const env = parseEnv(envText);

    const service_id = env.VITE_EMAILJS_SERVICE_ID;
    const template_id = env.VITE_EMAILJS_TEMPLATE_ID;
    const user_id = env.VITE_EMAILJS_PUBLIC_KEY || env.VITE_EMAILJS_USER_ID;
    const private_key = env.EMAILJS_PRIVATE_KEY || env.VITE_EMAILJS_PRIVATE_KEY || env.EMAILJS_PRIVATE;
    const to_email = env.VITE_EMAIL_TO || 'abedanyakundi1@gmail.com';

    if (!service_id || !template_id || !user_id) {
      console.error('Missing one of required env vars: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
      process.exit(3);
    }

    const template_params = {
      from_name: 'Portfolio Test',
      from_email: 'no-reply@example.com',
      subject: 'Test email from portfolio site',
      message: 'This is a test sent from the local test script.',
      to_email
    };

    const payloadObj = {
      service_id,
      template_id,
      user_id,
      template_params
    };

    if (private_key) {
      payloadObj.private_key = private_key;
    }

    const payload = JSON.stringify(payloadObj);

    const options = {
      hostname: 'api.emailjs.com',
      path: '/api/v1.0/email/send',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('EmailJS send successful.');
        } else {
          console.error('EmailJS send failed. Status:', res.statusCode);
          try { console.error('Response:', data); } catch(e){}
          process.exit(4);
        }
      });
    });

    req.on('error', (e) => {
      console.error('Request error:', e && e.message);
      process.exit(5);
    });

    req.write(payload);
    req.end();

  } catch (err) {
    console.error('Unexpected error:', err && err.message);
    process.exit(1);
  }
})();
