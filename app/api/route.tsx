import redis from '@/lib/redis';
import sgMail from '@sendgrid/mail';

// Helper function to generate a unique submission ID (could use UUID or timestamp)
const generateSubmissionId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

export async function GET(request: Request) {
    // Get the formId from the URL parameter
    const { searchParams } = new URL(request.url);
    const formId = searchParams.get('formId');

    // Validate the formId parameter
    if (!formId) {
        return new Response(JSON.stringify({ error: 'Form ID is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        // Fetch all fields of the form stored as a hash in Redis
        const formKey = `form:${formId}`;  // The Redis key for the form hash
        const formDetails = await redis.hgetall(formKey);

        if (Object.keys(formDetails).length === 0) {
            return new Response(JSON.stringify({ error: 'Form not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Return the form details
        return new Response(JSON.stringify(formDetails), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error fetching form details:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const { formType, userId, submissionDate, fields } = body;

    // Validate the input data
    if (!formType || !userId || !submissionDate || !fields) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const submissionId = generateSubmissionId();

    // Save form details in Redis Hash
    const formKey = `form:${formType}:${submissionId}`;
    const submissionData = {
        form_type: formType,
        user_id: userId,
        submission_date: submissionDate,
        ...fields,  // Include all form fields dynamically
    };

    sgMail.setApiKey(process.env.NEXT_PUBLIC_TWILIO_KEY as string);
    const msg = {
        to: process.env.NEXT_PUBLIC_TO_EMAIL as string,
        from: process.env.NEXT_PUBLIC_FROM_EMAIL as string,
        subject: 'New Contact Form Submission',
        text: 'and easy to do anywhere, even with Node.js',
        html: `
            <div>
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${fields.name}</p>
                <p><strong>Email:</strong> ${fields.email}</p>
                <p><strong>Address:</strong> ${fields.address}</p>
                <p><strong>Message:</strong> ${fields.message}</p>
                <p><strong>Submission Date:</strong> ${submissionDate}</p>
            </div>
        `,
    }

    try {
        await sgMail.send(msg);
        console.log('Email sent');
    } catch (error) {
        console.error(error);
    }

    // Save form submission as a Redis Hash
    await redis.hmset(formKey, submissionData);

    // Save the submission date in a sorted set for querying by date range
    const timestamp = new Date(submissionDate).getTime();
    const dateKey = `form:${formType}:dates`;

    // Add the submission ID to the sorted set with the submission timestamp as the score
    await redis.zadd(dateKey, timestamp, submissionId);

    return new Response(JSON.stringify({ 
        message: 'Form submitted successfully', 
        submissionId 
    }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}
