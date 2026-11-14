# Material tile collection

14 sets, appended to the catalog without changing existing saved skin indices.

- `collection-01.png`: supplied transparent artwork, copied unchanged; eight rows.
- `collection-02.png`: transparent six-row atlas prepared from the supplied Collection 02 reference using the built-in imagegen tool.

Both sheets retain six columns: red, yellow, green, cyan, blue, purple. Gameplay uses five slots (red, blue, yellow, green, purple); cyan remains available in the source art. Source rectangles in `src/render/art2.ts` follow the actual atlas bounds rather than assuming perfectly uniform generated spacing.

Preview all gameplay sprites at `/scripts/material-preview.html` with the Vite development server running.

## Generation prompt for collection 02

Extract the tile artwork from this reference into a production sprite atlas with genuine transparent background. Preserve all 36 tiles exactly as closely as possible. Remove all text and navy background. Six columns red, yellow, green, cyan, blue, purple, six rows Timber, Octa Gem, Leaf Fold, Offset Inlay, Pearl Ceramic, Lantern in exactly that order. Strict uniform 6 by 6 grid, square canvas, each tile centered in its equal square cell, each tile fills 82 percent of its cell, no overlap or glow across cell boundaries. No labels, no extra objects. Preserve materials, shapes, colored wood grain, facets, diagonal folds, corner recesses, pearlescence, dark lantern frames. Save output for use in the game project.
