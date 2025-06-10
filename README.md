
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Using Placeholder Images

The project uses placeholder images from `https://placehold.co` to give a visual feel. For example, `https://placehold.co/600x400.png` for an image 600px wide by 400px high. These placeholders include a `data-ai-hint` attribute with keywords that can be used to search for appropriate images on services like Unsplash.

For a production website, you should:

1.  Select specific, high-quality images from [Unsplash](https://unsplash.com/) or other stock photo providers that fit your brand, using the `data-ai-hint` for inspiration.
2.  Download these images or note their direct URLs (e.g., `https://images.unsplash.com/photo-YOUR_IMAGE_ID?...`).
3.  Replace the `https://placehold.co/...` URLs in the codebase with your chosen image URLs.
4.  Ensure you comply with the chosen provider's licensing terms.
5.  For optimal performance, consider optimizing images further and hosting them with your application or via a CDN.

The `next.config.ts` file is already configured to allow images from `placehold.co`, `images.unsplash.com`, and `source.unsplash.com`.

## Header Customization

### Logo
The website logo is rendered by the `src/components/icons/Logo.tsx` component. You can modify this SVG component to use your own brand's logo.

### Navigation Links
Navigation links are managed in `src/lib/constants.ts` via the `NAV_LINKS` array.
- To add, remove, or modify links in both desktop and mobile menus, edit this array.
- The main desktop header displays a filtered subset of these links. This filter is located in `src/components/layout/Header.tsx`. You may need to adjust it if you add new primary navigation items.

### Theme Toggle
The header includes a dark/light theme toggle button.
- This feature is implemented in `src/components/shared/ThemeToggleButton.tsx`.
- It toggles a `dark` class on the `<html>` element and uses `localStorage` to persist the user's preference.
- The initial theme is determined by `localStorage`, the `dark` class on the `<html>` tag (set in `src/app/layout.tsx`), or the user's system preference.

## Using Unsplash Images (Alternative)

If you prefer to use dynamic images directly from Unsplash for development or as more visually rich placeholders:
1. Ensure `images.unsplash.com` and `source.unsplash.com` are in your `next.config.ts` `remotePatterns` (they should be by default).
2. You can use URLs like `https://source.unsplash.com/featured/?keyword1,keyword2` to get random images based on keywords.
3. Replace `placehold.co` URLs with these Unsplash URLs.
4. Remember that for production, specific, static Unsplash URLs are recommended for consistency and performance. Remove the `data-ai-hint` attribute if you switch to direct Unsplash URLs, as it's specific to the `placehold.co` setup.
