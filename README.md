
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

## 3D Graphics Integration (React Three Fiber)

This project uses **React Three Fiber (R3F)** along with **Three.js** and **@react-three/drei** to incorporate 3D graphics.

### Dependencies
Ensure you have the following dependencies in your `package.json`:
```json
"three": "^0.166.1",
"@react-three/fiber": "^8.16.8",
"@react-three/drei": "^9.108.1",
"@types/three": "^0.165.0" 
```
If not already installed, run `npm install three @react-three/fiber @react-three/drei` and `npm install --save-dev @types/three`.

### Key 3D Components
- **`src/components/home/Hero3DScene.tsx`**: Provides an animated 3D background for the homepage hero section.
- **`src/components/services/Service3DIcon.tsx`**: Renders simple 3D animated icons for service cards.

### Customizing 3D Elements
- **Models and Shapes**: You can modify the geometries (e.g., `boxGeometry`, `sphereGeometry`) and materials (`meshStandardMaterial`) within these components to change the appearance of 3D objects.
- **Animations**: Animations are typically handled using the `useFrame` hook from `@react-three/fiber` for continuous updates or by leveraging `@react-three/drei` helpers.
- **Performance**:
    - Use low-polygon models.
    - Optimize textures.
    - Consider dynamic imports for larger 3D components if they are not immediately visible.
- **Accessibility (`prefers-reduced-motion`)**: For users who prefer reduced motion, you can conditionally skip animations or entire 3D scenes. This can be implemented by checking `window.matchMedia('(prefers-reduced-motion: reduce)').matches` within your R3F components and adjusting behavior accordingly. (This is not yet fully implemented across all 3D components).
- **WebGL Fallbacks**: For browsers or devices that do not support WebGL, or for performance reasons, consider implementing fallbacks (e.g., static images or 2D animations). This can be achieved by checking for WebGL support on the client-side before rendering the `<Canvas>`. (This is not yet implemented).

### Further Enhancements
- Explore more complex 3D models (e.g., GLTF format) using `@react-three/drei`'s `useGLTF` hook.
- Implement more sophisticated interactions (e.g., mouse-based camera controls, click events on 3D objects).
- Add post-processing effects for a more polished look using `@react-three/postprocessing`.

## Using Unsplash Images (Alternative)

If you prefer to use dynamic images directly from Unsplash for development or as more visually rich placeholders:
1. Ensure `images.unsplash.com` and `source.unsplash.com` are in your `next.config.ts` `remotePatterns` (they should be by default).
2. You can use URLs like `https://source.unsplash.com/featured/?keyword1,keyword2` to get random images based on keywords.
3. Replace `placehold.co` URLs with these Unsplash URLs.
4. Remember that for production, specific, static Unsplash URLs are recommended for consistency and performance. Remove the `data-ai-hint` attribute if you switch to direct Unsplash URLs, as it's specific to the `placehold.co` setup.
