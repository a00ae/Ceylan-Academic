const imges: Record<string, {default: string}> = import.meta.glob(
    './name-0*.{png,jpg,jpeg,webp,avif}',
    {eager: true}
)

export const instructureImages: string[] = Object.values(imges).map((img) => img.default);