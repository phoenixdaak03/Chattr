export interface Comment {
    commentedBy: string;
    text: string;
}

export interface Chat {
    id: string;
    title: string;
    topic: string;
    text: string;
    postedBy: string;
    tag: string;
    comments: Comment[];
}

export const chats: Chat[] = [
    {
        id: '1',
        title: 'Welcome Thread',
        topic: 'Welcome to Chattr!',
        text: `Welcome to Chattr, our growing hub for all things interesting, insightful, and just plain fun. Whether you’re a developer, designer, hobbyist, or just someone who enjoys a good discussion, we’re happy to have you here. This platform is designed to foster curiosity, learning, and connection.

Feel free to introduce yourself in the comments below. Tell us about your interests, what you hope to find here, and what excites you about being part of this community. Remember to be kind, stay respectful, and keep things engaging. Here’s to great conversations!`,
        postedBy: 'admin',
        tag: 'r/Chattr',
        comments: [
            {
                commentedBy: 'alice',
                text: 'Thanks for the warm welcome! I’m excited to explore and maybe even share some React projects I’ve been working on.'
            },
            {
                commentedBy: 'bob',
                text: 'Really appreciate the open vibes here. Looking forward to discussing both tech and totally random stuff.'
            },
            {
                commentedBy: 'carol',
                text: 'Hi everyone! I’ve been in a few online communities before, but this one already feels different — in a good way. Hope to connect with other AI enthusiasts!'
            },
        ],
    },
    {
        id: '2',
        title: 'Framework Debate',
        topic: 'React vs Vue',
        text: `Frontend development has never been more exciting, and also never more divided. Two of the biggest players in the space — React and Vue — have both established massive user bases and ecosystems. React, with its flexibility and huge community, gives developers endless ways to build things, but can sometimes feel unstructured for newcomers.

Vue, on the other hand, provides a more opinionated and streamlined experience, especially for those just starting out. It’s often praised for its clarity and developer ergonomics. Yet some feel that Vue’s community is smaller and lacks the tooling depth React offers.

So what’s your take? Which one wins for scalability, maintainability, or team collaboration? Share your use cases and horror stories — we’re all ears!`,
        postedBy: 'alice',
        tag: 'r/webdev',
        comments: [
            {
                commentedBy: 'carol',
                text: 'Vue’s learning curve is so smooth. I built my first app in a weekend and it just made sense. But at work we’re using React and Redux, and I do see why it’s the industry default.'
            },
            {
                commentedBy: 'dave',
                text: 'React’s ecosystem is massive, but sometimes I feel like I’m writing more boilerplate than actual app logic. Hooks helped though!'
            },
            {
                commentedBy: 'bob',
                text: 'I recently switched to Vue 3 and the Composition API is fantastic. It feels very natural coming from React hooks.'
            },
            {
                commentedBy: 'admin',
                text: 'Both are excellent choices — I think the project’s goals and the team’s experience should drive the decision.'
            },
        ],
    },
    {
        id: '3',
        title: 'Programming Languages',
        topic: 'Favorite Programming Language',
        text: `There are so many programming languages out there, each with its own strengths, weaknesses, and unique quirks. From Python’s simplicity and elegance to Rust’s performance and safety, every developer seems to have a favorite they’re passionate about.

Personally, I love Go for its concurrency model and straightforward tooling. It's not the most expressive language, but it gets the job done with minimal fuss. Meanwhile, languages like Kotlin and Swift have made mobile development much more bearable.

What’s the language you enjoy the most — and why? Is it nostalgia? Productivity? Ecosystem? Or just a well-designed syntax? Let’s talk about what makes your go-to language so special.`,
        postedBy: 'bob',
        tag: 'r/programming',
        comments: [
            {
                commentedBy: 'alice',
                text: 'I started with Python and never looked back. It’s so easy to read and I use it for data science, scripting, and even simple APIs.'
            },
            {
                commentedBy: 'carol',
                text: 'Rust fan here! It took me a while to get used to the ownership model, but now I love how safe and efficient it is.'
            },
            {
                commentedBy: 'dave',
                text: 'JavaScript has its flaws, but it runs everywhere. And with TypeScript, it’s become much more bearable.'
            },
        ],
    },
    {
        id: '4',
        title: 'AI Predictions',
        topic: 'AI in 2025',
        text: `Artificial Intelligence has come a long way in the past few years. We’ve gone from simple predictive text to generative models that can write essays, generate artwork, and even mimic human voices. But what does the future hold?

By 2025, will AI assistants be as common as smartphones? Will they replace jobs or enhance them? Will ethics catch up with capability, or will we face more controversial challenges?

This thread is for future-gazing. Share your bold predictions, your hopes, your concerns, or just what you find fascinating about AI’s next steps.`,
        postedBy: 'carol',
        tag: 'r/artificial',
        comments: [
            {
                commentedBy: 'bob',
                text: 'I think AI will be in every workplace — not replacing people, but helping with tasks like scheduling, summarizing meetings, and drafting content.'
            },
            {
                commentedBy: 'dave',
                text: 'We need serious conversations around bias and regulation before these tools get even more power.'
            },
            {
                commentedBy: 'alice',
                text: 'It’s exciting and scary. Generative AI is amazing, but I worry about deepfakes and misinformation.'
            },
        ],
    },
    {
        id: '5',
        title: 'Pet Parade',
        topic: 'Show us your pets!',
        text: `Let’s take a break from the serious stuff and celebrate our beloved companions. Pets make our lives richer, funnier, and way more unpredictable. Whether it’s a cat that insists on walking across your keyboard during Zoom meetings or a dog that brings you a slipper every morning — we want to see them.

Post your favorite pet pictures or tell us your best animal story. Exotic pets, farm animals, even that lizard you rescued from your backyard — all are welcome! Bonus points for pet puns.`,
        postedBy: 'dave',
        tag: 'r/aww',
        comments: [
            {
                commentedBy: 'alice',
                text: 'My cat, Whiskers, loves to nap on my keyboard. She literally turned off my computer once mid-project!'
            },
            {
                commentedBy: 'carol',
                text: 'My dog Max is the most loyal companion. Every time I get home, he brings me his toy like he’s presenting a gift.'
            },
            {
                commentedBy: 'bob',
                text: 'We adopted a bunny last year and named him Codey. He’s chewed through two ethernet cables so far 😅.'
            },
        ],
    },
];
