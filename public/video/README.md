# Video Assets

## Hero Background Video

To complete the hero section setup, you need to add a background video file:

1. Place your video file as `hero-background.mp4` in this directory
2. Recommended specifications:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or higher
   - Duration: 10-30 seconds (it will loop)
   - File size: Keep under 10MB for web performance

## Alternative Video Sources

If you want to use a different video format or multiple sources for browser compatibility, update the `<video>` tag in `src/components/Hero.tsx`:

```jsx
<video className="hero-video" autoPlay muted loop playsInline>
  <source src="/video/hero-background.mp4" type="video/mp4" />
  <source src="/video/hero-background.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
```

## Fallback Image

You can also add a fallback background image by adding this CSS to `src/index.css`:

```css
.hero-video-container {
  background-image: url('/images/hero-fallback.jpg');
  background-size: cover;
  background-position: center;
}
```
