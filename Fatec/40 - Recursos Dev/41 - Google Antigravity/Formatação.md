# Formatting Standard

## Core Rule

Code must look clean, deliberate, and easy to scan.

Formatting is not decoration.
Formatting is part of clarity, maintenance, and trust.

A file should feel organized even before someone reads the logic in depth.

## Expectations

- Use consistent indentation everywhere.
- Keep spacing consistent and intentional.
- Group related logic together.
- Separate unrelated concerns clearly.
- Avoid dense code blocks with no visual structure.
- Avoid messy alignment, broken spacing, or inconsistent wrapping.
- Prefer readable multiline formatting over compressed one-line cleverness.
- Keep code visually calm.
- Make structure obvious at first glance.

Rule:
If the file looks chaotic, the code is not ready.

---

# File Organization

## General Structure

Each file should have a visible internal structure.

When relevant, organize files in a clear order such as:

1. imports
2. constants
3. types or interfaces
4. helpers
5. main logic
6. exports

Do not mix unrelated concerns randomly.
Do not jump between responsibilities without clear separation.

## Visual Separation

Use whitespace to separate concerns.

- Keep related lines together.
- Add breathing room between different responsibilities.
- Do not create giant walls of code.
- Do not over-fragment every two lines either.

Rule:
Whitespace should reveal structure, not create noise.

---

# Section Separation

When changing subject inside a file, use clear section comments.

Examples of subject changes:

- security
- compatibility
- validation
- mapping
- cache handling
- error handling
- formatting helpers
- API normalization
- UI state handling

Use section comments like this:

```ts
// -----------------------------------------------------------------------------
// Security
// -----------------------------------------------------------------------------
```

```ts
// -----------------------------------------------------------------------------
// Compatibility
// -----------------------------------------------------------------------------
```

```ts
// -----------------------------------------------------------------------------
// Input Validation
// -----------------------------------------------------------------------------
```

## Rules for Section Comments

- Use section comments only when they improve navigation.
- Section titles must be short, precise, and professional.
- The title must describe what that block is responsible for.
- Keep the visual style consistent across the whole file.
- Do not invent decorative variations for each file.
- Do not overuse section dividers for tiny trivial blocks.

Rule:
Section comments should make large files easier to scan, not theatrically dramatic.

---

# Indentation and Layout

## Indentation

- Keep indentation perfectly consistent.
- Nested blocks must be visually obvious.
- Never let indentation become uneven or ambiguous.
- Never align code in a way that looks improvised.

## Line Breaking

- Break long expressions before they become tiring to read.
- Prefer multiline formatting for long objects, arrays, conditions, and argument lists.
- Keep line breaks stable and predictable.
- Avoid wrapping that makes code harder to follow.

## Blocks

- Keep conditionals, loops, objects, and function bodies visually clean.
- Avoid unnecessary nesting.
- Prefer early returns when they improve readability.
- Keep the main path easy to identify.

## Lists and Objects

- Large objects should be vertically readable.
- Related fields should stay grouped.
- Keep property order intentional.
- Avoid random ordering that forces scanning.

Rule:
The reader should understand the structure without fighting the layout.

---

# Comment Style

## Comment Quality

Comments must sound like they were written by a competent maintainer.

They must be:

- professional
- clear
- concise
- intentional
- useful for future reading

They must never sound:

- robotic
- lazy
- sloppy
- vague
- overly personal
- like machine-generated filler

## Comment Voice

- Write comments in a natural maintainer voice.
- Never mention AI, assistant, model, or automated generation.
- Never write comments that sound like chat output.
- Never address a person by name inside comments.
- Never write comments as messages to a user.
- Write for any future maintainer reading the file.

## What Comments Should Explain

Comments should explain:

- intent
- constraints
- non-obvious decisions
- invariants
- temporary workarounds
- compatibility reasons
- why a section exists

Comments should not explain:

- obvious syntax
- trivial line-by-line behavior
- what the code already says clearly

Rule:
A good comment explains what is not obvious from the code alone.

---

# Comment Wording Rules

## Good Style

Good comments are direct and readable.
They sound like real engineering notes.
They are useful even to someone seeing the file for the first time.

Examples:

```ts
// Keep this fallback for older browsers that do not support structuredClone.
```

```ts
// Normalize the payload here so the rest of the flow can assume a stable shape.
```

```ts
// Lembrar de remover isso aqui caso eu nao usar no futuro.
```

```ts
// Separate compatibility handling from the main flow to keep the happy path readable.
```

## Bad Style

Bad comments are vague, chatty, awkward, or unprofessional.

Examples:

```ts
// Edu, depois vc pode remover X se nao for usar.
```

```ts
// This is here because the AI added it.
```

```ts
// This function handles the function logic.
```

```ts
// Doing stuff here.
```

## Personal Reminder Rule

If a comment is a reminder, write it in a clean and professional way.
It may sound personal in ownership, but never casual to the point of looking messy.

Good:

```ts
// Lembrar de remover este fallback se ele deixar de ser necessario.
```

Better when broadly maintainable:

```ts
// Remove this fallback if legacy support is no longer required.
```

Rule:
Even reminder comments must remain professional and readable to strangers.

---

# Readability and Semantics

## Semantic Organization

Code must be organized by meaning, not only by execution order.

That means:

- keep related rules together
- keep validation near validation
- keep compatibility handling near compatibility handling
- keep transformation logic near transformation logic
- keep main flow separate from edge-case handling

## Main Flow Visibility

- The happy path should be easy to see.
- Edge cases should not bury the main logic.
- Setup, validation, transformation, and side effects should be visually distinct.

## Professional Presentation

A well-written file should feel:

- clean
- deliberate
- stable
- easy to navigate
- easy to maintain

Rule:
Code should read like an organized system, not like accumulated improvisation.

---

# Frontend-Specific Presentation

## UI Structure

- Keep JSX, templates, and render blocks easy to scan.
- Separate data preparation from rendering.
- Separate conditional rendering from layout.
- Separate event wiring from presentational markup when possible.
- Avoid giant unreadable render trees.

## Styling Readability

- Keep styling readable and grouped logically.
- Avoid class or style clutter when structure can be improved.
- Keep variant logic easy to follow.
- Extract repeated patterns when it improves clarity.

Rule:
UI code should read like a structured interface, not a wall of markup.

---

# Examples

## Good Sectioned Layout

```ts
import { normalizeUser } from './normalize-user'
import { validateUserInput } from './validate-user-input'

const LEGACY_VERSION = 1

// -----------------------------------------------------------------------------
// Input Validation
// -----------------------------------------------------------------------------

function parseUserInput(input: unknown) {
  return validateUserInput(input)
}

// -----------------------------------------------------------------------------
// Compatibility
// -----------------------------------------------------------------------------

function applyLegacyFallback(version: number, payload: UserPayload) {
  if (version > LEGACY_VERSION) {
    return payload
  }

  // Keep this fallback while older payload versions are still accepted.
  return {
    ...payload,
    displayName: payload.displayName ?? payload.name,
  }
}

// -----------------------------------------------------------------------------
// Main Flow
// -----------------------------------------------------------------------------

export function buildUserProfile(input: unknown, version: number) {
  const parsedInput = parseUserInput(input)
  const compatiblePayload = applyLegacyFallback(version, parsedInput)

  return normalizeUser(compatiblePayload)
}
```

## Bad Layout

```ts
import { normalizeUser } from './normalize-user'
import { validateUserInput } from './validate-user-input'
const LEGACY_VERSION = 1
function parseUserInput(input: unknown) {
  return validateUserInput(input)
}
function applyLegacyFallback(version: number, payload: UserPayload) {
  if (version > LEGACY_VERSION) return payload
  // Edu depois tira isso
  return { ...payload, displayName: payload.displayName ?? payload.name }
}
export function buildUserProfile(input: unknown, version: number) {
  const parsedInput = parseUserInput(input)
  const compatiblePayload = applyLegacyFallback(version, parsedInput)
  return normalizeUser(compatiblePayload)
}
```

---

# Final Rule

The code must not only be correct.
It must also look professional.

A future maintainer should be able to open the file and immediately feel that:

- the structure makes sense
- the formatting is consistent
- the comments are intentional
- the sections are easy to navigate
- the code was written with care

Rule:
Beautiful code is not decorative. Beautiful code is readable, stable, and maintainable.