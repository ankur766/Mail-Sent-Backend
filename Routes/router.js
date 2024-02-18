const express = require('express');
const router = new express.Router();
const nodemailer = require('nodemailer');


router.post('/api/sendemail', (req, res) => {
    try {
        const email = req.body.email;

        if (!email) {
            return res.status(400).json({ status: 400, error: 'Email address is required' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ankurkr358@gmail.com',
                pass: 'ykzn jabn sdhs ehsp'
            }
            
        });
        console.log('email:', email);
        //receive mail from user
        const mailOptions = {

            from: 'ankurkr358@gmail.com',
            to: email,
            subject: 'Thank You for Visiting My Profile',
            html: `
            <h1>🌟 Thank You for Visiting My Portfolio! 🌟</h1>
<p>Dear Esteemed Visitor,</p>
<p>It brings me immense joy to extend my heartfelt gratitude to you for taking the time to explore my portfolio. 🚀 Your visit is more than just a click; it's a moment of connection and appreciation.</p>

<p>Your interest in my work means the world to me! 🌍 I've poured my passion, dedication, and creativity into every project, and having you explore it is a truly rewarding experience. 🎨</p>

<p>In this digital realm where countless paths unfold, your choice to explore my portfolio is a significant and cherished moment. 🌈 Your curiosity and engagement inspire me to continually strive for excellence and innovation.</p>

<p>As you peruse through the pages of my portfolio, I hope you find inspiration, creativity, and a glimpse into the unique perspective I bring to each project. If there's anything specific that caught your eye or if you have any questions, I'd love to hear from you!</p>

<p>Once again, thank you for being a part of this journey. 🙏 Your support fuels my passion and motivates me to reach new heights. I look forward to the possibility of connecting further and creating meaningful experiences together.</p>

<p>Wishing you a fantastic day ahead, filled with inspiration and joy! ✨</p>
<p>Best regards,</p>
<p>Ankur kumar</p>
        <p> <a href="tel: +91 7667782140" className="text-blue-600 hover:underline">  +91 7667782140</a> </P>
            <p>Thank You</p>
            <p><a href="https://responsive-portfolio-gray.vercel.app/">Portfolio</a></p>
            <span>social Media:</span>
            <a href="https://www.linkedin.com/in/ankurkumar94/">Linkedin</a>
            <a href="https://github.com/ankur766">Github</a>
            <a href="https://www.linkedin.com/in/ankurkumar94/">Twitter</a>`

        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(400).json({ status: 400, error: 'Email not sent' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(201).json({ status: 201, info });
            }
        });
    } catch (error) {
        console.log('Error:', error);
        return res.status(500).json({ status: 500, error: 'Internal Server Error' });
    }



});


module.exports = router;