# Content Management in FLOAT BBS Zine Explorer

## Overview

The FLOAT BBS Zine Explorer has been refactored to externalize content from the codebase. This change decouples content from the application logic, making it easier to manage and update content without requiring code changes.

## Benefits

- **Separation of Concerns**: Content is now separate from the application code
- **Easier Content Management**: Content can be updated by editing JSON files
- **Future CMS Migration**: The structure is designed for easy migration to a headless CMS like Sanity

## Content Structure

All content is stored in JSON files in the `content` directory. The structure is designed to be easily migrated to a headless CMS in the future.

## How to Update Content

To update content, simply edit the corresponding JSON file in the `content` directory. The changes will be reflected in the application automatically.

For detailed instructions on content management, see the [Content Management Guide](docs/content-management.md).
\`\`\`

Let's create a directory structure for the content files:
