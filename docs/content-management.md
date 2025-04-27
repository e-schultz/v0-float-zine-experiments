# Content Management Guide

This document explains how content is structured and managed in the FLOAT BBS Zine Explorer application. The application has been refactored to externalize content from the codebase, making it easier to manage and setting the foundation for a future migration to a headless CMS like Sanity.

## Content Structure

All content is stored in JSON files in the `content` directory. The structure is designed to be easily migrated to a headless CMS in the future.

### Directory Structure

\`\`\`
content/
├── concepts.json           # Concept explorer data
├── concepts-page.json      # Concepts page content
├── devtools-page.json      # DevTools page content
├── ghostlines-page.json    # Ghostlines page content
├── ghosttraces.json        # Ghostline traces data
├── hauntology.json         # Hauntology section content
├── home.json               # Home page content
├── identity-fragments.json # Identity fragments data
├── projects.json           # Projects data
└── projects-page.json      # Projects page content
\`\`\`

## Content Types

### Home Content (`home.json`)

Contains the main content for the home page, including:
- Title and subtitle
- System information
- Core principles
- Description

### Concepts (`concepts.json`)

Contains the concept data used in the Concept Explorer:
- ID
- Name
- Tags
- Description
- Related concepts

### Ghost Traces (`ghosttraces.json`)

Contains the ghost trace data used in the Ghostline Viewer:
- ID
- Title
- Timestamp
- Tags
- Content (HTML)

### Projects (`projects.json`)

Contains the project data used in the Projects page:
- ID
- Title
- Description
- Status
- Last updated date
- Tags

### Identity Fragments (`identity-fragments.json`)

Contains the identity fragment data used in the Identity page:
- ID
- Title
- Tags
- Description
- Quote (optional)
- Details (list)

### Hauntology Content (`hauntology.json`)

Contains the hauntology section content used in the Identity page:
- Title
- Items (list of label/content pairs)
- Quote (optional)

### Page Content Files

Each page has its own content file (e.g., `concepts-page.json`, `ghostlines-page.json`) that contains:
- Title
- System information
- Description
- Additional section content

## How to Update Content

To update content, simply edit the corresponding JSON file in the `content` directory. The changes will be reflected in the application automatically.

### Example: Adding a New Concept

To add a new concept, edit the `concepts.json` file and add a new entry:

\`\`\`json
{
  "id": "new-concept",
  "name": "new::concept_name",
  "tags": ["tag1", "tag2"],
  "description": "Description of the new concept.",
  "related": ["related_concept1", "related_concept2"]
}
\`\`\`

### Example: Updating Page Content

To update the content of a page, edit the corresponding page content file. For example, to update the Concepts page title, edit the `concepts-page.json` file:

\`\`\`json
{
  "title": "New Title for Concepts Page",
  ...
}
\`\`\`

## Future CMS Migration

The content structure is designed to be easily migrated to a headless CMS like Sanity. Each content type corresponds to a potential schema in the CMS.

When migrating to a CMS:
1. Create schemas in the CMS that match the current JSON structure
2. Import the JSON data into the CMS
3. Update the content fetching functions in `lib/content.ts` to fetch from the CMS API instead of local JSON files

## Content Rendering

Content is fetched in the page components using the functions in `lib/content.ts`. These functions are cached to improve performance.

For client components that need server data, we use server component wrappers that fetch the data and pass it as props to the client components.
\`\`\`

Let's create a README update to explain the content management:
