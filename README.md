This is app is a simple social media platform that allows users to create and view posts. 
The app has a component called CreatePostWizard that lets the user type and submit a post using an input field and a button. The app also has a component called Feed that displays a list of posts from other users using a component called PostView. The app uses an API to fetch and mutate the posts data. The app also checks if the user is signed in or not before rendering the components. The project uses the following technologies.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

This code is for a React project that uses Next.js as a framework, Clerk as an authentication/middleware layer, and tRPC as a tool for creating type-safe APIs. The database is from creates an instance of PrismaClient and exports it for use in other files. Prisma and connected to a PostgreSQL using the .env files
