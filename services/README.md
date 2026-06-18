# services

Data-access layer. When content moves from the static files in `@/data` to a
CMS or API, put the fetch/transform logic here (e.g. `getServices()`,
`getAboutPage(slug)`) so pages depend on a stable interface, not the source.
