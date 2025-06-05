export interface Chat {
    id: string;
    title: string;
    topic: string;
    text: string;
    postedBy: string;
    tag: string; // subreddit-type tag
}

// Sample data for development
export const chats: Chat[] = [
    {
        id: '1',
        title: 'Welcome Thread',
        topic: 'Welcome to Chattr!',
        text: 'Hey everyone, and welcome to Chattr! We’re so glad you’re here. This is your space to connect, share ideas, and join conversations that matter to you. Whether you’re new to online communities or a seasoned poster, introduce yourself and tell us what brings you here. Let’s build something awesome together!',
        postedBy: 'admin',
        tag: 'r/Chattr',
    },
    {
        id: '2',
        title: 'Framework Debate',
        topic: 'React vs Vue',
        text: 'The battle between React and Vue has been going strong for years. React offers a powerful ecosystem with hooks and community support, while Vue provides a more elegant and beginner-friendly syntax. Some developers prefer the declarative style of React, while others love the simplicity of Vue’s reactivity system. What do you prefer, and what use cases have you found each framework to excel at?',
        postedBy: 'alice',
        tag: 'r/webdev',
    },
    {
        id: '3',
        title: 'Programming Languages',
        topic: 'Favorite Programming Language',
        text: 'Everyone has a favorite programming language — whether it’s Python for its simplicity, JavaScript for its versatility, or Rust for its performance and safety. I personally enjoy working in Go because of its straightforward syntax and fast compile times. What’s your go-to language, and what makes it stand out in your workflow?',
        postedBy: 'bob',
        tag: 'r/programming',
    },
    {
        id: '4',
        title: 'AI Predictions',
        topic: 'AI in 2025',
        text: 'Artificial intelligence has been growing at an incredible pace. From language models to generative art and self-driving cars, AI is reshaping the world. But where do you see it heading in the next few years? Will we see widespread job automation, smarter assistants, or breakthroughs in general intelligence? Share your predictions and hopes for how AI will influence our lives by 2025.',
        postedBy: 'carol',
        tag: 'r/artificial',
    },
    {
        id: '5',
        title: 'Pet Parade',
        topic: 'Show us your pets!',
        text: 'Let’s take a break from the tech talk and show some love to our furry (or scaly, or feathery) friends! Share pictures of your pets, tell us their names, and maybe a funny or heartwarming story. Whether you’ve got a mischievous cat, a loyal dog, or an exotic animal, this is the thread to spread the cuteness.',
        postedBy: 'dave',
        tag: 'r/aww',
    },
];
