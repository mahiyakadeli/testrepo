function submitQuiz() {
    // Get selected answers
    const answers = {};
    for (let i = 1; i <= 10; i++) { // Adjusted for 10 questions as per previous example
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        answers[`q${i}`] = answer ? answer.value : null;
    }

    // Check if all questions are answered
    const allAnswered = Object.values(answers).every(answer => answer !== null);

    if (allAnswered) {
        // Calculate result based on answers
        let result = '';

        // Example result calculation (modify as needed)
        if (answers.q1 === 'Red' && answers.q2 === 'Formal' && answers.q3 === 'Monthly' &&
            answers.q4 === 'Bright' && answers.q5 === 'Warm' &&
            answers.q6 === 'Red' && answers.q7 === 'Light Blue' && answers.q8 === 'Yellow' &&
            answers.q9 === 'Gold' && answers.q10 === 'Gold') {
            result = 'Your style is vibrant and energetic with a preference for bold, warm colors and frequent updates!';
        } else if (answers.q1 === 'Blue' && answers.q2 === 'Casual' && answers.q3 === 'Weekly' &&
            answers.q4 === 'Cool' && answers.q5 === 'Neutral' &&
            answers.q6 === 'Blue' && answers.q7 === 'Gray' && answers.q8 === 'Green' &&
            answers.q9 === 'Silver' && answers.q10 === 'Navy Blue') {
            result = 'You prefer a relaxed, cool style with a focus on calm and neutral colors, updated frequently!';
        } else if (answers.q1 === 'Green' && answers.q2 === 'Sporty' && answers.q3 === 'Yearly' &&
            answers.q4 === 'Natural' && answers.q5 === 'Earthy' &&
            answers.q6 === 'Green' && answers.q7 === 'Beige' && answers.q8 === 'Orange' &&
            answers.q9 === 'Bronze' && answers.q10 === 'Forest Green') {
            result = 'Your style is sporty and grounded with earthy tones and occasional bright accents!';
        } else if (answers.q1 === 'Black' && answers.q2 === 'Elegant' && answers.q3 === 'Quarterly' &&
            answers.q4 === 'Classic' && answers.q5 === 'Sophisticated' &&
            answers.q6 === 'Black' && answers.q7 === 'Charcoal' && answers.q8 === 'Burgundy' &&
            answers.q9 === 'Copper' && answers.q10 === 'Charcoal Gray') {
            result = 'You favor a timeless, elegant style with sophisticated colors and a periodic refresh!';
        } else if (answers.q1 === 'White' && answers.q2 === 'Professional' && answers.q3 === 'Bi-Annually' &&
            answers.q4 === 'Clean' && answers.q5 === 'Bright' &&
            answers.q6 === 'White' && answers.q7 === 'Light Gray' && answers.q8 === 'Blue' &&
            answers.q9 === 'Platinum' && answers.q10 === 'Ice Blue') {
            result = 'Your style is professional and clean with a preference for bright, neutral colors and infrequent updates!';
        } else if (answers.q1 === 'Purple' && answers.q2 === 'Creative' && answers.q3 === 'Occasionally' &&
            answers.q4 === 'Vibrant' && answers.q5 === 'Rich' &&
            answers.q6 === 'Purple' && answers.q7 === 'Lavender' && answers.q8 === 'Magenta' &&
            answers.q9 === 'Rose Gold' && answers.q10 === 'Deep Purple') {
            result = 'You have a creative, vibrant style with rich, bold colors and occasional updates!';
        } else if (answers.q1 === 'Orange' && answers.q2 === 'Adventurous' && answers.q3 === 'Monthly' &&
            answers.q4 === 'Energetic' && answers.q5 === 'Bright' &&
            answers.q6 === 'Orange' && answers.q7 === 'Coral' && answers.q8 === 'Turquoise' &&
            answers.q9 === 'Gold' && answers.q10 === 'Bright Orange') {
            result = 'You have an adventurous style with energetic, bright colors and frequent updates!';
        } else if (answers.q1 === 'Pink' && answers.q2 === 'Romantic' && answers.q3 === 'Weekly' &&
            answers.q4 === 'Soft' && answers.q5 === 'Gentle' &&
            answers.q6 === 'Pink' && answers.q7 === 'Blush' && answers.q8 === 'Peach' &&
            answers.q9 === 'Rose Gold' && answers.q10 === 'Soft Pink') {
            result = 'You prefer a romantic, gentle style with soft, pastel colors and frequent updates!';
        } else {
            result = 'Your style is unique and eclectic, blending various elements and colors!';
        }

        // Display result
        document.getElementById('quiz-result').innerHTML = `<p>${result}</p>`;
    } else {
        // If not all questions are answered
        document.getElementById('quiz-result').innerHTML = '<p>Please answer all questions before submitting.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    showTestimonial(currentIndex); // Show the first testimonial
    setInterval(nextTestimonial, 2000); // Change testimonial every 2 seconds
});
