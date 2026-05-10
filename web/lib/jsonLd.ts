// Escapes `<` so a value containing `</script>` cannot break out of an
// inline <script type="application/ld+json"> tag. JSON.stringify alone does not.
export const safeJsonLd = (obj: unknown) =>
  JSON.stringify(obj).replace(/</g, '\\u003c');
