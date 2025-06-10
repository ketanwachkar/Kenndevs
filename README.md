
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Using Unsplash Images

The project uses dynamic images from Unsplash (`source.unsplash.com/featured/...`) as placeholders to give a visual feel. For a production website, you should:

1.  Select specific, high-quality images from [Unsplash](https://unsplash.com/) or other stock photo providers that fit your brand.
2.  Download these images or note their direct URLs (e.g., `https://images.unsplash.com/photo-YOUR_IMAGE_ID?...`).
3.  Replace the `source.unsplash.com/featured/...` URLs in the codebase with your chosen image URLs. You can find these in the respective page or component files (e.g., `src/app/about/page.tsx`, `src/app/blog/page.tsx`, etc.).
4.  Ensure you comply with Unsplash's (or other providers') licensing terms.
5.  For optimal performance, consider optimizing images further and hosting them with your application or via a CDN.

The `next.config.ts` file is already configured to allow images from `images.unsplash.com` and `source.unsplash.com`.
