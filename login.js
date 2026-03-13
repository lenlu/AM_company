
let generatedOTP = null;
let targetEmail = "";

// Elements
const emailSection = document.getElementById('email-section');
const adminSection = document.getElementById('admin-section');
const otpSection = document.getElementById('otp-section');
const loginEmail = document.getElementById('login-email');
const adminUser = document.getElementById('admin-user');
const adminPass = document.getElementById('admin-pass');
const sendOtpBtn = document.getElementById('send-login-otp');
const adminLoginBtn = document.getElementById('admin-login-btn');
const verifyOtpBtn = document.getElementById('verify-login-otp');
const statusMsg = document.getElementById('login-status');
const otpFields = document.querySelectorAll('.login-otp-field');
const resendLink = document.getElementById('resend-login-otp');
const switchToAdmin = document.getElementById('switch-to-admin');
const switchToUser = document.getElementById('switch-to-user');

/**
 * Handle Switching Views
 */
switchToAdmin.addEventListener('click', () => {
    emailSection.style.display = 'none';
    adminSection.style.display = 'block';
    showStatus('ADMIN PORTAL READY', '#e0a3ff');
});

switchToUser.addEventListener('click', () => {
    adminSection.style.display = 'none';
    emailSection.style.display = 'block';
    showStatus('', '');
});

/**
 * Handle Admin Login
 */
adminLoginBtn.addEventListener('click', () => {
    const user = adminUser.value.trim();
    const pass = adminPass.value.trim();

    if (user === 'manisha' && pass === 'icecream') {
        showStatus('ADMIN ACCESS GRANTED. Linking systems...', '#00ff88');
        adminLoginBtn.disabled = true;
        setTimeout(() => {
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', 'admin');
            sessionStorage.setItem('userEmail', 'admin@manisha-a.com');
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showStatus('INVALID CREDENTIALS. ACCESS DENIED.', '#ff4d4d');
    }
});

/**
 * Handle OTP digit input auto-focus
 */
otpFields.forEach((field, index) => {
    field.addEventListener('input', (e) => {
        if (e.target.value.length === 1 && index < otpFields.length - 1) {
            otpFields[index + 1].focus();
        }
    });

    field.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
            otpFields[index - 1].focus();
        }
    });
});

/**
 * Send OTP
 */
sendOtpBtn.addEventListener('click', async () => {
    targetEmail = loginEmail.value.trim();
    
    if (!targetEmail || !targetEmail.includes('@')) {
        showStatus('Please enter a valid ID.', '#ff4d4d');
        return;
    }

    sendOtpBtn.disabled = true;
    sendOtpBtn.textContent = 'TRANSMITTING...';
    showStatus('Preparing secure signal...', '#e0a3ff');

    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Generated OTP: ${generatedOTP}`);

    const otpTemplate = `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { margin: 0; padding: 0; font-family: 'Inter', Arial, sans-serif; background-color: #050505; color: #ffffff; }
            .wrapper { width: 100%; padding: 40px 0; background-color: #050505; }
            .main { background-color: #111111; margin: 0 auto; width: 100%; max-width: 500px; border: 1px solid rgba(224, 163, 255, 0.2); border-radius: 24px; overflow: hidden; text-align: center; }
            .content { padding: 40px 30px; }
            .logo { font-size: 32px; font-weight: 900; margin-bottom: 20px; }
            .logo-p1 { color: #e0a3ff; }
            .logo-p2 { color: #ff69b4; }
            h1 { font-size: 22px; color: #e0a3ff; margin-bottom: 20px; }
            p { font-size: 15px; color: #d1d1d1; line-height: 1.6; }
            .otp-box { background: rgba(224, 163, 255, 0.05); border: 1px solid rgba(224, 163, 255, 0.3); border-radius: 16px; padding: 20px; margin: 30px 0; display: inline-block; }
            .otp-code { font-size: 38px; font-weight: 800; letter-spacing: 10px; color: #ffffff; text-shadow: 0 0 15px rgba(224, 163, 255, 0.5); margin: 0; }
            .footer { padding: 20px; font-size: 12px; color: rgba(255,255,255,0.4); border-top: 1px solid rgba(255,255,255,0.05); }
            .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(224, 163, 255, 0.3), transparent); margin: 30px 0; }
        </style>
    </head>
    <body>
        <div class='wrapper'>
            <div class='main'>
                <div class='content'>
                    <div class='logo'><span class='logo-p1'>Manisha</span><span class='logo-p2'>-A</span></div>
                    <div class='divider'></div>
                    <h1>Link Verification Required</h1>
                    <p>To access the Manisha-A portal, please use the secure code below.</p>
                    <div class='otp-box'>
                        <div class='otp-code'>${generatedOTP}</div>
                    </div>
                    <p style='font-size: 13px;'>Valid for 10 minutes. Signal expires thereafter.</p>
                    <div class='divider'></div>
                </div>
                <div class='footer'>
                    &copy; 2026 Manisha-A Brand. Stay Ahead, Stay Tech.
                </div>
            </div>
        </div>
    </body>
    </html>
    `;

    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: targetEmail,
                subject: 'Your Verification Code - Manisha-A',
                html: otpTemplate,
                from_name: 'Manisha-A Security'
            })
        });

        const result = await response.json();
        
        if (result.success) {
            emailSection.style.display = 'none';
            otpSection.style.display = 'block';
            showStatus('Verification code sent to your link.', '#00ff88');
            otpFields[0].focus();
        } else {
            throw new Error(result.error || 'Backend transmission failed');
        }
    } catch (err) {
        console.error('Login OTP failed:', err);
        showStatus('Signal failure. Check backend connection.', '#ff4d4d');
        sendOtpBtn.disabled = false;
        sendOtpBtn.textContent = 'RETRY INITIALIZATION';
    }
});

/**
 * Verify OTP
 */
verifyOtpBtn.addEventListener('click', () => {
    let enteredOTP = "";
    otpFields.forEach(field => enteredOTP += field.value);

    if (enteredOTP.length < 6) {
        showStatus('Full 6-digit code required.', '#ff4d4d');
        return;
    }

    if (enteredOTP === generatedOTP) {
        showStatus('LINK ESTABLISHED. Redirecting...', '#00ff88');
        verifyOtpBtn.disabled = true;
        
        // Success animation or redirect
        setTimeout(() => {
            // Save login state if needed
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userEmail', targetEmail);
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showStatus('Verification mismatch. Try again.', '#ff4d4d');
        otpFields.forEach(field => field.value = "");
        otpFields[0].focus();
    }
});

/**
 * Resend OTP
 */
resendLink.addEventListener('click', () => {
    otpSection.style.display = 'none';
    emailSection.style.display = 'block';
    sendOtpBtn.disabled = false;
    sendOtpBtn.textContent = 'INITIALIZE VERIFICATION';
    showStatus('', '');
});

function showStatus(msg, color) {
    statusMsg.innerText = msg;
    statusMsg.style.color = color;
}
