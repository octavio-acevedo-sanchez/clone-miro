# Next.js 14 - Miro Clone

Miro Clone application, uses TypeScript (StandardJS), Tailwind + Shadcn/UI, MongoDB, the application only has basic functionalities. This project is a test one.

- Authentication using clerk/nextjs v4.30.
- Create, edit, delete and search boards
- Add to favorites
- Integration with liveblocks.io to add shapes and draw.

## Configure environment variables

Rename the file **.env.template** to **.env.local**

- Clerk: Create an account on https://clerk.com, create an application and then go to Api Keys and copy the values of NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

- Convex: Go to https://convex.dev, create an account, install convex with 'npm install convex', then 'npx convex dev', log in and create a project. That will add the variables CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL along with its values associated with the created project.

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

- Liveblocks: Go to liveblocks.io, create an account, after logging in, create a proyect, in API Keys copy secret key

```
LIVEBLOCKS_SECRET_KEY="sk_stringkeyexample"
```

- Rebuild the node modules and build Next

```
npm install
npm run dev
```
