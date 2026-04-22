import fs from "fs"
import path from "path"
import sharp from "sharp"

const inputDir = path.resolve("src/assets/raw-images")
const outputDir = path.resolve("src/assets/images-optimized")

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

async function optimizeImage(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath))

  const pipeline = sharp(filePath).resize({ width: 800, withoutEnlargement: true })

  const formats = [
    { ext: "webp", fn: (p, o) => p.webp(o), options: { quality: 75 } },
  ]

  for (const { ext, fn, options } of formats) {
    const outPath = path.join(outputDir, `${fileName}.${ext}`)
    await fn(pipeline.clone(), options).toFile(outPath)
    console.log(`Saved ${fileName}.${ext}`)
  }
}

async function run() {
  const files = fs.readdirSync(inputDir).filter(f =>
    /\.(jpe?g|png)$/i.test(f)
  )

  if (files.length === 0) {
    console.log("No images found in", inputDir)
    return
  }

  for (const file of files) {
    await optimizeImage(path.join(inputDir, file))
  }

  console.log("✅ All images optimized into WebP!")
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
