# Decision Priority

  

Always decide in this order:

  

1. Correctness

2. Security

3. Simplicity

4. Clarity

5. Maintainability

6. Performance

7. Aesthetics

  

Never invert this order.

  

When rules conflict, use this priority to resolve the conflict.

  

---

  

# Agent Execution Rules

  

## Core Behavior

  

- Do not invent APIs, files, types, config, behavior, or architecture that are not supported by the codebase or task.

- Before changing code, inspect the surrounding module, call sites, types, contracts, and usage patterns.

- Prefer the smallest valid change that fully solves the problem.

- Do not mix refactoring with feature work unless refactoring is required for correctness, safety, or clarity.

- Preserve public interfaces unless the task explicitly allows breaking changes.

- Match existing project conventions before applying generic preferences.

- Do not introduce new dependencies unless clearly justified.

- Make assumptions explicit when they cannot be avoided.

- If the task is unclear, optimize for the safest reversible implementation.

- Avoid speculative work.

  

## Change Discipline

  

- Fix the cause, not only the symptom.

- Keep changes local when possible.

- Reduce blast radius.

- Do not rewrite working code without a strong reason.

- Do not perform broad cleanup in unrelated areas.

- If a better design exists but is out of scope, do not silently expand scope.

  

## Completion Standard

  

A task is not complete unless:

  

- the real problem is addressed

- edge cases were considered

- the change is internally consistent

- errors are handled appropriately

- the implementation remains understandable

  

---

  

# Engineering Mindset

  

- Think before coding.

- Prefer simplicity over cleverness.

- Make behavior explicit.

- Avoid hidden logic.

- Optimize for future maintenance.

- Reduce risk before optimizing.

- Prefer boring, reliable solutions over impressive but fragile ones.

  

Rule:

A simple solution that is obviously correct is better than a clever solution that needs defending.

  

---

  

# Operational Flow

  

## Before coding

  

- Identify the real problem.

- Identify constraints: data, environment, scale, compatibility, latency, safety.

- Determine system scale: small, medium, or large.

- Identify trade-offs.

- Identify existing contracts and boundaries.

- Choose the simplest valid solution.

  

## During coding

  

- Keep the main flow obvious.

- Isolate responsibilities.

- Avoid implicit decisions.

- Prevent unnecessary complexity.

- Preserve consistency with existing patterns.

- Keep state and control flow traceable.

  

## After coding

  

- Review correctness.

- Review edge cases.

- Review clarity.

- Review maintainability.

- Review consistency.

- Review failure behavior.

  

---

  

# Code Quality

  

## Clarity

  

- Code should be understandable from structure, naming, and control flow.

- Names should reduce ambiguity.

- The main path should be obvious.

- Edge cases should be isolated where possible.

- Hidden behavior is a bug source.

  

Rule:

If intent is not obvious from code structure and naming, simplify it or document the non-obvious part.

  

## Complexity Control

  

Avoid:

  

- premature abstraction

- unnecessary generalization

- deep indirection

- over-engineering

- configurable designs without a real need

  

Allow:

  

- small duplication when it improves clarity

- direct solutions when they are easier to verify

- local explicitness over reusable confusion

  

Rule:

Complexity is only justified when it clearly reduces future cost.

  

## Responsibility

  

- Keep one clear responsibility per unit.

- Avoid mixed concerns.

- Keep business rules out of persistence.

- Keep business rules out of presentational UI.

- Presentation logic may exist in UI, but domain decisions should not live there.

  

## Consistency

  

- Same problem -> same class of solution.

- Reuse established patterns when they still fit.

- Avoid unnecessary exceptions in structure or behavior.

- Keep naming, error style, and control flow consistent.

  

Rule:

Inconsistency creates invisible maintenance cost.

  

## Code Style

  

- Prefer small functions, but do not split code into meaningless fragments.

- Prefer early returns over deep nesting.

- Keep nesting shallow.

- Make data flow explicit.

- Avoid magic values when named constants or tokens improve clarity.

  

### Naming

  

- Booleans: `is`, `has`, `should`, `can`

- Functions: clear verbs

- Event handlers: prefix with `handle`

- Async functions: name for the action, not the implementation detail

  

### Example: early return

  

```typescript

function processOrder(order: Order) {

  if (!order) return

  if (order.items.length === 0) return

  if (!order.isPaid) return

  

  ship(order)

}

```

  

### Example: naming

  

```typescript

const invoice = await fetchInvoice(invoiceId)

  

if (invoice.isOverdue) {

  sendPaymentReminder(invoice)

}

```

  

### Example: responsibility

  

```typescript

async function handleCheckout(cart: Cart) {

  const total = calculateTotal(cart.items)

  const order = await createOrder(cart, total)

  

  await chargeCustomer(cart.userId, total)

  await notifyCustomer(cart.userEmail, order)

}

```

  

---

  

# State Management

  

- Keep state minimal.

- Use a single source of truth.

- Do not duplicate derivable state unless there is a proven performance reason.

- Avoid global state unless it is necessary and controlled.

- State changes must be predictable and traceable.

  

Rule:

Derived state should usually be derived, not stored.

  

### Example

  

```typescript

const [items, setItems] = useState<Item[]>([])

const total = items.reduce((sum, item) => sum + item.price, 0)

  

function addItem(item: Item) {

  setItems((prev) => [...prev, item])

}

```

  

---

  

# Error Handling

  

- Never ignore errors.

- Never fail silently.

- Never erase useful technical context.

- Separate technical details from user-facing messages.

- Expected errors and unexpected errors should not be handled the same way.

  

Rule:

An unhandled or hidden error is a delayed bug.

  

## Error Rules

  

- Log unexpected failures with actionable context.

- Return safe user-facing messages.

- Preserve the original cause when rethrowing.

- Do not convert every error into `null`, `false`, or generic failure states.

- Fail fast when continuing would corrupt behavior or state.

  

### Example

  

```typescript

async function saveUser(user: User) {

  try {

    await db.users.insert(user)

  } catch (error) {

    logger.error('Failed to insert user', {

      userId: user.id,

      error,

    })

  

    throw new AppError('Could not create account. Please try again.', {

      cause: error,

    })

  }

}

```

  

---

  

# Security

  

Security is never optional.

  

- Validate all external input.

- Never trust client data.

- Apply least privilege.

- Never expose secrets or sensitive internals.

- Never leak internal implementation details to clients unless explicitly intended.

- Treat all external input as hostile.

  

## Secure-by-default rules

  

- Validate at every boundary.

- Sanitize or encode output where relevant.

- Protect against XSS, injection, CSRF, auth misuse, and insecure direct object access.

- Use secure auth flows and token handling.

- Use secure defaults for headers, cookies, transport, and storage.

- Never place secrets in client-side code.

- Never log secrets, tokens, credentials, or sensitive personal data unless explicitly required and protected.

  

Rule:

A feature is incomplete if it works but weakens system safety.

  

---

  

# Performance

  

- Avoid unnecessary work.

- Avoid unnecessary recomputation.

- Avoid unnecessary renders.

- Avoid redundant network requests.

- Load resources on demand when appropriate.

  

## Performance Rules

  

- Optimize measured bottlenecks, not imagined ones.

- Use memoization only when it meaningfully reduces cost.

- Prevent N+1 queries.

- Use caching intentionally.

- Optimize the critical rendering path when it matters.

  

Rule:

Performance should come from good design and measurement, not superstition.

  

---

  

# Architecture

  

## General Rules

  

- Separate by responsibility, not by technology labels alone.

- Keep domain logic independent when possible.

- Control dependencies explicitly.

- Avoid tight coupling.

- Prefer boundaries that make future change easier.

- Architecture should reflect real system needs, not ambition.

  

Rule:

If changing one part unpredictably breaks another, the architecture is too coupled.

  

## By Scale

  

### Small systems

  

- Optimize for speed, simplicity, and delivery.

- Avoid unnecessary layers.

- Organize by feature or use case.

- Do not simulate enterprise architecture in a small codebase.

  

Failure mode:

Overengineering.

  

### Medium systems

  

- Separate UI, domain, and data concerns.

- Define contracts between layers or modules.

- Modularize by domain or feature boundary.

  

Failure mode:

Coupling disguised as modularity.

  

### Large systems

  

- Define explicit boundaries.

- Keep domains independently understandable.

- Maintain stable contracts.

- Avoid circular dependencies.

- Version interfaces when needed.

- Require observability.

- Require fault tolerance where failure impact is high.

- Define cache and consistency strategies explicitly.

  

Failure mode:

Implicit dependencies and boundary erosion.

  

---

  

# Frontend

  

## UI

  

- Interfaces should be predictable.

- Visual hierarchy should be clear.

- States should be explicit.

- Available actions should be obvious.

- Empty, loading, error, and success states should be handled deliberately.

  

## UX

  

- Reduce cognitive load.

- Avoid ambiguity.

- Always provide feedback for user actions.

- Prefer reversible actions where reasonable.

- Do not surprise the user.

  

## Accessibility

  

- Keyboard navigation is required.

- Focus visibility is required.

- Semantic structure is required.

- Do not rely on color alone.

- Accessibility is part of correctness, not decoration.

  

## Frontend Engineering

  

- Keep rendering logic understandable.

- Keep domain decisions outside presentation components.

- Use design tokens instead of scattered magic values.

- Define rendering strategy intentionally when relevant: SSR, SSG, CSR, streaming, etc.

- Avoid unnecessary client-side complexity.

  

---

  

# Backend

  

- Validate input at boundaries.

- Keep business rules in the domain or service layer.

- Do not rely on execution order unless it is explicitly guaranteed.

- Handle concurrency explicitly.

- Preserve consistency under failure.

  

## API

  

- APIs should be predictable and consistent.

- Avoid over-fetching and under-specification.

- Standardize error shape and status usage.

- Make invalid states and invalid inputs explicit.

  

Rule:

A backend is not robust if it only works in the happy path.

  

---

  

# Database

  

- Model for real access patterns, not idealized diagrams.

- Index intentionally.

- Avoid expensive queries in critical paths.

- Preserve data integrity with constraints where appropriate.

- Do not hide business rules in ad hoc query behavior.

  

## Database Rules

  

- Avoid `SELECT *` in application queries.

- Inspect expensive queries with `EXPLAIN` or equivalent.

- Prevent N+1 access patterns.

- Prefer transactional safety over optimistic assumptions.

- Make consistency rules explicit.

  

---

  

# Testing

  

- Test behavior, not implementation details.

- Avoid testing framework internals.

- Focus on critical paths and failure paths.

- Keep tests fast, deterministic, and trustworthy.

  

Rule:

Flaky tests damage confidence more than missing low-value tests.

  

## Test Pyramid

  

- More unit tests than integration tests.

- More integration tests than E2E tests.

- Use the simplest test type that gives enough confidence.

  

## When to use each type

  

| Type        | Use when                                                                      | Avoid when                                                           |

| ----------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |

| Unit        | Pure functions, domain logic, transformations, edge cases in isolation        | Cross-layer behavior, rendering integration, infrastructure behavior |

| Integration | DB behavior, service boundaries, contracts, auth flows, persistence, adapters | Every trivial rule or every single branch                            |

| E2E         | Critical user journeys and release-confidence scenarios                       | Exhaustive coverage of every path                                    |

  

## What not to test

  

- private implementation details

- internal variable names

- framework behavior

- trivial passthrough code without logic

- tests that duplicate implementation structure instead of behavior

  

Rule:

If behavior stays the same and a refactor breaks the test, the test is probably too coupled.

  

## Test Structure

  

Prefer Arrange / Act / Assert.

  

```typescript

it('rejects order when stock is insufficient', () => {

  // Arrange

  const product = buildProduct({ stock: 2 })

  const order = buildOrder({ quantity: 5 })

  

  // Act

  const result = validateOrderStock(order, product)

  

  // Assert

  expect(result.isValid).toBe(false)

  expect(result.reason).toBe('insufficient_stock')

})

```

  

## Mocks

  

- Mock external boundaries: network, DB, queues, third-party services.

- Prefer fakes when they are simple and improve realism.

- Avoid mocking domain logic you want confidence in.

- Mock owned code only when a boundary or isolation requirement makes it necessary.

  

Rule:

Mock boundaries, not the behavior you are trying to trust.

  

## Flaky Test Prevention

  

- Do not use arbitrary sleeps.

- Do not depend on test execution order.

- Do not share mutable test state across cases.

- Control time, randomness, and async boundaries explicitly.

  

---

  

# Refactoring

  

- Refactor in small steps.

- Do not mix large refactors with unrelated feature work.

- Preserve behavior unless behavior change is the goal.

- Reduce complexity, coupling, or ambiguity.

  

Rule:

Refactoring is justified when it lowers future cost without increasing current risk.

  

---

  

# Observability

  

Good observability should let you answer:

  

- what happened

- where it happened

- why it happened

- what it affected

  

## Logging

  

Use the right level:

  

- ERROR: something failed and needs attention

- WARN: something unexpected happened but the system recovered or degraded

- INFO: significant business or system events

- DEBUG: development-level detail, not noisy production spam

  

Every useful log should help answer:

  

- what happened

- where

- with what identifiers

- with what relevant context

  

### Example

  

```typescript

logger.error('Failed to charge customer', {

  customerId: customer.id,

  orderId: order.id,

  amount: order.total,

  error: error.message,

  stack: error.stack,

})

  

logger.info('Order placed', {

  orderId: order.id,

  customerId: customer.id,

  itemCount: order.items.length,

  total: order.total,

})

```

  

## Tracing

  

- Carry correlation or request IDs from entry to exit.

- Propagate them through service calls, async jobs, and DB-relevant logs.

- Use them consistently.

  

```typescript

const requestId = req.headers['x-request-id'] ?? generateId()

  

logger.info('Request received', {

  requestId,

  path: req.path,

})

  

await paymentService.charge(orderId, { requestId })

```

  

## Metrics

  

Instrument what matters:

  

- request latency by percentile

- error rate by type

- queue depth and retry rate

- DB query duration on slow paths

- saturation and contention where relevant

  

Rule:

An alert without a clear action is noise.

  

## What not to log

  

- passwords

- tokens

- secrets

- full payment details

- unnecessary personal data

- high-volume noise with no diagnostic value

  

---

  

# Robustness

  

Assume:

  

- failures happen

- latency varies

- concurrency exists

- input is wrong

- dependencies degrade

  

Rule:

Systems must behave acceptably outside ideal conditions.

  

## External Services

  

Every call to an external dependency should have, when relevant:

  

- timeout

- retry with backoff and jitter

- bounded failure behavior

- fallback or degraded mode when appropriate

  

Do not wait forever.

Do not hammer failing services.

Do not let non-critical dependencies block critical flows.

  

### Example

  

```typescript

const result = await withTimeout(

  withRetry(() => paymentService.charge(order), {

    attempts: 3,

    backoff: 'exponential',

  }),

  {

    ms: 5000,

    onTimeout: () => {

      throw new PaymentTimeoutError(order.id)

    },

  },

)

```

  

## Concurrency

  

- Never assume serial execution in distributed or async systems.

- Use idempotency for operations that must not run twice.

- Use transactions, atomic updates, or optimistic locking when shared state is modified concurrently.

- Design for duplicate delivery and retry behavior where applicable.

  

### Example

  

```typescript

await db.users.decrement({ id }, { credits: cost, minimum: 0 })

```

  

## Graceful Degradation

  

- Identify what can fail without taking down the whole workflow.

- Non-critical features must not block critical flows.

- Serve stale-but-safe data when that is better than hard failure.

- Degradation must remain explicit and understandable.

  

Rule:

Partial service is better than total unavailability when correctness is preserved.

  

## Input Validation

  

Validate all untrusted input at boundaries.

  

```typescript

function createOrder(input: unknown) {

  const parsed = OrderSchema.safeParse(input)

  

  if (!parsed.success) {

    throw new ValidationError('Invalid order input', parsed.error.flatten())

  }

  

  return processOrder(parsed.data)

}

```

  

---

  

# Bug Prevention Patterns

  

## Race conditions

  

- Do not rely on timing assumptions.

- Cancel or ignore outdated async work when relevant.

- Validate that returned data still matches current intent.

  

## Stale state

  

- Avoid duplicated sources of truth.

- Invalidate caches correctly.

- Prefer derived state where possible.

  

## Double execution

  

- Prevent duplicate triggers.

- Use idempotency keys or execution guards.

- Lock when duplicate execution would corrupt state.

  

## Data inconsistency

  

- Validate on the backend.

- Use transactions when atomicity matters.

- Keep critical rules out of the frontend.

  

## Global state issues

  

- Restrict mutation access.

- Track state ownership.

- Avoid uncontrolled writes.

  

## Memory leaks

  

- Clean listeners.

- Clear timers.

- Release references.

- Dispose subscriptions and observers.

  

## Unnecessary rendering

  

- Do not update state without meaningfully changing it.

- Memoize only where it reduces real work.

- Keep render dependencies explicit.

  

## Hidden dependencies

  

- Prefer explicit contracts.

- Avoid coupling through implicit global behavior.

- Avoid order-sensitive initialization unless enforced.

  

## Error misuse

  

- Do not swallow errors.

- Do not log and continue blindly.

- Separate expected failures from unexpected failures.

  

## Temporal coupling

  

- Avoid making correctness depend on hidden ordering.

- Validate prerequisites explicitly.

- Make sequencing rules visible when sequencing matters.

  

---

  

# Validation Checklist

  

Before considering work complete, verify:

  

## Correctness

  

- Does it solve the real problem?

- Does it handle important edge cases?

- Is behavior correct under failure or invalid input?

  

## Security

  

- Are boundaries validated?

- Is sensitive data protected?

- Did the change avoid introducing unsafe behavior?

  

## Clarity

  

- Is the intent understandable from code?

- Are names and control flow clear?

- Are non-obvious parts justified or documented?

  

## Complexity

  

- Is this the simplest valid solution?

- Was unnecessary abstraction avoided?

  

## State

  

- Is state minimal and consistent?

- Was duplicated derivable state avoided?

  

## Dependencies

  

- Are dependencies explicit and justified?

- Was unnecessary coupling avoided?

  

## Errors

  

- Are errors handled with enough context?

- Are user-facing and technical concerns separated?

  

## Performance

  

- Is there unnecessary work, rendering, or querying?

- Were obvious inefficiencies avoided?

  

## Maintainability

  

- Is the change easy to modify later?

- Does it match established patterns?

  

Rule:

If any critical item fails, the work is not ready.

  

---

  

# Production Readiness

  

Before shipping, verify:

  

- works under failure

- works under latency

- works under concurrency

- maintains consistency

- remains predictable

- is observable enough to debug

- does not weaken security

- degrades safely when dependencies fail

  

Rule:

Production-ready means reliable outside the happy path, not just successful in local testing.