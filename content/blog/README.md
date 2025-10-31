# Blog Content

Esta carpeta contiene todas las entradas de blog en formato Markdown.

## Estructura de carpetas

```
content/blog/
├── es/           # Posts en español
│   └── *.md
├── en/           # Posts en inglés
│   └── *.md
└── README.md
```

## Cómo agregar una nueva entrada

1. Crea un archivo `.md` en la carpeta correspondiente al idioma (`es/` o `en/`)
2. El nombre del archivo puede ser cualquiera, pero usa un nombre descriptivo
3. **IMPORTANTE**: Usa el mismo valor en el campo `url` para ambos idiomas (español e inglés)
4. Agrega el frontmatter con los metadatos requeridos
5. Escribe el contenido en Markdown

## Formato de archivo

Cada archivo debe tener el siguiente formato:

```markdown
---
title: "Título del post"
url: "nombre-del-post"
date: "2025-10-30"
description: "Descripción corta del post que aparecerá en las cards"
image: "/blog/imagen.jpg"
---

# Contenido del post

Aquí va el contenido en Markdown...
```

## Campos requeridos en el frontmatter

- `title`: Título del post (puede ser diferente en cada idioma)
- `url`: URL única del post (DEBE SER IGUAL en español e inglés para el mismo post)
- `date`: Fecha de publicación en formato YYYY-MM-DD
- `description`: Descripción corta (se muestra en las cards del listado)
- `image`: Ruta de la imagen destacada (debe estar en `/public/blog/`)

## ⚠️ Importante sobre el campo `url`

El campo `url` es crucial para que el cambio de idioma funcione correctamente.

**Ejemplo correcto:**
- Archivo en español: `content/blog/es/mi-articulo-sobre-nextjs.md`
  ```yaml
  url: "nextjs-article"
  title: "Mi artículo sobre Next.js"
  ```

- Archivo en inglés: `content/blog/en/my-nextjs-article.md`
  ```yaml
  url: "nextjs-article"  # ← MISMA URL
  title: "My Next.js article"
  ```

De esta forma, cuando el usuario esté en `/en/blog/nextjs-article` y cambie a español, irá a `/es/blog/nextjs-article` correctamente.

## Imágenes

Las imágenes deben guardarse en `/public/blog/` para que sean accesibles.

Ejemplo:
- Archivo: `/public/blog/mi-imagen.jpg`
- Referencia en el frontmatter: `image: "/blog/mi-imagen.jpg"`

## Ejemplo completo

Ver los archivos de ejemplo:
- `es/ejemplo-primer-post.md`
- `en/example-first-post.md`
